from flask import Flask
import requests
from flask_cors import CORS, cross_origin
import json
import csv
import random
import dotenv
import os
dotenv.load_dotenv()
client_id = os.environ.get("client-id")
client_secret = os.environ.get("client-secret")

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
                          "long": long, "image": image, "locationId": row_id})

sights = {"Park", "Scenic", "Ampitheater", "Aquarium", "Museum"}
food = {"Restaurant"}
drink = {"Bar"}


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


@app.route('/locationsdata/<int:index>')
@cross_origin(origin='*', headers=['Content-Type', 'Authorization'])
def get_location(index):
    number_of_locations = len(locations)
    return {"locations": [locations[index % number_of_locations]]}


@app.route('/venueidsdata/<lat_long>', methods=["GET"])
@cross_origin(origin='*', headers=['Content-Type', 'Authorization'])
def get_venue_ids(lat_long):
    venue_ids = set()
    venues_params = {'ll': lat_long, 'radius': '60',
                     'client_id': client_id, 'client_secret': client_secret, 'v': '20200327', 'limit': 50}
    venues_url = "https://api.foursquare.com/v2/venues/explore"
    venues_data = requests.get(venues_url, venues_params).json()['response']
    if ('totalResults' in venues_data and venues_data['totalResults'] > 0):
        venues_results = venues_data['groups'][0]['items']
        for element in venues_results:
            venue_id = element['venue']['id']
            venue_ids.add(venue_id)
    return {"venueIds": list(venue_ids)}


def classify_category(categories):
    for category in categories:
        short_name = category["shortName"]
        if short_name in sights:
            return "Sights"
        if short_name in food:
            return "Food"
        if short_name in drink:
            return "Drink"
    return "Miscellaneous"


@app.route('/venuedata/<ids>', methods=["GET"])
@cross_origin(origin='*', headers=['Content-Type', 'Authorization'])
def get_venue_details(ids):
    venue_id, location_id = ids.split(',')
    venue_params = {'client_id': client_id,
                    'client_secret': client_secret, 'v': '20200327'}
    venue_url = "https://api.foursquare.com/v2/venues/" + venue_id
    venue_data = requests.get(venue_url, venue_params).json()
    if ('response' in venue_data and 'venue' in venue_data['response']):
        venue_results = venue_data['response']['venue']
        name = venue_results['name']
        image = venue_results['bestPhoto']['prefix'] + \
            '200x200' + venue_results['bestPhoto']['suffix']
        rating = venue_results['rating']
        category = classify_category(venue_results['categories'])
        return {"name": name, "locationId": location_id, "venueId": venue_id, "image": image, "rating": rating, "category": category}
    return {"name": "Venue Id: " + venue_id, "locationId": location_id, "venueId": venue_id, "image": "", "rating": 0, "category": classify_category([])}
