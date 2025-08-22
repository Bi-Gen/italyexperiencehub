import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

console.log('Supabase config:', {
  url: supabaseUrl ? 'Set' : 'Missing',
  key: supabaseAnonKey ? 'Set' : 'Missing'
})

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Tipi TypeScript per il database
export interface Subscriber {
  id: number
  email: string
  source: string
  status: 'active' | 'unsubscribed'
  subscribed_at: string
  unsubscribed_at?: string
}