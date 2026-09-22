import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { site } from '@/content/data'

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY)

  const body = await req.json().catch(() => ({}))
  const { name, email, phone, date, guests, message } = body

  if (!name || !email) {
    return NextResponse.json({ error: 'Nombre y email son obligatorios' }, { status: 400 })
  }

  const { error } = await resend.emails.send({
    from: `${site.name} Web <noreply@parabataiaurea.com>`,
    to: [site.email],
    replyTo: email,
    subject: `Nueva consulta de boda de ${name}`,
    text: [
      `Nombre: ${name}`,
      `Email: ${email}`,
      `Telefono: ${phone || '-'}`,
      `Fecha del evento: ${date || '-'}`,
      `Invitados: ${guests || '-'}`,
      ``,
      `Mensaje:`,
      message || '-',
    ].join('\n'),
  })

  if (error) {
    console.error('Resend error:', error)
    return NextResponse.json({ error: 'Error al enviar email' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
