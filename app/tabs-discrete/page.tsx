import { Home, Search, Settings } from "lucide-react"
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { DiscreteTabs } from "@/components/ui/discrete-tabs-base"
import { ViewCode } from "@/components/view-code"
import { readComponentSource } from "@/lib/read-source"
import { buildCodeFiles } from "@/lib/view-code-files"

const TABS = [
  { id: "home", icon: <Home size={20} />, label: "Início", activeColor: "text-blue-500" },
  { id: "search", icon: <Search size={20} />, label: "Buscar", activeColor: "text-emerald-500" },
  { id: "settings", icon: <Settings size={20} />, label: "Ajustes", activeColor: "text-orange-500" },
]

const USAGE_CODE = `import { DiscreteTabs } from "@/components/ui/discrete-tabs-base"

<DiscreteTabs tabs={tabs} defaultTab="home" />`

export default async function TabsDiscretePage() {
  const source = readComponentSource("components/ui/discrete-tabs-base.tsx")
  const files = await buildCodeFiles([
    { path: "components/ui/discrete-tabs-base.tsx", code: source },
    { path: "uso", code: USAGE_CODE },
  ])

  return (
    <div className="mx-auto w-full max-w-xl px-6 py-12">
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-1.5">
            Discrete Tabs
            <span className="text-sm font-normal text-muted-foreground">
              — Watermelon UI
            </span>
          </CardTitle>
          <CardAction>
            <ViewCode
              install="https://registry.watermelon.sh/r/discrete-tabs-base.json"
              description="Tabs isoladas por ícone, com rótulo que só aparece na aba ativa e um brilho ao trocar."
              files={files}
            />
          </CardAction>
        </CardHeader>
        <CardContent className="flex justify-center">
          <DiscreteTabs tabs={TABS} defaultTab="home" />
        </CardContent>
      </Card>
    </div>
  )
}
