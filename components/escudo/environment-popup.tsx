"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useEscudoStore } from "@/lib/escudo-store"

interface EnvironmentPopupProps {
  isOpen: boolean
  onClose: () => void
}

export default function EnvironmentPopup({ isOpen, onClose }: EnvironmentPopupProps) {
  const { environment, updateEnvironment } = useEscudoStore()
  const [localEnv, setLocalEnv] = useState(environment)
  const [isPaused, setIsPaused] = useState(true)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setLocalEnv(environment)
      setIsPaused(true)
    }
  }, [isOpen, environment])

  useEffect(() => {
    if (!isPaused && isOpen) {
      const interval = setInterval(() => {
        setLocalEnv(prev => {
          const [h, m, s] = prev.time.split(':').map(Number)
          const totalSeconds = h * 3600 + m * 60 + s + 1
          
          const newH = Math.floor(totalSeconds / 3600) % 24
          const newM = Math.floor((totalSeconds % 3600) / 60)
          const newS = totalSeconds % 60
          
          const newTime = `${String(newH).padStart(2, '0')}:${String(newM).padStart(2, '0')}:${String(newS).padStart(2, '0')}`
          
          let newTimeOfDay: 'manha' | 'tarde' | 'noite' = 'noite'
          if (newH >= 6 && newH < 12) newTimeOfDay = 'manha'
          else if (newH >= 12 && newH < 18) newTimeOfDay = 'tarde'
          
          return { ...prev, time: newTime, timeOfDay: newTimeOfDay }
        })
      }, 1000)
      
      return () => clearInterval(interval)
    }
  }, [isPaused, isOpen])

  if (!isOpen && !isAnimating) return null

  const handleClose = () => {
    setIsAnimating(true)
    setTimeout(() => {
      setIsAnimating(false)
      onClose()
    }, 300)
  }

  const handleSave = () => {
    updateEnvironment(localEnv)
    handleClose()
  }

  const handleLongRest = () => {
    const [h, m, s] = localEnv.time.split(':').map(Number)
    const totalSeconds = h * 3600 + m * 60 + s + (8 * 3600)
    
    const newH = Math.floor(totalSeconds / 3600) % 24
    const newM = Math.floor((totalSeconds % 3600) / 60)
    const newS = totalSeconds % 60
    
    const newTime = `${String(newH).padStart(2, '0')}:${String(newM).padStart(2, '0')}:${String(newS).padStart(2, '0')}`
    
    let newTimeOfDay: 'manha' | 'tarde' | 'noite' = 'noite'
    if (newH >= 6 && newH < 12) newTimeOfDay = 'manha'
    else if (newH >= 12 && newH < 18) newTimeOfDay = 'tarde'
    
    setLocalEnv(prev => ({ ...prev, time: newTime, timeOfDay: newTimeOfDay }))
  }

  const handleShortRest = () => {
    const [h, m, s] = localEnv.time.split(':').map(Number)
    const totalSeconds = h * 3600 + m * 60 + s + 3600
    
    const newH = Math.floor(totalSeconds / 3600) % 24
    const newM = Math.floor((totalSeconds % 3600) / 60)
    const newS = totalSeconds % 60
    
    const newTime = `${String(newH).padStart(2, '0')}:${String(newM).padStart(2, '0')}:${String(newS).padStart(2, '0')}`
    
    let newTimeOfDay: 'manha' | 'tarde' | 'noite' = 'noite'
    if (newH >= 6 && newH < 12) newTimeOfDay = 'manha'
    else if (newH >= 12 && newH < 18) newTimeOfDay = 'tarde'
    
    setLocalEnv(prev => ({ ...prev, time: newTime, timeOfDay: newTimeOfDay }))
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
            src="https://api.builder.io/api/v1/image/assets/TEMP/512e64c9fd08d4e53b8f3e01e6655a64d98442fb?width=618"
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
            className="text-center font-grenze text-lg text-[#FFC592] mb-6 px-4"
            style={{
              textShadow: '1px 0 10px rgba(219, 171, 41, 0.02), 1px 0 9px rgba(219, 171, 41, 0.15), 0 0 8px rgba(219, 171, 41, 0.50), 0 0 6px rgba(219, 171, 41, 0.85), 0 0 3px rgba(219, 171, 41, 0.98)'
            }}
          >
            Controle o fluxo do mundo ao seu desejar
          </h2>

          <div className="flex justify-center mb-4">
            <div className="relative">
              <div 
                className="absolute inset-0 rounded-full m-auto"
                style={{
                  width: '115px',
                  height: '115px',
                  background: 'rgba(207, 127, 47, 0.30)',
                  filter: 'blur(8px)'
                }}
              />
              <svg width="139" height="139" viewBox="0 0 139 139" fill="none" className="w-32 h-32 relative z-10">
                <path d="M110.042 127.417H115.834V115.833H110.042V110.042C110.033 103.005 108.196 96.0921 104.71 89.9799C101.225 83.8676 96.2105 78.7662 90.1592 75.1758C88.1032 73.9595 86.8753 72.0077 86.8753 69.9575V69.0424C86.8753 66.9921 88.1032 65.0403 90.1534 63.8299C96.2027 60.2354 101.216 55.1324 104.702 49.0199C108.188 42.9075 110.028 35.9949 110.042 28.9583V23.1666H115.834V11.5833H23.167V23.1666H28.9587V28.9583C28.9727 35.9949 30.8127 42.9075 34.2989 49.0199C37.785 55.1324 42.7979 60.2354 48.8472 63.8299C50.8975 65.0403 52.1253 66.9863 52.1253 69.0424V69.9575C52.1253 72.0077 50.8975 73.9595 48.8472 75.17C42.7979 78.7645 37.785 83.8675 34.2989 89.9799C30.8127 96.0923 28.9727 103.005 28.9587 110.042V115.833H23.167V127.417H110.042ZM98.4587 23.1666V28.9583C98.452 35.2266 96.4115 41.3236 92.6438 46.3333H46.3568C42.5891 41.3236 40.5487 35.2266 40.542 28.9583V23.1666H98.4587ZM54.7316 85.149C60.3553 81.8246 63.7087 76.1488 63.7087 69.9575V69.4999H75.292V69.9575C75.292 76.143 78.6454 81.8246 84.2749 85.149C89.4789 88.246 93.576 92.9024 95.9856 98.4583H43.015C45.4261 92.9016 49.5254 88.2451 54.7316 85.149Z" fill="#D5A82D"/>
              </svg>
            </div>
          </div>

          <div className="text-center space-y-3 mb-6">
            <div className="text-lg font-grenze text-[#FFC592]">{localEnv.time}</div>
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="px-6 py-2 rounded-lg bg-[#D5A82D] text-[#5B300B] font-grenze hover:scale-105 transition-transform"
            >
              {isPaused ? '▶ Iniciar' : '❚❚ Pausar'}
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center justify-center w-12 h-12 rounded-full text-[#D5A82D] hover:text-[#FFC592] hover:scale-105 transition-transform">
                <svg width="24" height="24" viewBox="0 0 24 24" className="w-6 h-6 md:w-8 md:h-8" fill="none" aria-hidden>
                  <path fill="currentColor" d="M19 4h-2V3a1 1 0 0 0-2 0v1H9V3a1 1 0 0 0-2 0v1H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m1 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7h16Zm0-9H4V7a1 1 0 0 1 1-1h2v1a1 1 0 0 0 2 0V6h6v1a1 1 0 0 0 2 0V6h2a1 1 0 0 1 1 1Z" />
                </svg>
              </div>
              <input
                type="text"
                value={localEnv.date}
                onChange={(e) => setLocalEnv({ ...localEnv, date: e.target.value })}
                className="w-full bg-transparent border-b border-[#FFC592] text-[#FFC592] font-grenze text-center text-sm outline-none py-1"
                placeholder="01/01/01"
              />
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center justify-center w-12 h-12 rounded-full text-[#D5A82D] hover:text-[#FFC592] hover:scale-105 transition-transform">
                <svg width="24" height="24" viewBox="0 0 24 24" className="w-6 h-6 md:w-8 md:h-8" aria-hidden>
                  <path fill="currentColor" d="M14.19 14.19L6 18l3.81-8.19L18 6m-6-4A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 8.9a1.1 1.1 0 0 0-1.1 1.1a1.1 1.1 0 0 0 1.1 1.1a1.1 1.1 0 0 0 1.1-1.1a1.1 1.1 0 0 0-1.1-1.1" />
                </svg>
              </div>
              <select
                value={localEnv.wind}
                onChange={(e) => setLocalEnv({ ...localEnv, wind: e.target.value })}
                className="w-full bg-transparent border-b border-[#FFC592] text-[#FFC592] font-grenze text-center text-sm outline-none py-1"
              >
                <option className="bg-[#5B300B]">Vento calmo</option>
                <option className="bg-[#5B300B]">Brisa leve</option>
                <option className="bg-[#5B300B]">Vento forte</option>
                <option className="bg-[#5B300B]">Tempestade</option>
              </select>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center justify-center w-12 h-12 rounded-full text-[#D5A82D] hover:text-[#FFC592] hover:scale-105 transition-transform">
                <svg width="24" height="24" viewBox="0 0 24 24" className="w-6 h-6 md:w-8 md:h-8" aria-hidden>
                  <path fill="currentColor" fillRule="evenodd" d="M17.5 16.5a5.5 5.5 0 1 1-8.939-4.293c.264-.211.439-.521.439-.86V5a3 3 0 1 1 6 0v6.348c0 .338.175.648.439.86A5.49 5.49 0 0 1 17.5 16.5M12 4.25a.75.75 0 0 1 .75.75v8.38c0 .437.297.808.658 1.054a2.5 2.5 0 1 1-2.816 0c.36-.246.658-.617.658-1.054V5a.75.75 0 0 1 .75-.75" clipRule="evenodd"/>
                </svg>
              </div>
              <select
                value={localEnv.temperature}
                onChange={(e) => setLocalEnv({ ...localEnv, temperature: e.target.value })}
                className="w-full bg-transparent border-b border-[#FFC592] text-[#FFC592] font-grenze text-center text-sm outline-none py-1"
              >
                <option className="bg-[#5B300B]">Frio</option>
                <option className="bg-[#5B300B]">Normal</option>
                <option className="bg-[#5B300B]">Quente</option>
                <option className="bg-[#5B300B]">Muito quente</option>
              </select>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center justify-center w-12 h-12 rounded-full text-[#D5A82D] hover:text-[#FFC592] hover:scale-105 transition-transform">
                <svg width="24" height="24" viewBox="0 0 24 24" className="w-6 h-6 md:w-8 md:h-8" fill="none" aria-hidden>
                  <g fill="none">
                    <path d="M2 16.533C2 18.448 3.612 20 5.6 20h9.9c2.485 0 4.5-1.94 4.5-4.333c0-1.607-.907-3.008-2.256-3.757a4.6 4.6 0 0 0-2.319-.576c-.353-2.033-1.932-3.665-3.98-4.171A5.6 5.6 0 0 0 10.1 7c-2.982 0-5.4 2.328-5.4 5.2q0 .49.09.955C3.193 13.508 2 14.887 2 16.533"/>
                    <path d="M15.5 11.333h-.074c-.354-2.032-1.932-3.664-3.98-4.17A4 4 0 0 1 19 9a4 4 0 0 1-1.255 2.91a4.6 4.6 0 0 0-2.245-.577"/>
                  </g>
                  <path stroke="currentColor" strokeLinecap="square" strokeWidth="2" d="M15.5 11.333h-.074c-.354-2.032-1.932-3.664-3.98-4.17A4 4 0 0 1 19.002 9a4 4 0 0 1-1.256 2.91a4.6 4.6 0 0 0-2.244-.577Zm-5.444-7.281l-.002.002l-.003-.003l.002-.002zM15 2h.004v.004h-.003zm4.952 2.049l.002.002l-.003.003l-.002-.002zM22.005 9v.004H22V9z" />
                  <path stroke="currentColor" strokeLinecap="square" strokeWidth="2" d="M2 16.533C2 18.448 3.612 20 5.6 20h9.9c2.485 0 4.5-1.94 4.5-4.333c0-1.607-.907-3.008-2.256-3.757a4.6 4.6 0 0 0-2.319-.576c-.353-2.033-1.932-3.665-3.98-4.171A5.6 5.6 0 0 0 10.1 7c-2.982 0-5.4 2.328-5.4 5.2q0 .49.09.955C3.193 13.508 2 14.887 2 16.533Z" />
                </svg>
              </div>
              <select
                value={localEnv.weather}
                onChange={(e) => setLocalEnv({ ...localEnv, weather: e.target.value })}
                className="w-full bg-transparent border-b border-[#FFC592] text-[#FFC592] font-grenze text-center text-sm outline-none py-1"
              >
                <option className="bg-[#5B300B]">Limpo</option>
                <option className="bg-[#5B300B]">Nublado</option>
                <option className="bg-[#5B300B]">Chuva</option>
                <option className="bg-[#5B300B]">Tempestade</option>
              </select>
            </div>
          </div>

          <div className="text-center mb-4">
            <p className="font-grenze text-sm text-[#FFC592] mb-3">
              {localEnv.timeOfDay === 'manha' && 'Manhã - Tempo até o anoitecer'}
              {localEnv.timeOfDay === 'tarde' && 'Tarde - Tempo até o anoitecer'}
              {localEnv.timeOfDay === 'noite' && 'Noite - Tempo até o amanhecer'}
            </p>

            <div className="flex gap-2 justify-center mb-4">
              <button
                onClick={handleShortRest}
                className="flex-1 px-3 py-2 rounded-lg bg-[#CF7F2F] bg-opacity-30 text-[#FFC592] font-grenze text-xs hover:bg-opacity-50 transition-all"
              >
                Short Rest (+1h)
              </button>
              <button
                onClick={handleLongRest}
                className="flex-1 px-3 py-2 rounded-lg bg-[#CF7F2F] bg-opacity-30 text-[#FFC592] font-grenze text-xs hover:bg-opacity-50 transition-all"
              >
                Long Rest (+8h)
              </button>
            </div>
          </div>

          <button
            onClick={handleSave}
            className="w-full py-2.5 rounded-lg bg-[#D5A82D] text-[#5B300B] font-grenze text-lg hover:scale-105 transition-transform"
          >
            Salvar
          </button>
        </div>
      </div>
    </div>
  )
}
