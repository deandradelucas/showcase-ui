import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { CommandSearch } from "@/components/ui/command-search-base"
import { ViewCode } from "@/components/view-code"
import { readComponentSource } from "@/lib/read-source"
import { buildCodeFiles } from "@/lib/view-code-files"

const USAGE_CODE = `import { CommandSearch } from "@/components/ui/command-search-base"

<CommandSearch />`

export default async function CommandSearchPage() {
  const source = readComponentSource("components/ui/command-search-base.tsx")
  const files = await buildCodeFiles([
    { path: "components/ui/command-search-base.tsx", code: source },
    { path: "uso", code: USAGE_CODE },
  ])

  return (
    <div className="mx-auto w-full max-w-xl px-6 py-12">
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-1.5">
            Command Search
            <span className="text-sm font-normal text-muted-foreground">
              — Watermelon UI
            </span>
          </CardTitle>
          <CardAction>
            <ViewCode
              install="https://registry.watermelon.sh/r/command-search-base.json"
              description="Paleta de comandos com atalho (F pra abrir, Esc pra fechar), busca e navegação por teclado."
              files={files}
            />
          </CardAction>
        </CardHeader>
        <CardContent className="flex min-h-24 items-center justify-center">
          <CommandSearch />
        </CardContent>
      </Card>
    </div>
  )
}
