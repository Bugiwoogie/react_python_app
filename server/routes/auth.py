from flask import Blueprint, request, jsonify
from flask_login import login_user
from flask_wtf.csrf import generate_csrf
from db_utils import get_user_by_username, get_user_by_email, create_user

auth_bp = Blueprint('auth', __name__)

@auth_bp.route("/login", methods=["POST"])
def login():
    try:
        data = request.get_json()
        username = data["username"]
        password = data["hashed_password"]
        remember_me = data["remember_me"]

        user = get_user_by_username(username)

    except KeyError:
        return jsonify({"error": "Missing username or password"}), 400

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

@auth_bp.route("/register", methods=["POST"])
def register():
    data = request.get_json()
    username = data["username"]
    email = data["email"]
    password = data["hashed_password"]

    user = get_user_by_username(username)
    user_email = get_user_by_email(email)

    if user:
        return jsonify({"error": "Username is already in use"}), 400
    elif user_email:
        return jsonify({"error": "Email is already in use"}), 400
    else:
        new_user = create_user(email, username, password)

        return jsonify({"success": True, "message": "Registration successful!"}), 200

@auth_bp.route('/csrf-token', methods=['GET'])
def get_csrf_token():
    return jsonify({'csrf_token': generate_csrf()})