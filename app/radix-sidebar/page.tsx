import { Home, Search, Settings } from "lucide-react"
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/animate-ui/components/radix/sidebar"
import { ViewCode } from "@/components/view-code"
import { readComponentSource } from "@/lib/read-source"
import { buildCodeFiles } from "@/lib/view-code-files"

const USAGE_CODE = `import { Sidebar, SidebarContent, SidebarInset, SidebarProvider } from "@/components/animate-ui/components/radix/sidebar"

<SidebarProvider>
  <Sidebar collapsible="none">...</Sidebar>
  <SidebarInset>Conteúdo</SidebarInset>
</SidebarProvider>`

export default async function RadixSidebarPage() {
  const source = readComponentSource("components/animate-ui/components/radix/sidebar.tsx")
  const files = await buildCodeFiles([
    { path: "components/animate-ui/components/radix/sidebar.tsx", code: source },
    { path: "uso", code: USAGE_CODE },
  ])

  return (
    <div className="mx-auto w-full max-w-2xl px-6 py-12">
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-1.5">
            Radix Sidebar
            <span className="text-sm font-normal text-muted-foreground">
              — Animate UI
            </span>
          </CardTitle>
          <CardAction>
            <ViewCode
              install="@animate-ui/components-radix-sidebar"
              description="Mesma API da Sidebar do shadcn, com o item ativo destacado por um highlight animado que segue o mouse."
              files={files}
            />
          </CardAction>
        </CardHeader>
        <CardContent>
          <div className="overflow-hidden rounded-lg border">
            <SidebarProvider className="min-h-0 h-72">
              <Sidebar collapsible="none">
                <SidebarHeader>
                  <span className="px-2 text-sm font-semibold">App</span>
                </SidebarHeader>
                <SidebarContent>
                  <SidebarGroup>
                    <SidebarGroupLabel>Menu</SidebarGroupLabel>
                    <SidebarGroupContent>
                      <SidebarMenu>
                        <SidebarMenuItem>
                          <SidebarMenuButton isActive>
                            <Home />
                            <span>Início</span>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                          <SidebarMenuButton>
                            <Search />
                            <span>Buscar</span>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                          <SidebarMenuButton>
                            <Settings />
                            <span>Ajustes</span>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      </SidebarMenu>
                    </SidebarGroupContent>
                  </SidebarGroup>
                </SidebarContent>
              </Sidebar>
              <SidebarInset className="flex items-center justify-center p-6 text-sm text-muted-foreground">
                Conteúdo da página
              </SidebarInset>
            </SidebarProvider>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
