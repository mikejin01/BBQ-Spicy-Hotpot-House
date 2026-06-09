import { useState } from 'react'
import { details } from '../data.js'

const empty = { name: '', phone: '', date: '', guests: '2', notes: '' }

export default function Reserve() {
  const [form, setForm] = useState(empty)
  const [sent, setSent] = useState(false)

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="reserve" className="reserve section section--light">
      <div className="container reserve__grid">
        <div className="reserve__intro">
          <span className="section-head__cn section-head__cn--left" data-reveal>
            订位
          </span>
          <h2 data-reveal style={{ '--d': '0.06s' }}>
            Grab a seat, stay till 2am.
          </h2>
          <p data-reveal style={{ '--d': '0.12s' }}>
            Walk-ins are always welcome — or reserve ahead for the big nights.
            We're slinging skewers in the heart of Flushing, every night of the
            week.
          </p>

          <dl className="reserve__details" data-reveal style={{ '--d': '0.18s' }}>
            {details.map((d) => (
              <div key={d.label} className="reserve__detail">
                <dt>{d.label}</dt>
                <dd>{d.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="reserve__panel" data-reveal style={{ '--d': '0.1s' }}>
          {sent ? (
            <div className="reserve__thanks" role="status">
              <span className="reserve__thanks-cn">谢谢</span>
              <h3>Request received.</h3>
              <p>
                We'll confirm <strong>{form.name || 'your table'}</strong> for{' '}
                <strong>{form.guests}</strong> by phone shortly. The coals are
                already warming.
              </p>
              <button
                className="btn btn--outline"
                onClick={() => {
                  setForm(empty)
                  setSent(false)
                }}
              >
                Book Another
              </button>
            </div>
          ) : (
            <form className="reserve__form" onSubmit={onSubmit}>
              <label className="field">
                <span>Name</span>
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  required
                  placeholder="Your name"
                  value={form.name}
                  onChange={update('name')}
                />
              </label>

              <label className="field">
                <span>Phone</span>
                <input
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  required
                  placeholder="(000) 000-0000"
                  value={form.phone}
                  onChange={update('phone')}
                />
              </label>

              <div className="field-row">
                <label className="field">
                  <span>Date</span>
                  <input
                    type="date"
                    name="date"
                    required
                    value={form.date}
                    onChange={update('date')}
                  />
                </label>
                <label className="field field--guests">
                  <span>Guests</span>
                  <select
                    name="guests"
                    value={form.guests}
                    onChange={update('guests')}
                  >
                    {['1', '2', '3', '4', '5', '6', '7', '8+'].map((n) => (
                      <option key={n} value={n}>
                        {n}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="field">
                <span>Notes</span>
                <input
                  type="text"
                  name="notes"
                  placeholder="Allergies, occasion…"
                  value={form.notes}
                  onChange={update('notes')}
                />
              </label>

              <button className="btn btn--ember reserve__submit" type="submit">
                Request Reservation
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
