# FlowDex

A mobile-friendly NHL team and player browser built as a lightweight frontend for the NHL statistics API.

[View the GitHub Pages deployment](https://chaseclark24.github.io/FlowDex/)

> **Current status:** The site is hosted with GitHub Pages and has been updated to use the current NHL standings, roster, and club-statistics endpoints.

## What it does

- Listed NHL teams with win and loss records.
- Opened a roster view for a selected team.
- Displayed player biographical information such as age, height, weight, nationality, and position.
- Displays season statistics including goals, points, assists, penalty minutes, and shots.
- Used collapsible, mobile-friendly player cards.

## How it worked

FlowDex was a fully client-side application:

```text
Browser -> NHL statistics API -> team and player cards
```

No application server or database was required, which made the project suitable for free hosting with GitHub Pages.

## Technology

- HTML, CSS, and JavaScript
- Fetch API
- Bootstrap and jQuery
- GitHub Pages

## Repository contents

- `index.html` — team listing and team-level statistics.
- `dexCheck.html` — roster and player detail view.
- `style.css` — custom presentation styles.
- `api test.py` — early Python request used while exploring the API.

## API note

The current NHL API does not permit direct cross-origin browser requests from GitHub Pages. To keep FlowDex as a static site, its public-data requests pass through the AllOrigins CORS relay before reaching the NHL endpoints. No credentials or private data are sent through the relay.
