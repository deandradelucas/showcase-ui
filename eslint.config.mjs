import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    // Código gerado pela CLI do shadcn (components/ui, hooks) — não editamos
    // à mão (sobrescrito por `shadcn add -o`), então regras estritas de hook
    // que o próprio gerador viola ficam desligadas aqui, não no arquivo.
    files: ["components/ui/**/*.tsx", "hooks/**/*.ts"],
    rules: {
      "react-hooks/set-state-in-effect": "off",
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
