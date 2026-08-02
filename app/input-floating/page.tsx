import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { FloatingInput } from "@/components/ui/floating-input"
import { ViewCode } from "@/components/view-code"
import { readComponentSource } from "@/lib/read-source"
import { buildCodeFiles } from "@/lib/view-code-files"

const USAGE_CODE = `import { FloatingInput } from "@/components/ui/floating-input"

<FloatingInput label="Nome" />`

export default async function InputFloatingPage() {
  const source = readComponentSource("components/ui/floating-input.tsx")
  const files = await buildCodeFiles([
    { path: "components/ui/floating-input.tsx", code: source },
    { path: "uso", code: USAGE_CODE },
  ])

  return (
    <div className="mx-auto w-full max-w-xl px-6 py-12">
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-1.5">
            Floating Input
            <span className="text-sm font-normal text-muted-foreground">
              — Watermelon UI
            </span>
          </CardTitle>
          <CardAction>
            <ViewCode
              install="https://registry.watermelon.sh/r/floating-input.json"
              description="Input com label flutuante que sobe ao focar ou preencher."
              files={files}
            />
          </CardAction>
        </CardHeader>
        <CardContent className="flex flex-col gap-4 py-6">
          <FloatingInput label="Nome" />
          <FloatingInput label="E-mail" type="email" />
        </CardContent>
      </Card>
    </div>
  )
}
