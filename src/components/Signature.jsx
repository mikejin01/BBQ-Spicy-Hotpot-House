import { dishes } from '../data.js'

export default function Signature() {
  return (
    <section id="menu" className="menu section">
      <div className="container">
        <header className="section-head">
          <span className="section-head__cn" data-reveal>
            招牌菜
          </span>
          <h2 data-reveal style={{ '--d': '0.06s' }}>
            Signature Selections
          </h2>
          <p data-reveal style={{ '--d': '0.12s' }}>
            Charcoal skewers off the coals, numbing mala tang, and the fiery
            crayfish and clams that keep Flushing up past midnight.
          </p>
        </header>

        <div className="menu__grid">
          {dishes.map((dish, i) => (
            <article
              key={dish.name}
              className="dish"
              data-reveal
              style={{ '--d': `${0.08 * i}s` }}
            >
              <div className="dish__media">
                <img src={dish.img} alt={dish.name} loading="lazy" />
                <span className="dish__price">{dish.price}</span>
              </div>
              <div className="dish__body">
                <span className="dish__cn">{dish.cn}</span>
                <h3 className="dish__name">{dish.name}</h3>
                <p className="dish__desc">{dish.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <a className="menu__more" href="#reserve" data-reveal>
          View the Full Menu <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  )
}
