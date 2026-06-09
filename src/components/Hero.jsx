import { useEffect, useState } from 'react'
import { heroSlides } from '../data.js'

export default function Hero() {
  const [active, setActive] = useState(0)

  // Auto-advance the background slider.
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    const id = setInterval(
      () => setActive((a) => (a + 1) % heroSlides.length),
      5500
    )
    return () => clearInterval(id)
  }, [])

  return (
    <section id="top" className="hero">
      <div className="hero__slides" aria-hidden="true">
        {heroSlides.map((slide, i) => (
          <div
            key={slide.src}
            className={`hero__slide ${i === active ? 'is-active' : ''}`}
            style={{ backgroundImage: `url(${slide.src})` }}
          />
        ))}
      </div>
      <div className="hero__veil" aria-hidden="true" />

      <div className="hero__container">
        <div className="hero__content">
          <span className="hero__cn">饭冰冰烧烤</span>
        <span className="eyebrow">Cantonese BBQ · Spicy Hot Pot</span>
        <h1 className="hero__title">
          Skewers by fire,
          <br />
          rice over <em>ice</em>.
        </h1>
        <p className="hero__sub">
          Authentic Cantonese BBQ, numbing Sichuan mala tang, and Changle icy
          rice — open till 2am in the heart of Flushing.
        </p>
        <div className="hero__actions">
          <a className="btn btn--ember" href="#menu">
            Explore the Menu
          </a>
          <a className="btn btn--outline" href="#about">
            Our Story
          </a>
        </div>

        <div className="hero__meta">
          <span>
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" />
              <circle cx="12" cy="10" r="2.5" />
            </svg>
            158-14 Northern Blvd, Flushing
          </span>
          <span>
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7.5V12l3 1.8" />
            </svg>
            Open daily till 2am
          </span>
          </div>
        </div>
      </div>

      <div className="hero__dots" role="tablist" aria-label="Hero slides">
        {heroSlides.map((slide, i) => (
          <button
            key={slide.src}
            className={`hero__dot ${i === active ? 'is-active' : ''}`}
            aria-label={`Show slide ${i + 1}`}
            aria-selected={i === active}
            role="tab"
            onClick={() => setActive(i)}
          />
        ))}
      </div>
    </section>
  )
}
