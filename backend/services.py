import fastapi as _fastapi
import fastapi.security as _security
import jwt as _jwt
import datetime as _dt
import sqlalchemy.orm as _orm
import passlib.hash as _hash

import database as _database, models as _models, schemas as _schemas

oauth2schema = _security.OAuth2PasswordBearer(tokenUrl="/api/token")

JWT_SECRET = "myjwtsecret"


def create_database():
    return _database.Base.metadata.create_all(bind=_database.engine)


def get_db():
    db = _database.SessionLocal()
    try:
        yield db
    finally:
        db.close()


async def get_user_by_email(email: str, db: _orm.Session):
    return db.query(_models.User).filter(_models.User.email == email).first()


async def create_user(user: _schemas.UserCreate, db: _orm.Session):
    user_obj = _models.User(
        email=user.email, hashed_password=_hash.bcrypt.hash(user.hashed_password)
    )
    db.add(user_obj)
    db.commit()
    db.refresh(user_obj)
    return user_obj


async def authenticate_user(email: str, password: str, db: _orm.Session):
    user = await get_user_by_email(db=db, email=email)

    if not user:
        return False

    if not user.verify_password(password):
        return False

    return user


async def create_token(user: _models.User):
    user_obj = _schemas.User.from_orm(user)

    token = _jwt.encode(user_obj.dict(), JWT_SECRET)

    return dict(access_token=token, token_type="bearer")


async def get_current_user(
    db: _orm.Session = _fastapi.Depends(get_db),
    token: str = _fastapi.Depends(oauth2schema),
):
    try:
        payload = _jwt.decode(token, JWT_SECRET, algorithms=["HS256"])
        user = db.query(_models.User).get(payload["id"])
    except:
        raise _fastapi.HTTPException(
            status_code=401, detail="Invalid Email or Password"
        )

    return _schemas.User.from_orm(user)


async def create_note(user: _schemas.User, db: _orm.Session, note: _schemas.NoteCreate):
    note = _models.Note(**note.dict(), owner_id=user.id)
    db.add(note)
    db.commit()
    db.refresh(note)
    return _schemas.Note.from_orm(note)


async def get_notes(user: _schemas.User, db: _orm.Session):
    notes = db.query(_models.Note).filter_by(owner_id=user.id)

    return list(map(_schemas.Note.from_orm, notes))


async def _note_selector(note_id: int, user: _schemas.User, db: _orm.Session):
    note = (
        db.query(_models.Note)
        .filter_by(owner_id=user.id)
        .filter(_models.Note.id == note_id)
        .first()
    )

    if note is None:
        raise _fastapi.HTTPException(status_code=404, detail="Note does not exist")

    return note


async def get_note(note_id: int, user: _schemas.User, db: _orm.Session):
    note = await _note_selector(note_id=note_id, user=user, db=db)

    return _schemas.Note.from_orm(note)


async def delete_note(note_id: int, user: _schemas.User, db: _orm.Session):
    note = await _note_selector(note_id, user, db)

    db.delete(note)
    db.commit()

async def update_note(note_id: int, note: _schemas.NoteCreate, user: _schemas.User, db: _orm.Session):
    note_db = await _note_selector(note_id, user, db)

    note_db.first_name = note.first_name
    note_db.last_name = note.last_name
    note_db.email = note.email
    note_db.company = note.company
    note_db.note = note.note
    note_db.date_last_updated = _dt.datetime.utcnow()

    db.commit()
    db.refresh(note_db)

    return _schemas.Note.from_orm(note_db)

