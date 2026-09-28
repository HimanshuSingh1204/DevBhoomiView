import { motion } from 'framer-motion'
import { ArrowUpRight, Camera } from 'lucide-react'
import { Link } from 'react-router-dom'
import { memories } from '../../data/touristJourney'
import { Image } from '../Image'

export function MemoriesPreview() {
  return (
    <section className="portal-memories-section">
      <div className="portal-section-heading"><div><span className="portal-eyebrow">A JOURNAL IN THE MAKING</span><h2>Your Memories</h2></div><Link to="/my-journey/media">View All Memories <ArrowUpRight size={15} /></Link></div>
      <div className="portal-memory-grid">
        {memories.map(({ title, day, image, kind }, index) => <motion.article className="portal-memory-card" key={title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: index * 0.05 }}>
          <Image id={image} alt={`Illustrative ${kind.toLowerCase()} image for the ${title.toLowerCase()} memory`} />
          <span className="portal-memory-overlay" />
          <span className="portal-memory-day">{day}</span><span className="portal-memory-camera"><Camera size={15} /></span>
          <div className="portal-memory-caption"><small>{kind}</small><h3>{title}</h3></div>
        </motion.article>)}
      </div>
      <p className="portal-demo-footnote">Illustrative image placeholders — these are not personal photographs or uploaded trip memories.</p>
    </section>
  )
}
