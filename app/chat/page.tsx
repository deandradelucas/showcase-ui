"use client"

import { useState } from "react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Bubble, BubbleContent } from "@/components/ui/bubble"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Message, MessageContent } from "@/components/ui/message"
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "@/components/ui/message-scroller"

type Msg = { id: string; role: "user" | "assistant"; text: string }

const RESPOSTA = "Aqui está uma resposta simulada, aparecendo palavra por palavra pra testar o auto-scroll do MessageScroller enquanto o conteúdo cresce."

let contador = 0

export default function Chat() {
  const [mensagens, setMensagens] = useState<Msg[]>([
    { id: "m1", role: "user", text: "Oi, tudo bem?" },
    { id: "m2", role: "assistant", text: "Tudo ótimo! Como posso ajudar?" },
  ])
  const [gerando, setGerando] = useState(false)

  function simularResposta() {
    contador += 1
    const userId = `u${contador}`
    const assistantId = `a${contador}`

    setMensagens((prev) => [...prev, { id: userId, role: "user", text: "Simula uma resposta longa" }])
    setGerando(true)

    const palavras = RESPOSTA.split(" ")
    let acumulado = ""
    palavras.forEach((palavra, i) => {
      setTimeout(() => {
        acumulado = acumulado ? `${acumulado} ${palavra}` : palavra
        setMensagens((prev) => {
          const existe = prev.some((m) => m.id === assistantId)
          if (existe) {
            return prev.map((m) => (m.id === assistantId ? { ...m, text: acumulado } : m))
          }
          return [...prev, { id: assistantId, role: "assistant", text: acumulado }]
        })
        if (i === palavras.length - 1) setGerando(false)
      }, i * 120)
    })
  }

  return (
    <div className="mx-auto flex h-[calc(100svh-3.5rem)] w-full max-w-2xl flex-col px-6 py-8">
      <Card className="flex min-h-0 flex-1 flex-col">
        <CardHeader>
          <CardTitle>Chat</CardTitle>
          <CardDescription>
            Message + Bubble + MessageScroller de verdade, com streaming simulado — docs/react/message-scroller.
          </CardDescription>
        </CardHeader>
        <CardContent className="min-h-0 flex-1">
          <MessageScrollerProvider>
            <MessageScroller className="h-full">
              <MessageScrollerViewport>
                <MessageScrollerContent>
                  {mensagens.map((m) => (
                    <MessageScrollerItem key={m.id} scrollAnchor={m.role === "user"}>
                      <Message align={m.role === "user" ? "end" : "start"}>
                        <Avatar className="size-8">
                          <AvatarFallback>{m.role === "user" ? "EU" : "IA"}</AvatarFallback>
                        </Avatar>
                        <MessageContent>
                          <Bubble align={m.role === "user" ? "end" : "start"}>
                            <BubbleContent>{m.text}</BubbleContent>
                          </Bubble>
                        </MessageContent>
                      </Message>
                    </MessageScrollerItem>
                  ))}
                </MessageScrollerContent>
              </MessageScrollerViewport>
              <MessageScrollerButton />
            </MessageScroller>
          </MessageScrollerProvider>
        </CardContent>
      </Card>

      <Button onClick={simularResposta} disabled={gerando} className="mt-4 self-start">
        {gerando ? "Gerando…" : "Simular resposta com streaming"}
      </Button>
    </div>
  )
}
