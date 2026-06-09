import { brand } from '../data.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <a className="brand" href="#top" aria-label={`${brand.name} home`}>
          <span className="brand__mark">{brand.mark}</span>
          <span className="brand__name">{brand.name}</span>
          <span className="brand__tag">BBQ · Hot Pot · Icy Rice</span>
        </a>

        <p className="footer__copy">
          © 2026 {brand.mark} · {brand.name}.
          <span className="footer__credit">
            Cantonese BBQ · Sichuan Mala · Open till 2am
          </span>
        </p>
      </div>
    </footer>
  )
}
