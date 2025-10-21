import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

function makeMissingProxy(message?: string) {
  const errMsg = message ||
    'Supabase is not configured. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in your environment.'

  const authProxy = {
    async signInWithPassword() { throw new Error(errMsg) },
    async signUp() { throw new Error(errMsg) },
    async signInWithOAuth() { throw new Error(errMsg) },
    async resetPasswordForEmail() { throw new Error(errMsg) },
    async signOut() { throw new Error(errMsg) },
    async getSession() { return { data: { session: null } } },
    onAuthStateChange() { return { data: { subscription: { unsubscribe() {} } } } },
  }

  return new Proxy({}, {
    get() {
      return authProxy
    }
  })
}

let supabase: any

if (typeof window !== 'undefined') {
  if (!supabaseUrl || !supabaseAnonKey) {
    // Avoid throwing during module initialization; log informative warning instead
    // Runtime calls to supabase will throw with a helpful message
    // eslint-disable-next-line no-console
    console.warn('Supabase client not initialized: NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY is missing')
    supabase = makeMissingProxy()
  } else {
    supabase = createClient(supabaseUrl, supabaseAnonKey)
  }
} else {
  // On server, don't initialize browser client
  supabase = makeMissingProxy()
}

export { supabase }
