import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { FlipCard, type FlipCardData } from "@/components/animate-ui/components/community/flip-card"
import { ViewCode } from "@/components/view-code"
import { readComponentSource } from "@/lib/read-source"
import { buildCodeFiles } from "@/lib/view-code-files"

const DATA: FlipCardData = {
  name: "Ana Souza",
  username: "anasouza",
  image: "https://i.pravatar.cc/200?u=flip-card-ana",
  bio: "Product designer construindo interfaces que as pessoas gostam de usar.",
  stats: { following: 128, followers: 942, posts: 57 },
  socialLinks: {
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    twitter: "https://x.com",
  },
}

const USAGE_CODE = `import { FlipCard } from "@/components/animate-ui/components/community/flip-card"

<FlipCard data={data} />`

export default async function CommunityFlipCardPage() {
  const componentSource = readComponentSource(
    "components/animate-ui/components/community/flip-card.tsx"
  )
  const files = await buildCodeFiles([
    { path: "components/animate-ui/components/community/flip-card.tsx", code: componentSource },
    { path: "uso", code: USAGE_CODE },
  ])

  return (
    <div className="mx-auto w-full max-w-xl px-6 py-12">
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-1.5">
            Flip Card
            <span className="text-sm font-normal text-muted-foreground">
              — Animate UI
            </span>
          </CardTitle>
          <CardAction>
            <ViewCode
              install="@animate-ui/demo-components-community-flip-card"
              description="Card de perfil que vira em 3D revelando bio, estatísticas e redes sociais."
              files={files}
            />
          </CardAction>
        </CardHeader>
        <CardContent className="flex justify-center py-6">
          <FlipCard data={DATA} />
        </CardContent>
      </Card>
    </div>
  )
}
