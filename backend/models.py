from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()

class Product(db.Model):
    __tablename__ = 'products'
    product_id = db.Column(db.String, primary_key=True)
    sku = db.Column(db.String, unique=True, nullable=False)
    name = db.Column(db.String(10), nullable=False)
    category = db.Column(db.String(1), nullable=False)
    quantity = db.Column(db.Integer, nullable=False, default=0)
    reorder_point = db.Column(db.Integer, nullable=False, default=0)
    unit_price = db.Column(db.FLoat, nullable=False, default=0.0)
    warehouse = db.Column(db.String(50), nullable=False)
