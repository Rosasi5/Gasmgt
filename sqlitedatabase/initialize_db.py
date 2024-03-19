
#hii file ndio inaweka data kwa database

from sqlitedatabase.models import DbOrderStatus
from sqlitedatabase.database import SessionLocal, engine
from sqlalchemy.orm.session import Session
from sqlitedatabase.hash import Hash
from sqlitedatabase.models import DbCustomer
from schemas import CustomerBase

db = SessionLocal()

'''def add_order_status():
    # Define the order status names
    order_status_name = ["accepted", "pending", "ongoing", "delivered", "cancelled"]

    #inserting the order status names into the database
    for status_name in order_status_name:
        order_status = DbOrderStatus(order_status_name = status_name)
        db.add(order_status)

    db.commit()
    db.close()

add_order_status()#call the function to add the various order statuses into the database order_status table'''



#Create a new customer
'''def create_customer(db: Session, request: CustomerBase):
    new_customer = DbCustomer(
        first_name = request.first_name,
        last_name = request.last_name,
        email = request.email,
        password = Hash.bcrypt(request.password),
        phone_number = request.phone_number,
        profile_image = request.profile_image
    )
    db.add(new_customer)
    db.commit()
    db.refresh(new_customer)
    return new_customer'''

