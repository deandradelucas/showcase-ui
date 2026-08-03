// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([...nextVitals, ...nextTs, {
  // Código gerado pela CLI do shadcn (components/ui, hooks) — não editamos
  // à mão (sobrescrito por `shadcn add -o`), então regras estritas de hook
  // que o próprio gerador viola ficam desligadas aqui, não no arquivo.
  files: ["hooks/**/*.{ts,tsx}"],
  rules: {
    "react-hooks/set-state-in-effect": "off",
  },
}, {
  // components/ui/** hoje mistura primitivos do shadcn (CLI) com
  // componentes de registries externos (animate-ui, watermelon,
  // aceternity, matos-ui) — nenhum editado à mão, todos sobrescrevíveis
  // numa reinstalação. components/charts/** é o pacote de charts do
  // registry bklit (dezenas de arquivos internos com refs/effects pra
  // sincronizar animação SVG com d3/visx). Essas libs usam refs/effects
  // pra medir DOM e sincronizar motion de propósito, tipam `any` em props
  // genéricas e às vezes violam prefer-const/no-unused-vars em código de
  // terceiros — não é algo pra "corrigir" no vendor, então desligado aqui.
  files: [
    "components/ui/**/*.{ts,tsx}",
    "components/animate-ui/**/*.tsx",
    "components/charts/**/*.{ts,tsx}",
  ],
  rules: {
    "react-hooks/set-state-in-effect": "off",
    "react-hooks/refs": "off",
    "react-hooks/purity": "off",
    "react-hooks/static-components": "off",
    "react-hooks/exhaustive-deps": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-unused-expressions": "off",
    "prefer-const": "off",
    "@next/next/no-img-element": "off",
  },
}, // Override default ignores of eslint-config-next.
globalIgnores([
  // Default ignores of eslint-config-next:
  ".next/**",
  "out/**",
  "build/**",
  "next-env.d.ts",
]), ...storybook.configs["flat/recommended"]]);

export default eslintConfig;
