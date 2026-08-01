# CLAUDE.md — showcase-ui

Porta dev: 4320. Next.js 16 + React 19 + TypeScript + Tailwind v4 + shadcn/ui (preset Nova, base Base UI).

Esta versão do Next.js pode ter breaking changes vs. o que já está no treino do modelo. Checar `node_modules/next/dist/docs/` antes de assumir comportamento.

shadcn/ui aqui roda sobre **Base UI**, não Radix: composição usa `render={<Elemento />}`, não `asChild`.

Criado via `npx shadcn@latest init -t next -n showcase-ui -b base -p nova --no-monorepo -y`, seguindo `ui.shadcn.com/docs/installation` passo a passo.
