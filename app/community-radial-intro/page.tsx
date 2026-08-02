import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { RadialIntro } from "@/components/animate-ui/components/community/radial-intro"
import { ViewCode } from "@/components/view-code"
import { readComponentSource } from "@/lib/read-source"
import { buildCodeFiles } from "@/lib/view-code-files"

const ORBIT_ITEMS = [
  { id: 1, name: "Ana", src: "https://i.pravatar.cc/120?u=radial-1" },
  { id: 2, name: "Bruno", src: "https://i.pravatar.cc/120?u=radial-2" },
  { id: 3, name: "Carla", src: "https://i.pravatar.cc/120?u=radial-3" },
  { id: 4, name: "Davi", src: "https://i.pravatar.cc/120?u=radial-4" },
  { id: 5, name: "Elis", src: "https://i.pravatar.cc/120?u=radial-5" },
]

const USAGE_CODE = `import { RadialIntro } from "@/components/animate-ui/components/community/radial-intro"

<RadialIntro orbitItems={orbitItems} stageSize={320} imageSize={60} />`

export default async function CommunityRadialIntroPage() {
  const source = readComponentSource(
    "components/animate-ui/components/community/radial-intro.tsx"
  )
  const files = await buildCodeFiles([
    { path: "components/animate-ui/components/community/radial-intro.tsx", code: source },
    { path: "uso", code: USAGE_CODE },
  ])

  return (
    <div className="mx-auto w-full max-w-xl px-6 py-12">
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-1.5">
            Radial Intro
            <span className="text-sm font-normal text-muted-foreground">
              — Animate UI
            </span>
          </CardTitle>
          <CardAction>
            <ViewCode
              install="@animate-ui/components-community-radial-intro"
              description="Avatares que se organizam em órbita e giram continuamente ao carregar."
              files={files}
            />
          </CardAction>
        </CardHeader>
        <CardContent className="flex min-h-96 items-center justify-center">
          <RadialIntro orbitItems={ORBIT_ITEMS} />
        </CardContent>
      </Card>
    </div>
  )
}
