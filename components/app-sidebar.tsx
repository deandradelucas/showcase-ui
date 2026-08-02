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
  const [deviceOpen, setDeviceOpen] = useState(() => deviceMocks.some((d) => d.href === pathname))

  if (pathname !== prevPathname) {
    setPrevPathname(pathname)
    if (charts.some((c) => c.href === pathname)) setChartOpen(true)
    if (hovers.some((h) => h.href === pathname)) setHoverOpen(true)
    if (buttons.some((b) => b.href === pathname)) setButtonsOpen(true)
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
