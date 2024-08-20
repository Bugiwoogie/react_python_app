from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def get_user_by_username(username):
    from models.user import User  # Import User inside the function
    return User.query.filter_by(username=username).first()

def get_user_by_email(email):
    from models.user import User  # Import User inside the function
    return User.query.filter_by(email=email).first()

def get_user_by_id(user_id):
    from models.user import User  # Import User inside the function
    return User.query.get(int(user_id))

def create_user(email, username, password):
    from models.user import User  # Import User inside the function
    new_user = User(email=email, username=username, password=password)
    db.session.add(new_user)
    db.session.commit()
    return new_user