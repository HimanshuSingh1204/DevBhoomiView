import { motion } from 'framer-motion'
import { MapPin, Mountain, Sparkles } from 'lucide-react'
import { passportSummary } from '../../../data/passport'
import { Image } from '../../Image'

export function PassportHero() {
  return (
    <motion.section className="portal-passport-hero" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .4 }}>
      <Image id="photo-1464822759023-fed622ff2c3b" alt="Sunlight across the Himalayan mountains" className="portal-passport-hero__image" />
      <span className="portal-passport-hero__shade" />
      <div className="portal-passport-hero__copy">
        <span className="portal-eyebrow portal-eyebrow--gold"><Sparkles size={13} /> MY HIMALAYAN PASSPORT</span>
        <h2>Your Himalayan<br /><em>Passport</em></h2>
        <p>A digital collection of the places, experiences and memories you collect throughout your Himalayan journey.</p>
        <div className="portal-passport-hero__meta"><span><Mountain size={14} />{passportSummary.journey}</span><i /><span><MapPin size={14} />{passportSummary.totalDestinations} Destinations</span><i /><span>{passportSummary.totalExperiences} Experiences</span></div>
      </div>
      <div className="portal-passport-hero__quote"><span>JOURNEY NOTE</span><strong>“Collect moments,<br />not things.”</strong><i /></div>
      <span className="portal-passport-hero__caption">A DEMO PASSPORT · YOUR JOURNEY, YOUR STORY</span>
    </motion.section>
  )
}
