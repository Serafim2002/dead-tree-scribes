"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import ThemeToggle from "./theme-toggle"

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-background">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo / Nome */}
        <Link href="/" className="text-xl font-bold tracking-wide">
          Dead Tree Scribes
        </Link>

        {/* Ações da direita */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button asChild variant="outline" size="sm" className="rounded-lg">
            <Link href="/login">Login</Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}
