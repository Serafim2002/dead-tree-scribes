"use client"

import { useState } from "react"
import NavigationMenu from "./navigation-menu"
import ThemeToggle from "./theme-toggle"

export default function NavigationButton() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      {/* Fixed Navigation Button */}
      <div className="fixed top-4 right-4 md:top-8 md:right-8 z-50 flex items-center gap-3">
        {/* Theme Toggle */}
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#D5A82D] flex items-center justify-center shadow-lg">
          <ThemeToggle />
        </div>

        {/* Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#D5A82D] flex items-center justify-center hover:scale-110 active:scale-95 transition-transform shadow-lg"
          aria-label="Menu"
          title="Menu"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 md:w-7 md:h-7"
          >
            <path
              d="M4 8H28M4 16H28M4 24H28"
              stroke="#5B300B"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Navigation Menu */}
      <NavigationMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  )
}
