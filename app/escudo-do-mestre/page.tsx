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
      <div className="relative z-10 w-full h-auto bg-[rgba(207,127,47,0.30)] py-4 sm:py-6 md:py-8">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center space-y-2 sm:space-y-3">
            <p 
              className="font-grenze text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#FFC592]"
              style={{
                textShadow: '0 0 10px rgba(221, 174, 44, 0.02), 0 0 9px rgba(221, 174, 44, 0.15), 0 0 8px rgba(221, 174, 44, 0.50), 0 0 6px rgba(221, 174, 44, 0.85), 0 0 3px rgba(221, 174, 44, 0.98)'
              }}
            >
              Seja bem vindo, Mestre!
            </p>
            <h1 
              className="font-grenze text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-[#FFC592] font-normal"
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
      <div className="relative z-10 mt-4 sm:mt-6 md:mt-8 lg:mt-10 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-12 flex-wrap">
            <button
              onClick={() => setActiveTab("exploracao")}
              className={`font-grenze text-2xl sm:text-3xl md:text-4xl lg:text-5xl px-3 sm:px-4 md:px-6 lg:px-8 py-2 transition-all ${
                activeTab === "exploracao"
                  ? "text-[#FFC592] underline decoration-2 underline-offset-4 md:underline-offset-8"
                  : "text-[#CF7F2F] hover:text-[#FFC592]"
              }`}
            >
              Exploração
            </button>
            <button
              onClick={() => setActiveTab("interacao")}
              className={`font-grenze text-2xl sm:text-3xl md:text-4xl lg:text-5xl px-3 sm:px-4 md:px-6 lg:px-8 py-2 transition-all ${
                activeTab === "interacao"
                  ? "text-[#FFC592] underline decoration-2 underline-offset-4 md:underline-offset-8"
                  : "text-[#CF7F2F] hover:text-[#FFC592]"
              }`}
            >
              Interação social
            </button>
            <button
              onClick={() => setActiveTab("combate")}
              className={`font-grenze text-2xl sm:text-3xl md:text-4xl lg:text-5xl px-3 sm:px-4 md:px-6 lg:px-8 py-2 transition-all ${
                activeTab === "combate"
                  ? "text-[#FFC592] underline decoration-2 underline-offset-4 md:underline-offset-8"
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
      <div className="fixed left-3 sm:left-4 md:left-6 lg:left-8 bottom-20 sm:bottom-24 md:bottom-28 lg:bottom-32 z-20 flex flex-col gap-2 sm:gap-3 md:gap-4 items-center">
        <button
          onClick={() => setIsEnvironmentOpen(true)}
          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full bg-[#D5A82D] flex items-center justify-center hover:scale-110 active:scale-95 transition-transform shadow-xl"
          aria-label="Controle de ambiente"
          title="Controle de ambiente"
        >
          <svg viewBox="0 0 50 50" fill="none" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-11 lg:h-11">
            <path d="M25.0004 4.16675C22.264 4.16675 19.5549 4.70562 17.0273 5.75259C14.4996 6.79956 12.203 8.33414 10.2684 10.2687C6.36144 14.1757 4.1665 19.4747 4.1665 25.0001C4.1665 30.5254 6.36144 35.8245 10.2684 39.7315C12.203 41.666 14.4996 43.2006 17.0273 44.2476C19.5549 45.2945 22.264 45.8334 24.9998 45.8334C30.5252 45.8334 35.8242 43.6385 39.7312 39.7315C43.6382 35.8245 45.8332 30.5254 45.8332 25.0001C45.8332 22.2642 45.2943 19.5551 44.2473 17.0275C43.2004 14.4999 41.6658 12.2032 39.7312 10.2687C37.7967 8.33414 35.5 6.79956 32.9724 5.75259C30.4448 4.70562 27.7357 4.16675 24.9998 4.16675Z" fill="#5B300B"/>
          </svg>
        </button>

        <button
          onClick={() => setIsDiceRollerOpen(true)}
          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full bg-[#D5A82D] flex items-center justify-center hover:scale-110 active:scale-95 transition-transform shadow-xl"
          aria-label="Rolar dados"
          title="Rolar dados"
        >
          <svg viewBox="0 0 54 54" fill="none" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-11 lg:h-11">
            <path d="M45.3171 12.5777C45.2933 11.5496 44.8761 10.5698 44.1515 9.84003C43.4269 9.11029 42.45 8.68621 41.4221 8.65511V8.64917H12.5775V8.65349C11.5443 8.67764 10.5602 9.09884 9.8294 9.82959C9.09865 10.5603 8.67745 11.5445 8.6533 12.5777H8.64844V41.4223H8.6533C8.67706 42.4556 9.09812 43.44 9.82896 44.1708C10.5598 44.9017 11.5442 45.3227 12.5775 45.3465V45.3508H41.4221V45.3459C42.4554 45.3222 43.4398 44.9011 44.1706 44.1703C44.9015 43.4394 45.3225 42.4551 45.3463 41.4218H45.3512V12.5777H45.3171Z" fill="#5B300B"/>
          </svg>
        </button>

        <button
          onClick={handleAddCard}
          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full bg-[#D5A82D] flex items-center justify-center hover:scale-110 active:scale-95 transition-transform shadow-xl relative"
          aria-label="Adicionar cartão"
          title="Adicionar cartão"
        >
          <span className="text-[#5B300B] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-grenze leading-none">+</span>
        </button>
      </div>

      {/* Back Button */}
      <button
        onClick={() => router.push("/")}
        className="fixed right-3 sm:right-4 md:right-6 lg:right-8 bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-12 z-20 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full bg-[#D5A82D] flex items-center justify-center hover:scale-110 active:scale-95 transition-transform shadow-xl"
        aria-label="Voltar"
        title="Voltar"
      >
        <svg viewBox="0 0 62 62" fill="none" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14">
          <path d="M10.3335 20.6667L8.50708 22.4931L6.68066 20.6667L8.50708 18.8403L10.3335 20.6667ZM23.2502 51.6667C22.565 51.6667 21.9079 51.3945 21.4235 50.91C20.939 50.4256 20.6668 49.7685 20.6668 49.0833C20.6668 48.3982 20.939 47.7411 21.4235 47.2566C21.9079 46.7722 22.565 46.5 23.2502 46.5V51.6667ZM21.4237 35.4097L8.50708 22.4931L12.1599 18.8403L25.0766 31.7569L21.4237 35.4097ZM8.50708 18.8403L21.4237 5.92358L25.0766 9.57642L12.1599 22.4931L8.50708 18.8403ZM10.3335 18.0833H37.4585V23.25H10.3335V18.0833ZM37.4585 51.6667H23.2502V46.5H37.4585V51.6667ZM54.2502 34.875C54.2502 39.3284 52.481 43.5994 49.332 46.7485C46.1829 49.8975 41.9119 51.6667 37.4585 51.6667V46.5C38.9851 46.5 40.4968 46.1993 41.9072 45.6151C43.3176 45.0309 44.5991 44.1746 45.6786 43.0951C46.7581 42.0156 47.6144 40.7341 48.1986 39.3237C48.7828 37.9133 49.0835 36.4016 49.0835 34.875H54.2502Z" fill="#5B300B"/>
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
              <p className="font-grenze text-xl sm:text-2xl md:text-3xl text-[#FFC592] opacity-70">
                Nenhum cartão criado ainda. Clique em + para adicionar.
              </p>
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
