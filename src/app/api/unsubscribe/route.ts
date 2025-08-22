import { NextRequest, NextResponse } from 'next/server'

const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY
const MAILCHIMP_AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID
const MAILCHIMP_API_SERVER = process.env.MAILCHIMP_API_SERVER

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    console.log('Unsubscribe API called for:', email)

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

    // Hash dell'email per Mailchimp API
    const crypto = require('crypto')
    const emailHash = crypto.createHash('md5').update(email.toLowerCase()).digest('hex')
    
    // URL per update member status
    const url = `https://${MAILCHIMP_API_SERVER}.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members/${emailHash}`
    
    const data = {
      status: 'unsubscribed'
    }

    const response = await fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${MAILCHIMP_API_KEY}`
      },
      body: JSON.stringify(data)
    })

    const result = await response.json()

    console.log('Mailchimp unsubscribe response:', {
      status: response.status,
      success: response.ok,
      result
    })

    if (response.ok) {
      return NextResponse.json({ 
        success: true, 
        message: 'Disiscrizione completata con successo' 
      })
    } else {
      // Gestione errori specifici
      if (response.status === 404) {
        return NextResponse.json({
          error: 'Questa email non è presente nella nostra lista'
        }, { status: 404 })
      }
      
      console.error('Mailchimp unsubscribe error:', result)
      return NextResponse.json({
        error: `Errore durante la disiscrizione: ${result.detail || 'Errore sconosciuto'}`
      }, { status: 400 })
    }

  } catch (error) {
    console.error('Unsubscribe API error:', error)
    return NextResponse.json(
      { error: 'Errore interno del server' },
      { status: 500 }
    )
  }
}

// GET method per unsubscribe via email link
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const email = searchParams.get('email')
  
  if (!email) {
    return NextResponse.redirect(new URL('/unsubscribe?error=missing-email', request.url))
  }

  // Auto-unsubscribe and redirect to confirmation page
  try {
    const unsubscribeResponse = await fetch(`${request.nextUrl.origin}/api/unsubscribe`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })

    if (unsubscribeResponse.ok) {
      return NextResponse.redirect(new URL(`/unsubscribe?success=true&email=${encodeURIComponent(email)}`, request.url))
    } else {
      return NextResponse.redirect(new URL('/unsubscribe?error=failed', request.url))
    }
  } catch (error) {
    return NextResponse.redirect(new URL('/unsubscribe?error=server', request.url))
  }
}