import { Link } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinkClass = "font-label-lg text-label-lg transition-colors duration-200"
  const inactiveClass = "text-on-surface-variant hover:text-heritage-burgundy"
  const activeClass = "text-heritage-burgundy border-b-2 border-academic-gold pb-1"

  return (
    <nav className={`fixed top-0 w-full z-50 bg-paper-white/95 backdrop-blur-md border-b border-on-surface-variant/10 h-20 flex items-center transition-shadow ${isScrolled ? 'shadow-md' : 'shadow-sm'}`}>
      <div className="flex justify-between items-center h-full px-margin-desktop max-w-container-max mx-auto w-full">
        <div className="flex items-center gap-4">
          <span className="font-headline-sm text-headline-sm font-bold text-heritage-burgundy">Noorul Ilm International</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className={navLinkClass} activeProps={{ className: activeClass }} inactiveProps={{ className: inactiveClass }}>
            Home
          </Link>
          <Link to="/academic-programs" className={navLinkClass} activeProps={{ className: activeClass }} inactiveProps={{ className: inactiveClass }}>
            Programs
          </Link>
          <Link to="/leadership-board" className={navLinkClass} activeProps={{ className: activeClass }} inactiveProps={{ className: inactiveClass }}>
            Leadership Board
          </Link>
          <Link to="/campus-gallery" className={navLinkClass} activeProps={{ className: activeClass }} inactiveProps={{ className: inactiveClass }}>
            Gallery
          </Link>
          <Link to="/admissions" className={navLinkClass} activeProps={{ className: activeClass }} inactiveProps={{ className: inactiveClass }}>
            Admissions
          </Link>
          <Link to="/contact-us" className={navLinkClass} activeProps={{ className: activeClass }} inactiveProps={{ className: inactiveClass }}>
            Contact
          </Link>
        </div>
        <button className="bg-heritage-burgundy text-paper-white px-6 py-2.5 rounded-lg font-label-lg hover:bg-primary transition-all active:scale-95">Portal</button>
      </div>
    </nav>
  )
}
