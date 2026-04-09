# Interax

A lifestyle medication interaction checker. Add your prescriptions, OTCs, vitamins and supplements — see what interacts.

Built with Vite + React + Tailwind + shadcn-style primitives.

> **Not clinical advice.** Curated dataset, informational only.

## Run locally

```bash
npm install
npm run dev
```

## Deploy to Vercel

**Option A — CLI (fastest):**
```bash
npm i -g vercel
vercel
```
Follow the prompts. Done.

**Option B — GitHub → Vercel:**
1. Push this folder to a new GitHub repo
2. Go to vercel.com/new, import the repo
3. Vercel auto-detects Vite. Click Deploy.

## Extending the dataset

Edit `src/lib/interactions.js`. Two arrays:
- `SUBSTANCES` — canonical list with aliases for search
- `INTERACTIONS` — unordered pairs with severity + summary

Severities: `major` | `moderate` | `minor` (sorted worst-first in results).

## Notes

- Local state only. No backend, no storage, no analytics.
- For a real clinical tool you'd want RxNorm + DrugBank or an OpenFDA-backed API.
