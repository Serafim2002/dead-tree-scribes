"use client"

import { useEffect } from "react"

export default function FloatingCard({ title = "Novo Cartão", onClose }: { title?: string, onClose?: () => void }) {
  useEffect(() => {
    const t = setTimeout(() => onClose && onClose(), 2800)
    return () => clearTimeout(t)
  }, [onClose])

  return (
    <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none">
      <div className="w-64 md:w-96 p-4 rounded-2xl bg-[rgba(231,190,126,0.95)] border-2 border-[#5B300B] shadow-xl animate-fade-in-up">
        <h4 className="font-grenze text-xl md:text-2xl text-[#5B300B] text-center">{title}</h4>
        <p className="mt-2 text-sm text-[#5B300B] text-center">Cartão criado. Editando em seguida...</p>
      </div>
    </div>
  )
}
