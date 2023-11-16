import datetime as _dt

import sqlalchemy as _sql
import sqlalchemy.orm as _orm
import passlib.hash as _hash

import database as _database


class User(_database.Base):
    __tablename__ = "users"
    id = _sql.Column(_sql.Integer, primary_key=True, index=True)
    email = _sql.Column(_sql.String, unique=True, index=True)
    hashed_password = _sql.Column(_sql.String)

    notes = _orm.relationship("Note", back_populates="owner")
    timetables = _orm.relationship("Timetable", back_populates="owner")
    profile =_orm.relationship("Profile", back_populates="owner")

    def verify_password(self, password: str):
        return _hash.bcrypt.verify(password, self.hashed_password)


class Note(_database.Base):
    __tablename__ = "notes"
    id = _sql.Column(_sql.Integer, primary_key=True, index=True)
    owner_id = _sql.Column(_sql.Integer, _sql.ForeignKey("users.id"))
    dueDate = _sql.Column(_sql.String, index=True)
    title = _sql.Column(_sql.String, index=True)
    description = _sql.Column(_sql.String, index=True, default="")
    category = _sql.Column(_sql.String, index=True)
    color = _sql.Column(_sql.String, default="")
    date_created = _sql.Column(_sql.DateTime, default=_dt.datetime.utcnow)
    date_last_updated = _sql.Column(_sql.DateTime, default=_dt.datetime.utcnow)

    owner = _orm.relationship("User", back_populates="notes")


class Timetable(_database.Base):
    __tablename__ = "timetables"
    id = _sql.Column(_sql.Integer, primary_key=True, index=True)
    owner_id = _sql.Column(_sql.Integer, _sql.ForeignKey("users.id"))
    course = _sql.Column(_sql.String, index=True)
    day = _sql.Column(_sql.String, index=True)
    startTime = _sql.Column(_sql.String, index=True, default="")
    endTime = _sql.Column(_sql.String, index=True, default="")
    location = _sql.Column(_sql.String, default="")
    date_created = _sql.Column(_sql.DateTime, default=_dt.datetime.utcnow)
    date_last_updated = _sql.Column(_sql.DateTime, default=_dt.datetime.utcnow)

    owner = _orm.relationship("User", back_populates="timetables")


class Profile(_database.Base):
    __tablename__ = "profile"
    id = _sql.Column(_sql.Integer, primary_key=True, index=True)
    owner_id = _sql.Column(_sql.Integer, _sql.ForeignKey("users.id"))
    firstname = _sql.Column(_sql.String, index=True)
    surname = _sql.Column(_sql.String, index=True)
    github = _sql.Column(_sql.String, index=True)
    discord = _sql.Column(_sql.String, index=True)
    
    owner = _orm.relationship("User", back_populates="profile")
