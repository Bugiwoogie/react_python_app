from flask import Blueprint, request
from image_generation.microsoft_image_creator import generate_image

text_to_image_bp = Blueprint('text_to_image', __name__)

@text_to_image_bp.route("/generate_microsoft_image_creator_image", methods=["POST"])
def generate_microsoft_image_creator_image():
  data = request.get_json()
  prompt = data['prompt']

  images = generate_image(prompt)
