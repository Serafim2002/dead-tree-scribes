'use client'

import { useEffect, useState } from 'react'

export interface User {
  user_metadata: any
  id: string
  email: string
  username: string
  password?: string
  created_at?: string
}

export function useUser() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Buscar usuário do localStorage
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser))
      } catch {
        localStorage.removeItem('user')
        setUser(null)
      }
    }
    setLoading(false)
  }, [])

  const logout = () => {
    localStorage.removeItem('user')
    setUser(null)
  }

  return { user, loading, logout }
}
