"use client"

import { useState } from "react"
import NavigationMenu from "./navigation-menu"
import ThemeToggle from "./theme-toggle"

export default function NavigationButton() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      {/* Fixed Navigation Button */}
      <div className="fixed top-3 right-3 md:top-4 md:right-4 z-50 flex items-center gap-2">
        {/* Theme Toggle */}
        <div className="w-11 h-11 md:w-14 md:h-14 rounded-full bg-cta dark:bg-cta-dark flex items-center justify-center shadow-lg">
          <ThemeToggle />
        </div>

        {/* Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-11 h-11 md:w-14 md:h-14 rounded-full bg-cta dark:bg-cta-dark flex items-center justify-center hover:scale-110 active:scale-95 transition-transform shadow-lg"
          aria-label="Menu"
          title="Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="w-5 h-5 md:w-6 md:h-6 text-cta-foreground dark:text-cta-foreground-dark"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m7 10l5 5m0 0l5-5"
            />
          </svg>
        </button>
      </div>

      {/* Navigation Menu */}
      <NavigationMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  )
}
