import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

console.log('Supabase config:', {
  url: supabaseUrl ? 'Set' : 'Missing',
  anonKey: supabaseAnonKey ? 'Set' : 'Missing',
  serviceKey: supabaseServiceKey ? 'Set' : 'Missing'
})

// Client con anon key per operazioni di lettura
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Client con service role key per operazioni di scrittura (server-side only)
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey)

// Tipi TypeScript per il database
export interface Subscriber {
  id: number
  email: string
  source: string
  status: 'active' | 'unsubscribed'
  subscribed_at: string
  unsubscribed_at?: string
}