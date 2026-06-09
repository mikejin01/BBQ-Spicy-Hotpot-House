import { images, stats } from '../data.js'

export default function About() {
  return (
    <section id="about" className="about section section--light">
      <div className="container about__grid">
        <div className="about__media" data-reveal>
          <div className="about__frame" />
          <img src={images.about} alt="Sliced beef simmering in the house mala broth" loading="lazy" />
          <div className="about__badge">
            <span className="about__badge-cn">饭冰冰烧烤</span>
            <span className="about__badge-en">Open till 2am</span>
          </div>
        </div>

        <div className="about__body">
          <span className="eyebrow" data-reveal>
            About the House
          </span>
          <h2 className="about__title" data-reveal style={{ '--d': '0.06s' }}>
            The joy of <span className="gold">fire &amp; ice.</span>
          </h2>
          <p data-reveal style={{ '--d': '0.12s' }}>
            饭冰冰烧烤 brings the night-market energy of Cantonese charcoal
            skewers together with the numbing heat of Sichuan mala tang — smoky,
            savory, and grilled to order over open flame.
          </p>
          <p data-reveal style={{ '--d': '0.18s' }}>
            Then comes the twist: a spoonful of Changle icy rice, sweet and cold
            with impossibly squishy taro balls. Hot skewer, cold rice —
            <span className="gold"> the fire-and-ice rush</span> our regulars
            chase. Open late, every night, till 2am.
          </p>

          <div className="about__stats" data-reveal style={{ '--d': '0.24s' }}>
            {stats.map((s) => (
              <div key={s.label} className="stat">
                <span className="stat__value">{s.value}</span>
                <span className="stat__label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
