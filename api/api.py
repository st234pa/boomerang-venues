from flask import Flask
from flask_cors import CORS
import json
import csv

app = Flask(__name__)
cors = CORS(app)


locations = {}

with open('../unsplash.tsv') as f:
    reader = csv.DictReader(f, dialect='excel-tab')
    # for row in reader:
    # print(row)


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


@app.route('/locationdata')
def get_locations():
    return locations


@app.route('/venuedata')
def get_venues():
    return {}
