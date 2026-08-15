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

# Add Product
@app.route('/api/inventory', methods=['POST'])
def add_product():
    data = request.get_json()
    if not data:
        return jsonify({"error": "Invalid Payload"}), 400
    new_product = Product(
        product_id=data.get('productId'),
        sku=data.get('sku'),
        name=data.get('name'),
        category=data.get('category'),
        quantity=data.get('quantity', 0),
        reorder_point=data.get('reorderPoint', 0),
        unit_price=data.get('unitPrice', 0.0),
        warehouse=data.get('warehouse')
    )
    try:
        db.session.add(new_product)
        db.session.commit()
        return jsonify(new_product.to_dict()), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 400

@app.route('/api/inventory/<string:product_id>', methods=['PUT'])
def update_product(product_id):
    product = Product.query.get(product_id)
    if not product:
        return jsonify({"error": "Product not Found"}), 404
    data = request.get_json()
    if 'quantity' in data:
         product.quantity = data['quantity']
    if 'reorderPoint' in data:
        product.reorder_point = data['reorderPoint']
    if 'unitPrice' in data:
        product.unit_price = data['unitPrice']
    if 'warehouse' in data:
        product.warehouse = data['warehouse']
    try:
        db.session.commit()
        return jsonify(product.to_dict()), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 400
if __name__ == '__main__':
    app.run(port=5000, debug=True)