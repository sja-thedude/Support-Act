# Support Act

A touring intelligence agent for live music, built for the Qloo Agentic Hackathon.

An artist's team asks two questions: where should we tour, and who should open? Today the answer is guesswork plus gut feel. A language model on its own can name cities, but it cannot know which audiences over-index where. Support Act runs an agent loop over the Qloo taste graph, so every city, support act and activation idea traces back to a real Qloo API call.

## Status

In development. The live demo URL will be added here once it is deployed.

## Environment variables

Copy `.env.example` to `.env.local` and fill in:

- `QLOO_API_KEY`
- `QLOO_API_URL`
- `ANTHROPIC_API_KEY`

## Licence

[MIT](LICENSE)
