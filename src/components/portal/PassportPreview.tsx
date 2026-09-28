import { motion } from 'framer-motion'
import { ArrowUpRight, BadgeCheck, Camera, Heart, Home, Leaf, MapPin, Mountain, Music2, Sunrise, Utensils, Waves } from 'lucide-react'
import { Link } from 'react-router-dom'
import { passportStamps } from '../../data/touristJourney'

const stampIcons: Record<string, typeof Mountain> = { mountain: Mountain, home: Home, food: Utensils, leaf: Leaf, culture: Music2, water: Waves, camera: Camera, market: MapPin, sunrise: Sunrise, heart: Heart }

export function PassportPreview() {
  const earned = passportStamps.filter((stamp) => stamp.earned).length
  return (
    <motion.section className="portal-passport-card" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }} aria-labelledby="portal-passport-title">
      <div className="portal-passport-cover">
        <div className="portal-passport-cover__grain" />
        <div className="portal-passport-cover__brand"><Mountain size={18} /> DEV BHOOMI TRIP</div>
        <span className="portal-passport-seal"><Mountain size={27} /></span>
        <span className="portal-eyebrow portal-eyebrow--gold">YOUR DIGITAL JOURNEY KEEPSAKE</span>
        <h2 id="portal-passport-title">Digital Himalayan<br /><em>Passport</em></h2>
        <p>Your journey. Your stamp. Your story.</p>
        <span className="portal-passport-cover__bottom">UTTARAKHAND <i /> INDIA</span>
      </div>
      <div className="portal-passport-inside">
        <div className="portal-passport-progress"><span><BadgeCheck size={17} /> PASSPORT PROGRESS</span><strong>{earned}<i> / {passportStamps.length} stamps</i></strong></div>
        <div className="portal-passport-track" role="progressbar" aria-label="Example passport stamp progress" aria-valuemin={0} aria-valuemax={passportStamps.length} aria-valuenow={earned}><i style={{ width: `${earned / passportStamps.length * 100}%` }} /></div>
        <div className="portal-stamp-grid">
          {passportStamps.slice(0, 6).map(({ title, category, icon, earned: isEarned }) => {
            const Icon = stampIcons[icon]
            return <div className={`portal-stamp${isEarned ? ' is-earned' : ''}`} key={title}><span><Icon size={19} /></span><strong>{title}</strong><small>{isEarned ? category : 'TO BE DISCOVERED'}</small></div>
          })}
        </div>
        <div className="portal-passport-bottom"><span><strong>{passportStamps.length - earned}</strong> experiences to discover</span><Link to="/my-journey/passport" aria-label="View demo passport"><span>View Passport</span><ArrowUpRight size={15} /></Link></div>
        <p className="portal-demo-footnote">Sample passport preview — stamps are illustrative demo data.</p>
      </div>
    </motion.section>
  )
}
