from fastapi import FastAPI, UploadFile, Form, HTTPException, File
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import create_engine, Column, Integer, String, MetaData, ForeignKey
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy.exc import SQLAlchemyError
from pathlib import Path

DATABASE_URL = "sqlite:///./user.db"

engine = create_engine(DATABASE_URL)
Base = declarative_base()

class Repository(Base):
    __tablename__ = "repositories"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    description = Column(String, index=True)
    status = Column(String, index=True)
    
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

@app.post("/create_repository")
async def create_repository(
    name: str = Form(...),
    description: str = Form(...),
    status: str = Form(...),
):
    db = SessionLocal()
    try:
        repository = Repository(name=name, description=description, status=status)
        db.add(repository)
        db.commit()
        db.refresh(repository)
        return {"message": "Repository created successfully", "repository_id": repository.id}
    except SQLAlchemyError as e:
        db.rollback()
        raise HTTPException(status_code=500, detail="Database error")
    finally:
        db.close()
        
@app.post('/upload')
async def create_upload_file(
    repository_id: int,
    name: str = Form(...),
    description: str = Form(...),
    status: str = Form(...),
    files: list[UploadFile] = File(...),
):
    db = SessionLocal()
    try:
        # Create a new repository in the database
        db_repo = Repository(name=name, description=description, status=status)
        db.add(db_repo)
        db.commit()
        db.refresh(db_repo)
        
        # Create directory with the repository ID as the name
        repo_directory = Path(f"repositories/{db_repo.id}")
        repo_directory.mkdir(parents=True, exist_ok=True)

        # Save uploaded files to the repository directory
        for file in files:
            contents = await file.read()
            file_path = repo_directory / file.filename
            with file_path.open("wb") as f:
                f.write(contents)

        return {"message": "Repository created and files uploaded successfully"}
    except SQLAlchemyError as e:
        db.rollback()
        raise HTTPException(status_code=500, detail="Database error")
    finally:
        db.close()

@app.post('/upload/{repository_id}')
async def upload_file_to_repository(
    repository_id: int,
    files: list[UploadFile] = File(...),
):
    db = SessionLocal()
    try:
        repository = db.query(Repository).filter(Repository.id == repository_id).first()
        if not repository:
            raise HTTPException(status_code=404, detail="Repository not found")

        repository_path = Path(f"./repositories/{repository_id}")
        repository_path.mkdir(parents=True, exist_ok=True)

        for file_upload in files:
            file_path = repository_path / file_upload.filename
            data = await file_upload.read()
            with file_path.open("wb") as file:
                file.write(data)
        
        return {"message": "Files uploaded successfully"}
    except SQLAlchemyError as e:
        db.rollback()
        raise HTTPException(status_code=500, detail="Database error")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        db.close()
