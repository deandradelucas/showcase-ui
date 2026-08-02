import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { MinimalCarouselDemo } from "@/components/demos/minimal-carousel-demo"
import { ViewCode } from "@/components/view-code"
import { readComponentSource } from "@/lib/read-source"
import { buildCodeFiles } from "@/lib/view-code-files"

const USAGE_CODE = `import { MinimalCarousel } from "@/components/ui/minimal-carousel"

<MinimalCarousel cards={cards} />`

export default async function CarouselMinimalPage() {
  const source = readComponentSource("components/ui/minimal-carousel.tsx")
  const files = await buildCodeFiles([
    { path: "components/ui/minimal-carousel.tsx", code: source },
    { path: "uso", code: USAGE_CODE },
  ])

  return (
    <div className="mx-auto w-full max-w-xl px-6 py-12">
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-1.5">
            Minimal Carousel
            <span className="text-sm font-normal text-muted-foreground">
              — Watermelon UI
            </span>
          </CardTitle>
          <CardAction>
            <ViewCode
              install="https://registry.watermelon.sh/r/minimal-carousel.json"
              description="Grade de cards que expande um em destaque ao clicar, animado com motion."
              files={files}
            />
          </CardAction>
        </CardHeader>
        <CardContent>
          <MinimalCarouselDemo />
        </CardContent>
      </Card>
    </div>
  )
}
