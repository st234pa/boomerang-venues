from flask import Flask

app = Flask(__name__)


@app.route('/')
def get_venues():
    return {"0": "Venue 0", "1": "Venue 1", "2": "Venue 2", "3": "Venue 3"}
