import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ShareSheet } from "@/components/ui/share-sheet-base"
import { ViewCode } from "@/components/view-code"
import { readComponentSource } from "@/lib/read-source"
import { buildCodeFiles } from "@/lib/view-code-files"

const USERS = [
  { id: "1", name: "Ana", avatar: "https://i.pravatar.cc/64?u=share-ana" },
  { id: "2", name: "Bruno", avatar: "https://i.pravatar.cc/64?u=share-bruno" },
  { id: "3", name: "Carla", avatar: "https://i.pravatar.cc/64?u=share-carla" },
]

const USAGE_CODE = `import { ShareSheet } from "@/components/ui/share-sheet-base"

<ShareSheet users={users} onShareComplete={(user) => console.log(user)} />`

export default async function ShareSheetPage() {
  const source = readComponentSource("components/ui/share-sheet-base.tsx")
  const files = await buildCodeFiles([
    { path: "components/ui/share-sheet-base.tsx", code: source },
    { path: "uso", code: USAGE_CODE },
  ])

  return (
    <div className="mx-auto w-full max-w-xl px-6 py-12">
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-1.5">
            Share Sheet
            <span className="text-sm font-normal text-muted-foreground">
              — Watermelon UI
            </span>
          </CardTitle>
          <CardAction>
            <ViewCode
              install="https://registry.watermelon.sh/r/share-sheet-base.json"
              description="Clique pra abrir a lista de pessoas; escolher uma anima o avatar morphando pro botão com progresso de envio."
              files={files}
            />
          </CardAction>
        </CardHeader>
        <CardContent className="flex min-h-64 items-center justify-center">
          <ShareSheet users={USERS} />
        </CardContent>
      </Card>
    </div>
  )
}
