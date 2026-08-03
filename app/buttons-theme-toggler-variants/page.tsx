import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ThemeTogglerButton } from "@/components/ui/theme-toggler-button"
import { ViewCode } from "@/components/view-code"
import { readComponentSource } from "@/lib/read-source"
import { buildCodeFiles } from "@/lib/view-code-files"

const USAGE_CODE = `import { ThemeTogglerButton } from "@/components/ui/theme-toggler-button"

<ThemeTogglerButton variant="circle" />
<ThemeTogglerButton variant="iris" />
<ThemeTogglerButton variant="polygon" />
<ThemeTogglerButton variant="slide" />`

export default async function ButtonsThemeTogglerVariantsPage() {
  const source = readComponentSource("components/ui/theme-toggler-button.tsx")
  const files = await buildCodeFiles([
    { path: "components/ui/theme-toggler-button.tsx", code: source },
    { path: "uso", code: USAGE_CODE },
  ])

  return (
    <div className="mx-auto w-full max-w-xl px-6 py-12">
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-1.5">
            Theme Toggler Variants
            <span className="text-sm font-normal text-muted-foreground">
              — Matos UI
            </span>
          </CardTitle>
          <CardAction>
            <ViewCode
              install="https://matos-ui.com/r/theme-toggler-button.json"
              description="Botão de tema com transição de revelação via View Transitions API, em 6 variantes (circle, circle-blur, iris, polygon, slide, fade)."
              files={files}
            />
          </CardAction>
        </CardHeader>
        <CardContent className="flex flex-wrap items-center justify-center gap-6 py-10">
          <div className="flex flex-col items-center gap-2">
            <ThemeTogglerButton variant="circle" size="lg" />
            <span className="text-xs text-muted-foreground">circle</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ThemeTogglerButton variant="circle-blur" size="lg" />
            <span className="text-xs text-muted-foreground">circle-blur</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ThemeTogglerButton variant="iris" size="lg" />
            <span className="text-xs text-muted-foreground">iris</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ThemeTogglerButton variant="polygon" size="lg" />
            <span className="text-xs text-muted-foreground">polygon</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ThemeTogglerButton variant="slide" size="lg" />
            <span className="text-xs text-muted-foreground">slide</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ThemeTogglerButton variant="fade" size="lg" />
            <span className="text-xs text-muted-foreground">fade</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
