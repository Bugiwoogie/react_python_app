from diffusers import StableDiffusionPipeline
import torch
from models import db, Image
from datetime import datetime

model_id = "runwayml/stable-diffusion-v1-5"

# Load the model
pipe = StableDiffusionPipeline.from_pretrained(model_id, torch_dtype=torch.float16)
pipe = pipe.to("cuda")  # Use "cpu" if you don't have a compatible GPU

def generate_stable_diffusion_image(prompt):
    # Generate an image
    image = pipe(prompt).images[0]
    return image

def save_image(image):
    image.save("output.png") # this is for testing
