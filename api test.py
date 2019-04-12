import json
import requests

req = requests.get('https://statsapi.web.nhl.com/api/v1/franchises/38')
print(req.text)