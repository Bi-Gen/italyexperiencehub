// Sistema semplice per gestire subscribers
// In produzione potresti usare un database come Supabase, PlanetScale, etc.

interface Subscriber {
  email: string
  source: string
  subscribed_at: string
  status: 'active' | 'unsubscribed'
}

// Per ora usiamo un file JSON per demo
// In produzione sostituirai con database vero
const SUBSCRIBERS_FILE = 'subscribers.json'

export async function addSubscriber(email: string, source: string): Promise<boolean> {
  try {
    // In una app reale, qui faresti una chiamata al database
    // Per ora simuliamo il salvataggio
    console.log('Adding subscriber:', { email, source, timestamp: new Date() })
    
    // Simulate successful save
    return true
  } catch (error) {
    console.error('Error adding subscriber:', error)
    return false
  }
}

export async function isSubscribed(email: string): Promise<boolean> {
  try {
    // In una app reale, qui controlleresti il database
    // Per ora simuliamo che non ci siano duplicati
    console.log('Checking if subscribed:', email)
    return false
  } catch (error) {
    console.error('Error checking subscription:', error)
    return false
  }
}

export async function unsubscribeUser(email: string): Promise<boolean> {
  try {
    // In una app reale, qui aggiorneresti lo status nel database
    console.log('Unsubscribing user:', email)
    return true
  } catch (error) {
    console.error('Error unsubscribing user:', error)
    return false
  }
}

// Email templates
export const WELCOME_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Benvenuto in Italy Experience Hub</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f8f9fa;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8f9fa; padding: 20px 0;">
        <tr>
            <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; max-width: 600px; width: 100%;">
                    <!-- Header -->
                    <tr>
                        <td style="background: linear-gradient(135deg, #16a085 0%, #2ecc71 100%); padding: 40px 30px; text-align: center;">
                            <h1 style="color: #ffffff; font-size: 28px; font-weight: bold; margin: 0; letter-spacing: -0.5px;">
                                Italy<span style="color: #f1c40f;">Experience</span>
                            </h1>
                            <p style="color: rgba(255,255,255,0.9); font-size: 14px; margin: 5px 0 0 0; font-weight: 300;">Hub</p>
                        </td>
                    </tr>
                    
                    <!-- Welcome Message -->
                    <tr>
                        <td style="padding: 40px 30px 30px 30px; text-align: center;">
                            <h2 style="color: #2c3e50; font-size: 24px; font-weight: bold; margin: 0 0 15px 0;">
                                🎉 Benvenuto nella Community!
                            </h2>
                            <p style="color: #7f8c8d; font-size: 16px; line-height: 1.6; margin: 0 0 25px 0;">
                                Grazie per esserti iscritto alla nostra newsletter! Sei ufficialmente parte della famiglia Italy Experience Hub.
                            </p>
                        </td>
                    </tr>
                    
                    <!-- Lead Magnet -->
                    <tr>
                        <td style="padding: 30px;">
                            <table width="100%" cellpadding="0" cellspacing="0" style="background: linear-gradient(135deg, #f8f9fa 0%, #e8f5e8 100%); border-radius: 8px; border: 2px solid #27ae60;">
                                <tr>
                                    <td style="padding: 30px; text-align: center;">
                                        <div style="font-size: 48px; margin-bottom: 15px;">🏛️</div>
                                        <h3 style="color: #27ae60; font-size: 22px; font-weight: bold; margin: 0 0 10px 0;">
                                            REGALO DI BENVENUTO
                                        </h3>
                                        <h4 style="color: #2c3e50; font-size: 18px; font-weight: bold; margin: 0 0 15px 0;">
                                            Milano Insider Guide 2025
                                        </h4>
                                        <p style="color: #5a6c7d; font-size: 14px; line-height: 1.5; margin: 0 0 20px 0;">
                                            ✨ 25+ luoghi segreti<br>
                                            🍝 Ristoranti autentici<br>
                                            🎨 Musei nascosti<br>
                                            💡 Consigli da locals
                                        </p>
                                        <a href="https://italyexperiencehub.com/scarica/milano-guide-pdf" style="display: inline-block; background: linear-gradient(135deg, #27ae60 0%, #2ecc71 100%); color: #ffffff; text-decoration: none; padding: 15px 30px; border-radius: 25px; font-weight: bold; font-size: 16px;">
                                            📥 SCARICA LA GUIDA PDF
                                        </a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                        <td style="background-color: #2c3e50; padding: 25px 30px; text-align: center;">
                            <p style="color: #ffffff; font-size: 14px; font-weight: bold; margin: 0 0 10px 0;">
                                Italy Experience Hub
                            </p>
                            <p style="color: #95a5a6; font-size: 11px; margin: 0;">
                                Se non desideri più ricevere queste email, puoi <a href="https://italyexperiencehub.com/unsubscribe?email={{EMAIL}}" style="color: #3498db;">cancellarti qui</a>
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
`