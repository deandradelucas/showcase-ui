# CLAUDE.md — showcase-ui

Porta dev: 4320. Next.js 16 + React 19 + TypeScript + Tailwind v4 + shadcn/ui (preset Nova, base Base UI).

Esta versão do Next.js pode ter breaking changes vs. o que já está no treino do modelo. Checar `node_modules/next/dist/docs/` antes de assumir comportamento.

shadcn/ui aqui roda sobre **Base UI**, não Radix — diferenças de API confirmadas na prática:
- Composição: `render={<Elemento />}`, não `asChild`.
- `Toast`: precisa `<Toaster>` envolvendo o layout raiz (mesmo padrão do `TooltipProvider`); disparar com `toast.add({...})`, não `toast({...})` — `toast` é uma instância de `ToastManager`, não uma função.
- `Accordion`: usa `multiple={false}` pra modo single-open, não `type="single" collapsible` (isso é API do Radix).
- `Select`: `SelectValue` mostra o `value` bruto do item selecionado (ex.: `"pro"`), não o label renderizado — diferente do Radix, que resolve isso sozinho. Precisa passar `items={[{value, label}]}` no `Select` (ou função `children={(value) => label}` na `SelectValue`) pra mostrar o texto certo.

**Convenção do projeto:** todo elemento clicável ganha `cursor-pointer` explícito — o preset Nova não traz isso por padrão, e alguns (`SelectItem`, `DropdownMenuItem` e afins) vêm com `cursor-default` de propósito (estilo menu nativo), mas aqui trocamos pra pointer. Já aplicado em: `Button`, `Checkbox`, `Switch`, `Tabs` (trigger), `Accordion` (trigger), `Select` (item + scroll buttons), `DropdownMenu` (item, sub-trigger, checkbox item, radio item). Todo componente clicável novo deve seguir a mesma convenção.

Criado via `npx shadcn@latest init -t next -n showcase-ui -b base -p nova --no-monorepo -y`, seguindo `ui.shadcn.com/docs/installation` passo a passo.
