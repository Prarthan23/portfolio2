import { useEffect, useState } from 'react'
import Lenis from '@studio-freight/lenis'
import NavBar from "./Components/NavBar"
import Hero from "./Components/Hero"
import Skills from "./Components/Skills"
import Internships from './Components/Internships'
import AwardCertificate from './Components/AwardCertificate'
import Projects from './Components/Projects'
import Services from './Components/Services'
import Footer from './Components/Footer'
const App = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768) // Adjust this breakpoint as needed
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    const lenis = new Lenis({
      duration: isMobile ? 0.8 : 1.2, // Reduced duration for mobile
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: !isMobile, // Disable smooth scrolling on mobile
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 1.5, // Reduced touch multiplier
      infinite: false,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
      window.removeEventListener('resize', checkMobile)
    }
  }, [isMobile])

  return (
    <>
      <NavBar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="internships">
          <Internships />
        </section>
        <section id="awards">
          <AwardCertificate />
        </section>
        <section id="projects">
          <Projects />
        </section>
      </main>
      <footer id="contact">
        <Footer />
      </footer>
    </>
  )
}

export default App