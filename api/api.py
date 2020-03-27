from flask import Flask
import requests
from flask_cors import CORS, cross_origin
import json
import csv
import random
import dotenv
import os
dotenv.load_dotenv()
clientid = os.environ.get("client-id")
clientsecret = os.environ.get("client-secret")

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
@cross_origin(origin='*', headers=['Content-Type', 'Authorization'])
def get_sample_locations():
    with open('samplelocationdata.json') as f:
        data = json.load(f)
    return data


@app.route('/samplevenuedata')
@cross_origin(origin='*', headers=['Content-Type', 'Authorization'])
def get_sample_venues():
    with open('samplevenuedata.json') as f:
        data = json.load(f)
    return data


@app.route('/locationdata/<int:index>')
@cross_origin(origin='*', headers=['Content-Type', 'Authorization'])
def get_location(index):
    number_of_locations = len(locations)
    return {"locations": [locations[index % number_of_locations]]}


@app.route('/venuedata/<latlong>', methods=["GET"])
@cross_origin(origin='*', headers=['Content-Type', 'Authorization'])
def get_venues(latlong):
    venuesParams = {'ll': latlong, 'radius': '60',
                    'client_id': clientid, 'client_secret': clientsecret, 'v': '20200327', 'limit': 1}
    venuesUrl = "https://api.foursquare.com/v2/venues/explore"
    venues = requests.get(venuesUrl, venuesParams).json()
    return {"venues": []}
