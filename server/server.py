from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/")
def index():
    print("on index page")

@app.route("/login", methods=["POST"])  # Specify POST method
def login():
    # Access login data from request body (assuming JSON format)
    try:
        data = request.get_json()
        username = data["username"]
        password = data["password"]
    except KeyError:
        return jsonify({"error": "Missing username or password"}), 400  # Handle missing data

    # Implement login logic (e.g., authenticate against a database)
    # ... (replace with your authentication logic)

    if username == "correct_username" and password == "correct_password":  # Example authentication
        return jsonify({"success": True, "message": "Login successful!"})
    else:
        return jsonify({"error": "Invalid credentials"}), 401  # Unauthorized


@app.route("/members")
def members():
    print("yolo")
    return{"members": ["Member1","Member2","Member3"]}


if __name__ == "__main__":
    app.run(debug=True)