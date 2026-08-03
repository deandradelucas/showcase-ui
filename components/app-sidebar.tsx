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
  KeyRound,
  ChartColumn,
  MousePointerClick,
  MousePointer,
  GalleryHorizontal,
  RotateCw,
  PanelBottomOpen,
  TextCursorInput,
  Tag,
  ListChecks,
  MapPin,
  DollarSign,
  MessageCircleWarning,
  ListFilter,
  Wand2,
  ScrollText,
  BookOpenText,
  ArrowLeftRight,
  Command,
  PanelLeft,
  ListOrdered,
  LayoutPanelTop,
  SlidersHorizontal,
  AlignJustify,
  Share2,
  Smartphone,
  ShieldAlert,
  FolderTree,
  Link2,
  OrbitIcon,
  Users,
  Sparkles as SparklesIcon,
  ImagePlus,
  Type,
  MessageSquareQuote,
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

export const rotas = [
  { href: "/", label: "Início", icon: Home },
  { href: "/componentes", label: "Componentes", icon: LayoutGrid },
  { href: "/chat", label: "Chat", icon: MessageSquare },
  { href: "/accordion", label: "Accordion", icon: ChevronsUpDown },
  { href: "/license-key", label: "License Key", icon: KeyRound },
]

export type NavItem = { href: string; label: string }
export type NavGroup = { key: string; label: string; icon: LucideIcon; items: NavItem[] }

export const navGroups: NavGroup[] = [
  {
    key: "chart",
    label: "Chart",
    icon: ChartColumn,
    items: [
      { href: "/chart-barra", label: "Chart Barra" },
      { href: "/chart-linha", label: "Chart Linha" },
      { href: "/chart-pizza", label: "Chart Pizza" },
      { href: "/chart-radar", label: "Chart Radar" },
      { href: "/chart-area-bklit", label: "Area Chart (Bklit)" },
      { href: "/chart-profit-loss", label: "Profit/Loss Line" },
      { href: "/chart-legend", label: "Chart Legend" },
    ],
  },
  {
    key: "hover",
    label: "Hover",
    icon: MousePointerClick,
    items: [
      { href: "/hover-card", label: "Hover Card" },
      { href: "/interactive-hover-button", label: "Interactive Hover Button" },
      { href: "/focus-blur", label: "Focus Blur" },
    ],
  },
  {
    key: "buttons",
    label: "Buttons",
    icon: MousePointer,
    items: [
      { href: "/buttons-flip", label: "Flip Button" },
      { href: "/buttons-theme-toggler", label: "Theme Toggler" },
      { href: "/buttons-theme-toggler-variants", label: "Theme Toggler Variants" },
    ],
  },
  {
    key: "cards",
    label: "Cards",
    icon: GalleryHorizontal,
    items: [
      { href: "/card-wiggling", label: "Wiggling Cards" },
      { href: "/card-revealing-stack", label: "Revealing Stack" },
      { href: "/community-flip-card", label: "Flip Card" },
      { href: "/focus-cards", label: "Focus Cards" },
      { href: "/layout-grid", label: "Layout Grid" },
    ],
  },
  {
    key: "carousel",
    label: "Carousel",
    icon: RotateCw,
    items: [
      { href: "/carousel-radial", label: "Radial Carousel" },
      { href: "/carousel-minimal", label: "Minimal Carousel" },
      { href: "/community-motion-carousel", label: "Motion Carousel" },
    ],
  },
  {
    key: "disclosure",
    label: "Disclosure",
    icon: PanelBottomOpen,
    items: [
      { href: "/disclosure-create-new", label: "Create New" },
      { href: "/disclosure-inline-overflow", label: "Inline Overflow" },
      { href: "/disclosure-task-widget", label: "Task Widget" },
      { href: "/disclosure-floating", label: "Floating Disclosure" },
    ],
  },
  {
    key: "inputs",
    label: "Inputs",
    icon: TextCursorInput,
    items: [
      { href: "/input-draw-signature", label: "Draw Signature" },
      { href: "/input-floating", label: "Floating Input" },
      { href: "/input-predictive-text", label: "Predictive Text" },
      { href: "/input-progressive-stack", label: "Progressive Input Stack" },
      { href: "/file-upload", label: "File Upload" },
      { href: "/gooey-input", label: "Gooey Input" },
      { href: "/select-combobox", label: "Select (Combobox)" },
      { href: "/checkbox-field", label: "Checkbox Field" },
    ],
  },
  {
    key: "tags",
    label: "Tags",
    icon: Tag,
    items: [{ href: "/tags", label: "Tags" }],
  },
  {
    key: "lists",
    label: "Lists",
    icon: ListChecks,
    items: [
      { href: "/list-pin-item", label: "Pin Item" },
      { href: "/list-stack", label: "List Stack" },
      { href: "/community-playful-todolist", label: "Playful Todolist" },
    ],
  },
  {
    key: "map",
    label: "Map",
    icon: MapPin,
    items: [{ href: "/map-view-on-map", label: "View on Map" }],
  },
  {
    key: "price",
    label: "Price",
    icon: DollarSign,
    items: [
      { href: "/price-changeable", label: "Changeable Pricing" },
      { href: "/price-widget", label: "Pricing Widget" },
    ],
  },
  {
    key: "feedback",
    label: "Feedback",
    icon: MessageCircleWarning,
    items: [{ href: "/feedback-action", label: "Feedback Action" }],
  },
  {
    key: "picker",
    label: "Picker",
    icon: ListFilter,
    items: [
      { href: "/picker-quick-option", label: "Quick Option Picker" },
      { href: "/morphing-select", label: "Morphing Select" },
    ],
  },
  {
    key: "reveal",
    label: "Reveal",
    icon: Wand2,
    items: [{ href: "/reveal-copy", label: "Reveal & Copy" }],
  },
  {
    key: "scroll",
    label: "Scroll",
    icon: ScrollText,
    items: [{ href: "/scroll-island", label: "Scroll Island" }],
  },
  {
    key: "pager",
    label: "Pager",
    icon: BookOpenText,
    items: [{ href: "/step-pager", label: "Step Pager" }],
  },
  {
    key: "transactions",
    label: "Transactions",
    icon: ArrowLeftRight,
    items: [{ href: "/transaction-list", label: "Transaction List" }],
  },
  {
    key: "command",
    label: "Command",
    icon: Command,
    items: [{ href: "/command-search", label: "Command Search" }],
  },
  {
    key: "sidebar",
    label: "Sidebar",
    icon: PanelLeft,
    items: [
      { href: "/sidebar-macos", label: "macOS Sidebar" },
      { href: "/radix-sidebar", label: "Radix Sidebar" },
    ],
  },
  {
    key: "pagination",
    label: "Pagination",
    icon: ListOrdered,
    items: [{ href: "/pagination-continuous", label: "Continuous Pagination" }],
  },
  {
    key: "tabs",
    label: "Tabs",
    icon: LayoutPanelTop,
    items: [
      { href: "/tabs-continuous", label: "Continuous Tabs" },
      { href: "/tabs-discrete", label: "Discrete Tabs" },
      { href: "/tabs-fluid", label: "Fluid Tabs" },
    ],
  },
  {
    key: "selector",
    label: "Selector",
    icon: SlidersHorizontal,
    items: [{ href: "/selector-frequency", label: "Frequency Selector" }],
  },
  {
    key: "navbar",
    label: "Navbar",
    icon: AlignJustify,
    items: [
      { href: "/navbar-tooltip", label: "Tooltip Navbar" },
      { href: "/navbar-tooltip-vertical", label: "Vertical Tooltip Navbar" },
      { href: "/navbar-menu", label: "Navbar Menu" },
      { href: "/navbar-resizable", label: "Resizable Navbar" },
    ],
  },
  {
    key: "share",
    label: "Share",
    icon: Share2,
    items: [
      { href: "/share-sheet", label: "Share Sheet" },
      { href: "/share-qr", label: "Show QR" },
    ],
  },
  {
    key: "dialog",
    label: "Dialog",
    icon: ShieldAlert,
    items: [{ href: "/dialog-animated-alert", label: "Animated Alert Dialog" }],
  },
  {
    key: "files",
    label: "Files",
    icon: FolderTree,
    items: [{ href: "/files-tree", label: "Files" }],
  },
  {
    key: "preview",
    label: "Preview",
    icon: Link2,
    items: [{ href: "/preview-link-card", label: "Preview Link Card" }],
  },
  {
    key: "intro",
    label: "Intro",
    icon: OrbitIcon,
    items: [{ href: "/community-radial-intro", label: "Radial Intro" }],
  },
  {
    key: "avatar",
    label: "Avatar",
    icon: Users,
    items: [{ href: "/community-user-presence-avatar", label: "User Presence Avatar" }],
  },
  {
    key: "icons",
    label: "Icons",
    icon: SparklesIcon,
    items: [{ href: "/icons-animated", label: "Animated Icons" }],
  },
  {
    key: "backgrounds",
    label: "Backgrounds",
    icon: ImagePlus,
    items: [
      { href: "/sparkles", label: "Sparkles" },
      { href: "/sparkles-fullpage", label: "Sparkles (Full Page)" },
      { href: "/vortex", label: "Vortex" },
      { href: "/electric-border", label: "Electric Border" },
    ],
  },
  {
    key: "text-effects",
    label: "Text Effects",
    icon: Type,
    items: [{ href: "/text-generate-effect", label: "Text Generate Effect" }],
  },
  {
    key: "testimonials",
    label: "Testimonials",
    icon: MessageSquareQuote,
    items: [{ href: "/animated-testimonials", label: "Animated Testimonials" }],
  },
  {
    key: "device-mocks",
    label: "Device Mocks",
    icon: Smartphone,
    items: [
      { href: "/device-safari", label: "Safari" },
      { href: "/device-iphone", label: "iPhone" },
      { href: "/device-android", label: "Android" },
    ],
  },
]

const formularios = [
  { href: "/formulario", label: "React Hook Form", icon: ClipboardList },
  { href: "/formulario-tanstack", label: "TanStack Form", icon: ClipboardList },
  { href: "/formulario-formisch", label: "Formisch", icon: ClipboardList },
]

function groupContainsPath(group: NavGroup, pathname: string) {
  return group.items.some((item) => item.href === pathname)
}

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
  items: NavItem[]
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
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {}
    for (const group of navGroups) {
      initial[group.key] = groupContainsPath(group, pathname)
    }
    return initial
  })

  if (pathname !== prevPathname) {
    setPrevPathname(pathname)
    const matched = navGroups.find((group) => groupContainsPath(group, pathname))
    if (matched && !openGroups[matched.key]) {
      setOpenGroups((prev) => ({ ...prev, [matched.key]: true }))
    }
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

              {navGroups.map((group) => (
                <NavCollapsibleGroup
                  key={group.key}
                  icon={group.icon}
                  label={group.label}
                  items={group.items}
                  pathname={pathname}
                  open={openGroups[group.key] ?? false}
                  onOpenChange={(open) =>
                    setOpenGroups((prev) => ({ ...prev, [group.key]: open }))
                  }
                />
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
