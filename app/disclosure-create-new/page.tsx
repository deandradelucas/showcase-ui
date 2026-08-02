import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { CreateNewDisclosure } from "@/components/ui/create-new-disclosure"
import { ViewCode } from "@/components/view-code"
import { readComponentSource } from "@/lib/read-source"
import { buildCodeFiles } from "@/lib/view-code-files"

const USAGE_CODE = `import { CreateNewDisclosure } from "@/components/ui/create-new-disclosure"

<CreateNewDisclosure />`

export default async function DisclosureCreateNewPage() {
  const source = readComponentSource("components/ui/create-new-disclosure.tsx")
  const files = await buildCodeFiles([
    { path: "components/ui/create-new-disclosure.tsx", code: source },
    { path: "uso", code: USAGE_CODE },
  ])

  return (
    <div className="mx-auto w-full max-w-xl px-6 py-12">
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-1.5">
            Create New
            <span className="text-sm font-normal text-muted-foreground">
              — Watermelon UI
            </span>
          </CardTitle>
          <CardAction>
            <ViewCode
              install="https://registry.watermelon.sh/r/create-new-disclosure.json"
              description="Botão que expande num grid de opções (Project, Task, Note...), animado com layout shared."
              files={files}
            />
          </CardAction>
        </CardHeader>
        <CardContent className="flex min-h-72 items-center justify-center">
          <CreateNewDisclosure />
        </CardContent>
      </Card>
    </div>
  )
}
