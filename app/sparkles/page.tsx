import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import SparklesDemo from "@/components/sparkles-demo"
import { ViewCode } from "@/components/view-code"
import { readComponentSource } from "@/lib/read-source"
import { buildCodeFiles } from "@/lib/view-code-files"

const USAGE_CODE = `import { SparklesCore } from "@/components/ui/sparkles"

<SparklesCore
  background="transparent"
  minSize={0.4}
  maxSize={1}
  particleDensity={1200}
  particleColor="#FFFFFF"
  className="w-full h-full"
/>`

export default async function SparklesPage() {
  const coreSource = readComponentSource("components/ui/sparkles.tsx")
  const demoSource = readComponentSource("components/sparkles-demo.tsx")
  const files = await buildCodeFiles([
    { path: "components/ui/sparkles.tsx", code: coreSource },
    { path: "components/sparkles-demo.tsx", code: demoSource },
    { path: "uso", code: USAGE_CODE },
  ])

  return (
    <div className="mx-auto w-full max-w-2xl px-6 py-12">
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-1.5">
            Sparkles
            <span className="text-sm font-normal text-muted-foreground">
              — Aceternity UI
            </span>
          </CardTitle>
          <CardAction>
            <ViewCode
              install="@aceternity/sparkles-demo"
              description="Campo de partículas animado (tsParticles) atrás de um título, efeito de brilho."
              files={files}
            />
          </CardAction>
        </CardHeader>
        <CardContent className="p-0">
          <SparklesDemo />
        </CardContent>
      </Card>
    </div>
  )
}
