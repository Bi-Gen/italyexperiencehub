import { NextRequest, NextResponse } from 'next/server'
import { unsubscribeUser } from '@/lib/subscribers'

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    console.log('Unsubscribe request for:', email)

    // Validazione email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Email non valida' },
        { status: 400 }
      )
    }

    // Rimuovi subscription dal nostro database
    const success = await unsubscribeUser(email)
    
    if (success) {
      return NextResponse.json({ 
        success: true, 
        message: 'Disiscrizione completata con successo' 
      })
    } else {
      return NextResponse.json({
        error: 'Errore durante la disiscrizione'
      }, { status: 500 })
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