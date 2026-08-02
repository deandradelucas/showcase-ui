import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  PreviewLinkCard,
  PreviewLinkCardTrigger,
  PreviewLinkCardContent,
  PreviewLinkCardImage,
} from "@/components/animate-ui/components/radix/preview-link-card"
import { ViewCode } from "@/components/view-code"
import { readComponentSource } from "@/lib/read-source"
import { buildCodeFiles } from "@/lib/view-code-files"

const USAGE_CODE = `import {
  PreviewLinkCard,
  PreviewLinkCardTrigger,
  PreviewLinkCardContent,
  PreviewLinkCardImage,
} from "@/components/animate-ui/components/radix/preview-link-card"

<PreviewLinkCard href="https://vercel.com" src="/preview.png">
  <PreviewLinkCardTrigger>vercel.com</PreviewLinkCardTrigger>
  <PreviewLinkCardContent>
    <PreviewLinkCardImage src="/preview.png" />
  </PreviewLinkCardContent>
</PreviewLinkCard>`

export default async function PreviewLinkCardPage() {
  const componentSource = readComponentSource(
    "components/animate-ui/components/radix/preview-link-card.tsx"
  )
  const primitiveSource = readComponentSource(
    "components/animate-ui/primitives/radix/preview-link-card.tsx"
  )
  const files = await buildCodeFiles([
    { path: "components/animate-ui/components/radix/preview-link-card.tsx", code: componentSource },
    { path: "components/animate-ui/primitives/radix/preview-link-card.tsx", code: primitiveSource },
    { path: "uso", code: USAGE_CODE },
  ])

  return (
    <div className="mx-auto w-full max-w-xl px-6 py-12">
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-1.5">
            Preview Link Card
            <span className="text-sm font-normal text-muted-foreground">
              — Animate UI
            </span>
          </CardTitle>
          <CardAction>
            <ViewCode
              install="@animate-ui/components-radix-preview-link-card"
              description="Passe o mouse sobre o link pra ver a prévia da imagem, como o preview de link do X/Twitter."
              files={files}
            />
          </CardAction>
        </CardHeader>
        <CardContent className="flex min-h-56 items-center justify-center">
          <PreviewLinkCard
            href="https://vercel.com"
            src="https://picsum.photos/seed/preview-link/400/240"
          >
            <PreviewLinkCardTrigger
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline underline-offset-4"
            >
              vercel.com
            </PreviewLinkCardTrigger>
            <PreviewLinkCardContent>
              <PreviewLinkCardImage alt="Preview" className="h-40 w-72 object-cover" />
            </PreviewLinkCardContent>
          </PreviewLinkCard>
        </CardContent>
      </Card>
    </div>
  )
}
