import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import AnimatedTestimonialsDemo from "@/components/animated-testimonials-demo"
import { ViewCode } from "@/components/view-code"
import { readComponentSource } from "@/lib/read-source"
import { buildCodeFiles } from "@/lib/view-code-files"

const USAGE_CODE = `import { AnimatedTestimonials } from "@/components/ui/animated-testimonials"

<AnimatedTestimonials testimonials={testimonials} />`

export default async function AnimatedTestimonialsPage() {
  const coreSource = readComponentSource("components/ui/animated-testimonials.tsx")
  const demoSource = readComponentSource("components/animated-testimonials-demo.tsx")
  const files = await buildCodeFiles([
    { path: "components/ui/animated-testimonials.tsx", code: coreSource },
    { path: "components/animated-testimonials-demo.tsx", code: demoSource },
    { path: "uso", code: USAGE_CODE },
  ])

  return (
    <div className="mx-auto w-full max-w-2xl px-6 py-12">
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-1.5">
            Animated Testimonials
            <span className="text-sm font-normal text-muted-foreground">
              — Aceternity UI
            </span>
          </CardTitle>
          <CardAction>
            <ViewCode
              install="@aceternity/animated-testimonials-demo"
              description="Carrossel de depoimentos com pilha de fotos em 3D e setas de navegação."
              files={files}
            />
          </CardAction>
        </CardHeader>
        <CardContent>
          <AnimatedTestimonialsDemo />
        </CardContent>
      </Card>
    </div>
  )
}
