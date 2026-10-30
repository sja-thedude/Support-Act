# Support Act

A touring intelligence agent for live music, built for the Qloo Agentic Hackathon.

An artist's team asks two questions: where should we tour, and who should open? Today the answer is guesswork plus gut feel. A language model on its own can name cities, but it cannot know which audiences over-index where. Support Act runs an agent loop over the Qloo taste graph, so every city, support act and activation idea traces back to a real Qloo API call.

## Status

In development. The live demo URL will be added here once it is deployed.

## Stack

- Next.js 15 (App Router) and TypeScript
- Tailwind CSS v4 with custom light and dark themes
- Deployed to Cloudflare Workers with `@opennextjs/cloudflare`
- Qloo Taste AI API for every recommendation; Claude for the agent loop's planning

## Run locally

Requires Node.js 22 or later.

```bash
git clone https://github.com/sja-thedude/Support-Act.git
cd Support-Act
npm install
cp .env.example .env.local   # then fill in the values
npm run dev
```

Open http://localhost:3000.

## Deploy

```bash
npm run deploy
```

This builds the app for Cloudflare Workers and deploys it with Wrangler. Set the same environment variables as Worker secrets with `npx wrangler secret put <NAME>`.

## Environment variables

Copy `.env.example` to `.env.local` and fill in:

- `QLOO_API_KEY`
- `QLOO_API_URL`
- `ANTHROPIC_API_KEY`

## Licence

[MIT](LICENSE)
