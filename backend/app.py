import os
from flask import Flask, jsonify, request
from flask_cors import CORS
from dotenv import load_dotenv
from models import db, Product
import uuid
load_dotenv()

app = Flask(__name__)

CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

app.config['SQLALCHEMY_ENGINE_OPTIONS'] = {
    "pool_pre_ping": True,  # Checks connection validity before executing queries
    "pool_recycle": 300,    # Refreshes idle connections every 5 minutes
}

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
@app.route('/api/inventory', methods=["POST"])
def add_product():
    data = request.get_json()
    if not data:
        return jsonify({"error": "Invalid Payload"}), 400
    sku = data.get('sku')
    if not sku:
        return jsonify({"error": "SKU is reuired"}), 400
    # check for duplicate skus
    existing_product = Product.query.filter_by(sku=sku).first()
    if existing_product:
        return jsonify({"error": f"SKU {sku} already exists in inventory."}), 400
    generate_id = data.get('product_id') or f"p{uuid.uuid4().hex[:6]}"
    new_product = Product(
        product_id=generate_id,
        sku=data.get('sku'),
        name=data.get('name'),
        category=data.get('category'),
        quantity=int(data.get('quantity', 0)),
        reorder_point=int(data.get('reorderPoint', 0)),
        unit_price=float(data.get('unitPrice', 0)),
        warehouse=data.get('warehouse')
    )
    try:
        db.session.add(new_product)
        db.session.commit()
        return jsonify(new_product.to_dict()), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 400
# Update Product
@app.route('/api/inventory/<string:product_id>', methods=['PUT'])
def update_product(product_id):
    product = db.session.get(Product, product_id)
    if not product:
        return jsonify({"error": "Product not Found"}), 404
    data = request.get_json()
    if not data:
        return jsonify({"error": "No update data provided"}), 400
    if 'sku' in data and data['sku'] != product.sku:
        existing = Product.query.filter_by(sku=data['sku']).first()
        if existing:
            return jsonify({"error": "Product with {sku} is already present, choose another sku"}), 409
        product.sku = data['sku']
    if 'name' in data and data['name'] != product.name:
        existing = Product.query.filter_by(name=data['name']).first()
        if existing:
            return jsonify({"error": "A Product with {name} already exists"}), 409
        product.name = data['name']
    if 'category' in data:
        product.category = data['category']
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
# Delete Product
@app.route('/api/inventory/<string:product_id>', methods=["DELETE"])
def delete_product(product_id):
    product = db.session.get(Product, product_id)
    if not product:
        return jsonify({"error": f"Product with ID '{product_id}' not found."}), 404
    try:
        db.session.delete(product)
        db.session.commit()
        return jsonify({"message":f"Product {product_id} is deleted successfully"})
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 400
# Analytics
@app.route('/api/analytics', methods=["GET"])
def get_analytics():
    products = Product.query.all()
    total_skus = len(products)
    low_stock_count = sum(1 for p in products if p.quantity <= p.reorder_point)
    total_inventory_value = sum(p.quantity * p.unit_price for p in products)
    active_warehouses = len(set(p.warehouse for p in products))

    return jsonify({
        "totalSkus": total_skus,
        "lowStockAlerts": low_stock_count,
        "totalInventoryValue": total_inventory_value,
        "activeWarehouses": active_warehouses
    }), 200
if __name__ == '__main__':
    app.run(port=5000, debug=True)