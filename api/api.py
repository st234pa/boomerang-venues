from flask import Flask
from flask_cors import CORS
import json
import csv

app = Flask(__name__)
cors = CORS(app)


locations = {"locations": []}

with open('../unsplash.tsv') as f:
    reader = csv.DictReader(f, dialect='excel-tab')
    for row in reader:
        row_id = row['']
        name = row['location_name']
        lat = row['location_latitude']
        long = row['location_longitude']
        image = row['download_link']
        locations["locations"].append({"name": name, "lat": lat,
                                       "long": long, "image": image, "id": row_id})


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
