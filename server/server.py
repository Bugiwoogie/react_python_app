from flask import Flask, request, jsonify
from flask_login import LoginManager, login_user
from flask_wtf.csrf import CSRFProtect
from flask_wtf.csrf import generate_csrf
from dotenv import load_dotenv
from models.user import db, User
import os

load_dotenv()

app = Flask(__name__)


# Configure the SQLAlchemy part of the app instance
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.secret_key = os.getenv('SECRET_KEY')
csrf = CSRFProtect(app)

# Initialize the SQLAlchemy db instance
db.init_app(app)

login_manager = LoginManager()
login_manager.login_view = 'auth.login'
login_manager.init_app(app)

@login_manager.user_loader
def load_user(user_id):
    # since the user_id is just the primary key of our user table, use it in the query for the user
    return User.query.get(int(user_id))

@app.route('/csrf-token', methods=['GET'])
def get_csrf_token():
    return jsonify({'csrf_token': generate_csrf()})

# Create the database tables
with app.app_context():
    db.create_all()

# User Authentication
@app.route("/login", methods=["POST"])
def login():
    try:
        data = request.get_json()
        print(data)
        username = data["username"]
        password = data["hashed_password"]
        remember_me = data["remember_me"]

        user = User.query.filter_by(username=username).first()
        print(user.password)

    except KeyError:
        return jsonify({"error": "Missing username or password"}), 400

    user = User.query.filter_by(username=username).first()
    if user and user.password == password:
        login_user(user, remember=remember_me)
        user_data = {
            "id": user.id,
            "username": user.username,
            "email": user.email,
            "created_at": user.created_at,
            "updated_at": user.updated_at
        }
        return jsonify({"success": True, "message": "Login successful!", "user": user_data}), 200
    else:
        return jsonify({"error": "Invalid credentials"}), 401
    
@app.route("/register", methods=["POST"])
def register():
    data = request.get_json()
    username = data["username"]
    email = data["email"]
    password = data["hashed_password"]

    user = User.query.filter_by(username=username).first() # if this returns a user, then the email already exists in database
    user_email = User.query.filter_by(email=email).first()

    print(User.query.all())

    if user: # if a user is found, we want to redirect back to signup page so user can try again
        return jsonify({"error": "Username is already in use"}), 400
    elif user_email:
        return jsonify({"error": "Email is already in use"}), 400
    else:
        new_user = User(email=email, username=username, password=password)
        # add the new user to the database
        db.session.add(new_user)
        db.session.commit()

        return jsonify({"success": True, "message": "Registration successful!"}), 200

if __name__ == "__main__":
    app.run(debug=True)