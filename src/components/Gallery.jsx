import { gallery } from '../data.js'

export default function Gallery() {
  return (
    <section id="night" className="gallery section section--light">
      <div className="container">
        <header className="section-head">
          <span className="eyebrow eyebrow--center" data-reveal>
            Inside the House
          </span>
          <h2 data-reveal style={{ '--d': '0.06s' }}>
            A Night at 饭冰冰烧烤
          </h2>
        </header>

        <div className="gallery__grid">
          {gallery.map((tile, i) => (
            <figure
              key={tile.title}
              className={`tile tile--${i}`}
              data-reveal
              style={{ '--d': `${0.1 * i}s` }}
            >
              <img src={tile.img} alt={tile.title} loading="lazy" />
              <figcaption>
                <span className="tile__title">{tile.title}</span>
                <span className="tile__desc">{tile.desc}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
