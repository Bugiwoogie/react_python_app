import os
from flask import Flask
from flask_login import LoginManager
from flask_wtf.csrf import CSRFProtect
from models.user import db
from db_utils import get_user_by_id

# Routes
from routes.auth import auth_bp
from routes.text_to_image import text_to_image_bp

def initialize():
  app = Flask(__name__)

  # Configure the SQLAlchemy part of the app instance
  app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL')
  app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

  # CSRF protection
  app.secret_key = os.getenv('SECRET_KEY')
  csrf = CSRFProtect(app)

  # Initialize the SQLAlchemy db instance
  db.init_app(app)

  # Session management
  login_manager = LoginManager()
  login_manager.login_view = 'auth.login'
  login_manager.init_app(app)
  @login_manager.user_loader
  def load_user(user_id):
      return get_user_by_id(user_id)

  # Register the auth blueprint
  app.register_blueprint(auth_bp, url_prefix='/auth')
  app.register_blueprint(text_to_image_bp, url_prefix='/text_to_image')

  # Create the database tables
  with app.app_context():
      db.create_all()

  return app
