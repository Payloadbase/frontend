import { HardDrive, Home, Cog, MessageCircleMore, Settings,ArrowDownUp } from "lucide-react"
import Logo from "../assets/logo.png";
import Image from "next/image";
import Link from "next/link";


import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter
} from "@/components/ui/sidebar"
import { ThemeProvider } from "./theme-provider"
import { ModeToggle } from "./theme-toggle"

// Payload items.
const PayloadItems = [
  {
    title: "Dashboard",
    url: "#",
    icon: Home,
  },
  {
    title: "Payload Generator",
    url: "#",
    icon: Cog,
  },
  {
    title: "Payload Storage",
    url: "#",
    icon: HardDrive,
  },
  {
    title: "Payload Settings",
    url: "#",
    icon: Settings,
  },
]
// Handler items.
const HandlerItems = [
  {
    title: "Events",
    url: "#",
    icon: MessageCircleMore,
  },
  {
    title: "Streams",
    url: "#",
    icon: ArrowDownUp,
  },
  {
    title: "Handler Settings",
    url: "#",
    icon: Settings,
  },
]

export function AppSidebar() {
  return (
    <Sidebar variant="inset">
      <SidebarHeader>
        <div className="border-solid border-2 border-sidebar-foreground rounded-[12px]">
        <Image src={Logo} alt="Payloadbase Logo"/>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Payloads</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {PayloadItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {HandlerItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <ModeToggle/>
      </SidebarFooter>
    </Sidebar>
  )
}
