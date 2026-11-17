# AI-Assisted Fitness Coaching

Real-time pose estimation and biomechanical form scoring for gym exercises.
Graduation project, Suez Canal University.

## Repository layout

| Folder | What lives there | Owners |
|---|---|---|
| `cv/` | Pose pipeline, smoothing, fault detectors, `config/thresholds.yaml` | CV team |
| `mobile/` | Flutter app (camera, on-device pose, live feedback) | Mobile team |
| `backend/` | FastAPI service, Supabase, Alembic migrations | Backend team |
| `web/` | Analytics and nutrition dashboard | Web team |
| `shared/` | Keypoint schema, API contract (shared by all teams) | CV + Backend + Mobile |
| `docs/adr/` | Architecture decision records | Leads |

Datasets, labeled clips and model weights are **not** in this repo. See the shared Drive folder: <link>.

## Contributing
Read [CONTRIBUTING.md](CONTRIBUTING.md) before opening your first branch.
