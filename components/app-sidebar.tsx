"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { LayoutGrid, MessageSquare, ClipboardList, Home, ChevronRight, ChartColumn, MousePointerClick } from "lucide-react"
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

const formularios = [
  { href: "/formulario", label: "React Hook Form", icon: ClipboardList },
  { href: "/formulario-tanstack", label: "TanStack Form", icon: ClipboardList },
  { href: "/formulario-formisch", label: "Formisch", icon: ClipboardList },
]

export function AppSidebar() {
  const pathname = usePathname()
  const [prevPathname, setPrevPathname] = useState(pathname)
  const [chartOpen, setChartOpen] = useState(() => charts.some((c) => c.href === pathname))
  const [hoverOpen, setHoverOpen] = useState(() => hovers.some((h) => h.href === pathname))

  if (pathname !== prevPathname) {
    setPrevPathname(pathname)
    if (charts.some((c) => c.href === pathname)) setChartOpen(true)
    if (hovers.some((h) => h.href === pathname)) setHoverOpen(true)
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

              <Collapsible open={chartOpen} onOpenChange={setChartOpen}>
                <SidebarMenuItem>
                  <CollapsibleTrigger
                    render={
                      <SidebarMenuButton>
                        <ChartColumn />
                        <span>Chart</span>
                        <ChevronRight className="ml-auto transition-transform group-data-open/menu-button:rotate-90" />
                      </SidebarMenuButton>
                    }
                  />
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {charts.map((c) => (
                        <SidebarMenuSubItem key={c.href}>
                          <SidebarMenuSubButton
                            isActive={pathname === c.href}
                            render={<Link href={c.href}>{c.label}</Link>}
                          />
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>

              <Collapsible open={hoverOpen} onOpenChange={setHoverOpen}>
                <SidebarMenuItem>
                  <CollapsibleTrigger
                    render={
                      <SidebarMenuButton>
                        <MousePointerClick />
                        <span>Hover</span>
                        <ChevronRight className="ml-auto transition-transform group-data-open/menu-button:rotate-90" />
                      </SidebarMenuButton>
                    }
                  />
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {hovers.map((h) => (
                        <SidebarMenuSubItem key={h.href}>
                          <SidebarMenuSubButton
                            isActive={pathname === h.href}
                            render={<Link href={h.href}>{h.label}</Link>}
                          />
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
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
