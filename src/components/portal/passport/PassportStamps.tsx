import { motion } from 'framer-motion'
import { ArrowUpRight, BadgeCheck, Camera, Compass, Flower2, MapPin, Mountain, Utensils } from 'lucide-react'
import { passportStamps, type PassportStamp } from '../../../data/passport'
import { Image } from '../../Image'

type PassportStampsProps = {
  selectedStampId: string
  onSelectStamp: (stamp: PassportStamp) => void
}

const stampIcons = { Nature: Flower2, Culture: SparklesIcon, Adventure: Mountain, Food: Utensils, 'Village Life': HomeIcon, Photography: Camera }

export function PassportStamps({ selectedStampId, onSelectStamp }: PassportStampsProps) {
  return (
    <section className="portal-passport-stamps-section" aria-labelledby="portal-passport-stamps-title">
      <div className="portal-passport-section-heading"><div><span className="portal-eyebrow">PASSPORT STAMPS · DEMO COLLECTION</span><h2 id="portal-passport-stamps-title">Places Become Memories</h2><p>Every destination and experience adds another chapter to your Himalayan journey.</p></div><span className="portal-demo-chip"><i />{passportStamps.length} SAMPLE STAMPS</span></div>
      <div className="portal-passport-stamp-grid">
        {passportStamps.map((stamp, index) => {
          const Icon = stampIcons[stamp.category as keyof typeof stampIcons] ?? MapPin
          return <motion.button type="button" className={`portal-passport-stamp-card is-${stamp.status.toLowerCase()}${selectedStampId === stamp.id ? ' is-selected' : ''}`} key={stamp.id} onClick={() => onSelectStamp(stamp)} aria-pressed={selectedStampId === stamp.id} aria-label={`View ${stamp.title}, ${stamp.status.toLowerCase()} ${stamp.kind.toLowerCase()} stamp`} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .3, delay: (index % 5) * .035 }} whileHover={{ y: -3 }}>
            <span className="portal-passport-stamp-image"><Image id={stamp.image} alt={`Illustrative image for ${stamp.title}`} /><span className="portal-passport-stamp-image__shade" /><span className="portal-passport-stamp-seal"><Icon size={20} /></span><span className="portal-passport-stamp-number">{String(index + 1).padStart(2, '0')}</span></span>
            <span className="portal-passport-stamp-copy"><span className="portal-eyebrow">{stamp.kind} · {stamp.category}</span><strong>{stamp.title}</strong><span className={`portal-passport-stamp-status is-${stamp.status.toLowerCase()}`}><i />{stamp.status}</span><small>{stamp.day}</small></span>
            <span className="portal-passport-stamp-arrow"><ArrowUpRight size={15} /></span>
          </motion.button>
        })}
      </div>
    </section>
  )
}

function SparklesIcon() {
  return <BadgeCheck size={20} />
}

function HomeIcon() {
  return <Compass size={20} />
}
