import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { FocusBlur } from "@/components/ui/focus-blur"
import { ViewCode } from "@/components/view-code"
import { readComponentSource } from "@/lib/read-source"
import { buildCodeFiles } from "@/lib/view-code-files"

const USAGE_CODE = `import { FocusBlur } from "@/components/ui/focus-blur"

<FocusBlur
  items={[
    { label: "@Twitter", href: "#" },
    { label: "@Threads", href: "#" },
    { label: "@Instagram", href: "#" },
    { label: "@GitHub", href: "#" },
  ]}
/>`

export default async function FocusBlurPage() {
  const source = readComponentSource("components/ui/focus-blur.tsx")
  const files = await buildCodeFiles([
    { path: "components/ui/focus-blur.tsx", code: source },
    { path: "uso", code: USAGE_CODE },
  ])

  return (
    <div className="mx-auto w-full max-w-xl px-6 py-12">
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-1.5">
            Focus Blur
          </CardTitle>
          <CardAction>
            <ViewCode
              install="deandradelucas/showcase-ui/focus-blur"
              description="Lista de links que desfoca e reduz a opacidade dos itens não focados ao passar o mouse."
              files={files}
            />
          </CardAction>
        </CardHeader>
        <CardContent>
          <FocusBlur />
        </CardContent>
      </Card>
    </div>
  )
}
