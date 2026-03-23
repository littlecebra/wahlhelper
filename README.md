# Standpunkte — Lokal-O-Mat

An interactive election quiz tool for the 2026 municipal elections in **Bad Vilbel** and **Wetteraukreis**, Germany. It helps voters discover which local political parties best match their positions on key issues.

## What it does

Users answer a set of questions about local political topics, optionally weighting how important each topic is to them. The app then calculates a match percentage with each party and shows a detailed breakdown of where they agree or disagree — including party statements and source citations.

Two independent modules are included:

| Module | Scope | Questions | Parties |
|--------|-------|-----------|---------|
| A | Bad Vilbel (city council) | 26 | 6 |
| B | Wetteraukreis (district) | 15 | 8 |

## Tech stack

- **Vanilla HTML, CSS, JavaScript** — no framework, no build step
- **Nginx** — web server for production
- **Docker / Docker Compose** — containerized deployment
- **GitHub Actions** — CI/CD pipeline publishing to GitHub Container Registry (GHCR)

## Running locally

Since there is no build step, you can open `index.html` directly in a browser — or serve it with any static file server:

```bash
# Python
python3 -m http.server 8068

# Node (npx)
npx serve .
```

## Docker

**Build and run locally:**

```bash
docker build -t lokal-o-mat .
docker run -p 8068:80 lokal-o-mat
```

**Docker Compose (recommended):**

```bash
docker-compose up -d
```

The app is then available at `http://localhost:8068`.

**Pull the published image from GHCR:**

```bash
docker pull ghcr.io/sebastianbrams/lokal-o-mat:latest
docker run -p 8068:80 ghcr.io/sebastianbrams/lokal-o-mat:latest
```

## CI/CD

Pushing to `main` triggers a GitHub Actions workflow that builds and publishes a new Docker image to `ghcr.io/sebastianbrams/lokal-o-mat`.

## Project structure

```
lokal-o-mat/
├── index.html              # App shell
├── app.js                  # Application logic, routing, rendering
├── data.js                 # Questions, party positions, scoring data
├── style.css               # All styles
├── Dockerfile
├── docker-compose.yml
├── nginx.conf              # Standalone Nginx config
├── nginx-container.conf    # Docker-specific Nginx config
└── .github/workflows/
    └── docker-publish.yml  # CI/CD pipeline
```

## Data structure

All question and party data lives in `data.js`. Each question has a score from **−2** (strong disagreement) to **+2** (strong agreement) for each party. User answers are weighted by importance (1×, 2×, 3×) and normalized to a 0–100 % match score.

To adapt the tool for a different election, update the questions, parties, and scores in `data.js`.

## License

This project is not yet licensed. Contact the author for usage permissions.
