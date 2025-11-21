import "./globals.css"
import { Inter } from "next/font/google"
import { Cinzel } from "next/font/google"
import { Grenze } from "next/font/google"
import { Itim } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import NavigationButton from "@/components/navigation-button"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })
const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-cinzel" })
const grenze = Grenze({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-grenze" })
const itim = Itim({ subsets: ["latin"], weight: ["400"], variable: "--font-itim" })

export const metadata = {
  title: "Dead Tree Scribes - Grimório Digital D&D 5e",
  description: "Portal para jogadores e mestres de D&D 5e. Consulte classes, magias, itens e regras de forma prática e organizada.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.className} ${grenze.variable} ${cinzel.variable} ${itim.variable} min-h-screen flex flex-col bg-background text-foreground antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="dead-tree-scribes-theme"
        >
          <NavigationButton />
          <main className="flex-1 w-full">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
