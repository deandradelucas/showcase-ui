"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "@/components/ui/toast"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

function Vitrine({ titulo, children }: { titulo: string; children: React.ReactNode }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-medium text-muted-foreground">{titulo}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-wrap items-center gap-3">{children}</CardContent>
    </Card>
  )
}

export default function Componentes() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-8 px-6 py-12">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold">Componentes</h1>
        <p className="text-muted-foreground">Catálogo isolado, sem blocos nem contexto — cada componente sozinho.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Vitrine titulo="Button">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="destructive">Destructive</Button>
        </Vitrine>

        <Vitrine titulo="Badge">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
        </Vitrine>

        <Vitrine titulo="Avatar">
          <Avatar>
            <AvatarFallback>LC</AvatarFallback>
          </Avatar>
        </Vitrine>

        <Vitrine titulo="Input">
          <Input placeholder="voce@exemplo.com" className="max-w-xs" />
        </Vitrine>

        <Vitrine titulo="Checkbox">
          <Checkbox id="c1" />
          <label htmlFor="c1" className="text-sm">Aceito os termos</label>
        </Vitrine>

        <Vitrine titulo="Switch">
          <Switch id="s1" />
          <label htmlFor="s1" className="text-sm">Notificações</label>
        </Vitrine>

        <Vitrine titulo="Progress">
          <Progress value={62} className="w-full" />
        </Vitrine>

        <Vitrine titulo="Select">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Escolha um plano" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="starter">Starter</SelectItem>
              <SelectItem value="pro">Pro</SelectItem>
              <SelectItem value="enterprise">Enterprise</SelectItem>
            </SelectContent>
          </Select>
        </Vitrine>

        <Vitrine titulo="Alert">
          <Alert className="w-full">
            <AlertTitle>Atenção</AlertTitle>
            <AlertDescription>Isso é um alerta isolado, sem contexto de página.</AlertDescription>
          </Alert>
        </Vitrine>

        <Vitrine titulo="Tooltip">
          <Tooltip>
            <TooltipTrigger render={<Button variant="outline">Passe o mouse</Button>} />
            <TooltipContent>Isso é uma tooltip</TooltipContent>
          </Tooltip>
        </Vitrine>

        <Vitrine titulo="Dialog">
          <Dialog>
            <DialogTrigger render={<Button variant="outline">Abrir dialog</Button>} />
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Título do dialog</DialogTitle>
                <DialogDescription>Componente isolado, sem fluxo em volta.</DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </Vitrine>

        <Vitrine titulo="Toast">
          <Button
            variant="outline"
            onClick={() => toast.add({ title: "Notificação", description: "Isso é um toast isolado." })}
          >
            Disparar toast
          </Button>
        </Vitrine>

        <Vitrine titulo="Calendar">
          <Calendar mode="single" className="rounded-md border" />
        </Vitrine>

        <Vitrine titulo="Accordion">
          <Accordion multiple={false} className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>É acessível?</AccordionTrigger>
              <AccordionContent>Sim, segue o padrão WAI-ARIA.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </Vitrine>

        <Vitrine titulo="Tabs">
          <Tabs defaultValue="a" className="w-full">
            <TabsList>
              <TabsTrigger value="a">Aba A</TabsTrigger>
              <TabsTrigger value="b">Aba B</TabsTrigger>
            </TabsList>
            <TabsContent value="a">Conteúdo isolado da aba A.</TabsContent>
            <TabsContent value="b">Conteúdo isolado da aba B.</TabsContent>
          </Tabs>
        </Vitrine>

        <Vitrine titulo="Table">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Exemplo</TableCell>
                <TableCell>Ativo</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Vitrine>
      </div>
    </div>
  )
}
