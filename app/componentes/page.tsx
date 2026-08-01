"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Input } from "@/components/ui/input"
import { Kbd } from "@/components/ui/kbd"
import { Label } from "@/components/ui/label"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Skeleton } from "@/components/ui/skeleton"
import { Slider } from "@/components/ui/slider"
import { Spinner } from "@/components/ui/spinner"
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
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/toast"
import { Toggle } from "@/components/ui/toggle"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

const PLANOS = [
  { value: "starter", label: "Starter" },
  { value: "pro", label: "Pro" },
  { value: "enterprise", label: "Enterprise" },
]

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
          <Select items={PLANOS}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Escolha um plano" />
            </SelectTrigger>
            <SelectContent>
              {PLANOS.map((p) => (
                <SelectItem key={p.value} value={p.value}>
                  {p.label}
                </SelectItem>
              ))}
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

        <Vitrine titulo="Alert Dialog">
          <AlertDialog>
            <AlertDialogTrigger render={<Button variant="outline">Excluir</Button>} />
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Tem certeza?</AlertDialogTitle>
                <AlertDialogDescription>Essa ação não pode ser desfeita.</AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel render={<Button variant="outline">Cancelar</Button>} />
                <AlertDialogAction render={<Button variant="destructive">Confirmar</Button>} />
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </Vitrine>

        <Vitrine titulo="Aspect Ratio">
          <div className="w-full max-w-xs">
            <AspectRatio ratio={16 / 9} className="rounded-md bg-muted" />
          </div>
        </Vitrine>

        <Vitrine titulo="Breadcrumb">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Início</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Componentes</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </Vitrine>

        <Vitrine titulo="Collapsible">
          <Collapsible className="w-full">
            <CollapsibleTrigger render={<Button variant="outline">Alternar</Button>} />
            <CollapsibleContent className="pt-2 text-sm text-muted-foreground">
              Conteúdo colapsável isolado.
            </CollapsibleContent>
          </Collapsible>
        </Vitrine>

        <Vitrine titulo="Command">
          <Command className="w-full max-w-xs rounded-md border">
            <CommandInput placeholder="Buscar..." />
            <CommandList>
              <CommandEmpty>Nada encontrado.</CommandEmpty>
              <CommandGroup heading="Sugestões">
                <CommandItem>Calendário</CommandItem>
                <CommandItem>Configurações</CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </Vitrine>

        <Vitrine titulo="Context Menu">
          <ContextMenu>
            <ContextMenuTrigger render={
              <div className="flex h-20 w-full items-center justify-center rounded-md border border-dashed text-sm text-muted-foreground">
                Clique com o botão direito
              </div>
            } />
            <ContextMenuContent>
              <ContextMenuItem>Copiar</ContextMenuItem>
              <ContextMenuItem>Colar</ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        </Vitrine>

        <Vitrine titulo="Drawer">
          <Drawer>
            <DrawerTrigger render={<Button variant="outline">Abrir drawer</Button>} />
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Título do drawer</DrawerTitle>
                <DrawerDescription>Componente isolado, sem fluxo em volta.</DrawerDescription>
              </DrawerHeader>
            </DrawerContent>
          </Drawer>
        </Vitrine>

        <Vitrine titulo="Hover Card">
          <HoverCard>
            <HoverCardTrigger render={<Button variant="outline">Passe o mouse</Button>} />
            <HoverCardContent>Conteúdo exibido ao passar o mouse.</HoverCardContent>
          </HoverCard>
        </Vitrine>

        <Vitrine titulo="Kbd">
          <Kbd>Ctrl</Kbd>
          <Kbd>Shift</Kbd>
          <Kbd>D</Kbd>
        </Vitrine>

        <Vitrine titulo="Label">
          <Label htmlFor="l1">Nome completo</Label>
          <Input id="l1" placeholder="Seu nome" className="max-w-xs" />
        </Vitrine>

        <Vitrine titulo="Menubar">
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>Arquivo</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Novo</MenubarItem>
                <MenubarItem>Abrir</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </Vitrine>

        <Vitrine titulo="Navigation Menu">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Produto</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink href="#">Visão geral</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </Vitrine>

        <Vitrine titulo="Pagination">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </Vitrine>

        <Vitrine titulo="Popover">
          <Popover>
            <PopoverTrigger render={<Button variant="outline">Abrir popover</Button>} />
            <PopoverContent>Conteúdo isolado do popover.</PopoverContent>
          </Popover>
        </Vitrine>

        <Vitrine titulo="Radio Group">
          <RadioGroup defaultValue="a" className="flex flex-row gap-4">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="a" id="r1" />
              <Label htmlFor="r1">Opção A</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="b" id="r2" />
              <Label htmlFor="r2">Opção B</Label>
            </div>
          </RadioGroup>
        </Vitrine>

        <Vitrine titulo="Separator">
          <div className="w-full">
            <p className="text-sm">Acima</p>
            <Separator className="my-2" />
            <p className="text-sm">Abaixo</p>
          </div>
        </Vitrine>

        <Vitrine titulo="Sheet">
          <Sheet>
            <SheetTrigger render={<Button variant="outline">Abrir sheet</Button>} />
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Título do sheet</SheetTitle>
                <SheetDescription>Componente isolado, sem fluxo em volta.</SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </Vitrine>

        <Vitrine titulo="Skeleton">
          <div className="w-full space-y-2">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        </Vitrine>

        <Vitrine titulo="Slider">
          <Slider defaultValue={[40]} className="w-full max-w-xs" />
        </Vitrine>

        <Vitrine titulo="Spinner">
          <Spinner />
        </Vitrine>

        <Vitrine titulo="Textarea">
          <Textarea placeholder="Escreva algo..." className="max-w-xs" />
        </Vitrine>

        <Vitrine titulo="Toggle">
          <Toggle>Negrito</Toggle>
          <Toggle variant="outline">Itálico</Toggle>
        </Vitrine>

        <Vitrine titulo="Toggle Group">
          <ToggleGroup>
            <ToggleGroupItem value="left">Esquerda</ToggleGroupItem>
            <ToggleGroupItem value="center">Centro</ToggleGroupItem>
            <ToggleGroupItem value="right">Direita</ToggleGroupItem>
          </ToggleGroup>
        </Vitrine>
      </div>
    </div>
  )
}
