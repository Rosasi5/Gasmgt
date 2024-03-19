#this is where the shape and type of data received or sent is defined

from pydantic import BaseModel



class CustomerBase(BaseModel):
    first_name : str
    last_name : str
    email : str
    password : str
    phone_number : int
    profile_image: str
    #location_id: int

class CustomerDisplay(BaseModel):
    first_name: str
    last_name: str
    email: str
    password: str
    phone_number: int
    profile_image: str
    #location_id: int
    class Config():
        arbitrary_types_allowed = True
