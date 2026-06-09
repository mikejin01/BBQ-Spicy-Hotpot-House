import { images } from '../data.js'

export default function Quote() {
  return (
    <section
      className="quote"
      style={{ backgroundImage: `url(${images.quote})` }}
    >
      <div className="quote__veil" aria-hidden="true" />
      <span className="quote__cn" aria-hidden="true">
        饭冰冰烧烤
      </span>
      <figure className="quote__content" data-reveal>
        <blockquote>
          “Skewers and icy rice —
          <br />
          happy till the break of dawn.”
        </blockquote>
        <figcaption>
          <span className="quote__rule" />
          饭冰冰烧烤 · House Motto
        </figcaption>
      </figure>
    </section>
  )
}
