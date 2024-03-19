from fastapi import APIRouter, Depends, UploadFile, File, Form
from sqlalchemy.orm import Session
from schemas import CustomerBase, CustomerDisplay
from sqlitedatabase.database import get_db
#from sqlitedatabase.initialize_db import create_customer
from sqlitedatabase.hash import Hash
from sqlitedatabase import initialize_db
from sqlitedatabase.models import DbCustomer
import os
from passlib.hash import bcrypt

router = APIRouter(
    prefix='/customer',
    tags=['customer']
)

#create customer
'''@router.post('/customer/', response_model=CustomerDisplay)
async def create_customer(request: CustomerBase, db: Session = Depends(get_db)):
    #new_customer = create_customer()
    return initialize_db.create_customer(db, request)'''


@router.post("/customer")
async def create_customer(
    first_name: str = Form(...),
    last_name: str = Form(...),
    email: str = Form(...),
    password: str = Form(...),
    phone_number: str = Form(...),
    profile_image: UploadFile = File(...),
    db: Session = Depends(get_db)
):
    # Absolute path to the uploads directory
    uploads_dir = os.path.abspath("uploads")
    os.makedirs(uploads_dir, exist_ok=True)  # Ensure the directory exists

    # Save the uploaded profile image
    profile_image_path = os.path.join(uploads_dir, profile_image.filename)
    with open(profile_image_path, "wb") as f:
        f.write(profile_image.file.read())

    # Hash the password
    hashed_password = bcrypt.hash(password)

    new_customer = DbCustomer(
        first_name=first_name,
        last_name=last_name,
        email=email,
        password=hashed_password,  # Remember to hash the password before saving to the database
        phone_number=phone_number,
        profile_image=profile_image_path
    )
    db.add(new_customer)
    db.commit()
    db.refresh(new_customer)

    return {"message": "Customer created successfully"}
