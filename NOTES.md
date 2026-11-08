# NOTES

Operating notes for this repository only. Future jobs: read this file first and keep it current before doing other work.

## Purpose

`darcmuff/wheelhouse-sim` is the OpTrack / WheelHouse simulation snapshot. The app is an options-wheel tracker. The page title is "OpTrack — SIMULATION". `brand.js` names the product OpTrack, tagline "Options Wheel Tracker".

This is not the separate WheelHouse production repository. Do not read, edit, deploy, or push that repo from work scoped to this snapshot.

## Current state (2026-11-08)

Checked 2026-11-08. No earlier `NOTES.md` was in the tree. No build, test, or deploy was run for this pass.

- Default branch `main` was `e5f833708e73ea90ea945b632639d425679a373a` ("Rebuild from dev v123 (OpTrack)", 2026-11-01 19:00:38 +0000).
- Remote heads were `main` only. There was no `dev` branch and no README.
- Root files: `index.html`, `simdata.js`, `legal.html`, `brand.js`, `analytics.js`, `fb-app.js`, `fb-auth.js`, `fb-firestore.js`, `manifest.json`, app icons, `.nojekyll`.
- `brand.js` says OpTrack. `manifest.json` still says WheelHouse. Observed only; not changed.
- Recent `main` history is "Rebuild from dev" snapshots (v118 through v121, then v123). `simdata.js` was not opened.

## Working rules

- Do continuation work on `dev`.
- Update `main` only after explicit approval from Marc.
- Preserve other people's commits. No force-push.
- A notes-only job changes `NOTES.md` only: no runtime edits, version bumps, or deployments.
- Do not put secrets, credentials, or private data in this file.
- When a later job verifies a new fact, replace the stale statement here.

## Verified next steps

Process checks from this pass. Not a product roadmap.

1. Read this file before the next job in this repo. Update the dated state if that job changes it.
2. Stay on `dev` until Marc explicitly approves a `main` update.
3. Leave the separate WheelHouse production repository untouched.
4. Manifest name "WheelHouse" and `brand.js` name "OpTrack" differ. No brand-sync tool is in this snapshot, so the names were left as they are.

## This pass

- Created `dev` from `main` at `e5f833708e73ea90ea945b632639d425679a373a`.
- Added this `NOTES.md` only.
