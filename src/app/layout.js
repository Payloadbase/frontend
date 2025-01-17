import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { ThemeProvider } from "@/components/theme-provider"
import { Input } from "@/components/ui/input"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
           <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
        <main className="m-3">
        <div className="flex items-center justify-center gap-20">
        <SidebarTrigger />
        <Input placeholder="Search Payloadbase"/>
        </div>
        <hr className="my-4" />
        {children}
        
      </main>
      </SidebarInset>
      </SidebarProvider>
      </ThemeProvider>
      </body>
    </html>
  );
}
