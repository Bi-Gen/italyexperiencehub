import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { addSubscriber, isSubscribed, WELCOME_EMAIL_TEMPLATE } from '@/lib/subscribers'

const RESEND_API_KEY = process.env.RESEND_API_KEY
const resend = new Resend(RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { email, source = 'website' } = await request.json()

    console.log('Newsletter signup with Resend:', { email, source, timestamp: new Date().toISOString() })
    
    // Debug environment variables
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    const resendKey = process.env.RESEND_API_KEY
    
    console.log('Environment variables check:', {
      supabaseUrl: supabaseUrl ? 'SET' : 'MISSING',
      supabaseKey: supabaseKey ? 'SET' : 'MISSING', 
      resendKey: resendKey ? 'SET' : 'MISSING'
    })

    // Validazione email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Email non valida' },
        { status: 400 }
      )
    }

    // Verifica configurazione Supabase
    if (!supabaseUrl || !supabaseKey) {
      console.error('Supabase environment variables missing')
      return NextResponse.json(
        { error: 'Database non configurato correttamente' },
        { status: 500 }
      )
    }

    // Verifica configurazione Resend
    if (!RESEND_API_KEY) {
      console.error('Resend API key missing')
      return NextResponse.json(
        { error: 'Configurazione email non disponibile' },
        { status: 500 }
      )
    }

    // Controlla se già iscritto
    const alreadySubscribed = await isSubscribed(email)
    if (alreadySubscribed) {
      return NextResponse.json({
        error: '✅ Questa email è già iscritta alla nostra newsletter!'
      }, { status: 400 })
    }

    // Aggiungi subscriber al database
    const saved = await addSubscriber(email, source)
    if (!saved) {
      return NextResponse.json({
        error: 'Errore nel salvare la subscription'
      }, { status: 500 })
    }

    // Invia email di benvenuto
    try {
      const emailContent = WELCOME_EMAIL_TEMPLATE.replace('{{EMAIL}}', encodeURIComponent(email))
      
      await resend.emails.send({
        from: 'Italy Experience Hub <noreply@italyexperiencehub.com>',
        to: [email],
        subject: '🎉 Benvenuto in Italy Experience Hub - La tua guida Milano ti aspetta!',
        html: emailContent,
      })

      console.log('Welcome email sent successfully to:', email)
    } catch (emailError) {
      console.error('Failed to send welcome email:', emailError)
      // Non blocchiamo l'iscrizione se l'email fallisce
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Iscrizione completata! Controlla la tua email per la guida gratuita.' 
    })

  } catch (error) {
    console.error('Newsletter API error:', error)
    return NextResponse.json(
      { error: 'Errore interno del server' },
      { status: 500 }
    )
  }
}