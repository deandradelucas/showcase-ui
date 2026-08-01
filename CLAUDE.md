# CLAUDE.md — showcase-ui

Porta dev: 4320. Next.js 16 + React 19 + TypeScript + Tailwind v4 + shadcn/ui (preset Nova, base Base UI).

Esta versão do Next.js pode ter breaking changes vs. o que já está no treino do modelo. Checar `node_modules/next/dist/docs/` antes de assumir comportamento.

shadcn/ui aqui roda sobre **Base UI**, não Radix — diferenças de API confirmadas na prática:
- Composição: `render={<Elemento />}`, não `asChild`.
- `Toast`: precisa `<Toaster>` envolvendo o layout raiz (mesmo padrão do `TooltipProvider`); disparar com `toast.add({...})`, não `toast({...})` — `toast` é uma instância de `ToastManager`, não uma função.
- `Accordion`: usa `multiple={false}` pra modo single-open, não `type="single" collapsible` (isso é API do Radix).
- `Select`: `SelectValue` mostra o `value` bruto do item selecionado (ex.: `"pro"`), não o label renderizado — diferente do Radix, que resolve isso sozinho. Precisa passar `items={[{value, label}]}` no `Select` (ou função `children={(value) => label}` na `SelectValue`) pra mostrar o texto certo.
- `Resizable` (react-resizable-panels, não Base UI): usa `orientation="horizontal"|"vertical"` no `ResizablePanelGroup`, não `direction` (API antiga da lib).

**Convenção do projeto:** todo elemento clicável ganha `cursor-pointer` explícito — o preset Nova não traz isso por padrão, e alguns (`SelectItem`, `DropdownMenuItem` e afins) vêm com `cursor-default` de propósito (estilo menu nativo), mas aqui trocamos pra pointer. Já aplicado em: `Button`, `Checkbox`, `Switch`, `Tabs`/`Accordion`/`Menubar` (trigger), `Toggle`/`ToggleGroup`, `RadioGroup`, `Slider` (thumb), `NativeSelect`, `Sidebar` (menu button + actions), `Select`/`Command`/`ContextMenu`/`DropdownMenu` (item, sub-trigger, checkbox/radio item). Elemento `<a>` (BreadcrumbLink, PaginationLink, NavigationMenuLink) não precisa — âncora já tem pointer nativo. Todo componente clicável novo deve seguir a mesma convenção.

**Cuidado com `npx shadcn add -o` (overwrite):** sobrescreve QUALQUER arquivo customizado que apareça como dependência de um componente novo, mesmo sem intenção — já aconteceu duas vezes nesta sessão com `button.tsx`/`dropdown-menu.tsx` voltando pro stock (perdendo `cursor-pointer`). Depois de qualquer `add -o`, rodar `git diff --stat components/ui/` e conferir se algum arquivo customizado voltou ao original antes de commitar.

**TanStack AI helper não instalado (01-08-2026):** `@shadcn/helpers` (0.1.0) exige `@tanstack/ai` na faixa `>=0.40.0 <0.41.0` via peer dependency, mas nenhuma versão publicada de `@tanstack/ai-react` cai nessa faixa — 0.16.x pede `^0.38.0`, 0.17.x já pula pra `^0.41.0`. Conflito real do lado de fora, não resolvido — `docs/helpers/tanstack-ai` ficou só lido, sem demo funcional. `/chat` usa o helper de AI SDK (`docs/helpers/ai-sdk`), que instalou sem conflito. Reavaliar quando alguma das duas libs publicar versão compatível.

`components/ui/**` e `hooks/**` têm a regra `react-hooks/set-state-in-effect` desligada em `eslint.config.mjs` — o próprio código gerado pela CLI (`carousel.tsx`, `use-mobile.ts`) viola essa regra de propósito (setState síncrono dentro de effect pra sincronizar com Embla/matchMedia), e não editamos esses arquivos à mão. Se `npm run lint` voltar a falhar em arquivo gerado, é sinal de regra nova precisando do mesmo tratamento — não editar o arquivo vendor.

Criado via `npx shadcn@latest init -t next -n showcase-ui -b base -p nova --no-monorepo -y`, seguindo `ui.shadcn.com/docs/installation` passo a passo.

**Registry publicável:** `registry.json` na raiz registra os componentes autorais (`mode-toggle`, `app-sidebar`) como `registry:ui`. Componente autoral usado dentro de outro item entra na lista `files` dele, nunca em `registryDependencies` (gotcha confirmado no projeto anterior: nome sem namespace em `registryDependencies` sempre resolve contra o registry oficial do shadcn, nunca contra o próprio — `app-sidebar` inclui `mode-toggle.tsx` direto nos `files`). `npm run registry:build` gera `public/r/*.json`. Hospedagem pública ainda não decidida (repo GitHub privado, projeto só local).

**MCP:** `.mcp.json` configurado (`npx shadcn@latest mcp init --client claude`) — dá acesso ao registry oficial do shadcn via protocolo MCP. Precisa reiniciar o Claude Code pra ativar nesta sessão.

**Skills:** `shadcn` + `migrate-radix-to-base` instaladas via `npx skills add shadcn/ui` (empacotadas juntas no repo `shadcn/ui.git`). Conteúdo duplicado em `.agents/skills/` e `.claude/skills/` porque o git deste projeto está sem suporte a symlink no Windows (`core.symlinks=false`) — comportamento do instalador, não bug daqui.

**Package Imports / Monorepo:** não aplicáveis — projeto usa alias `@/` do `tsconfig.json` (não `#` do `package.json#imports`, que só faz sentido em monorepo), e é app único, sem `apps/`+`packages/`.

**Dynamic Search (registry):** não implementado, de propósito. É pra registries com milhares de itens fazerem busca server-side em vez do CLI baixar `registry.json` inteiro e filtrar local — o nosso tem 2 itens (`mode-toggle`, `app-sidebar`). Reavaliar só se o registry crescer de verdade a ponto de justificar trocar `public/r/*.json` estático por uma rota dinâmica.
