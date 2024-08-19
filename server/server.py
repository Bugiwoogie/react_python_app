from dotenv import load_dotenv
from init import initialize
from image_generation.stable_diffusion import generate_stable_diffusion_image, save_image

load_dotenv()

app = initialize()

image = generate_stable_diffusion_image("show me a pikachu running through a high detailed forest")
save_image(image)

if __name__ == "__main__":
    app.run(debug=True)