"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"

export default function HoverCardPage() {
  return (
    <div className="mx-auto w-full max-w-xl px-6 py-12">
      <Card>
        <CardHeader>
          <CardTitle>Hover Card</CardTitle>
          <CardDescription>Conteúdo exibido ao passar o mouse sobre o gatilho.</CardDescription>
        </CardHeader>
        <CardContent>
          <HoverCard>
            <HoverCardTrigger render={<Button variant="outline">Passe o mouse</Button>} />
            <HoverCardContent>Conteúdo exibido ao passar o mouse.</HoverCardContent>
          </HoverCard>
        </CardContent>
      </Card>
    </div>
  )
}
