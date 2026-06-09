import { useEffect, useState } from 'react'
import { nav, brand } from '../data.js'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={`nav ${scrolled ? 'nav--solid' : ''}`}>
      <div className="nav__inner">
        <a className="brand" href="#top" aria-label={`${brand.name} home`}>
          <span className="brand__mark">{brand.mark}</span>
          <span className="brand__name">{brand.name}</span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          {nav.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="btn btn--ghost nav__cta" href="#reserve">
          Book Table
        </a>

        <button
          className={`burger ${open ? 'burger--open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      <div
        className={`drawer ${open ? 'drawer--open' : ''}`}
        onClick={() => setOpen(false)}
      >
        <nav className="drawer__links" aria-label="Mobile">
          {nav.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
          <a className="btn btn--ember drawer__cta" href="#reserve">
            Book Table
          </a>
        </nav>
      </div>
    </header>
  )
}
