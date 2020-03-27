from flask import Flask
from flask_cors import CORS
import json

app = Flask(__name__)
cors = CORS(app)


@app.route('/samplelocationdata')
def get_sample_locations():
    with open('samplelocationdata.json') as f:
        data = json.load(f)
    return data


@app.route('/samplevenuedata')
def get_sample_venues():
    with open('samplevenuedata.json') as f:
        data = json.load(f)
    return data
