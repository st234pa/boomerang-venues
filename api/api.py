from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app)


@app.route('/venues')
def get_venues():
    return {0: {"rating": 5, "name": "Niagara Falls", "key": 0}, 1: {"rating": 4, "name": "Grand Canyon", "key": 1}}
