"use client"

import { useState } from "react"
import { Check, ChevronsUpDown, Mail } from "lucide-react"
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
import { ButtonGroup, ButtonGroupSeparator } from "@/components/ui/button-group"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
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
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty"
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Input } from "@/components/ui/input"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"
import { Item, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@/components/ui/item"
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
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"
import { ScrollArea } from "@/components/ui/scroll-area"
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
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar"
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

        <Vitrine titulo="Shimmer (utility)">
          <p className="shimmer text-muted-foreground">Gerando resposta…</p>
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

        <Vitrine titulo="Button Group">
          <ButtonGroup>
            <Button variant="outline">Esquerda</Button>
            <ButtonGroupSeparator />
            <Button variant="outline">Meio</Button>
            <ButtonGroupSeparator />
            <Button variant="outline">Direita</Button>
          </ButtonGroup>
        </Vitrine>

        <Vitrine titulo="Carousel">
          <Carousel className="w-full max-w-xs">
            <CarouselContent>
              {[1, 2, 3].map((i) => (
                <CarouselItem key={i} className="flex h-24 items-center justify-center rounded-md border text-sm text-muted-foreground">
                  Slide {i}
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </Vitrine>

        <Vitrine titulo="Combobox">
          <Combobox />
        </Vitrine>

        <Vitrine titulo="Empty">
          <Empty className="w-full">
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <Mail />
              </EmptyMedia>
              <EmptyTitle>Nenhuma mensagem</EmptyTitle>
              <EmptyDescription>Isso é um estado vazio isolado.</EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <Button variant="outline" size="sm">Atualizar</Button>
            </EmptyContent>
          </Empty>
        </Vitrine>

        <Vitrine titulo="Field">
          <Field className="w-full max-w-xs">
            <FieldLabel htmlFor="f1">E-mail</FieldLabel>
            <Input id="f1" type="email" placeholder="voce@exemplo.com" />
            <FieldDescription>Usamos isso só pra login.</FieldDescription>
          </Field>
        </Vitrine>

        <Vitrine titulo="Item">
          <Item className="w-full">
            <ItemMedia variant="icon">
              <Mail />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Título do item</ItemTitle>
              <ItemDescription>Descrição isolada do item.</ItemDescription>
            </ItemContent>
          </Item>
        </Vitrine>

        <Vitrine titulo="Input Group">
          <InputGroup className="max-w-xs">
            <InputGroupAddon>
              <Mail />
            </InputGroupAddon>
            <InputGroupInput placeholder="voce@exemplo.com" />
          </InputGroup>
        </Vitrine>

        <Vitrine titulo="Input OTP">
          <InputOTP maxLength={4}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
            </InputOTPGroup>
          </InputOTP>
        </Vitrine>

        <Vitrine titulo="Native Select">
          <NativeSelect className="max-w-xs">
            <NativeSelectOption value="starter">Starter</NativeSelectOption>
            <NativeSelectOption value="pro">Pro</NativeSelectOption>
          </NativeSelect>
        </Vitrine>

        <Vitrine titulo="Resizable">
          <ResizablePanelGroup orientation="horizontal" className="h-24 max-w-xs rounded-md border">
            <ResizablePanel className="flex items-center justify-center text-sm text-muted-foreground">A</ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel className="flex items-center justify-center text-sm text-muted-foreground">B</ResizablePanel>
          </ResizablePanelGroup>
        </Vitrine>

        <Vitrine titulo="Scroll Area">
          <ScrollArea className="h-24 w-full max-w-xs rounded-md border p-3">
            {Array.from({ length: 15 }, (_, i) => (
              <p key={i} className="text-sm">Linha {i + 1}</p>
            ))}
          </ScrollArea>
        </Vitrine>

        <Vitrine titulo="Sidebar">
          <div className="h-40 w-full max-w-xs overflow-hidden rounded-md border">
            <SidebarProvider className="min-h-0">
              <Sidebar collapsible="none" className="h-40">
                <SidebarContent>
                  <SidebarGroup>
                    <SidebarGroupLabel>Navegação</SidebarGroupLabel>
                    <SidebarGroupContent>
                      <SidebarMenu>
                        <SidebarMenuItem>
                          <SidebarMenuButton>Início</SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                          <SidebarMenuButton>Configurações</SidebarMenuButton>
                        </SidebarMenuItem>
                      </SidebarMenu>
                    </SidebarGroupContent>
                  </SidebarGroup>
                </SidebarContent>
              </Sidebar>
            </SidebarProvider>
          </div>
        </Vitrine>

        <Card className="sm:col-span-2">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Typography (não é item de registry — escala escrita à mão)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight">Título h1</h1>
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
              Título h2
            </h2>
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Título h3</h3>
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Título h4</h4>
            <p className="leading-7">
              Parágrafo padrão. O rato roeu a roupa do rei de Roma, e{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">código inline</code>{" "}
              fica assim no meio do texto.
            </p>
            <blockquote className="mt-6 border-l-2 pl-6 italic">
              &quot;Isso é uma citação isolada, sem contexto de artigo em volta.&quot;
            </blockquote>
            <ul className="ml-6 list-disc [&>li]:mt-2">
              <li>Primeiro item da lista</li>
              <li>Segundo item da lista</li>
              <li>Terceiro item da lista</li>
            </ul>
            <p className="text-sm text-muted-foreground">Texto pequeno e apagado (muted).</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

const PLANOS_COMBOBOX = [
  { value: "next.js", label: "Next.js" },
  { value: "vite", label: "Vite" },
  { value: "astro", label: "Astro" },
]

function Combobox() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        render={
          <Button variant="outline" className="w-[200px] justify-between">
            {value ? PLANOS_COMBOBOX.find((f) => f.value === value)?.label : "Escolha um framework"}
            <ChevronsUpDown className="opacity-50" />
          </Button>
        }
      />
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Buscar framework..." />
          <CommandList>
            <CommandEmpty>Nada encontrado.</CommandEmpty>
            <CommandGroup>
              {PLANOS_COMBOBOX.map((f) => (
                <CommandItem
                  key={f.value}
                  value={f.value}
                  onSelect={(v) => {
                    setValue(v === value ? "" : v)
                    setOpen(false)
                  }}
                >
                  <Check className={value === f.value ? "opacity-100" : "opacity-0"} />
                  {f.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
