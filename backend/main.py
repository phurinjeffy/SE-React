from typing import List
import fastapi as _fastapi
import fastapi.security as _security

import sqlalchemy.orm as _orm

import services as _services, schemas as _schemas

app = _fastapi.FastAPI()


@app.post("/api/users")
async def create_user(
    user: _schemas.UserCreate, db: _orm.Session = _fastapi.Depends(_services.get_db)
):
    db_user = await _services.get_user_by_email(user.email, db)
    if db_user:
        raise _fastapi.HTTPException(status_code=400, detail="Email already in use")

    user = await _services.create_user(user, db)

    return await _services.create_token(user)


@app.post("/api/token")
async def generate_token(
    form_data: _security.OAuth2PasswordRequestForm = _fastapi.Depends(),
    db: _orm.Session = _fastapi.Depends(_services.get_db),
):
    user = await _services.authenticate_user(form_data.username, form_data.password, db)

    if not user:
        raise _fastapi.HTTPException(status_code=401, detail="Invalid Credentials")

    return await _services.create_token(user)


@app.get("/api/users/me", response_model=_schemas.User)
async def get_user(user: _schemas.User = _fastapi.Depends(_services.get_current_user)):
    return user


@app.post("/api/notes", response_model=_schemas.Note)
async def create_note(
    note: _schemas.NoteCreate,
    user: _schemas.User = _fastapi.Depends(_services.get_current_user),
    db: _orm.Session = _fastapi.Depends(_services.get_db),
):
    return await _services.create_note(user=user, db=db, note=note)


@app.get("/api/notes", response_model=List[_schemas.Note])
async def get_notes(
    user: _schemas.User = _fastapi.Depends(_services.get_current_user),
    db: _orm.Session = _fastapi.Depends(_services.get_db),
):
    return await _services.get_notes(user=user, db=db)


@app.get("/api/notes/{note_id}", status_code=200)
async def get_note(
    note_id: int,
    user: _schemas.User = _fastapi.Depends(_services.get_current_user),
    db: _orm.Session = _fastapi.Depends(_services.get_db),
):
    return await _services.get_note(note_id, user, db)


@app.delete("/api/notes/{note_id}", status_code=204)
async def delete_note(
    note_id: int,
    user: _schemas.User = _fastapi.Depends(_services.get_current_user),
    db: _orm.Session = _fastapi.Depends(_services.get_db),
):
    await _services.delete_note(note_id, user, db)
    return {"message", "Successfully Deleted"}


@app.put("/api/notes/{note_id}", status_code=200)
async def update_note(
    note_id: int,
    note: _schemas.NoteCreate,
    user: _schemas.User = _fastapi.Depends(_services.get_current_user),
    db: _orm.Session = _fastapi.Depends(_services.get_db),
):
    await _services.update_note(note_id, note, user, db)
    return {"message", "Successfully Updated"}


@app.post("/api/timetables", response_model=_schemas.Timetable)
async def create_timetable(
    timetable: _schemas.TimetableCreate,
    user: _schemas.User = _fastapi.Depends(_services.get_current_user),
    db: _orm.Session = _fastapi.Depends(_services.get_db),
):
    return await _services.create_timetable(user=user, db=db, timetable=timetable)


@app.get("/api/timetables", response_model=List[_schemas.Timetable])
async def get_timetables(
    user: _schemas.User = _fastapi.Depends(_services.get_current_user),
    db: _orm.Session = _fastapi.Depends(_services.get_db),
):
    return await _services.get_timetables(user=user, db=db)


@app.get("/api/timetables/{timetable_id}", status_code=200)
async def get_timetable(
    timetable_id: int,
    user: _schemas.User = _fastapi.Depends(_services.get_current_user),
    db: _orm.Session = _fastapi.Depends(_services.get_db),
):
    return await _services.get_timetable(timetable_id, user, db)


@app.delete("/api/timetables/{timetable_id}", status_code=204)
async def delete_timetable(
    timetable_id: int,
    user: _schemas.User = _fastapi.Depends(_services.get_current_user),
    db: _orm.Session = _fastapi.Depends(_services.get_db),
):
    await _services.delete_timetable(timetable_id, user, db)
    return {"message", "Successfully Deleted"}


@app.put("/api/timetables/{timetable_id}", status_code=200)
async def update_timetable(
    timetable_id: int,
    timetable: _schemas.TimetableCreate,
    user: _schemas.User = _fastapi.Depends(_services.get_current_user),
    db: _orm.Session = _fastapi.Depends(_services.get_db),
):
    await _services.update_timetable(timetable_id, timetable, user, db)
    return {"message", "Successfully Updated"}