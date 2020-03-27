from flask import Flask
from flask_cors import CORS
import json

app = Flask(__name__)
cors = CORS(app)


@app.route('/sampledata')
def get_venues():
    with open('sampledata.json') as f:
        data = json.load(f)
    return data
