import "./globals.css"
import { Inter } from "next/font/google"
import { Cinzel } from "next/font/google"
import { Grenze } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })
const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-cinzel" })
const grenze = Grenze({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-grenze" })

export const metadata = {
  title: "Dead Tree Scribes - Grimório Digital D&D 5e",
  description: "Portal para jogadores e mestres de D&D 5e. Consulte classes, magias, itens e regras de forma prática e organizada.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.className} ${grenze.variable} ${cinzel.variable} min-h-screen flex flex-col bg-background text-foreground antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="flex-1 container mx-auto px-4 py-0 w-full">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
