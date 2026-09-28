import { motion } from 'framer-motion'
import { ArrowUpRight, Camera } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Image } from '../Image'

export function JourneyHighlights() {
  return (
    <motion.section className="portal-memories-banner" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .4 }} aria-labelledby="portal-memories-title">
      <Image id="photo-1470770841072-f978cf4d019e" alt="Atmospheric Himalayan valley and mountain village at evening" className="portal-memories-banner__image" />
      <span className="portal-memories-banner__shade" />
      <div className="portal-memories-banner__copy"><span className="portal-eyebrow portal-eyebrow--gold"><Camera size={14} /> MOMENTS TO KEEP</span><h2 id="portal-memories-title">Your Memories</h2><p>Relive your journey through photos, videos and stories.</p><Link to="/my-journey/media" className="portal-button portal-button--gold">Explore Memories <ArrowUpRight size={15} /></Link></div>
      <span className="portal-memories-banner__note">Illustrative image · no personal media saved</span>
    </motion.section>
  )
}
