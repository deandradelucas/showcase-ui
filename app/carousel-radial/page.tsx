import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { RadialCarousel } from "@/components/ui/radial-carousel"
import { ViewCode } from "@/components/view-code"
import { readComponentSource } from "@/lib/read-source"
import { buildCodeFiles } from "@/lib/view-code-files"

const ITEMS = [
  { id: 1, url: "https://picsum.photos/seed/showcase-1/600/600", title: "Foto 1" },
  { id: 2, url: "https://picsum.photos/seed/showcase-2/600/600", title: "Foto 2" },
  { id: 3, url: "https://picsum.photos/seed/showcase-3/600/600", title: "Foto 3" },
  { id: 4, url: "https://picsum.photos/seed/showcase-4/600/600", title: "Foto 4" },
  { id: 5, url: "https://picsum.photos/seed/showcase-5/600/600", title: "Foto 5" },
]

const USAGE_CODE = `import { RadialCarousel } from "@/components/ui/radial-carousel"

<RadialCarousel items={items} />`

export default async function CarouselRadialPage() {
  const source = readComponentSource("components/ui/radial-carousel.tsx")
  const files = await buildCodeFiles([
    { path: "components/ui/radial-carousel.tsx", code: source },
    { path: "uso", code: USAGE_CODE },
  ])

  return (
    <div className="mx-auto w-full max-w-xl px-6 py-12">
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-1.5">
            Radial Carousel
            <span className="text-sm font-normal text-muted-foreground">
              — Watermelon UI
            </span>
          </CardTitle>
          <CardAction>
            <ViewCode
              install="https://registry.watermelon.sh/r/radial-carousel.json"
              description="Clique na foto pra abrir a galeria em roda; arraste pra girar."
              files={files}
            />
          </CardAction>
        </CardHeader>
        <CardContent>
          <RadialCarousel items={ITEMS} radius={130} thumbnailSize={64} centerSize={260} />
        </CardContent>
      </Card>
    </div>
  )
}
