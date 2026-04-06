import { useState, useCallback } from 'react'
import Navbar    from './components/Navbar'
import Hero      from './components/Hero'
import Skills    from './components/Skills'
import Experience from './components/Experience'
import Projects  from './components/Projects'
import Contact   from './components/Contact'
import Footer    from './components/Footer'
import Modal     from './components/Modal'

export default function App() {
  const [modal, setModal]           = useState(null)   // { url, title }
  const [mobileOpen, setMobileOpen] = useState(false)

  const navTo = useCallback((id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  const openDemo  = useCallback((url, title) => setModal({ url, title }), [])
  const closeDemo = useCallback(() => setModal(null), [])

  return (
    <>
      <Navbar onNav={navTo} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

      <main>
        <Hero      onNav={navTo} />
        <Skills    />
        <Experience />
        <Projects  onDemo={openDemo} />
        <Contact   />
      </main>

      <Footer />

      {modal && (
        <Modal url={modal.url} title={modal.title} onClose={closeDemo} />
      )}
    </>
  )
}
