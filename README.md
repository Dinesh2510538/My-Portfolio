# Dinesh Kanna Ravi – Portfolio

React + Vite single-page site served by nginx on port 8080 (Cloud Run's default).

## Edit content
All text lives in `src/data.js`. Replace the GitHub and LinkedIn URLs and add `link` values to projects.

## Run locally
    npm install
    npm run dev

## Deploy to Cloud Run
    gcloud config set project YOUR_PROJECT_ID
    gcloud run deploy portfolio --source . --region asia-south1 --allow-unauthenticated

`--source .` uses the Dockerfile with Cloud Build and Artifact Registry automatically.

## Features
Interactive terminal in the hero (try `help`), scroll-spy file tabs, "Send request" animation on each project, and reduced-motion support.
