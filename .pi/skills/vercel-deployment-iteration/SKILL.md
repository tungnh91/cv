---
name: vercel-deployment-iteration
description: Project-specific Vercel deployment and production-debug workflow for the cv site. Use when pushing changes, authenticating GitHub/Vercel CLIs, reproducing Vercel failures locally, inspecting failed deployments, or validating that production aliases are healthy.
---

# Vercel Deployment Iteration

This is the deployment playbook for this repo (`cv`) as of 2026-03-24.

For the detailed rationale, incident history, and repo-specific lessons learned, read:
- [references/2026-03-24-deployment-notes.md](references/2026-03-24-deployment-notes.md)

## Project context

- Vercel scope: `tim-nguyens-projects-a0ec1615`
- Vercel project: `cv`
- Production branch: `master`
- `.vercel/` is intentionally gitignored

## Official CLI setup

Install the official Vercel CLI the way Vercel docs recommend:

```bash
npm install -g vercel
```

Do not rely on Homebrew `vercel-cli` for this project playbook.

If GitHub push auth is broken, use GitHub CLI auth instead of account passwords:

```bash
gh auth login
gh auth setup-git
```

GitHub password auth over HTTPS does not work for `git push`.

## Login and link

```bash
vercel login
vercel link --yes --scope tim-nguyens-projects-a0ec1615 --project cv
```

Verify the account and project:

```bash
vercel whoami
vercel project inspect cv --scope tim-nguyens-projects-a0ec1615
```

## Standard deployment loop

1. Make code changes.
2. Run a local build:

```bash
pnpm build
```

3. Push to GitHub:

```bash
git push origin master
```

4. Watch the Vercel deployment:

```bash
vercel list cv --scope tim-nguyens-projects-a0ec1615
vercel inspect <deployment-url> --logs --scope tim-nguyens-projects-a0ec1615
```

## Best debugging loop for this repo

When a cloud deployment fails:

1. Get the newest deployment URL:

```bash
vercel list cv --scope tim-nguyens-projects-a0ec1615
```

2. Inspect logs:

```bash
vercel inspect <deployment-url> --logs --scope tim-nguyens-projects-a0ec1615
```

3. Reproduce the production build locally:

```bash
vercel build --prod --scope tim-nguyens-projects-a0ec1615
```

4. Fix root cause, run `pnpm build`, then push again.

`vercel deploy --prebuilt --prod` can print a generic “Unexpected error” even when the deployment is still processing. Always follow it with `vercel inspect <deployment-url>` before assuming the deploy is dead.

## Current repo rules learned today

Keep these true unless you intentionally modernize the stack:

- `package.json` must include:

```json
"engines": { "node": "24.x" },
"packageManager": "pnpm@7.33.7"
```

- This repo’s `pnpm-lock.yaml` is a pnpm v7-era lockfile (`lockfileVersion: 5.4`).
- Vercel project settings may still show an older Node version, but `engines.node = 24.x` overrides it.
- `next-mdx-remote` must be `^6.0.0` or later. Vercel blocks `4.4.1` as vulnerable.
- Unused Prisma code/deps caused clean-install build failures. Do not re-add Prisma unless the repo also gets a real Prisma schema and generation flow.
- `next.config.js` currently includes:

```js
typescript: { ignoreBuildErrors: true }
```

This is a tactical workaround for type issues in a clean Vercel environment. Remove it only after verifying clean builds without it.

## Validation after deploy

Check deployment status:

```bash
vercel inspect <deployment-url> --scope tim-nguyens-projects-a0ec1615
```

Expected: `status ● Ready`

Check the production alias:

```bash
curl -I -L -s https://cv-tim-nguyens-projects-a0ec1615.vercel.app | head -20
```

A healthy deploy should return `HTTP/2 200`.

## Known-good commands

```bash
vercel teams ls
vercel project inspect cv --scope tim-nguyens-projects-a0ec1615
vercel list cv --scope tim-nguyens-projects-a0ec1615
vercel inspect <deployment-url> --logs --scope tim-nguyens-projects-a0ec1615
vercel build --prod --scope tim-nguyens-projects-a0ec1615
```

## When to update this skill

Update this skill whenever:

- deployment settings change
- the Vercel project or scope changes
- package manager strategy changes
- a new production failure mode is discovered
- the `ignoreBuildErrors` workaround is removed
