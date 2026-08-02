import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ScrollIsland } from "@/components/ui/scroll-island-base"
import { ViewCode } from "@/components/view-code"
import { readComponentSource } from "@/lib/read-source"
import { buildCodeFiles } from "@/lib/view-code-files"

const TOPICS = [
  {
    id: "intro",
    title: "Introdução",
    content:
      "Este componente flutua sobre a página inteira (via portal pro body) e mostra o progresso de leitura em tempo real, junto com um índice pra pular direto pra cada seção.",
  },
  {
    id: "instalacao",
    title: "Instalação",
    content:
      "Use o comando de instalação no modal View Code. O componente depende de motion, lucide-react e react-use-measure.",
  },
  {
    id: "uso",
    title: "Uso",
    content:
      "Passe um array de tópicos com id, title e content. Cada id vira o alvo do scroll suave quando você clica no índice.",
  },
  {
    id: "progresso",
    title: "Progresso de leitura",
    content:
      "O anel ao redor do ícone se preenche conforme você rola a área de conteúdo, calculado a partir do scrollTop e do scrollHeight do container interno.",
  },
  {
    id: "notas",
    title: "Notas de implementação",
    content:
      "Como o componente usa position fixed e portal pro document.body, ele ignora os limites do card — dentro dessa página de demo, role o bloco de conteúdo abaixo pra ver o índice reagindo.",
  },
]

const USAGE_CODE = `import { ScrollIsland } from "@/components/ui/scroll-island-base"

<ScrollIsland topics={topics} />`

export default async function ScrollIslandPage() {
  const source = readComponentSource("components/ui/scroll-island-base.tsx")
  const files = await buildCodeFiles([
    { path: "components/ui/scroll-island-base.tsx", code: source },
    { path: "uso", code: USAGE_CODE },
  ])

  return (
    <div className="mx-auto w-full max-w-xl px-6 py-12">
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-1.5">
            Scroll Island
            <span className="text-sm font-normal text-muted-foreground">
              — Watermelon UI
            </span>
          </CardTitle>
          <CardAction>
            <ViewCode
              install="https://registry.watermelon.sh/r/scroll-island-base.json"
              description="Ilha flutuante com índice de seções e anel de progresso de leitura; role o conteúdo pra ver."
              files={files}
            />
          </CardAction>
        </CardHeader>
        <CardContent>
          <ScrollIsland topics={TOPICS} />
        </CardContent>
      </Card>
    </div>
  )
}
