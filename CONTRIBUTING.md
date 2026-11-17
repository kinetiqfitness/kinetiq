# How we work in this repo

## The model
- One repo, no forks. Everyone works on branches of this repo.
- `main` is the only long-lived branch. Nobody pushes to it directly; everything lands via a Pull Request.
- Every branch starts from an issue.

## Branch names
`<area>/<issue-number>-<short-description>`

```
cv/12-knee-valgus-detector
mobile/8-camera-stream
backend/15-sessions-endpoint
web/20-progress-chart
docs/22-adr-pose-model
```

## Limits
- A branch lives **at most 5 days**.
- A PR changes **about 400 lines at most**. If the task is bigger, split the issue.

## Daily flow
```bash
git checkout main
git pull
git checkout -b cv/12-knee-valgus-detector

# work, commit small and often
git add -p
git commit -m "cv: add knee valgus angle check"

# if main moved while you worked
git pull --rebase origin main

git push -u origin cv/12-knee-valgus-detector
```
Then open a PR on GitHub, write `Closes #12`, and wait for:
1. CI to pass (`ci-ok`)
2. Approval from the area's code owner

Merge with **Squash and merge**. The branch is deleted automatically.

## Commit messages
`<area>: <what you did, in present tense>`
```
cv: add One-Euro filter to landmark stream
mobile: request camera permission on first launch
backend: add sessions table migration
```

## Rules
- Never commit videos, datasets, model weights, or secrets. Put clips on the shared Drive and link them.
- Thresholds live in `cv/config/thresholds.yaml`, never hard-coded.
- Changes to `shared/` (keypoint schema, API contract) need review from every team that uses them.
- Significant technical decisions get a short ADR in `docs/adr/` (copy `0000-template.md`).
- At the end of each roadmap block, a lead tags `main`: `v0.1-block0`, `v0.2-block1`, ...
