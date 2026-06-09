import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Signature from './components/Signature.jsx'
import Quote from './components/Quote.jsx'
import Gallery from './components/Gallery.jsx'
import Reviews from './components/Reviews.jsx'
import Reserve from './components/Reserve.jsx'
import Footer from './components/Footer.jsx'
import { useReveal } from './hooks/useReveal.js'

export default function App() {
  useReveal()

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Signature />
        <Quote />
        <Gallery />
        <Reviews />
        <Reserve />
      </main>
      <Footer />
    </>
  )
}
