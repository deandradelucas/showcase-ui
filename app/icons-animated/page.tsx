import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Heart } from "@/components/animate-ui/icons/heart"
import { ViewCode } from "@/components/view-code"
import { readComponentSource } from "@/lib/read-source"
import { buildCodeFiles } from "@/lib/view-code-files"

const USAGE_CODE = `import { Heart } from "@/components/animate-ui/icons/heart"

<Heart animateOnHover size={32} />`

export default async function IconsAnimatedPage() {
  const heartSource = readComponentSource("components/animate-ui/icons/heart.tsx")
  const iconSource = readComponentSource("components/animate-ui/icons/icon.tsx")
  const files = await buildCodeFiles([
    { path: "components/animate-ui/icons/heart.tsx", code: heartSource },
    { path: "components/animate-ui/icons/icon.tsx", code: iconSource },
    { path: "uso", code: USAGE_CODE },
  ])

  return (
    <div className="mx-auto w-full max-w-xl px-6 py-12">
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-1.5">
            Animated Icons
            <span className="text-sm font-normal text-muted-foreground">
              — Animate UI
            </span>
          </CardTitle>
          <CardAction>
            <ViewCode
              install="@animate-ui/icons-heart"
              description="Biblioteca de ícones com animação embutida via motion; passe o mouse pra ativar."
              files={files}
            />
          </CardAction>
        </CardHeader>
        <CardContent className="flex justify-center gap-8 py-6 text-red-500">
          <Heart animateOnHover size={32} />
          <Heart animateOnHover animation="fill" size={32} />
        </CardContent>
      </Card>
    </div>
  )
}
