import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { ViewCode } from "@/components/view-code"
import { readComponentSource } from "@/lib/read-source"
import { buildCodeFiles } from "@/lib/view-code-files"

const USAGE_CODE = `import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"

<HoverCard>
  <HoverCardTrigger render={<Button variant="outline">Passe o mouse</Button>} />
  <HoverCardContent>Conteúdo exibido ao passar o mouse.</HoverCardContent>
</HoverCard>`

export default async function HoverCardPage() {
  const source = readComponentSource("components/ui/hover-card.tsx")
  const files = await buildCodeFiles([
    { path: "components/ui/hover-card.tsx", code: source },
    { path: "uso", code: USAGE_CODE },
  ])

  return (
    <div className="mx-auto w-full max-w-xl px-6 py-12">
      <Card>
        <CardHeader className="border-b">
          <CardTitle>Hover Card</CardTitle>
          <CardAction>
            <ViewCode
              install="hover-card"
              description="Conteúdo exibido ao passar o mouse sobre o gatilho."
              files={files}
            />
          </CardAction>
        </CardHeader>
        <CardContent className="space-y-4">
          <HoverCard>
            <HoverCardTrigger render={<Button variant="outline">Passe o mouse</Button>} />
            <HoverCardContent>Conteúdo exibido ao passar o mouse.</HoverCardContent>
          </HoverCard>
        </CardContent>
      </Card>
    </div>
  )
}
