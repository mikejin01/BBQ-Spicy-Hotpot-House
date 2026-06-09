import { reviews } from '../data.js'

export default function Reviews() {
  return (
    <section id="reviews" className="reviews section">
      <div className="container">
        <header className="section-head">
          <span className="eyebrow eyebrow--center" data-reveal>
            Word of Mouth
          </span>
          <h2 data-reveal style={{ '--d': '0.06s' }}>
            Loved late into the night
          </h2>
          <p data-reveal style={{ '--d': '0.12s' }}>
            <span className="reviews__rating">★★★★★</span> Five-star reviews from
            our Flushing regulars.
          </p>
        </header>

        <div className="reviews__grid">
          {reviews.map((r, i) => (
            <figure
              key={r.name}
              className="review"
              data-reveal
              style={{ '--d': `${0.07 * i}s` }}
            >
              <span className="review__quote" aria-hidden="true">
                &ldquo;
              </span>
              <div
                className="review__stars"
                aria-label={`${r.stars} out of 5 stars`}
              >
                {'★'.repeat(r.stars)}
              </div>
              <blockquote className="review__text">{r.text}</blockquote>
              <figcaption className="review__who">
                <span className="review__avatar" aria-hidden="true">
                  {r.name.charAt(0)}
                </span>
                <span className="review__id">
                  <span className="review__name">{r.name}</span>
                  <span className="review__meta">
                    {r.meta} · {r.when}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
