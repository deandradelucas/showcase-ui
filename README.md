# showcase-ui

Catálogo de componentes shadcn/ui — 57 componentes isolados em ordem alfabética, sem blocos nem contexto artificial, mais um punhado de exemplos reais rodando (forms, chat com streaming).

## Rodando localmente

```bash
npm install
npm run dev
```

Abre em http://localhost:4320

## Rotas

- `/` — início
- `/componentes` — catálogo completo, isolado, em ordem alfabética
- `/formulario`, `/formulario-tanstack`, `/formulario-formisch` — três integrações de forms (React Hook Form, TanStack Form, Formisch)
- `/chat` — chat real com Message/Bubble/Message Scroller, streaming via AI SDK (mock, sem modelo de verdade)

## Registry

Este projeto também é um registry shadcn publicável (`registry.json`, componentes autorais `mode-toggle`, `app-sidebar` e `registry-auth`).

Duas formas de instalar:

```bash
# direto do GitHub, sem depender do servidor local (repo público)
npx shadcn@latest add deandradelucas/showcase-ui/mode-toggle

# via servidor Next.js (busca server-side, q/type/limit/offset em /r/registry.json)
npx shadcn@latest registry add "@showcase-ui=http://localhost:4320/r/{name}.json"
npx shadcn@latest add @showcase-ui/mode-toggle
```

`npm run registry:build` gera o conteúdo em `.registry-build/r/`, que as rotas `/r/registry.json` e `/r/[name]` leem sob demanda. Proteção opcional por token via `REGISTRY_TOKEN` (`.env.example`) — só vale pro caminho via servidor; a instalação direto do GitHub não passa por essa auth.

Contexto completo das decisões técnicas em `CLAUDE.md`.
