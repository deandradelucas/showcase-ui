import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { MacOSSidebar } from "@/components/ui/macos-sidebar-base"
import { ViewCode } from "@/components/view-code"
import { readComponentSource } from "@/lib/read-source"
import { buildCodeFiles } from "@/lib/view-code-files"

const ITEMS = ["Início", "Projetos", "Mensagens", "Configurações"]

const USAGE_CODE = `import { MacOSSidebar } from "@/components/ui/macos-sidebar-base"

<MacOSSidebar items={["Início", "Projetos", "Mensagens", "Configurações"]}>
  <p>Conteúdo da página</p>
</MacOSSidebar>`

export default async function SidebarMacosPage() {
  const source = readComponentSource("components/ui/macos-sidebar-base.tsx")
  const files = await buildCodeFiles([
    { path: "components/ui/macos-sidebar-base.tsx", code: source },
    { path: "uso", code: USAGE_CODE },
  ])

  return (
    <div className="mx-auto w-full max-w-2xl px-6 py-12">
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-1.5">
            macOS Sidebar
            <span className="text-sm font-normal text-muted-foreground">
              — Watermelon UI
            </span>
          </CardTitle>
          <CardAction>
            <ViewCode
              install="https://registry.watermelon.sh/r/macos-sidebar-base.json"
              description="Sidebar que recolhe pra ícones, no estilo do macOS, com item ativo destacado."
              files={files}
            />
          </CardAction>
        </CardHeader>
        <CardContent>
          <MacOSSidebar items={ITEMS}>
            <p className="text-sm text-muted-foreground">Conteúdo da página aqui.</p>
          </MacOSSidebar>
        </CardContent>
      </Card>
    </div>
  )
}
