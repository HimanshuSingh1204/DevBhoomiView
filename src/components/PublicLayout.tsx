import { useState } from 'react'
import { ArrowUpRight, Heart, Instagram, Menu, Mountain, Search, X } from 'lucide-react'
import { Link, NavLink, Outlet } from 'react-router-dom'

const navigation = [
  ['Explore', '/explore'], ['Experiences', '/experiences'], ['Packages', '/packages'],
  ['Culture', '/culture'], ['Food', '/food'], ['Adventure', '/adventure'],
  ['Homestays', '/homestays'], ['About', '/about'],
]

export function PublicLayout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [saved, setSaved] = useState(false)

  return (
    <>
      <header className="site-header">
        <Link to="/" className="brand" aria-label="Dev Bhoomi Trip home" onClick={() => setMenuOpen(false)}>
          <span className="brand__mark" aria-hidden="true"><Mountain size={19} strokeWidth={1.5} /></span>
          <span className="brand__text">DEV BHOOMI TRIP <small>LIVE THE HIMALAYAN EXPERIENCE</small></span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          <NavLink to="/" end>Home</NavLink>
          {navigation.map(([label, path]) => <NavLink key={path} to={path}>{label}</NavLink>)}
        </nav>
        <div className="header-actions">
          <button className="icon-button search-trigger" aria-label="Search" onClick={() => setSearchOpen((open) => !open)}><Search size={19} /></button>
          <button className="icon-button wishlist-trigger" aria-label={saved ? 'Remove from wishlist' : 'Add to wishlist'} aria-pressed={saved} onClick={() => setSaved((value) => !value)}><Heart size={18} fill={saved ? 'currentColor' : 'none'} /></button>
          <button className="language-button" aria-label="Language: English">EN <span>⌄</span></button>
          <Link className="button button--forest header-book" to="/contact">Book Now <ArrowUpRight size={15} /></Link>
          <button className="icon-button menu-trigger" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
        </div>
        {searchOpen && <form className="header-search" action="/explore"><label htmlFor="site-search">Search Uttarakhand</label><input id="site-search" name="q" placeholder="Try ‘village stays’" autoFocus /><button aria-label="Submit search"><ArrowUpRight size={18} /></button></form>}
      </header>
      {menuOpen && <nav className="mobile-menu" aria-label="Mobile navigation">{[['Home', '/'], ...navigation].map(([label, path]) => <NavLink key={path} to={path} onClick={() => setMenuOpen(false)}>{label}<ArrowUpRight size={17} /></NavLink>)}<Link className="button button--gold" to="/contact" onClick={() => setMenuOpen(false)}>Plan a trip <ArrowUpRight size={16} /></Link></nav>}
      <main><Outlet /></main>
      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand"><Link to="/" className="brand brand--footer"><span className="brand__mark"><Mountain size={19} strokeWidth={1.5} /></span><span className="brand__text">DEV BHOOMI TRIP <small>LIVE THE HIMALAYAN EXPERIENCE</small></span></Link><p>Live the Himalayan Experience.</p><span className="footer-note">Made with care in the Himalayas.</span></div>
          <div className="footer-links"><span className="footer-label">Discover</span><Link to="/explore">Explore Uttarakhand</Link><Link to="/experiences">Experiences</Link><Link to="/packages">Journeys</Link><Link to="/homestays">Homestays</Link></div>
          <div className="footer-links"><span className="footer-label">The good things</span><Link to="/culture">Culture</Link><Link to="/food">Pahadi food</Link><Link to="/adventure">Adventure</Link><Link to="/about">Our story</Link></div>
          <div className="footer-contact"><span className="footer-label">Start a conversation</span><p>Have a place in mind?<br />We’d love to hear about it.</p><Link to="/contact" className="footer-contact-link">Get in touch <ArrowUpRight size={16} /></Link><a href="https://instagram.com" aria-label="Instagram" className="social-link"><Instagram size={17} /></a></div>
        </div>
        <div className="footer-bottom"><span>© 2026 Dev Bhoomi Trip</span><span>Thoughtful journeys across Uttarakhand</span><div><a href="mailto:hello@devbhoomitrip.in?subject=Privacy%20policy">Privacy</a><a href="mailto:hello@devbhoomitrip.in?subject=Terms">Terms</a></div></div>
      </footer>
    </>
  )
}