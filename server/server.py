from dotenv import load_dotenv
from init import initialize

load_dotenv()
app = initialize()

if __name__ == "__main__":
    app.run(debug=True)