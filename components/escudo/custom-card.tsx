"use client"

import Image from "next/image"
import { Card } from "@/lib/escudo-store"

interface CustomCardProps {
  card: Card
  onEdit: () => void
  onDelete: () => void
}

export default function CustomCard({ card, onEdit, onDelete }: CustomCardProps) {
  return (
    <div className="relative group">
      {/* Parchment Background */}
      <div className="relative">
        <Image
          src="https://api.builder.io/api/v1/image/assets/TEMP/ce6a411b1c5167d8582c3ff407647cbfac03d026?width=450"
          alt=""
          width={225}
          height={672}
          className="w-full h-auto shadow-2xl"
        />
        
        {/* Card Content Overlay */}
        <div className="absolute inset-0 p-6 flex flex-col">
          {/* Title */}
          <h3 
            className="font-grenze text-3xl md:text-4xl text-[#FFC592] text-center mb-4"
            style={{
              textShadow: '0 0 10px rgba(221, 174, 44, 0.02), 0 0 9px rgba(221, 174, 44, 0.15), 0 0 8px rgba(221, 174, 44, 0.50), 0 0 6px rgba(221, 174, 44, 0.85), 0 0 3px rgba(221, 174, 44, 0.98)',
              WebkitTextStroke: '1px #000',
            }}
          >
            {card.title || "Novo Cartão"}
          </h3>

          {/* Description */}
          <div className="flex-1 overflow-hidden">
            <p className="font-grenze text-sm text-[#5B300B] line-clamp-[12]">
              {card.description || "Clique para editar..."}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 justify-center mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={onEdit}
              className="w-12 h-12 rounded-full bg-[#D5A82D] text-[#5B300B] flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
              aria-label="Editar"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" className="w-6 h-6" fill="none" aria-hidden>
                <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" fill="currentColor"/>
              </svg>
            </button>
            <button
              onClick={onDelete}
              className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
              aria-label="Excluir"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" className="w-6 h-6" fill="none" aria-hidden>
                <path d="M3 6H21M19 6V20C19 21 18 22 17 22H7C6 22 5 21 5 20V6M8 6V4C8 3 9 2 10 2H14C15 2 16 3 16 4V6M10 11V17M14 11V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
