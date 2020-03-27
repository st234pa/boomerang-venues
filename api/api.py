from flask import Flask
from flask_cors import CORS, cross_origin
import json
import csv
import random

app = Flask(__name__)
cors = CORS(app, resources={r"/foo": {"origins": "*"}})
app.config['CORS_HEADERS'] = 'Content-Type'

locations = []

with open('../unsplash.tsv') as f:
    reader = csv.DictReader(f, dialect='excel-tab')
    for row in reader:
        row_id = row['']
        name = row['location_name']
        lat = row['location_latitude']
        long = row['location_longitude']
        image = row['download_link']
        locations.append({"name": name, "lat": lat,
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


@app.route('/locationdata/<int:index>')
@cross_origin(origin='*', headers=['Content-Type', 'Authorization'])
def get_location(index):
    number_of_locations = len(locations)
    print(index % number_of_locations)
    return {"locations": [locations[index % number_of_locations]]}


@app.route('/venuedata')
def get_venues():
    return {}
