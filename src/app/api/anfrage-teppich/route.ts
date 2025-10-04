import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, message, teppichId, teppichName } = body

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Bitte füllen Sie alle Pflichtfelder aus.' },
        { status: 400 }
      )
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Email content
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: 'persian-carpets@gmx.de',
      subject: `Teppich-Anfrage: ${teppichName || 'Allgemeine Anfrage'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #b91c1c;">Teppich-Anfrage von ${name}</h2>

          ${teppichName ? `
            <div style="background-color: #fef2f2; border-left: 4px solid #b91c1c; padding: 16px; margin: 20px 0;">
              <h3 style="margin: 0 0 8px 0; color: #b91c1c;">Angefragter Teppich:</h3>
              <p style="margin: 0; font-size: 16px; font-weight: bold;">${teppichName}</p>
              ${teppichId ? `<p style="margin: 4px 0 0 0; font-size: 14px; color: #6b7280;">ID: ${teppichId}</p>` : ''}
            </div>
          ` : ''}

          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Kontaktdaten:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>E-Mail:</strong> <a href="mailto:${email}" style="color: #b91c1c;">${email}</a></p>
            ${phone ? `<p><strong>Telefon:</strong> <a href="tel:${phone}" style="color: #b91c1c;">${phone}</a></p>` : ''}
          </div>

          <div style="margin: 20px 0;">
            <h3>Nachricht:</h3>
            <p style="white-space: pre-wrap; background-color: #f9fafb; padding: 16px; border-radius: 8px;">${message}</p>
          </div>

          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />

          <p style="color: #6b7280; font-size: 14px;">
            Diese Anfrage wurde über das Angebots-Formular auf teppich-frankfurt.de gesendet.
          </p>
        </div>
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'Anfrage erfolgreich gesendet!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending teppich inquiry email:', error)
    return NextResponse.json(
      { error: 'Fehler beim Senden der Anfrage. Bitte versuchen Sie es später erneut.' },
      { status: 500 }
    )
  }
}
