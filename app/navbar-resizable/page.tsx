import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import ResizableNavbarDemo from "@/components/resizable-navbar-demo"
import { ViewCode } from "@/components/view-code"
import { readComponentSource } from "@/lib/read-source"
import { buildCodeFiles } from "@/lib/view-code-files"

const USAGE_CODE = `import { Navbar, NavBody, NavItems, NavbarLogo, NavbarButton } from "@/components/ui/resizable-navbar"

<Navbar>
  <NavBody>
    <NavbarLogo />
    <NavItems items={navItems} />
    <NavbarButton variant="primary">Book a call</NavbarButton>
  </NavBody>
</Navbar>`

export default async function NavbarResizablePage() {
  const coreSource = readComponentSource("components/ui/resizable-navbar.tsx")
  const demoSource = readComponentSource("components/resizable-navbar-demo.tsx")
  const files = await buildCodeFiles([
    { path: "components/ui/resizable-navbar.tsx", code: coreSource },
    { path: "components/resizable-navbar-demo.tsx", code: demoSource },
    { path: "uso", code: USAGE_CODE },
  ])

  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-12">
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-1.5">
            Resizable Navbar
            <span className="text-sm font-normal text-muted-foreground">
              — Aceternity UI
            </span>
          </CardTitle>
          <CardAction>
            <ViewCode
              install="@aceternity/resizable-navbar-demo"
              description="Navbar que encolhe e ganha sombra ao rolar a página (via useScroll do motion). Role o bloco abaixo pra ver."
              files={files}
            />
          </CardAction>
        </CardHeader>
        <CardContent className="p-0">
          <ResizableNavbarDemo />
        </CardContent>
      </Card>
    </div>
  )
}
