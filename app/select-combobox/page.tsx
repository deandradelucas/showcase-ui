import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Select } from "@/components/ui/select-combobox"
import { ViewCode } from "@/components/view-code"
import { readComponentSource } from "@/lib/read-source"
import { buildCodeFiles } from "@/lib/view-code-files"

const OPTIONS = [
  { value: "next", label: "Next.js", description: "Framework React full-stack" },
  { value: "remix", label: "Remix", description: "Framework React focado em web fundamentals" },
  { value: "astro", label: "Astro", description: "Framework focado em conteúdo estático" },
  { value: "sveltekit", label: "SvelteKit", description: "Framework full-stack do Svelte" },
  { value: "nuxt", label: "Nuxt", description: "Framework full-stack do Vue" },
]

const USAGE_CODE = `import { Select } from "@/components/ui/select-combobox"

<Select
  label="Framework"
  placeholder="Selecione um framework"
  options={[
    { value: "next", label: "Next.js", description: "Framework React full-stack" },
  ]}
/>`

export default async function SelectComboboxPage() {
  const source = readComponentSource("components/ui/select-combobox.tsx")
  const files = await buildCodeFiles([
    { path: "components/ui/select-combobox.tsx", code: source },
    { path: "uso", code: USAGE_CODE },
  ])

  return (
    <div className="mx-auto w-full max-w-xl px-6 py-12">
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-1.5">
            Select (Combobox)
            <span className="text-sm font-normal text-muted-foreground">
              — Matos UI
            </span>
          </CardTitle>
          <CardAction>
            <ViewCode
              install="https://matos-ui.com/r/select.json"
              description="Select pesquisável (Combobox do Base UI) com descrição por opção e destaque automático."
              files={files}
            />
          </CardAction>
        </CardHeader>
        <CardContent className="flex justify-center py-10">
          <Select
            label="Framework"
            placeholder="Selecione um framework"
            options={OPTIONS}
            className="w-full max-w-xs"
          />
        </CardContent>
      </Card>
    </div>
  )
}
