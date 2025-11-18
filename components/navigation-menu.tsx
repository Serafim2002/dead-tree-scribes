"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"
import ThemeToggle from "./theme-toggle"

interface NavigationMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function NavigationMenu({ isOpen, onClose }: NavigationMenuProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleLogout = async () => {
    setIsLoading(true)
    try {
      await supabase.auth.signOut()
      router.push("/login")
      onClose()
    } catch (error) {
      console.error("Error signing out:", error)
    } finally {
      setIsLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40 transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu Dropdown */}
      <div className="fixed top-16 right-4 md:top-20 md:right-8 z-50 animate-in slide-in-from-top-2">
        <div
          className="rounded-b-2xl overflow-hidden shadow-2xl"
          style={{
            width: '100vw',
            maxWidth: '652px',
          }}
        >
          {/* Menu Items */}
          <div
            className="border-2"
            style={{
              borderColor: '#EBF2BD',
              background: '#CF7F2F',
            }}
          >
            <Link
              href="/profile"
              onClick={onClose}
              className="flex items-center justify-center h-14 md:h-16 border-b-2 hover:bg-[#B8681F] transition-colors"
              style={{ borderColor: '#EBF2BD' }}
            >
              <span className="font-grenze text-2xl md:text-3xl" style={{ color: '#5B300B' }}>
                Minha Conta
              </span>
            </Link>

            <Link
              href="/escudo-do-mestre"
              onClick={onClose}
              className="flex items-center justify-center h-14 md:h-16 border-b-2 hover:bg-[#B8681F] transition-colors"
              style={{ borderColor: '#EBF2BD' }}
            >
              <span className="font-grenze text-2xl md:text-3xl" style={{ color: '#5B300B' }}>
                Escudo do Mestre 👑
              </span>
            </Link>

            <Link
              href="/"
              onClick={onClose}
              className="flex items-center justify-center h-14 md:h-16 border-b-2 hover:bg-[#B8681F] transition-colors"
              style={{ borderColor: '#EBF2BD' }}
            >
              <span className="font-grenze text-2xl md:text-3xl" style={{ color: '#5B300B' }}>
                Voltar para a introdução
              </span>
            </Link>
          </div>

          {/* Logout Button */}
          <div
            className="border-2 border-t-0"
            style={{
              borderColor: '#EBF2BD',
              background: '#CF7F2F',
            }}
          >
            <button
              onClick={handleLogout}
              disabled={isLoading}
              className="w-full flex items-center justify-center h-16 md:h-20 hover:bg-[#B8681F] transition-colors disabled:opacity-50"
            >
              <span className="font-grenze text-2xl md:text-3xl" style={{ color: '#5B300B' }}>
                {isLoading ? 'Saindo...' : 'Sair'}
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
