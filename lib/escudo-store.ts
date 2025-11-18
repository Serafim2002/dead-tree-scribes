import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type CardCategory = 'exploracao' | 'interacao' | 'combate'
export type Tab = 'exploracao' | 'interacao' | 'combate'

export interface Card {
  id: string
  tab: Tab
  title: string
  category: CardCategory
  description: string
}

export interface Environment {
  date: string
  time: string
  timeOfDay: 'manha' | 'tarde' | 'noite'
  wind: string
  temperature: string
  weather: string
  moonPhase: string
}

interface EscudoState {
  cards: Card[]
  environment: Environment
  addCard: (card: Card) => void
  updateCard: (id: string, card: Partial<Card>) => void
  deleteCard: (id: string) => void
  updateEnvironment: (env: Partial<Environment>) => void
}

export const useEscudoStore = create<EscudoState>()(
  persist(
    (set) => ({
      cards: [],
      environment: {
        date: '01/01/01',
        time: '00:00:00',
        timeOfDay: 'noite',
        wind: 'Vento calmo',
        temperature: 'Normal',
        weather: 'Nublado',
        moonPhase: 'Cheia',
      },
      addCard: (card) => set((state) => ({ cards: [...state.cards, card] })),
      updateCard: (id, updatedCard) =>
        set((state) => ({
          cards: state.cards.map((card) =>
            card.id === id ? { ...card, ...updatedCard } : card
          ),
        })),
      deleteCard: (id) =>
        set((state) => ({
          cards: state.cards.filter((card) => card.id !== id),
        })),
      updateEnvironment: (env) =>
        set((state) => ({
          environment: { ...state.environment, ...env },
        })),
    }),
    {
      name: 'escudo-storage',
    }
  )
)
