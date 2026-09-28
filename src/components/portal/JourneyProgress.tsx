import { motion } from 'framer-motion'
import { CalendarDays, Camera, MapPin, Mountain, Video } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { tripMetrics } from '../../data/touristJourney'

const icons: Record<string, LucideIcon> = { calendar: CalendarDays, pin: MapPin, camera: Camera, video: Video, mountain: Mountain }

export function JourneyProgress() {
  return (
    <section className="portal-metric-grid" aria-label="Example trip statistics">
      {tripMetrics.map(({ value, label, detail, icon }, index) => {
        const Icon = icons[icon]
        return <motion.article className="portal-metric-card" key={label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .32, delay: index * .04 }}>
          <span className="portal-metric-icon"><Icon size={17} /></span><strong className="portal-metric-value">{value}</strong><span className="portal-metric-label">{label}</span><span className="portal-metric-detail">{detail}</span>
        </motion.article>
      })}
    </section>
  )
}
