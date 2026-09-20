# Jonathan Natanael Siahaan — Portfolio

Personal portfolio and CV site built with Next.js (App Router), TypeScript, and Tailwind CSS v4.

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content

All copy lives in `data/`:

- `data/profile.ts` — name, title, summary, contact info
- `data/experience.ts` — work history timeline
- `data/portfolio.ts` — project highlights
- `data/skills.ts` — grouped skill/tech list

The downloadable CV PDF lives at `public/cv/Jonathan-Natanael-Siahaan-CV.pdf` — replace this file to update the "Download CV" links.

## Production Build

```bash
npm run build
npm start
```

## Deploying to Vercel

1. Push this repository to GitHub (or GitLab/Bitbucket).
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects the Next.js framework — no configuration needed.
4. Click **Deploy**.

Every push to the default branch will trigger a new production deployment automatically.
