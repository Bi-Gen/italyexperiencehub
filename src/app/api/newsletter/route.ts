import { NextRequest, NextResponse } from 'next/server'

const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY
const MAILCHIMP_AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID
const MAILCHIMP_API_SERVER = process.env.MAILCHIMP_API_SERVER // es: us12

export async function POST(request: NextRequest) {
  try {
    const { email, source = 'website' } = await request.json()

    // Validazione email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Email non valida' },
        { status: 400 }
      )
    }

    // Verifica configurazione Mailchimp
    if (!MAILCHIMP_API_KEY || !MAILCHIMP_AUDIENCE_ID || !MAILCHIMP_API_SERVER) {
      console.error('Mailchimp configuration missing')
      return NextResponse.json(
        { error: 'Configurazione newsletter non disponibile' },
        { status: 500 }
      )
    }

    // Chiamata API Mailchimp
    const url = `https://${MAILCHIMP_API_SERVER}.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members`
    
    const data = {
      email_address: email,
      status: 'subscribed',
      merge_fields: {
        SOURCE: source
      },
      tags: ['italia-experience-hub']
    }

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${MAILCHIMP_API_KEY}`
      },
      body: JSON.stringify(data)
    })

    const result = await response.json()

    if (response.ok) {
      return NextResponse.json({ 
        success: true, 
        message: 'Iscrizione completata con successo!' 
      })
    } else {
      // Gestione errori specifici Mailchimp
      if (result.title === 'Member Exists') {
        return NextResponse.json({
          error: 'Questo indirizzo email è già iscritto alla newsletter'
        }, { status: 400 })
      }
      
      console.error('Mailchimp error:', result)
      return NextResponse.json({
        error: 'Errore durante l\'iscrizione. Riprova più tardi.'
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