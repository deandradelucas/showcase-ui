"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutGrid, MessageSquare, ClipboardList, Home } from "lucide-react"
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
} from "@/components/ui/sidebar"
import { ModeToggle } from "@/components/mode-toggle"

const rotas = [
  { href: "/", label: "Início", icon: Home },
  { href: "/componentes", label: "Componentes", icon: LayoutGrid },
  { href: "/chat", label: "Chat", icon: MessageSquare },
]

const formularios = [
  { href: "/formulario", label: "React Hook Form", icon: ClipboardList },
  { href: "/formulario-tanstack", label: "TanStack Form", icon: ClipboardList },
  { href: "/formulario-formisch", label: "Formisch", icon: ClipboardList },
]

export function AppSidebar() {
  const pathname = usePathname()

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
