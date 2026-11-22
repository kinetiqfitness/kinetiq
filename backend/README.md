# Backend

Express API + PostgreSQL (Docker). Work in progress (Block 0).

## Run locally

Requirements: Node 20+, Docker Desktop.

1. `cd backend`
2. `Copy-Item .env.example .env` (Windows) or `cp .env.example .env` (Mac/Linux)
3. `docker compose up -d` and wait until `docker compose ps` shows `healthy`
4. `npm install`
5. `npm run dev`

Check it works: open http://localhost:3000/health, you should see `{"status":"ok"}`.

## Useful commands

- Stop the database: `docker compose down`
- Reset the database (deletes all local data): `docker compose down -v`

Never commit `.env`. Real values stay on your machine; `.env.example` is the template.