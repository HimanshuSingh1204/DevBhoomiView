import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, BadgeCheck, CalendarDays, Camera, Check, Compass, MapPin, Mountain, Utensils, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { type PassportStamp } from '../../../data/passport'
import { Image } from '../../Image'

type PassportStampDetailProps = {
  stamp: PassportStamp
}

export function PassportStampDetail({ stamp }: PassportStampDetailProps) {
  const [showExperiencePreview, setShowExperiencePreview] = useState(false)
  const Icon = stamp.category === 'Food' ? Utensils : stamp.category === 'Photography' ? Camera : stamp.category === 'Adventure' ? Mountain : stamp.kind === 'Destination' ? MapPin : Compass

  useEffect(() => {
    if (!showExperiencePreview) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setShowExperiencePreview(false)
    }
    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [showExperiencePreview])

  return (
    <motion.aside className="portal-passport-stamp-detail" key={stamp.id} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .22 }} aria-live="polite" aria-labelledby="portal-passport-selected-title">
      <div className="portal-passport-detail-image"><Image id={stamp.image} alt={`Illustrative scenery for ${stamp.title}`} /><span className={`portal-passport-stamp-status is-${stamp.status.toLowerCase()}`}><i />{stamp.status}</span></div>
      <div className="portal-passport-detail-copy"><span className="portal-eyebrow">{stamp.kind.toUpperCase()} · {stamp.category.toUpperCase()}</span><h2 id="portal-passport-selected-title">{stamp.title}</h2><p>{stamp.description}</p>
        <div className="portal-passport-detail-facts"><span><CalendarDays size={14} /><small>JOURNEY DAY</small><strong>{stamp.day}</strong></span><span><BadgeCheck size={14} /><small>CHECK-IN</small><strong>{stamp.status === 'Completed' ? 'Demo complete' : 'Not checked in'}</strong></span></div>
        <div className="portal-passport-detail-highlights"><strong>Highlights</strong><ul>{stamp.highlights.map((highlight) => <li key={highlight}><Check size={13} />{highlight}</li>)}</ul></div>
        <button className="portal-button portal-button--forest" type="button" onClick={() => setShowExperiencePreview(true)}>View Experience <ArrowUpRight size={14} /></button>
        <small className="portal-passport-detail-note">This passport stamp is illustrative demo content.</small>
      </div>
      <AnimatePresence>
        {showExperiencePreview && <motion.div className="portal-passport-experience-modal" role="dialog" aria-modal="true" aria-labelledby="portal-passport-experience-title" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(event) => { if (event.target === event.currentTarget) setShowExperiencePreview(false) }}>
          <motion.div className="portal-passport-experience-modal__card" initial={{ opacity: 0, y: 12, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: .2 }}>
            <button className="portal-passport-modal-close" type="button" aria-label="Close experience preview" onClick={() => setShowExperiencePreview(false)}><X size={18} /></button>
            <span className="portal-passport-modal-icon"><Icon size={23} /></span><span className="portal-eyebrow">PASSPORT EXPERIENCE · DEMO</span><h2 id="portal-passport-experience-title">{stamp.title}</h2><p>{stamp.description}</p><button className="portal-button portal-button--forest" type="button" onClick={() => setShowExperiencePreview(false)}>Continue</button>
          </motion.div>
        </motion.div>}
      </AnimatePresence>
    </motion.aside>
  )
}
