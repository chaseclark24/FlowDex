import json
import requests

req = requests.get('https://statsapi.web.nhl.com/api/v1/teams/14?expand=team.roster')
print(req.text)