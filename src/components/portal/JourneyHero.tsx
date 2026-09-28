import { motion } from 'framer-motion'
import { ArrowDownRight, ArrowUpRight, CalendarDays, Camera, Compass, MapPin, Mountain, Sprout, UsersRound } from 'lucide-react'
import { Link } from 'react-router-dom'
import { demoTrip, touristProfile } from '../../data/touristJourney'
import { Image } from '../Image'

export function JourneyHero() {
  return (
    <section className="portal-journey-hero">
      <Image id="photo-1464822759023-fed622ff2c3b" alt="Himalayan peaks rise above forested mountain ridges" className="portal-journey-hero__image" />
      <div className="portal-journey-hero__shade" />
      <div className="portal-journey-hero__content">
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="portal-eyebrow portal-eyebrow--gold"><i /> MY JOURNEY · DEMO EXPERIENCE</span>
          <h2>10-Day Himalayan<br /><em>Experience</em></h2>
          <div className="portal-hero-meta"><span><MapPin size={14} />Kumaon Region</span><i /><span>10 Days</span><i /><span>8 Experiences</span></div>
          <div className="portal-hero-tags"><span><Sprout size={13} />Nature</span><span><Compass size={13} />Culture</span><span><Mountain size={13} />Adventure</span><span><Camera size={13} />Local Life</span></div>
          <p className="portal-hero-mantra">Collect moments,<br /><em>not things.</em></p>
          <svg className="portal-hero-mountain-line" viewBox="0 0 260 105" fill="none" aria-hidden="true"><path d="M5 91 61 35l25 25 31-43 45 57 25-30 67 47M26 91l24-24 12 12 29-31 24 15 23-19 43 47" /></svg>
          <div className="portal-hero-actions"><Link to="/my-journey/trip" className="portal-button portal-button--gold">View My Trip <ArrowUpRight size={16} /></Link><Link to="/my-journey/map" className="portal-hero-text-link">Explore Journey Map <ArrowDownRight size={16} /></Link></div>
        </motion.div>
      </div>
      <motion.aside className="portal-hero-trip-card" initial={{ opacity: 0, x: 14 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.14 }}>
        <div className="portal-next-image"><Image id="photo-1464278533981-50106e6176b1" alt="Illustrative mountain landscape for the next journey stop" /><span>DEMO IMAGE</span></div>
        <div className="portal-hero-trip-card__heading"><span>NEXT DESTINATION</span><span className="portal-status-pill"><i />DEMO</span></div>
        <h3>Chopta – Tungnath Trek</h3>
        <div className="portal-hero-trip-meta"><span><CalendarDays size={16} />Day 4 · 25 Sep 2026</span><span><UsersRound size={16} />{demoTrip.travellers} traveller</span></div>
        <div className="portal-hero-trip-person"><span className="portal-avatar">{touristProfile.initials}</span><span>Prepared for <strong>{touristProfile.name}</strong></span></div>
        <Link to="/my-journey/trip" className="portal-next-view">View Details <ArrowUpRight size={14} /></Link>
        <div className="portal-next-controls" aria-label="Demo destination preview, item 1 of 3"><i className="is-active" /><i /><i /></div>
      </motion.aside>
      <span className="portal-hero-caption"><Mountain size={14} /> LIVE THE HIMALAYAS <i /> DEMO JOURNEY</span>
    </section>
  )
}
