"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import {
  LayoutGrid,
  MessageSquare,
  ClipboardList,
  Home,
  ChevronRight,
  ChevronsUpDown,
  ChartColumn,
  MousePointerClick,
  MousePointer,
  GalleryHorizontal,
  RotateCw,
  PanelBottomOpen,
  TextCursorInput,
  Tag,
  Smartphone,
  type LucideIcon,
} from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { ModeToggle } from "@/components/mode-toggle"

const rotas = [
  { href: "/", label: "Início", icon: Home },
  { href: "/componentes", label: "Componentes", icon: LayoutGrid },
  { href: "/chat", label: "Chat", icon: MessageSquare },
  { href: "/accordion", label: "Accordion", icon: ChevronsUpDown },
]

const charts = [
  { href: "/chart-barra", label: "Chart Barra" },
  { href: "/chart-linha", label: "Chart Linha" },
  { href: "/chart-pizza", label: "Chart Pizza" },
  { href: "/chart-radar", label: "Chart Radar" },
]

const hovers = [
  { href: "/hover-card", label: "Hover Card" },
  { href: "/interactive-hover-button", label: "Interactive Hover Button" },
]

const buttons = [
  { href: "/button-delete", label: "Delete Button" },
  { href: "/button-split", label: "Split Button" },
]

const cards = [
  { href: "/card-wiggling", label: "Wiggling Cards" },
]

const carousels = [
  { href: "/carousel-radial", label: "Radial Carousel" },
  { href: "/carousel-minimal", label: "Minimal Carousel" },
]

const disclosures = [
  { href: "/disclosure-create-new", label: "Create New" },
  { href: "/disclosure-inline-overflow", label: "Inline Overflow" },
  { href: "/disclosure-task-widget", label: "Task Widget" },
]

const inputs = [
  { href: "/input-draw-signature", label: "Draw Signature" },
  { href: "/input-floating", label: "Floating Input" },
]

const tags = [
  { href: "/tags", label: "Tags" },
]

const deviceMocks = [
  { href: "/device-safari", label: "Safari" },
  { href: "/device-iphone", label: "iPhone" },
  { href: "/device-android", label: "Android" },
]

const formularios = [
  { href: "/formulario", label: "React Hook Form", icon: ClipboardList },
  { href: "/formulario-tanstack", label: "TanStack Form", icon: ClipboardList },
  { href: "/formulario-formisch", label: "Formisch", icon: ClipboardList },
]

function NavCollapsibleGroup({
  icon: Icon,
  label,
  items,
  pathname,
  open,
  onOpenChange,
}: {
  icon: LucideIcon
  label: string
  items: { href: string; label: string }[]
  pathname: string
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  return (
    <Collapsible open={open} onOpenChange={onOpenChange}>
      <SidebarMenuItem>
        <CollapsibleTrigger
          render={
            <SidebarMenuButton>
              <Icon />
              <span>{label}</span>
              <ChevronRight className="ml-auto transition-transform group-data-panel-open/menu-button:rotate-90" />
            </SidebarMenuButton>
          }
        />
        <CollapsibleContent className="overflow-hidden data-open:animate-collapsible-down data-closed:animate-collapsible-up">
          <SidebarMenuSub>
            {items.map((item) => (
              <SidebarMenuSubItem key={item.href}>
                <SidebarMenuSubButton
                  isActive={pathname === item.href}
                  render={<Link href={item.href}>{item.label}</Link>}
                />
              </SidebarMenuSubItem>
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  )
}

export function AppSidebar() {
  const pathname = usePathname()
  const [prevPathname, setPrevPathname] = useState(pathname)
  const [chartOpen, setChartOpen] = useState(() => charts.some((c) => c.href === pathname))
  const [hoverOpen, setHoverOpen] = useState(() => hovers.some((h) => h.href === pathname))
  const [buttonsOpen, setButtonsOpen] = useState(() => buttons.some((b) => b.href === pathname))
  const [cardsOpen, setCardsOpen] = useState(() => cards.some((c) => c.href === pathname))
  const [carouselsOpen, setCarouselsOpen] = useState(() => carousels.some((c) => c.href === pathname))
  const [disclosuresOpen, setDisclosuresOpen] = useState(() => disclosures.some((d) => d.href === pathname))
  const [inputsOpen, setInputsOpen] = useState(() => inputs.some((i) => i.href === pathname))
  const [tagsOpen, setTagsOpen] = useState(() => tags.some((t) => t.href === pathname))
  const [deviceOpen, setDeviceOpen] = useState(() => deviceMocks.some((d) => d.href === pathname))

  if (pathname !== prevPathname) {
    setPrevPathname(pathname)
    if (charts.some((c) => c.href === pathname)) setChartOpen(true)
    if (hovers.some((h) => h.href === pathname)) setHoverOpen(true)
    if (buttons.some((b) => b.href === pathname)) setButtonsOpen(true)
    if (cards.some((c) => c.href === pathname)) setCardsOpen(true)
    if (carousels.some((c) => c.href === pathname)) setCarouselsOpen(true)
    if (disclosures.some((d) => d.href === pathname)) setDisclosuresOpen(true)
    if (inputs.some((i) => i.href === pathname)) setInputsOpen(true)
    if (tags.some((t) => t.href === pathname)) setTagsOpen(true)
    if (deviceMocks.some((d) => d.href === pathname)) setDeviceOpen(true)
  }

  return (
    <Sidebar>
      <SidebarHeader>
        <span className="px-2 text-sm font-semibold">showcase-ui</span>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navegação</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {rotas.map((r) => (
                <SidebarMenuItem key={r.href}>
                  <SidebarMenuButton
                    isActive={pathname === r.href}
                    render={
                      <Link href={r.href}>
                        <r.icon />
                        <span>{r.label}</span>
                      </Link>
                    }
                  />
                </SidebarMenuItem>
              ))}

              <NavCollapsibleGroup
                icon={ChartColumn}
                label="Chart"
                items={charts}
                pathname={pathname}
                open={chartOpen}
                onOpenChange={setChartOpen}
              />

              <NavCollapsibleGroup
                icon={MousePointerClick}
                label="Hover"
                items={hovers}
                pathname={pathname}
                open={hoverOpen}
                onOpenChange={setHoverOpen}
              />

              <NavCollapsibleGroup
                icon={MousePointer}
                label="Buttons"
                items={buttons}
                pathname={pathname}
                open={buttonsOpen}
                onOpenChange={setButtonsOpen}
              />

              <NavCollapsibleGroup
                icon={GalleryHorizontal}
                label="Cards"
                items={cards}
                pathname={pathname}
                open={cardsOpen}
                onOpenChange={setCardsOpen}
              />

              <NavCollapsibleGroup
                icon={RotateCw}
                label="Carousel"
                items={carousels}
                pathname={pathname}
                open={carouselsOpen}
                onOpenChange={setCarouselsOpen}
              />

              <NavCollapsibleGroup
                icon={PanelBottomOpen}
                label="Disclosure"
                items={disclosures}
                pathname={pathname}
                open={disclosuresOpen}
                onOpenChange={setDisclosuresOpen}
              />

              <NavCollapsibleGroup
                icon={TextCursorInput}
                label="Inputs"
                items={inputs}
                pathname={pathname}
                open={inputsOpen}
                onOpenChange={setInputsOpen}
              />

              <NavCollapsibleGroup
                icon={Tag}
                label="Tags"
                items={tags}
                pathname={pathname}
                open={tagsOpen}
                onOpenChange={setTagsOpen}
              />

              <NavCollapsibleGroup
                icon={Smartphone}
                label="Device Mocks"
                items={deviceMocks}
                pathname={pathname}
                open={deviceOpen}
                onOpenChange={setDeviceOpen}
              />
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Formulários</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {formularios.map((r) => (
                <SidebarMenuItem key={r.href}>
                  <SidebarMenuButton
                    isActive={pathname === r.href}
                    render={
                      <Link href={r.href}>
                        <r.icon />
                        <span>{r.label}</span>
                      </Link>
                    }
                  />
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <ModeToggle />
      </SidebarFooter>
    </Sidebar>
  )
}
