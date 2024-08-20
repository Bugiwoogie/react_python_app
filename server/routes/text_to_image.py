from flask import Blueprint, request
from image_generation.microsoft_image_creator import generate_microsoft_image_creator_image
from image_generation.stable_diffusion import generate_stable_diffusion_image

text_to_image_bp = Blueprint('text_to_image', __name__)

@text_to_image_bp.route("/generate_microsoft_image_creator_image", methods=["POST"])
def generate_microsoft_image_creator_image():
  data = request.get_json()
  prompt = data['prompt']

  if not prompt:
    return jsonify({'error': 'No prompt provided'}), 400
  
  image_url = generate_microsoft_image_creator_image(prompt)
  return jsonify({'image_url': image_url})

  # images = generate_image(prompt)

@text_to_image_bp.route('/generate_stable_diffusion_image', methods=["POST"])
def generate_stable_diffusion_image():
  data = request.get_json()
  prompt = data['prompt']

  if not prompt:
    return jsonify({'error': 'No prompt provided'}), 400
  
  image_url = generate_stable_diffusion_image(prompt)
  return jsonify({'image_url': image_url})