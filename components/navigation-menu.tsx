"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useUser } from "@/lib/useUser"

interface NavigationMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function NavigationMenu({ isOpen, onClose }: NavigationMenuProps) {
  const router = useRouter()
  const { logout } = useUser()
  const [isLoading, setIsLoading] = useState(false)

  const handleLogout = async () => {
    setIsLoading(true)
    try {
      logout()
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
      <div className="fixed top-14 right-3 md:top-16 md:right-4 z-50 animate-in slide-in-from-top-2">
        <div
          className="rounded-b-2xl overflow-hidden shadow-2xl"
          style={{
            width: 'calc(100vw - 24px)',
            maxWidth: '420px',
          }}
        >
          {/* Menu Items */}
          <div className="border-2 border-[#EBF2BD] bg-[#CF7F2F] divide-y-2 divide-[#EBF2BD]">
            <Link
              href="/conta"
              onClick={onClose}
              className="flex items-center justify-center h-14 md:h-16 hover:brightness-90 dark:hover:brightness-110 transition-all"
            >
              <span className="font-grenze text-xl md:text-2xl text-[#5B300B] font-normal">
                Minha Conta
              </span>
            </Link>

            <Link
              href="/escudo-do-mestre"
              onClick={onClose}
              className="flex items-center justify-center h-14 md:h-16 hover:brightness-90 dark:hover:brightness-110 transition-all"
            >
              <span className="font-grenze text-xl md:text-2xl text-[#5B300B] font-normal">
                Escudo do Mestre
              </span>
            </Link>

            <Link
              href="/"
              onClick={onClose}
              className="flex items-center justify-center h-16 md:h-16 hover:brightness-90 dark:hover:brightness-110 transition-all"
            >
              <span className="font-grenze text-xl md:text-2xl text-[#5B300B] font-normal text-center px-4">
                Voltar para a introdução
              </span>
            </Link>
          </div>

          {/* Assinaturas & Logout Section */}
          <div className="border-2 border-t-0 border-[#EBF2BD] bg-[#CF7F2F] divide-y-2 divide-[#EBF2BD]">
            <Link
              href="/assinaturas"
              onClick={onClose}
              className="flex items-center justify-center h-16 md:h-17 hover:brightness-90 dark:hover:brightness-110 transition-all"
            >
              <span className="font-grenze text-xl md:text-2xl text-[#5B300B] font-normal">
                Assinaturas
              </span>
            </Link>

            <button
              onClick={handleLogout}
              disabled={isLoading}
              className="w-full flex items-center justify-center h-16 md:h-17 hover:brightness-90 dark:hover:brightness-110 transition-all disabled:opacity-50"
            >
              <span className="font-grenze text-xl md:text-2xl text-[#5B300B] font-normal">
                {isLoading ? 'Saindo...' : 'Sair'}
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
