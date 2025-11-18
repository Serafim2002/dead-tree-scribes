"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardCategory } from "@/lib/escudo-store"

interface CardEditorProps {
  card: Card
  onClose: () => void
  onSave: (card: Card) => void
}

export default function CardEditor({ card, onClose, onSave }: CardEditorProps) {
  const [title, setTitle] = useState(card.title)
  const [category, setCategory] = useState(card.category)
  const [description, setDescription] = useState(card.description)

  const handleSave = () => {
    onSave({
      ...card,
      title,
      category,
      description,
    })
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div 
        className="relative w-full max-w-2xl rounded-xl overflow-hidden"
        style={{
          background: '#2D1705',
          borderRadius: '10px',
        }}
      >
        {/* Dragon Decoration */}
        <div className="absolute top-28 left-1/2 -translate-x-1/2 opacity-50 pointer-events-none">
          <svg width="334" height="193" viewBox="0 0 334 193" fill="none" className="w-64 md:w-80">
            <path d="M139.234 0V0.730783C124.627 15.8988 114.051 33.7162 108.269 52.8966C99.8497 79.29 96.0782 106.658 97.0663 134.038C97.0367 134.496 97.0367 134.956 97.0663 135.414C99.0347 127.503 102.421 119.915 107.1 112.93C111.815 105.848 118.323 99.8059 126.125 95.2698C125.777 96.0493 125.304 96.6462 125.304 97.316C121.144 106.012 118.661 115.252 117.955 124.66C116.5 139.69 121.881 154.615 132.93 166.192C133.531 166.977 134.058 167.804 134.503 168.665L135.463 167.873C132.694 158.291 133.365 148.195 137.383 138.959C145.427 165.949 166.163 182.05 193.705 193C160.249 192.878 127.976 188.433 100.504 170.394C100.295 176.886 102.563 182.063 110.19 192.817C86.907 182.599 76.7478 165.657 74.201 143.952C67.9384 150.481 63.6938 158.3 61.8429 166.68C60.0615 174.669 59.1708 182.842 57.8627 190.722C47.9817 169.444 48.3157 146.961 51.6836 123.588C21.9434 138.788 9.65485 163.367 0.17749 189.699C-0.341156 175.494 0.277344 161.273 2.02841 147.143C4.39426 126.462 10.2393 106.219 19.3966 87.0363C27.7704 68.884 40.2794 52.4138 56.1615 38.6293C72.0436 24.8447 90.9662 14.0345 111.776 6.85718C120.592 3.64227 129.807 1.34091 139.234 0Z" fill="rgba(235, 242, 189, 0.5)"/>
          </svg>
        </div>

        <div className="relative p-8 space-y-6">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-[#EBF2BD] font-grenze text-4xl hover:scale-110 transition-transform z-10"
          >
            X
          </button>

          {/* Title Input */}
          <div className="space-y-2">
            <div 
              className="w-full h-24 rounded-2xl border-2 border-[#EBF2BD] bg-[#CF7F2F] flex items-center justify-center px-6"
            >
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Título"
                className="w-full bg-transparent border-none outline-none text-center font-grenze text-4xl text-[rgba(91,48,11,0.5)] placeholder:text-[rgba(91,48,11,0.5)]"
              />
            </div>
          </div>

          {/* Category Dropdown */}
          <div className="space-y-2">
            <div 
              className="w-full h-16 rounded-2xl border-2 border-[#EBF2BD] bg-[#CF7F2F] flex items-center justify-center px-6 relative"
            >
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as CardCategory)}
                className="w-full bg-transparent border-none outline-none text-center font-grenze text-4xl text-[#5B300B] appearance-none cursor-pointer"
              >
                <option value="exploracao" className="bg-[#CF7F2F] text-[#5B300B]">Exploração</option>
                <option value="interacao" className="bg-[#CF7F2F] text-[#5B300B]">Interação social</option>
                <option value="combate" className="bg-[#CF7F2F] text-[#5B300B]">Combate</option>
              </select>
              <svg 
                className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none"
                width="33" 
                height="33" 
                viewBox="0 0 33 33" 
                fill="none"
              >
                <path d="M16.5 26.4L33 8.80005H0L16.5 26.4Z" fill="#2D1705"/>
              </svg>
            </div>
          </div>

          {/* Description Header */}
          <div className="w-full h-20 rounded-t-2xl bg-[#CF7F2F] flex items-center justify-center border-2 border-b-0 border-[#EBF2BD]">
            <h3 className="font-grenze text-4xl text-[#5B300B]">Descrição</h3>
          </div>

          {/* Description Ornament */}
          <div className="flex items-center justify-center">
            <svg width="312" height="15" viewBox="0 0 312 15" fill="none" className="w-full max-w-md">
              <path d="M-8.1109e-05 7.2168L7.2168 14.4337L14.4337 7.2168L7.2168 -8.1109e-05L-8.1109e-05 7.2168ZM311.434 7.2168L304.217 -8.1109e-05L297 7.2168L304.217 14.4337L311.434 7.2168ZM7.2168 7.2168V8.4668H304.217V7.2168V5.9668H7.2168V7.2168Z" fill="#5B300B"/>
            </svg>
          </div>

          {/* Description Text Area */}
          <div className="w-full min-h-[200px] rounded-b-2xl bg-[#EBF2BD] border-2 border-t-0 border-[#EBF2BD] p-6">
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Começe por aqui:"
              className="w-full h-full min-h-[160px] bg-transparent border-none outline-none font-grenze text-lg text-[rgba(91,48,11,0.5)] placeholder:text-[rgba(91,48,11,0.5)] resize-none"
            />
          </div>

          {/* Save Button */}
          <button
            onClick={handleSave}
            className="absolute bottom-8 right-8 w-20 h-20 rounded-full bg-[#D5A82D] flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
          >
            <svg width="59" height="40" viewBox="0 0 59 40" fill="none" className="w-12 h-8">
              <path d="M2.5 17.5L22.1364 37.5L56.5 2.5" stroke="#5B300B" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
