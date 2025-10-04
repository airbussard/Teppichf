import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, description, images } = body

    // Validate input
    if (!name || !email || !description) {
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

    // Prepare attachments from base64 images
    const attachments = images?.map((image: any, index: number) => ({
      filename: `teppich_${index + 1}.${image.type.split('/')[1]}`,
      content: image.data.split(',')[1],
      encoding: 'base64',
    })) || []

    // Email content
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: 'info@knmail.de',
      subject: `Teppichankauf-Anfrage von ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #b91c1c;">Teppichankauf-Anfrage</h2>
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>E-Mail:</strong> ${email}</p>
            ${phone ? `<p><strong>Telefon:</strong> ${phone}</p>` : ''}
          </div>
          <div style="margin: 20px 0;">
            <h3>Teppichbeschreibung:</h3>
            <p style="white-space: pre-wrap;">${description}</p>
          </div>
          ${images && images.length > 0 ? `
            <div style="margin: 20px 0;">
              <p><strong>Anzahl Bilder:</strong> ${images.length}</p>
              <p style="font-size: 12px; color: #6b7280;">Bilder sind als Anhänge beigefügt</p>
            </div>
          ` : ''}
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
          <p style="color: #6b7280; font-size: 14px;">
            Diese Anfrage wurde über das Ankauf-Formular auf teppich-frankfurt.de gesendet.
          </p>
        </div>
      `,
      attachments,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'Anfrage erfolgreich gesendet!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending ankauf email:', error)
    return NextResponse.json(
      { error: 'Fehler beim Senden der Anfrage. Bitte versuchen Sie es später erneut.' },
      { status: 500 }
    )
  }
}
