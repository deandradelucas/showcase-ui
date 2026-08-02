import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import NavbarMenuDemo from "@/components/navbar-menu-demo"
import { ViewCode } from "@/components/view-code"
import { readComponentSource } from "@/lib/read-source"
import { buildCodeFiles } from "@/lib/view-code-files"

const USAGE_CODE = `import { Menu, MenuItem, HoveredLink } from "@/components/ui/navbar-menu"

<Menu setActive={setActive}>
  <MenuItem setActive={setActive} active={active} item="Produtos">
    <HoveredLink href="/a">Item A</HoveredLink>
  </MenuItem>
</Menu>`

export default async function NavbarMenuPage() {
  const coreSource = readComponentSource("components/ui/navbar-menu.tsx")
  const demoSource = readComponentSource("components/navbar-menu-demo.tsx")
  const files = await buildCodeFiles([
    { path: "components/ui/navbar-menu.tsx", code: coreSource },
    { path: "components/navbar-menu-demo.tsx", code: demoSource },
    { path: "uso", code: USAGE_CODE },
  ])

  return (
    <div className="mx-auto w-full max-w-2xl px-6 py-12">
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-1.5">
            Navbar Menu
            <span className="text-sm font-normal text-muted-foreground">
              — Aceternity UI
            </span>
          </CardTitle>
          <CardAction>
            <ViewCode
              install="@aceternity/navbar-menu-demo"
              description="Menu de navegação com submenu que aparece ao passar o mouse, tipo mega menu."
              files={files}
            />
          </CardAction>
        </CardHeader>
        <CardContent className="p-0">
          <NavbarMenuDemo />
        </CardContent>
      </Card>
    </div>
  )
}
