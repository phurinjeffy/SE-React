import datetime as _dt

import pydantic as _pydantic


class _UserBase(_pydantic.BaseModel):
    email: str


class UserCreate(_UserBase):
    hashed_password: str

    class Config:
        # orm_mode = True
        from_attributes = True

class User(_UserBase):
    id: int

    class Config:
        # orm_mode = True
        from_attributes = True

class _NoteBase(_pydantic.BaseModel):
    dueDate: str
    course: str
    title: str
    description: str
    urgency: str


class NoteCreate(_NoteBase):
    pass


class Note(_NoteBase):
    id: int
    owner_id: int
    date_created: _dt.datetime
    date_last_updated: _dt.datetime

    class Config:
        # orm_mode = True
        from_attributes = True


class _TimetableBase(_pydantic.BaseModel):
    course: str
    date: str
    time: str
    location: str


class TimetableCreate(_TimetableBase):
    pass


class Timetable(_TimetableBase):
    id: int
    owner_id: int
    date_created: _dt.datetime
    date_last_updated: _dt.datetime

    class Config:
        # orm_mode = True
        from_attributes = True
