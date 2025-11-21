"use client"

import Link from "next/link"

interface PreLoginPopupProps {
  isOpen: boolean
  onClose: () => void
}

export default function PreLoginPopup({ isOpen, onClose }: PreLoginPopupProps) {
  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40 transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Popup */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-[652px] mx-4">
        <div className="rounded-b-2xl overflow-hidden shadow-2xl bg-white">
          {/* Fazer login button */}
          <Link
            href="/login"
            onClick={onClose}
            className="flex items-center justify-center h-16 sm:h-[68px] border-2 border-[#EBF2BD] bg-[#CF7F2F] hover:brightness-90 transition-all"
          >
            <span className="font-grenze text-2xl sm:text-[32px] text-[#5B300B] font-normal">
              Fazer login
            </span>
          </Link>

          {/* Divider */}
          <div className="h-0.5 bg-[#EBF2BD]" />

          {/* Sair button */}
          <button
            onClick={onClose}
            className="w-full flex items-center justify-center h-16 sm:h-[68px] border-2 border-[#EBF2BD] bg-[#CF7F2F] hover:brightness-90 transition-all"
          >
            <span className="font-grenze text-2xl sm:text-[32px] text-[#5B300B] font-normal">
              Sair
            </span>
          </button>
        </div>
      </div>
    </>
  )
}
