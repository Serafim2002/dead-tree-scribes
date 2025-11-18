"use client"

import { useState } from "react"
import Image from "next/image"

interface DiceRollerPopupProps {
  isOpen: boolean
  onClose: () => void
}

type DiceType = 4 | 6 | 8 | 10 | 12 | 20

export default function DiceRollerPopup({ isOpen, onClose }: DiceRollerPopupProps) {
  const [selectedDice, setSelectedDice] = useState<DiceType | null>(null)
  const [result, setResult] = useState<number | null>(null)
  const [isRolling, setIsRolling] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const rollDice = (sides: DiceType) => {
    setSelectedDice(sides)
    setIsRolling(true)
    setResult(null)

    const rollDuration = 1200
    const interval = 50
    let elapsed = 0

    const intervalId = setInterval(() => {
      elapsed += interval
      setResult(Math.floor(Math.random() * sides) + 1)
      
      if (elapsed >= rollDuration) {
        clearInterval(intervalId)
        const finalRoll = Math.floor(Math.random() * sides) + 1
        setResult(finalRoll)
        setIsRolling(false)
      }
    }, interval)
  }

  const diceIcons: Record<DiceType, JSX.Element> = {
    4: (
      <svg width="60" height="60" viewBox="0 0 61 60" fill="none" className="w-full h-full">
        <path d="M33.5755 37.8749H35.7255V40.8999H33.5755V44.9999H29.8005V40.8999H22.0505L21.8755 38.5249L29.7755 26.0499H33.5755V37.8749ZM25.6255 37.8749H29.8005V31.1749L25.6255 37.8749ZM55.0005 52.4999H5.00049C4.10049 52.4999 3.27549 52.0249 2.82549 51.2499C2.60595 50.868 2.49461 50.4334 2.50341 49.993C2.51222 49.5525 2.64085 49.1228 2.87549 48.7499L27.8755 7.4999C28.7505 5.9499 31.2505 5.9499 32.1505 7.4999L57.1505 48.7499C57.375 49.1279 57.495 49.5588 57.4984 49.9985C57.5018 50.4381 57.3883 50.8708 57.1696 51.2522C56.9509 51.6336 56.6349 51.9501 56.2538 52.1694C55.8726 52.3886 55.4401 52.5026 55.0005 52.4999ZM9.45049 47.4999H50.5755L30.0005 13.5749L9.45049 47.4999Z" fill="currentColor"/>
      </svg>
    ),
    6: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="w-full h-full">
        <path d="M12.5 7.5H47.5C48.8261 7.5 50.0979 8.02678 51.0355 8.96447C51.9732 9.90215 52.5 11.1739 52.5 12.5V47.5C52.5 48.8261 51.9732 50.0979 51.0355 51.0355C50.0979 51.9732 48.8261 52.5 47.5 52.5H12.5C11.1739 52.5 9.90215 51.9732 8.96447 51.0355C8.02678 50.0979 7.5 48.8261 7.5 47.5V12.5C7.5 11.1739 8.02678 9.90215 8.96447 8.96447C9.90215 8.02678 11.1739 7.5 12.5 7.5ZM12.5 12.5V47.5H47.5V12.5H12.5ZM33.475 23.825C27.225 23.75 27.15 28.825 27.15 28.825C27.15 28.825 28.525 27.175 31.325 27.175C32.975 27.175 36.25 28.625 36.375 33.525C36.525 38.675 31.925 40 31.925 40C31.925 40 23.175 42.15 23.25 31.65C23.325 19.85 33.475 20.825 33.475 20.825V23.825ZM29.875 30.25C28.025 30 27.075 31.95 27.075 31.95L27.125 33.75C27.125 35.675 28.475 37.075 30 37.075C31.525 37.075 32.625 35.675 32.625 33.75C32.625 31.825 31.4 30.25 29.875 30.25Z" fill="currentColor"/>
      </svg>
    ),
    8: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="w-full h-full">
        <path d="M30.0004 5C28.7504 5 27.5004 5.475 26.4754 6.475L6.47539 26.475C4.50039 28.425 4.50039 31.575 6.47539 33.525L26.4754 53.525C28.4254 55.5 31.5754 55.5 33.5254 53.525L53.5254 33.525C55.5004 31.575 55.5004 28.425 53.5254 26.475L33.5254 6.475C32.5004 5.475 31.2504 5 30.0004 5ZM30.0004 10L50.0004 30L30.0004 50L10.0004 30M30.0004 20.625C33.2754 20.625 35.9504 23 35.9504 25.95C35.9504 27.675 35.0004 29.2 33.6004 30.175C35.3504 31.15 36.5004 32.825 36.5004 34.75C36.5004 37.8 33.6004 40.25 30.0004 40.25C26.4004 40.25 23.5004 37.8 23.5004 34.75C23.5004 32.825 24.6504 31.15 26.4004 30.175C25.0004 29.2 24.0754 27.675 24.0754 25.95C24.0754 23 26.7254 20.625 30.0004 20.625ZM30.0004 31.625C28.4754 31.625 27.2504 32.85 27.2504 34.375C27.2504 35.9 28.4754 37.125 30.0004 37.125C31.5254 37.125 32.7504 35.9 32.7504 34.375C32.7504 32.85 31.5254 31.625 30.0004 31.625ZM30.0004 23.75C28.7504 23.75 27.7504 24.875 27.7504 26.25C27.7504 27.625 28.7504 28.75 30.0004 28.75C31.2504 28.75 32.2504 27.625 32.2504 26.25C32.2504 24.875 31.2504 23.75 30.0004 23.75Z" fill="currentColor"/>
      </svg>
    ),
    10: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="w-full h-full">
        <path d="M26.2563 40H22.5063V25.525L18.0562 26.9V23.825L25.9062 21.025H26.2563V40ZM35.1813 20.525C38.7563 20.525 41.6063 23.4 41.6063 26.95V33.55C41.6063 37.1 38.7563 40 35.1813 40C31.6063 40 28.7563 37.1 28.7563 33.55V26.95C28.7563 25.246 29.4332 23.6118 30.6381 22.4068C31.843 21.2019 33.4772 20.525 35.1813 20.525ZM35.1563 24.125C33.6813 24.125 32.5063 25.325 32.5063 26.775V33.75C32.5063 35.175 33.6813 36.35 35.1563 36.35C36.6063 36.35 37.8563 35.15 37.8563 33.75V26.775C37.8563 25.3 36.6063 24.125 35.1563 24.125ZM30.0063 5C28.7563 5 27.5063 5.475 26.4813 6.475L6.48125 26.475C4.50625 28.425 4.50625 31.575 6.48125 33.525L26.4813 53.525C28.4313 55.5 31.5813 55.5 33.5312 53.525L53.5312 33.525C55.5063 31.575 55.5063 28.425 53.5312 26.475L33.5312 6.475C32.5063 5.475 31.2563 5 30.0063 5ZM30.0063 10L50.0063 30L30.0063 50L10.0063 30L30.0063 10Z" fill="currentColor"/>
      </svg>
    ),
    12: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="w-full h-full">
        <path d="M30 5L3.75 24.1L13.75 55H46.25L56.25 24.1L30 5ZM42.5 50H17.5L9.625 26L30 11.175L50.375 26L42.5 50ZM42.5 39.375V42.5H29.15V39.775C29.15 39.775 38.075 31.125 38.075 28.5C38.075 25.3 35.45 25.625 35.45 25.625C33.75 25.75 32.5 27.175 32.5 28.875H28.6C28.75 25.225 31.8 22.35 35.675 22.5C41.85 22.5 41.925 27.125 41.925 28.25C41.925 32.675 33.95 39.425 33.95 39.425L42.5 39.375ZM26.25 42.5H22.225V27.225L17.5 28.675V25.475L25.775 22.5H26.25V42.5Z" fill="currentColor"/>
      </svg>
    ),
    20: (
      <svg width="59" height="60" viewBox="0 0 59 60" fill="none" className="w-full h-full">
        <path d="M52.5 41.25C52.5 42.2 51.975 43.025 51.175 43.45L31.425 54.55C31.025 54.85 30.525 55 30 55C29.475 55 28.975 54.85 28.575 54.55L8.82501 43.45C8.42403 43.2396 8.08846 42.9232 7.85483 42.5353C7.62121 42.1474 7.49848 41.7028 7.50001 41.25V18.75C7.50001 17.8 8.02501 16.975 8.82501 16.55L28.575 5.45C28.975 5.15 29.475 5 30 5C30.525 5 31.025 5.15 31.425 5.45L51.175 16.55C51.975 16.975 52.5 17.8 52.5 18.75V41.25ZM30 10.375L12.5 20.225V39.775L30 49.625L47.5 39.775V20.225L30 10.375ZM37.325 20.675C39.029 20.675 40.6633 21.3519 41.8682 22.5568C43.0731 23.7618 43.75 25.396 43.75 27.1V33.75C43.75 37.25 40.875 40.125 37.325 40.125C33.75 40.125 30.9 37.25 30.9 33.75V27.1C30.9 25.396 31.5769 23.7618 32.7819 22.5568C33.9868 21.3519 35.621 20.675 37.325 20.675ZM37.3 24.275C35.85 24.275 34.65 25.45 34.65 26.925V33.825C34.65 35.3 35.85 36.5 37.3 36.5C38.75 36.5 40 35.3 40 33.825V26.925C40 25.45 38.75 24.275 37.3 24.275ZM28.625 36.9V39.9L15.775 39.825V37.275C15.775 37.275 24.35 28.95 24.375 26.425C24.375 23.325 21.825 23.65 21.825 23.65C21.825 23.65 19.375 23.75 19.1 26.775L15.35 26.9C15.35 26.9 15.45 20.65 22.075 20.65C28 20.65 28.075 25.1 28.075 26.25C28.075 30.45 20.375 36.925 20.375 36.925L28.625 36.9Z" fill="currentColor"/>
      </svg>
    )
  }

  if (!isOpen && !isAnimating) return null

  const handleClose = () => {
    setIsAnimating(true)
    setTimeout(() => {
      setIsAnimating(false)
      onClose()
    }, 300)
  }

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
        isOpen ? 'bg-black/50 backdrop-blur-sm' : 'bg-transparent'
      }`}
      onClick={handleClose}
    >
      <div 
        className={`relative w-full max-w-md rounded-xl overflow-hidden shadow-2xl transform transition-all duration-300 ${
          isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
        style={{
          background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(45, 23, 5, 0.25) 100%), #5B300B',
          boxShadow: '0 0 40px rgba(207, 127, 47, 0.3), 0 8px 32px rgba(0, 0, 0, 0.5)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <Image
            src="https://api.builder.io/api/v1/image/assets/TEMP/8484feb0e3ce079ef1dd58849f88bfd7d376d113?width=618"
            alt=""
            fill
            className="object-cover"
            style={{ transform: 'rotate(-90deg)' }}
          />
        </div>

        <div className="relative p-6 md:p-8">
          <button
            onClick={handleClose}
            className="absolute top-3 right-4 text-[#EBF2BD] font-grenze text-2xl hover:scale-110 transition-transform z-10"
          >
            X
          </button>

          <h2 
            className="text-center font-grenze text-lg text-[#FFC592] mb-6 px-8"
            style={{
              textShadow: '0 0 10px rgba(219, 171, 41, 0.02), 0 0 9px rgba(219, 171, 41, 0.15), 0 0 8px rgba(219, 171, 41, 0.50), 0 0 6px rgba(219, 171, 41, 0.85), 0 0 3px rgba(219, 171, 41, 0.98)'
            }}
          >
            Escolha seu(s) dados e descubra o que o destino tem a oferecer!
          </h2>

          {selectedDice && (
            <div className="flex flex-col items-center justify-center py-4 mb-4">
              <div className="relative w-48 h-48 flex items-center justify-center" style={{ perspective: '1000px' }}>
                <div 
                  className="absolute inset-0 rounded-full m-auto"
                  style={{
                    width: '140px',
                    height: '140px',
                    background: 'rgba(207, 127, 47, 0.40)',
                    filter: 'blur(8px)'
                  }}
                />
                {isRolling ? (
                  <div 
                    className="w-32 h-32 text-[#D5A82D]"
                    style={{
                      animation: 'spin 0.3s linear infinite, wobble 0.6s ease-in-out infinite',
                      transformStyle: 'preserve-3d',
                      filter: 'drop-shadow(0 0 1px rgba(217, 160, 38, 0.98)) drop-shadow(0 0 2px rgba(217, 160, 38, 0.85)) drop-shadow(0 0 3px rgba(217, 160, 38, 0.50))'
                    }}
                  >
                    {diceIcons[selectedDice]}
                  </div>
                ) : result !== null ? (
                  <div className="flex flex-col items-center gap-4 z-10">
                    <div 
                      className="text-9xl font-grenze text-[#D5A82D] font-bold"
                      style={{
                        textShadow: '2px 2px 4px rgba(0,0,0,0.3), 0 0 20px rgba(213, 168, 45, 0.8)',
                        animation: 'bounce-once 0.6s ease-out'
                      }}
                    >
                      {result}
                    </div>
                    <div 
                      className="w-20 h-20 text-[#D5A82D] opacity-60"
                      style={{
                        filter: 'drop-shadow(0 0 1px rgba(217, 160, 38, 0.98)) drop-shadow(0 0 2px rgba(217, 160, 38, 0.85))'
                      }}
                    >
                      {diceIcons[selectedDice]}
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          )}

          <div className="grid grid-cols-6 gap-3">
            {([4, 6, 8, 10, 12, 20] as DiceType[]).map((sides) => (
              <button
                key={sides}
                onClick={() => rollDice(sides)}
                disabled={isRolling}
                className={`relative flex items-center justify-center transition-all hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed ${
                  selectedDice === sides ? 'scale-105' : ''
                }`}
              >
                {selectedDice === sides && (
                  <div 
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: 'rgba(207, 127, 47, 0.55)',
                      filter: 'blur(4px)',
                      transform: 'scale(1.3)'
                    }}
                  />
                )}
                <div 
                  className="relative w-14 h-14 text-[#D5A82D]"
                  style={{
                    filter: 'drop-shadow(0 0 1px rgba(217, 160, 38, 0.98)) drop-shadow(0 0 2px rgba(217, 160, 38, 0.85)) drop-shadow(0 0 3px rgba(217, 160, 38, 0.50)) drop-shadow(0 0 3px rgba(217, 160, 38, 0.15)) drop-shadow(0 0 3px rgba(217, 160, 38, 0.02))'
                  }}
                >
                  {diceIcons[sides]}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
