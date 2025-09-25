import "./globals.css"
import { Inter } from "next/font/google"
import { Cinzel } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })
const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "700"] })

export const metadata = {
  title: "Project RPG - Dead Tree Scribes",
  description: "Portal para jogadores de RPG de mesa 5e",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="container mx-auto px-4 py-8">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
