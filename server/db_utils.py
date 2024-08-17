from models.user import db, User

def get_user_by_username(username):
  return User.query.filter_by(username=username).first()

def get_user_by_email(email):
  return User.query.filter_by(username=username).first()

def create_user(email, username, password):
  new_user = User(email=email, username=username, password=password)
  db.session.add(new_user)
  db.session.commit()

  return new_user