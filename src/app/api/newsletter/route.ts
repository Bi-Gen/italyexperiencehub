import { NextRequest, NextResponse } from 'next/server'

const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY
const MAILCHIMP_AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID
const MAILCHIMP_API_SERVER = process.env.MAILCHIMP_API_SERVER // es: us12

export async function POST(request: NextRequest) {
  try {
    const { email, source = 'website' } = await request.json()

    // Debug logging
    console.log('Newsletter API called with:', { email, source })
    console.log('Environment check:', {
      hasApiKey: !!MAILCHIMP_API_KEY,
      hasAudienceId: !!MAILCHIMP_AUDIENCE_ID,
      hasServer: !!MAILCHIMP_API_SERVER,
      server: MAILCHIMP_API_SERVER
    })

    // Validazione email
    if (!email || !email.includes('@')) {
      console.log('Email validation failed:', email)
      return NextResponse.json(
        { error: 'Email non valida' },
        { status: 400 }
      )
    }

    // Verifica configurazione Mailchimp
    if (!MAILCHIMP_API_KEY || !MAILCHIMP_AUDIENCE_ID || !MAILCHIMP_API_SERVER) {
      console.error('Mailchimp configuration missing:', {
        apiKey: !!MAILCHIMP_API_KEY,
        audienceId: !!MAILCHIMP_AUDIENCE_ID,
        server: !!MAILCHIMP_API_SERVER
      })
      return NextResponse.json(
        { error: 'Configurazione newsletter non disponibile' },
        { status: 500 }
      )
    }

    // Chiamata API Mailchimp
    const url = `https://${MAILCHIMP_API_SERVER}.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members`
    
    const data = {
      email_address: email,
      status: 'subscribed'
    }

    console.log('Sending minimal data to Mailchimp:', {
      url,
      data: data,
      timestamp: new Date().toISOString()
    })

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${MAILCHIMP_API_KEY}`
      },
      body: JSON.stringify(data)
    })

    const result = await response.json()

    console.log('Mailchimp response status:', response.status)
    console.log('Mailchimp response:', result)

    if (response.ok) {
      return NextResponse.json({ 
        success: true, 
        message: 'Iscrizione completata con successo!' 
      })
    } else {
      // Gestione errori specifici Mailchimp
      if (result.title === 'Member Exists') {
        return NextResponse.json({
          error: '✅ Questa email è già iscritta alla nostra newsletter!'
        }, { status: 400 })
      }
      
      console.error('Mailchimp error details:', {
        status: response.status,
        statusText: response.statusText,
        error: result
      })
      return NextResponse.json({
        error: `Errore Mailchimp: ${result.detail || result.title || 'Errore sconosciuto'}`
      }, { status: 400 })
    }

  } catch (error) {
    console.error('Newsletter API error:', error)
    return NextResponse.json(
      { error: 'Errore interno del server' },
      { status: 500 }
    )
  }
}