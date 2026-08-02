import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ThemeTogglerButton } from "@/components/animate-ui/components/buttons/theme-toggler"
import { ViewCode } from "@/components/view-code"
import { readComponentSource } from "@/lib/read-source"
import { buildCodeFiles } from "@/lib/view-code-files"

const USAGE_CODE = `import { ThemeTogglerButton } from "@/components/animate-ui/components/buttons/theme-toggler"

<ThemeTogglerButton variant="outline" />`

export default async function ButtonsThemeTogglerPage() {
  const componentSource = readComponentSource(
    "components/animate-ui/components/buttons/theme-toggler.tsx"
  )
  const primitiveSource = readComponentSource(
    "components/animate-ui/primitives/effects/theme-toggler.tsx"
  )
  const files = await buildCodeFiles([
    { path: "components/animate-ui/components/buttons/theme-toggler.tsx", code: componentSource },
    { path: "components/animate-ui/primitives/effects/theme-toggler.tsx", code: primitiveSource },
    { path: "uso", code: USAGE_CODE },
  ])

  return (
    <div className="mx-auto w-full max-w-xl px-6 py-12">
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-1.5">
            Theme Toggler
            <span className="text-sm font-normal text-muted-foreground">
              — Animate UI
            </span>
          </CardTitle>
          <CardAction>
            <ViewCode
              install="@animate-ui/components-buttons-theme-toggler"
              description="Botão de trocar tema (claro/escuro/sistema) com o ícone animando de um pro outro."
              files={files}
            />
          </CardAction>
        </CardHeader>
        <CardContent className="flex justify-center py-6">
          <ThemeTogglerButton variant="outline" />
        </CardContent>
      </Card>
    </div>
  )
}
