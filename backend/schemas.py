import datetime as _dt

import pydantic as _pydantic

# ------------------- USERS ------------------------

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
        
# ------------------- NOTES ------------------------

class _NoteBase(_pydantic.BaseModel):
    dueDate: str
    title: str
    description: str
    category: str
    color: str


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

# ------------------- TIMETABLES ------------------------

class _TimetableBase(_pydantic.BaseModel):
    course: str
    day: str
    startTime: str
    endTime: str
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
        
# ------------------- PROFILES ------------------------

class _ProfileBase(_pydantic.BaseModel):
    firstname: str
    surname: str
    github: str
    discord: str


class ProfileCreate(_ProfileBase):
    pass


class Profile(_ProfileBase):
    id: int
    owner_id: int
    
    class Config:
        # orm_mode = True
        from_attributes = True
