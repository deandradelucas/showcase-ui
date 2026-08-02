import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { TooltipVerticalNavbar } from "@/components/ui/vertical-tooltip-navbar-base"
import { ViewCode } from "@/components/view-code"
import { readComponentSource } from "@/lib/read-source"
import { buildCodeFiles } from "@/lib/view-code-files"

const USAGE_CODE = `import { TooltipVerticalNavbar } from "@/components/ui/vertical-tooltip-navbar-base"

<TooltipVerticalNavbar />`

export default async function NavbarTooltipVerticalPage() {
  const source = readComponentSource("components/ui/vertical-tooltip-navbar-base.tsx")
  const files = await buildCodeFiles([
    { path: "components/ui/vertical-tooltip-navbar-base.tsx", code: source },
    { path: "uso", code: USAGE_CODE },
  ])

  return (
    <div className="mx-auto w-full max-w-xl px-6 py-12">
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-1.5">
            Vertical Tooltip Navbar
            <span className="text-sm font-normal text-muted-foreground">
              — Watermelon UI
            </span>
          </CardTitle>
          <CardAction>
            <ViewCode
              install="https://registry.watermelon.sh/r/vertical-tooltip-navbar-base.json"
              description="Mesma ideia da Tooltip Navbar, só que na vertical, com o tooltip deslizando ao lado."
              files={files}
            />
          </CardAction>
        </CardHeader>
        <CardContent className="flex min-h-40 items-center justify-center">
          <TooltipVerticalNavbar />
        </CardContent>
      </Card>
    </div>
  )
}
