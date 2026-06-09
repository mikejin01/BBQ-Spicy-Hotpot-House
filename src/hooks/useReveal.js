import { useEffect } from 'react'

// Adds an `is-in` class to every [data-reveal] element once it scrolls into
// view, driving the staggered entrance animations defined in styles.css.
// Honors prefers-reduced-motion by revealing everything immediately.
export function useReveal() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll('[data-reveal]'))
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduce || !('IntersectionObserver' in window)) {
      nodes.forEach((n) => n.classList.add('is-in'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.16, rootMargin: '0px 0px -8% 0px' }
    )

    nodes.forEach((n) => io.observe(n))
    return () => io.disconnect()
  }, [])
}
