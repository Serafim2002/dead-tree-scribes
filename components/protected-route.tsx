'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useUser } from '@/lib/useUser'

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const { user, loading } = useUser()

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login')
    }
  }, [user, loading, router])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <p className="font-grenze text-2xl text-accent">Carregando...</p>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return <>{children}</>
}
