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

Este projeto também é um registry shadcn publicável (`registry.json`, componentes autorais `mode-toggle` e `app-sidebar`), servido dinamicamente em `/r/registry.json` (busca server-side, `q`/`type`/`limit`/`offset`) e `/r/[name]` (item individual). `npm run registry:build` gera o conteúdo em `.registry-build/r/`, que as rotas leem sob demanda.

Proteção por token opcional via `REGISTRY_TOKEN` (ver `.env.example`) — sem a variável, fica público.

Contexto completo das decisões técnicas em `CLAUDE.md`.
