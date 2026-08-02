import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { TooltipNavbar } from "@/components/ui/tooltip-navbar-base"
import { ViewCode } from "@/components/view-code"
import { readComponentSource } from "@/lib/read-source"
import { buildCodeFiles } from "@/lib/view-code-files"

const USAGE_CODE = `import { TooltipNavbar } from "@/components/ui/tooltip-navbar-base"

<TooltipNavbar />`

export default async function NavbarTooltipPage() {
  const source = readComponentSource("components/ui/tooltip-navbar-base.tsx")
  const files = await buildCodeFiles([
    { path: "components/ui/tooltip-navbar-base.tsx", code: source },
    { path: "uso", code: USAGE_CODE },
  ])

  return (
    <div className="mx-auto w-full max-w-xl px-6 py-12">
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-1.5">
            Tooltip Navbar
            <span className="text-sm font-normal text-muted-foreground">
              — Watermelon UI
            </span>
          </CardTitle>
          <CardAction>
            <ViewCode
              install="https://registry.watermelon.sh/r/tooltip-navbar-base.json"
              description="Passe o mouse sobre os ícones pra ver o rótulo e o atalho de teclado num tooltip que desliza."
              files={files}
            />
          </CardAction>
        </CardHeader>
        <CardContent className="flex min-h-24 items-center justify-center">
          <TooltipNavbar />
        </CardContent>
      </Card>
    </div>
  )
}
