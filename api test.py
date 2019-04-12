import json
import requests

req = requests.get('https://statsapi.web.nhl.com/api/v1/teams/5/stats')
print(req.text)