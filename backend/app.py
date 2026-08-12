import os
from flask import Flask, jsonify, request
from flask_cors import CORS
from dotenv import load_dotenv
from models import db, Product

load_dotenv()

app = Flask(__name__)

CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

# create tables in postgreSQL when starts
with app.app_context():
    db.create_all()

# Fetch Master Inventory
@app.route('/api/inventory', methods=['GET'])
def get_inventory():
    products = Product.query.all()
    return jsonify([p.to_dict() for p in products]), 200

if __name__ == '__main__':
    app.run(port=5000, debug=True)