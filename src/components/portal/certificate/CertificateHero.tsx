import { motion } from 'framer-motion'
import { BadgeCheck, MapPin, Mountain, Sparkles } from 'lucide-react'
import { Image } from '../../Image'

export function CertificateHero() {
  return <motion.section className="portal-certificate-hero" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .4 }}>
    <Image id="photo-1464822759023-fed622ff2c3b" alt="Illustrative Himalayan mountain peaks" />
    <span className="portal-certificate-hero__shade" />
    <div className="portal-certificate-hero__copy"><span className="portal-eyebrow portal-eyebrow--gold"><Sparkles size={14} /> YOUR JOURNEY</span><h2>A Journey Worth<br /><em>Remembering</em></h2><p>Your Himalayan journey becomes a keepsake you can carry with you long after the mountains are behind you.</p><div><span><Mountain size={13} />10-DAY JOURNEY</span><i /><span><MapPin size={13} />UTTARAKHAND</span><i /><span>DEV BHOOMI TRIP</span></div></div>
    <aside className="portal-certificate-hero__status"><span><BadgeCheck size={13} /> JOURNEY STATUS</span><strong><i /> IN PROGRESS</strong><small>DEMO JOURNEY · NOT CERTIFIED</small></aside>
    <small className="portal-certificate-hero__caption">A DIGITAL JOURNEY KEEPSAKE · DEMO PREVIEW</small>
  </motion.section>
}
