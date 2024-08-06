from flask import Flask, request, jsonify
from dotenv import load_dotenv
from models.user import db, User
import os

load_dotenv()

app = Flask(__name__)


# Configure the SQLAlchemy part of the app instance
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize the SQLAlchemy db instance
db.init_app(app)

print(os.getenv('DATABASE_URL'))

# Create the database tables
with app.app_context():
    db.create_all()

@app.route("/login", methods=["POST"])
def login():
    try:
        data = request.get_json()
        username = data["username"]
        password = data["password"]
    except KeyError:
        return jsonify({"error": "Missing username or password"}), 400

    user = User.query.filter_by(username=username).first()
    if user and user.password == password:
        return jsonify({"success": True, "message": "Login successful!"}), 200
    else:
        return jsonify({"error": "Invalid credentials"}), 401
    
@app.route("/register", methods=["POST"])
def register():
    data = request.get_json()
    print(data)


if __name__ == "__main__":
    app.run(debug=True)