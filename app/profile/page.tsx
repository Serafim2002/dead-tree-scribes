"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"
import Image from "next/image"

export default function ProfilePage() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getUser = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) {
        router.push("/login")
        return
      }
      setUser(session.user)
      setLoading(false)
    }

    getUser()
  }, [router])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#2D1705]">
        <p className="font-grenze text-2xl text-[#EBF2BD]">Carregando...</p>
      </div>
    )
  }

  return (
    <section className="relative min-h-screen py-8 md:py-12 bg-[#2D1705]">
      {/* Background parchment image */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1024px] h-[980px] rotate-90">
          <Image
            src="https://api.builder.io/api/v1/image/assets/TEMP/ac9efc554c551602587ec39c6fdb3246d7f7ed27?width=2048"
            alt=""
            fill
            className="object-cover blur-[3.5px] opacity-100"
            priority
          />
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto w-full px-4 space-y-8">
        {/* Title */}
        <div className="text-center">
          <h1 
            className="font-grenze text-5xl sm:text-6xl md:text-7xl font-normal tracking-wide"
            style={{ 
              color: '#EBF2BD',
              textShadow: '0 0 10px rgba(221, 199, 60, 0.02), 0 0 9px rgba(221, 199, 60, 0.15), 0 0 8px rgba(221, 199, 60, 0.50), 0 0 6px rgba(221, 199, 60, 0.85), 0 0 3px rgba(221, 199, 60, 0.98)' 
            }}
          >
            Minha Conta
          </h1>
        </div>

        {/* Profile Card */}
        <div 
          className="max-w-2xl mx-auto p-8 rounded-3xl"
          style={{
            background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 17.71%, rgba(255, 237, 37, 0.11) 83.65%), rgba(115, 53, 8, 0.85)',
            boxShadow: '0 752px 210px 0 rgba(0, 0, 0, 0.01), 0 481px 192px 0 rgba(0, 0, 0, 0.04), 0 271px 162px 0 rgba(0, 0, 0, 0.15), 0 120px 120px 0 rgba(0, 0, 0, 0.26), 0 30px 66px 0 rgba(0, 0, 0, 0.29)',
          }}
        >
          <div className="space-y-6">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto rounded-full bg-[#D5A82D] flex items-center justify-center mb-4">
                <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12" style={{ color: '#5B300B' }}>
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM12 19.2C9.5 19.2 7.29 17.92 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97 13.99 18 15.98C16.71 17.92 14.5 19.2 12 19.2Z" fill="currentColor"/>
                </svg>
              </div>
              <h2 className="font-grenze text-3xl mb-2" style={{ color: '#EBF2BD' }}>
                {user?.user_metadata?.username || "Aventureiro"}
              </h2>
              <p className="font-grenze text-lg" style={{ color: '#FFC592' }}>
                {user?.email}
              </p>
            </div>

            <div className="border-t-2 pt-6" style={{ borderColor: '#EBF2BD' }}>
              <div className="space-y-4">
                <div>
                  <label className="block font-grenze text-lg mb-1" style={{ color: '#EBF2BD' }}>
                    Nome de Usuário
                  </label>
                  <div 
                    className="px-4 py-3 rounded-lg border-2"
                    style={{
                      borderColor: '#EBF2BD',
                      background: 'rgba(207, 127, 47, 0.50)',
                      color: '#EBF2BD'
                    }}
                  >
                    {user?.user_metadata?.username || "N/A"}
                  </div>
                </div>

                <div>
                  <label className="block font-grenze text-lg mb-1" style={{ color: '#EBF2BD' }}>
                    Email
                  </label>
                  <div 
                    className="px-4 py-3 rounded-lg border-2"
                    style={{
                      borderColor: '#EBF2BD',
                      background: 'rgba(207, 127, 47, 0.50)',
                      color: '#EBF2BD'
                    }}
                  >
                    {user?.email}
                  </div>
                </div>

                <div>
                  <label className="block font-grenze text-lg mb-1" style={{ color: '#EBF2BD' }}>
                    Membro desde
                  </label>
                  <div 
                    className="px-4 py-3 rounded-lg border-2"
                    style={{
                      borderColor: '#EBF2BD',
                      background: 'rgba(207, 127, 47, 0.50)',
                      color: '#EBF2BD'
                    }}
                  >
                    {new Date(user?.created_at).toLocaleDateString('pt-BR')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
