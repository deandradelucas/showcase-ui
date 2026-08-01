"use client"

import { useChat } from "@ai-sdk/react"
import { createChat } from "@shadcn/helpers/ai-sdk"
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

const chat = createChat()
  .user("Oi, tudo bem?")
  .assistant("Tudo ótimo! Como posso ajudar?")
  .user("Simula uma resposta longa, com streaming de verdade")
  .assistant(({ writer }) => {
    writer.sleep(400)
    writer.text(
      "Aqui está uma resposta simulada via @shadcn/helpers/ai-sdk, com useChat de verdade em vez de setTimeout manual — "
    )
    writer.sleep(300)
    writer.text("cada pedaço chega como um chunk real de streaming, testando o auto-scroll do MessageScroller de fato.")
  })

export default function Chat() {
  const { messages, sendMessage } = useChat({
    messages: chat.get(0),
    transport: chat.transport({
      fallback: "Essa demo não tem mais respostas predefinidas — é só um mock, sem modelo de verdade.",
    }),
  })

  function proximaMensagem() {
    const proxima = chat.next(messages)
    if (proxima) sendMessage(proxima)
  }

  return (
    <div className="mx-auto flex h-[calc(100svh-3.5rem)] w-full max-w-2xl flex-col px-6 py-8">
      <Card className="flex min-h-0 flex-1 flex-col">
        <CardHeader>
          <CardTitle>Chat</CardTitle>
          <CardDescription>
            useChat (@ai-sdk/react) + createChat (@shadcn/helpers) — conversa predefinida, sem modelo/API real —
            docs/helpers/ai-sdk.
          </CardDescription>
        </CardHeader>
        <CardContent className="min-h-0 flex-1">
          <MessageScrollerProvider>
            <MessageScroller className="h-full">
              <MessageScrollerViewport>
                <MessageScrollerContent>
                  {messages.map((m) => (
                    <MessageScrollerItem key={m.id} scrollAnchor={m.role === "user"}>
                      <Message align={m.role === "user" ? "end" : "start"}>
                        <Avatar className="size-8">
                          <AvatarFallback>{m.role === "user" ? "EU" : "IA"}</AvatarFallback>
                        </Avatar>
                        <MessageContent>
                          <Bubble align={m.role === "user" ? "end" : "start"}>
                            <BubbleContent>
                              {m.parts.map((part, i) =>
                                part.type === "text" ? <span key={i}>{part.text}</span> : null
                              )}
                            </BubbleContent>
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

      <Button onClick={proximaMensagem} className="mt-4 self-start">
        Próxima mensagem (streaming real)
      </Button>
    </div>
  )
}
