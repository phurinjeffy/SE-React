from typing import List
import fastapi as _fastapi
import fastapi.security as _security

import sqlalchemy.orm as _orm

import services as _services, schemas as _schemas

#chat
from fastapi import WebSocket, WebSocketDisconnect
from fastapi.middleware.cors import CORSMiddleware
from datetime import datetime
import json

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



#chat
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class ConnectionManager:

    def __init__(self) -> None:
        self.active_connections: List[WebSocket] = []

    async def connect(self, websocket: WebSocket):
        await websocket.accept()
        self.active_connections.append(websocket)

    def disconnect(self, websocket: WebSocket):
        self.active_connections.remove(websocket)

    async def send_personal_message(self, message: str, websocket: WebSocket):
        await websocket.send_text(message)

    async def broadcast(self, message: str):
        for connection in self.active_connections:
            await connection.send_text(message)

manager = ConnectionManager()

# define endpoint


# @app.get("/")
# def Home():
#     return "Welcome home"

@app.websocket("/ws/{client_id}")
async def websocket_endpoint(websocket: WebSocket, client_id: int):
    await manager.connect(websocket)
    now = datetime.now()
    current_time = now.strftime("%H:%M")
    try:
        while True:
            data = await websocket.receive_text()
            # await manager.send_personal_message(f"You wrote: {data}", websocket)
            message = {"time":current_time,"clientId":client_id,"message":data}
            await manager.broadcast(json.dumps(message))
            
    except WebSocketDisconnect:
        manager.disconnect(websocket)
        message = {"time":current_time,"clientId":client_id,"message":"Offline"}
        await manager.broadcast(json.dumps(message))

#-------------end chat---------------------

#profile
@app.post("/api/profile", response_model=_schemas.Profile)
async def create_profile(
    profile: _schemas.ProfileCreate,
    user: _schemas.User = _fastapi.Depends(_services.get_current_user),
    db: _orm.Session = _fastapi.Depends(_services.get_db),
):
    return await _services.create_profile(user=user, db=db, profile=profile)


@app.get("/api/profile", response_model=List[_schemas.Profile])
async def get_profile(
    user: _schemas.User = _fastapi.Depends(_services.get_current_user),
    db: _orm.Session = _fastapi.Depends(_services.get_db),
):
    return await _services.get_profile(user=user, db=db)


@app.get("/api/profile/{profile_id}", status_code=200)
async def get_profile(
    profile_id: int,
    user: _schemas.User = _fastapi.Depends(_services.get_current_user),
    db: _orm.Session = _fastapi.Depends(_services.get_db),
):
    return await _services.get_profile(profile_id, user, db)


@app.put("/api/profile/{profile_id}", status_code=200)
async def update_profile(
    profile_id: int,
    profile: _schemas.ProfileCreate,
    user: _schemas.User = _fastapi.Depends(_services.get_current_user),
    db: _orm.Session = _fastapi.Depends(_services.get_db),
):
    await _services.update_profile(profile_id, profile, user, db)
    return {"message", "Successfully Updated"}

#end profile