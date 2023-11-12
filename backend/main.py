from fastapi import FastAPI, UploadFile
from sqlalchemy import create_engine, Column, Integer, String, MetaData
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy.exc import SQLAlchemyError
from fastapi.middleware.cors import CORSMiddleware

DATABASE_URL = "sqlite:///./user.db"

engine = create_engine(DATABASE_URL)
Base = declarative_base()

class FileUpload(Base):
    __tablename__ = "file_uploads"
    id = Column(Integer, primary_key=True, index=True)
    filename = Column(String, index=True)
    
Base.metadata.create_all(bind=engine)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post('/upload')
async def create_upload_file(file_uploads: list[UploadFile]):
    db = SessionLocal()
    try:
        for file_upload in file_uploads:
            data = await file_upload.read()
            db_file = FileUpload(filename=file_upload.filename)
            db.add(db_file)
            db.commit()
            db.refresh(db_file)
        return {"filenames": [f.filename for f in file_uploads]}
    except SQLAlchemyError as e:
        db.rollback()
        return {"error": "Database error"}
    finally:
        db.close()
