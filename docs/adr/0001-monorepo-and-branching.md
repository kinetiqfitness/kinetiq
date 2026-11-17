# ADR-0001: Single monorepo with short-lived branches, no forks

- **Status:** Accepted
- **Date:** 2026-11-17
- **Deciders:** Project leads

## Context
Seven people across four areas (CV, mobile, backend, web) need to work in parallel. The CV pipeline, backend, and mobile app share a keypoint schema and API contract, so changes often cross team boundaries.

## Decision
One repository in the team's GitHub organization. All work happens on short-lived branches (at most 5 days, about 400 changed lines) cut from `main` and merged back by squash-merged Pull Requests. Review is routed by CODEOWNERS. Each roadmap block ends with a version tag on `main`.

## Alternatives considered
- **Fork per person:** designed for open-source contributors without write access. Adds constant upstream syncing, hides in-progress work, and CI secrets are not available to PRs from forks.
- **Fork or repo per team:** splits the shared schema and API contract across repos, making cross-team changes slow and version drift likely.
- **GitFlow (`develop` + `release` branches):** extra ceremony with no benefit for a single deployable thesis artifact.

## Consequences
- Everyone sees all work in progress in one place.
- `main` must be protected so that PRs and CI are required.
- Large files (videos, datasets, weights) must stay out of git and live on shared storage.
