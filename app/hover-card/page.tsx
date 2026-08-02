import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { ViewCode } from "@/components/view-code"
import { readComponentSource } from "@/lib/read-source"

const USAGE_CODE = `import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"

<HoverCard>
  <HoverCardTrigger render={<Button variant="outline">Passe o mouse</Button>} />
  <HoverCardContent>Conteúdo exibido ao passar o mouse.</HoverCardContent>
</HoverCard>`

export default function HoverCardPage() {
  const source = readComponentSource("components/ui/hover-card.tsx")

  return (
    <div className="mx-auto w-full max-w-xl px-6 py-12">
      <Card>
        <CardHeader>
          <CardTitle>Hover Card</CardTitle>
          <CardDescription>Conteúdo exibido ao passar o mouse sobre o gatilho.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <HoverCard>
            <HoverCardTrigger render={<Button variant="outline">Passe o mouse</Button>} />
            <HoverCardContent>Conteúdo exibido ao passar o mouse.</HoverCardContent>
          </HoverCard>
          <ViewCode
            install="hover-card"
            files={[
              { path: "components/ui/hover-card.tsx", code: source },
              { path: "uso", code: USAGE_CODE },
            ]}
          />
        </CardContent>
      </Card>
    </div>
  )
}
