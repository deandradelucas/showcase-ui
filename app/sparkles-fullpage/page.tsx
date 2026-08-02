import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import SparklesFullpageDemo from "@/components/sparkles-fullpage-demo"
import { ViewCode } from "@/components/view-code"
import { readComponentSource } from "@/lib/read-source"
import { buildCodeFiles } from "@/lib/view-code-files"

const USAGE_CODE = `import { SparklesCore } from "@/components/ui/sparkles"

<SparklesCore
  background="transparent"
  minSize={0.6}
  maxSize={1.4}
  particleDensity={100}
  particleColor="#FFFFFF"
  className="w-full h-full"
/>`

export default async function SparklesFullpagePage() {
  const coreSource = readComponentSource("components/ui/sparkles.tsx")
  const demoSource = readComponentSource("components/sparkles-fullpage-demo.tsx")
  const files = await buildCodeFiles([
    { path: "components/ui/sparkles.tsx", code: coreSource },
    { path: "components/sparkles-fullpage-demo.tsx", code: demoSource },
    { path: "uso", code: USAGE_CODE },
  ])

  return (
    <div className="mx-auto w-full max-w-2xl px-6 py-12">
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-1.5">
            Sparkles (Full Page)
            <span className="text-sm font-normal text-muted-foreground">
              — Aceternity UI
            </span>
          </CardTitle>
          <CardAction>
            <ViewCode
              install="@aceternity/sparkles-fullpage-demo"
              description="Variação do Sparkles pensada pra hero section de página inteira, com densidade menor de partículas."
              files={files}
            />
          </CardAction>
        </CardHeader>
        <CardContent className="p-0">
          <SparklesFullpageDemo />
        </CardContent>
      </Card>
    </div>
  )
}
