from sqlitedatabase.database import Base
from sqlalchemy import Column, ForeignKey
from sqlalchemy.sql.sqltypes import Integer, String, Date, Time
from sqlalchemy.orm import relationship


class DbCustomer(Base):
    __tablename__ = 'customers'
    customer_id = Column(Integer, primary_key=True, index=True)
    first_name = Column(String)
    last_name = Column(String)
    profile_image = Column(String)
    email = Column(String)
    password = Column(String)
    phone_number = Column(Integer)#hash the password
    location_id = Column(Integer, ForeignKey('locations.id'))

    locations = relationship("DbLocation", back_populates="customers")
    orders = relationship("DbOrders", back_populates="customers")
    reviews = relationship("DbReviews", back_populates="customers")

class DbGasVendor(Base):
    __tablename__ = 'gas_vendors'
    gas_vendor_id = Column(Integer, primary_key=True, index=True)
    first_name = Column(String)
    last_name = Column(String)
    profile_image = Column(String)
    email = Column(String)
    password = Column(String)#hash the password
    phone_number = Column(Integer)
    location_id = Column(Integer, ForeignKey('locations.id'))

    location = relationship("DbLocation", back_populates="gas_vendors")
    gas_company = relationship("DbGasCompany", back_populates="gas_vendors")
    reviews = relationship("DbReviews", back_populates="gas_vendors")

class DbGasCompany(Base):
    __tablename__ = 'gas_company'
    gas_company_id = Column(Integer, primary_key=True, index=True)
    gas_company_name = Column(String)
    gas_vendor_id = Column(Integer,ForeignKey('gas_vendors.gas_vendor_id'))
    about = Column(String)
    location_id = Column(Integer, ForeignKey('locations.id'))

    gas_vendors = relationship("DbGasVendor", back_populates="gas_company")
    location = relationship("DbLocation", back_populates="gas_company")
    gas_vendors = relationship("DbGasVendor", back_populates="gas_company")

class DbLocation(Base):
    __tablename__ = 'locations'

    id = Column(Integer, primary_key=True, index=True)
    latitude = Column(String)
    longitude = Column(String)
    address = Column(String)

    customers = relationship("DbCustomer", back_populates="locations")
    gas_vendors = relationship("DbGasVendor", back_populates="location")
    gas_company = relationship("DbGasCompany", back_populates="location")
    orders = relationship("DbOrders", back_populates="location")

class DbOrderStatus(Base):
    __tablename__ = 'order_status'

    order_status_id = Column(Integer, primary_key=True, index=True)
    order_status_name = Column(String, unique=True, index=True)

    orders = relationship("DbOrders", back_populates="order_status")

class DbOrders(Base):
    __tablename__ = 'orders'

    order_id = Column(Integer, primary_key=True, index=True)
    customer_id = Column(Integer, ForeignKey('customers.customer_id'))
    gas_cylinder_brand = Column(String)
    location_id = Column(Integer, ForeignKey('locations.id'))
    date = Column(Date)
    time = Column(Time)
    gas_quantity = Column(Integer)
    order_status_id = Column(Integer, ForeignKey('order_status.order_status_id'))

    location = relationship("DbLocation", back_populates="orders")
    customers = relationship("DbCustomer", back_populates='orders')
    order_status = relationship("DbOrderStatus", back_populates="orders")
    #previous_order = relationship("DbOrders", remote_side=[order_id], back_populates="next_order")
    #next_order = relationship("DbOrders", remote_side=[order_id], back_populates="previous_order")
    


class DbReviews(Base):
    __tablename__ = 'reviews'

    review_id = Column(String, primary_key=True, index=True)
    customer_id = Column(Integer, ForeignKey('customers.customer_id'))
    gas_vendor_id = Column(Integer, ForeignKey('gas_vendors.gas_vendor_id'))
    rating = Column(Integer)
    comment = Column(String)
    date = Column(Date)

    customers = relationship("DbCustomer", back_populates="reviews")
    gas_vendors = relationship("DbGasVendor", back_populates="reviews")