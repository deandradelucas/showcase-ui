import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { MorphingSelect } from "@/components/ui/morphing-select"
import { ViewCode } from "@/components/view-code"
import { readComponentSource } from "@/lib/read-source"
import { buildCodeFiles } from "@/lib/view-code-files"

const USAGE_CODE = `import { MorphingSelect } from "@/components/ui/morphing-select"

<MorphingSelect />`

export default async function MorphingSelectPage() {
  const source = readComponentSource("components/ui/morphing-select.tsx")
  const files = await buildCodeFiles([
    { path: "components/ui/morphing-select.tsx", code: source },
    { path: "uso", code: USAGE_CODE },
  ])

  return (
    <div className="mx-auto w-full max-w-2xl px-6 py-12">
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-1.5">
            Morphing Select
          </CardTitle>
          <CardAction>
            <ViewCode
              install="deandradelucas/showcase-ui/morphing-select"
              description="Seletor que expande com transição suave via GSAP, revelando as opções em cascata."
              files={files}
            />
          </CardAction>
        </CardHeader>
        <CardContent
          className="flex justify-center pt-10"
          style={{ paddingBottom: 320 }}
        >
          <MorphingSelect />
        </CardContent>
      </Card>
    </div>
  )
}
