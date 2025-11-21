"use client"

import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import DiceRollerPopup from "@/components/escudo/dice-roller-popup"
import EnvironmentPopup from "@/components/escudo/environment-popup"
import CardEditor from "@/components/escudo/card-editor"
import CustomCard from "@/components/escudo/custom-card"
import FloatingCard from "@/components/escudo/floating-card"
import { useEscudoStore } from "@/lib/escudo-store"

type Tab = "exploracao" | "interacao" | "combate"

export default function EscudoDoMestrePage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<Tab>("exploracao")
  const [isDiceRollerOpen, setIsDiceRollerOpen] = useState(false)
  const [isEnvironmentOpen, setIsEnvironmentOpen] = useState(false)
  const [editingCardId, setEditingCardId] = useState<string | null>(null)
  const [floatingPreview, setFloatingPreview] = useState<{ id: string; title?: string } | null>(null)
  
  const { cards, addCard, updateCard, deleteCard } = useEscudoStore()

  const tabCards = cards.filter(card => card.tab === activeTab)

  const handleAddCard = () => {
    const newCard = {
      id: `card-${Date.now()}`,
      tab: activeTab,
      title: "Novo Cartão",
      category: activeTab as any,
      description: "",
    }
    addCard(newCard)
    setFloatingPreview({ id: newCard.id, title: newCard.title })
    setEditingCardId(newCard.id)
  }

  const tabTitles = {
    exploracao: "Exploração",
    interacao: "Interação social",
    combate: "Combate"
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#8C5D41]">
      {/* Wood Background */}
      <div className="fixed inset-0 z-0">
        <Image
          src="https://api.builder.io/api/v1/image/assets/TEMP/656a969e945f5e0fb32cb8c4f5153cc23a6fcc99?width=3606"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Header Bar */}
      <div className="relative z-10 w-full h-auto bg-[rgba(207,127,47,0.30)] py-6 sm:py-8 md:py-10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center">
            <h1
              className="font-grenze text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-[#FFC592] font-normal"
              style={{
                textShadow: '0 0 10px rgba(221, 174, 44, 0.02), 0 0 9px rgba(221, 174, 44, 0.15), 0 0 8px rgba(221, 174, 44, 0.50), 0 0 6px rgba(221, 174, 44, 0.85), 0 0 3px rgba(221, 174, 44, 0.98)'
              }}
            >
              {tabTitles[activeTab]}
            </h1>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="relative z-10 mt-3 sm:mt-4 md:mt-6 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 flex-wrap">
            <button
              onClick={() => setActiveTab("exploracao")}
              className={`font-grenze text-3xl sm:text-4xl md:text-5xl px-2 sm:px-3 md:px-4 py-1 transition-all ${
                activeTab === "exploracao"
                  ? "text-[#FFC592] underline decoration-2 underline-offset-4"
                  : "text-[#CF7F2F] hover:text-[#FFC592]"
              }`}
            >
              Exploração
            </button>
            <button
              onClick={() => setActiveTab("interacao")}
              className={`font-grenze text-3xl sm:text-4xl md:text-5xl px-2 sm:px-3 md:px-4 py-1 transition-all ${
                activeTab === "interacao"
                  ? "text-[#FFC592] underline decoration-2 underline-offset-4"
                  : "text-[#CF7F2F] hover:text-[#FFC592]"
              }`}
            >
              Interação social
            </button>
            <button
              onClick={() => setActiveTab("combate")}
              className={`font-grenze text-3xl sm:text-4xl md:text-5xl px-2 sm:px-3 md:px-4 py-1 transition-all ${
                activeTab === "combate"
                  ? "text-[#FFC592] underline decoration-2 underline-offset-4"
                  : "text-[#CF7F2F] hover:text-[#FFC592]"
              }`}
            >
              Combate
            </button>
          </div>

          {/* Tab Divider */}
          <div className="flex items-center justify-center mt-4 sm:mt-6">
            <svg viewBox="0 0 1296 15" fill="none" className="w-full max-w-6xl h-auto">
              <path d="M-8.1109e-05 7.2168L7.2168 14.4337L14.4337 7.2168L7.2168 -8.1109e-05L-8.1109e-05 7.2168ZM1295.44 7.2168L1288.22 -8.1109e-05L1281 7.2168L1288.22 14.4337L1295.44 7.2168ZM7.2168 7.2168V8.4668L1288.22 8.4668V7.2168V5.9668L7.2168 5.9668V7.2168Z" fill="white"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Control Buttons */}
      <div className="fixed left-3 sm:left-4 md:left-6 bottom-20 sm:bottom-24 z-20 flex flex-col gap-2 sm:gap-3 items-center">
        <button
          onClick={() => setIsEnvironmentOpen(true)}
          className="w-14 h-14 sm:w-16 sm:h-16 md:w-19 md:h-19 rounded-full bg-[#D5A82D] flex items-center justify-center hover:scale-110 active:scale-95 transition-transform shadow-xl"
          aria-label="Controle de ambiente"
          title="Controle de ambiente"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="w-6 h-6 sm:w-7 sm:h-7 text-[#5B300B]"
          >
            <path
              fill="currentColor"
              d="M14.19 14.19L6 18l3.81-8.19L18 6m-6-4A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 8.9a1.1 1.1 0 0 0-1.1 1.1a1.1 1.1 0 0 0 1.1 1.1a1.1 1.1 0 0 0 1.1-1.1a1.1 1.1 0 0 0-1.1-1.1"
            />
          </svg>
        </button>

        <button
          onClick={() => setIsDiceRollerOpen(true)}
          className="w-14 h-14 sm:w-16 sm:h-16 md:w-19 md:h-19 rounded-full bg-[#D5A82D] flex items-center justify-center hover:scale-110 active:scale-95 transition-transform shadow-xl"
          aria-label="Rolar dados"
          title="Rolar dados"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="w-6 h-6 sm:w-7 sm:h-7 text-[#5B300B]"
          >
            <path
              fill="currentColor"
              d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m2 2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m10 10a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m0-10a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m-5 5a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m-5 5a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"
            />
          </svg>
        </button>

        <button
          onClick={handleAddCard}
          className="w-14 h-14 sm:w-16 sm:h-16 md:w-19 md:h-19 rounded-full bg-[#D5A82D] flex items-center justify-center hover:scale-110 active:scale-95 transition-transform shadow-xl relative"
          aria-label="Adicionar cartão"
          title="Adicionar cartão"
        >
          <span className="text-[#5B300B] text-4xl sm:text-5xl md:text-6xl font-grenze leading-none">+</span>
        </button>
      </div>

      {/* Back Button */}
      <button
        onClick={() => router.push("/")}
        className="fixed right-3 sm:right-4 md:right-6 bottom-4 sm:bottom-6 md:bottom-8 z-20 w-14 h-14 sm:w-16 sm:h-16 md:w-16 md:h-16 rounded-full bg-[#D5A82D] flex items-center justify-center hover:scale-110 active:scale-95 transition-transform shadow-xl"
        aria-label="Voltar"
        title="Voltar"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="w-6 h-6 sm:w-7 sm:h-7 text-[#5B300B]"
        >
          <path
            fill="currentColor"
            d="m4 8l-.354.354L3.293 8l.353-.354zm5 11.5a.5.5 0 0 1 0-1zm-.354-6.146l-5-5l.708-.708l5 5zm-5-5.708l5-5l.708.708l-5 5zM4 7.5h10.5v1H4zm10.5 12H9v-1h5.5zm6-6a6 6 0 0 1-6 6v-1a5 5 0 0 0 5-5zm-6-6a6 6 0 0 1 6 6h-1a5 5 0 0 0-5-5z"
          />
        </svg>
      </button>

      {/* Cards Grid */}
      <div className="relative z-10 px-4 py-6 sm:py-8 pb-24 sm:pb-32">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {tabCards.map((card) => (
              <CustomCard
                key={card.id}
                card={card}
                onEdit={() => setEditingCardId(card.id)}
                onDelete={() => deleteCard(card.id)}
              />
            ))}
          </div>

          {tabCards.length === 0 && (
            <div className="text-center py-12 sm:py-16 md:py-20">
              <div
                className="max-w-md mx-auto rounded-2xl border-2 border-[#D5A82D]/60 bg-gradient-to-br from-[rgba(213,168,45,0.15)] to-[rgba(213,168,45,0.05)] p-8 sm:p-10 md:p-12 backdrop-blur-sm shadow-lg"
                style={{
                  boxShadow: '0 8px 32px rgba(91, 48, 11, 0.2), inset 0 1px 2px rgba(255, 255, 255, 0.1)'
                }}
              >
                <p className="font-grenze text-xl sm:text-2xl md:text-3xl text-[#FFC592] leading-relaxed">
                  Nenhum cartão criado ainda.<br/>
                  <span className="text-lg sm:text-xl md:text-2xl opacity-80">Clique em <span className="font-bold">+</span> para adicionar.</span>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {floatingPreview && (
        <FloatingCard title={floatingPreview.title} onClose={() => setFloatingPreview(null)} />
      )}

      <DiceRollerPopup 
        isOpen={isDiceRollerOpen} 
        onClose={() => setIsDiceRollerOpen(false)} 
      />
      
      <EnvironmentPopup 
        isOpen={isEnvironmentOpen} 
        onClose={() => setIsEnvironmentOpen(false)} 
      />

      {editingCardId && (
        <CardEditor
          card={cards.find(c => c.id === editingCardId)!}
          onClose={() => setEditingCardId(null)}
          onSave={(updatedCard) => {
            updateCard(editingCardId, updatedCard)
            setEditingCardId(null)
          }}
        />
      )}
    </div>
  )
}
