import { AnimatePresence, motion } from 'framer-motion'
import { Activity, ArrowRight, Camera, Check, Compass, HeartHandshake, Home, Leaf, MapPin, Mountain, Music2, QrCode, Sparkles, Utensils, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { passportCategories, passportResponsibleTravel, passportStats } from '../../../data/passport'
import { Image } from '../../Image'

const statsIcons = { calendar: Activity, pin: MapPin, experience: Compass, mountain: Mountain, culture: Music2, memory: Camera }
const categoryIcons = { nature: Leaf, adventure: Mountain, culture: Music2, food: Utensils, village: Home, photography: Camera }

export function PassportCheckInCard() {
  const [showQrDemo, setShowQrDemo] = useState(false)
  const [showHistory, setShowHistory] = useState(false)

  useEffect(() => {
    if (!showQrDemo) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setShowQrDemo(false)
    }
    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [showQrDemo])

  return (
    <section className="portal-passport-checkin-section">
      <div className="portal-passport-checkin-copy"><span className="portal-eyebrow portal-eyebrow--gold"><QrCode size={13} /> CHECK IN YOUR JOURNEY</span><h2>Mark the Moment</h2><p>At selected destinations and experiences, scan your journey QR code to add a new passport stamp.</p><small>QR check-in is a demo feature in this prototype.</small></div>
      <div className="portal-passport-checkin-card">
        <div className="portal-passport-fake-qr" role="img" aria-label="Decorative QR-style placeholder, not scannable"><span /><span /><span /><span /><span /><span /><span /><span /><span /><i>DEMO</i></div>
        <div className="portal-passport-checkin-card__copy"><span>SCAN TO CHECK IN</span><strong>Your next stamp is waiting</strong><small>This visual placeholder is not a real QR code and cannot verify a visit.</small></div>
        <div className="portal-passport-checkin-actions"><button type="button" className="portal-button portal-button--gold" onClick={() => setShowQrDemo(true)}>Scan QR <QrCode size={15} /></button><button type="button" className="portal-passport-history-button" onClick={() => setShowHistory((shown) => !shown)} aria-expanded={showHistory}>View Check-in History</button></div>
        {showHistory && <p className="portal-passport-history-note" role="status">Demo only — no check-ins have been recorded.</p>}
      </div>
      <AnimatePresence>
        {showQrDemo && <motion.div className="portal-passport-qr-modal" role="dialog" aria-modal="true" aria-labelledby="portal-passport-qr-title" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(event) => { if (event.target === event.currentTarget) setShowQrDemo(false) }}>
          <motion.div className="portal-passport-qr-modal__card" initial={{ opacity: 0, y: 12, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: .2 }}>
            <button className="portal-passport-modal-close" type="button" aria-label="Close QR check-in dialog" onClick={() => setShowQrDemo(false)}><X size={18} /></button>
            <span className="portal-passport-modal-icon"><QrCode size={24} /></span><span className="portal-eyebrow">DEMO CHECK-IN</span><h2 id="portal-passport-qr-title">QR Check-in</h2><p>This prototype does not use your camera yet. No visit will be verified or added to your passport.</p><button className="portal-button portal-button--forest" type="button" onClick={() => setShowQrDemo(false)}>Continue</button>
          </motion.div>
        </motion.div>}
      </AnimatePresence>
    </section>
  )
}

export function PassportStats() {
  return <section className="portal-passport-stats-section" aria-labelledby="portal-passport-stats-title"><div className="portal-passport-section-heading"><div><span className="portal-eyebrow">YOUR JOURNEY AT A GLANCE</span><h2 id="portal-passport-stats-title">Journey Statistics</h2></div><span className="portal-demo-chip"><i />DEMO DATA</span></div><div className="portal-passport-stats-grid">{passportStats.map(({ value, label, icon }) => { const Icon = statsIcons[icon]; return <article className="portal-metric-card" key={label}><span className="portal-metric-icon"><Icon size={17} /></span><strong className="portal-metric-value">{value}</strong><span className="portal-metric-label">{label}</span><span className="portal-metric-detail">Sample journey count</span></article> })}</div></section>
}

export function PassportCategories() {
  return <section className="portal-passport-categories-section" aria-labelledby="portal-passport-categories-title"><div className="portal-passport-section-heading"><div><span className="portal-eyebrow">WHAT YOUR PASSPORT CAN COLLECT</span><h2 id="portal-passport-categories-title">Chapters of Your Journey</h2></div></div><div className="portal-passport-category-grid">{passportCategories.map(({ title, description, icon }) => { const Icon = categoryIcons[icon]; return <article key={title}><span><Icon size={19} /></span><div><strong>{title}</strong><p>{description}</p></div></article> })}</div></section>
}

export function PassportResponsibleTravel() {
  return <section className="portal-passport-responsible"><span className="portal-passport-responsible-icon"><HeartHandshake size={21} /></span><div><span className="portal-eyebrow portal-eyebrow--gold">TRAVEL WITH RESPECT</span><h2>Leave Memories.<br /><em>Not a Footprint.</em></h2></div><p>Your Himalayan Passport is not only a record of where you have been. It is a reminder to travel respectfully, support local communities and care for the places you experience.</p><ul>{passportResponsibleTravel.map((item) => <li key={item}><Check size={14} />{item}</li>)}</ul></section>
}

export function PassportMemoryCta() {
  return <section className="portal-passport-memory-cta"><Image id="photo-1470770841072-f978cf4d019e" alt="Illustrative Himalayan valley in the warm evening light" /><span className="portal-passport-memory-cta__shade" /><div><span className="portal-eyebrow portal-eyebrow--gold"><Sparkles size={13} /> YOUR JOURNEY, STILL UNFOLDING</span><h2>Your Passport Is Still Being Written.</h2><p>Every destination, conversation, meal and mountain becomes another page in your Himalayan story.</p><nav><Link to="/my-journey/trip" className="portal-button portal-button--gold">View My Trip <MapPin size={15} /></Link><Link to="/my-journey" className="portal-passport-memory-link">Explore My Memories <ArrowRight size={14} /></Link></nav></div><small>Sample travel keepsake · demo experience</small></section>
}
