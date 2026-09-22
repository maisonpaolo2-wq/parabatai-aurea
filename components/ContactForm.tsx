'use client'

import { useState } from 'react'
import { site } from '@/content/data'

type Status = 'idle' | 'loading' | 'ok' | 'error'

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: '',
    message: '',
  })
  const [status, setStatus] = useState<Status>('idle')

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }))

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus(res.ok ? 'ok' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'ok') {
    return (
      <div className="form-ok">
        <div className="form-ok-icon">✦</div>
        <h3>Mensaje recibido</h3>
        <p>Nos ponemos en contacto contigo en menos de 24 horas.</p>
      </div>
    )
  }

  return (
    <form className="form" onSubmit={submit}>
      <div className="form-row">
        <div className="form-field">
          <label className="form-label" htmlFor="name">Nombre</label>
          <input
            id="name"
            className="form-input"
            type="text"
            value={form.name}
            onChange={set('name')}
            required
            autoComplete="name"
          />
        </div>
        <div className="form-field">
          <label className="form-label" htmlFor="email">Email</label>
          <input
            id="email"
            className="form-input"
            type="email"
            value={form.email}
            onChange={set('email')}
            required
            autoComplete="email"
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-field">
          <label className="form-label" htmlFor="date">Fecha del evento</label>
          <input
            id="date"
            className="form-input"
            type="date"
            value={form.date}
            onChange={set('date')}
          />
        </div>
        <div className="form-field">
          <label className="form-label" htmlFor="guests">Numero de invitados</label>
          <input
            id="guests"
            className="form-input"
            type="number"
            min="1"
            value={form.guests}
            onChange={set('guests')}
            placeholder="Aprox."
          />
        </div>
      </div>

      <div className="form-field">
        <label className="form-label" htmlFor="phone">Telefono</label>
        <input
          id="phone"
          className="form-input"
          type="tel"
          value={form.phone}
          onChange={set('phone')}
          autoComplete="tel"
        />
      </div>

      <div className="form-field">
        <label className="form-label" htmlFor="message">Cuentanos tu idea</label>
        <textarea
          id="message"
          className="form-textarea"
          value={form.message}
          onChange={set('message')}
          rows={4}
          placeholder="Tipo de evento, estilo que buscas, dudas..."
        />
      </div>

      {status === 'error' && (
        <p className="form-error-msg">
          Algo ha fallado. Escribenos directamente a{' '}
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>
      )}

      <button
        className="btn btn-amber form-submit"
        type="submit"
        disabled={status === 'loading'}
      >
        {status === 'loading' ? 'Enviando...' : 'Enviar consulta'}
      </button>
    </form>
  )
}
