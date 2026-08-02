import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { MotionCarousel } from "@/components/animate-ui/components/community/motion-carousel"
import { ViewCode } from "@/components/view-code"
import { readComponentSource } from "@/lib/read-source"
import { buildCodeFiles } from "@/lib/view-code-files"

const USAGE_CODE = `import { MotionCarousel } from "@/components/animate-ui/components/community/motion-carousel"

<MotionCarousel slides={[0, 1, 2, 3, 4]} />`

export default async function CommunityMotionCarouselPage() {
  const source = readComponentSource(
    "components/animate-ui/components/community/motion-carousel.tsx"
  )
  const files = await buildCodeFiles([
    { path: "components/animate-ui/components/community/motion-carousel.tsx", code: source },
    { path: "uso", code: USAGE_CODE },
  ])

  return (
    <div className="mx-auto w-full max-w-xl px-6 py-12">
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-1.5">
            Motion Carousel
            <span className="text-sm font-normal text-muted-foreground">
              — Animate UI
            </span>
          </CardTitle>
          <CardAction>
            <ViewCode
              install="@animate-ui/components-community-motion-carousel"
              description="Carrossel arrastável (Embla) com slide ativo em destaque e dots que expandem com o rótulo."
              files={files}
            />
          </CardAction>
        </CardHeader>
        <CardContent className="py-6">
          <MotionCarousel slides={[0, 1, 2, 3, 4]} />
        </CardContent>
      </Card>
    </div>
  )
}
