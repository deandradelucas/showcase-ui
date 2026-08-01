import { Geist, Geist_Mono } from "next/font/google"

import "./globals.css"
import { AppSidebar } from "@/components/app-sidebar"
import { ThemeProvider } from "@/components/theme-provider"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Toaster } from "@/components/ui/toast"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", geist.variable)}
    >
      <body>
        <ThemeProvider>
          <TooltipProvider>
            <Toaster>
              <SidebarProvider>
                <AppSidebar />
                <SidebarInset>
                  <header className="flex h-14 shrink-0 items-center border-b px-4">
                    <SidebarTrigger />
                  </header>
                  <div className="flex flex-1 flex-col">{children}</div>
                </SidebarInset>
              </SidebarProvider>
            </Toaster>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
