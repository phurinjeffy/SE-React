from database import Base
from sqlalchemy import Column, Integer, String, Boolean, Float

class Account(Base):
    __tablename__ = 'accounts'
    
    id = Column(Integer, primary_key=True, index=True)
    email = Column(String)
    password = Column(String)
    name = Column(String)
    year = Column(Integer)