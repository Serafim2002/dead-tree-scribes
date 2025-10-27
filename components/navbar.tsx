"use client"

import Link from "next/link"
import ThemeToggle from "./theme-toggle"

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-background">
      <div className="max-w-4xl mx-auto w-full px-4 py-3">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Three column layout: brand / theme / login */}
          <div className="w-full md:w-1/3">
            <Link href="/" className="block text-xl font-bold tracking-wide">
              Dead Tree Scribes
            </Link>
          </div>

          <div className="w-full md:w-1/3 flex md:justify-center items-start md:items-center">
            <div className="flex flex-col md:flex-row items-center gap-3">
              <div className="inline-flex items-center rounded-md border border-[rgba(255,197,146,0.25)] bg-[rgba(207,127,47,0.05)] px-3 py-2 text-sm font-medium">
                <ThemeToggle />
                <span className="ml-2 hidden md:inline">Alternar tema</span>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/3 flex md:justify-end items-start md:items-center">
            <Link href="/login" className="inline-flex items-center rounded-lg border border-[rgba(255,197,146,0.25)] bg-[rgba(207,127,47,0.05)] px-4 py-2 text-sm font-medium">
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
