import { motion } from 'framer-motion'
import { ArrowUpRight, BedDouble, CalendarDays, Clock3, MapPin, Utensils } from 'lucide-react'
import { Link } from 'react-router-dom'
import { journeyMapSummary, journeyStops, type JourneyStop } from '../../../data/journeyMap'
import { Image } from '../../Image'

type MapDestinationPanelProps = {
  selectedStopId: string
  selectedDay: number
}

export function MapDestinationPanel({ selectedStopId, selectedDay }: MapDestinationPanelProps) {
  const selected = journeyStops.find(({ id }) => id === selectedStopId) ?? journeyStops[0]
  const status = selected.id === journeyMapSummary.currentStopId ? 'Current Stop' : selected.status

  return (
    <aside className="portal-map-aside">
      <motion.section className="portal-map-destination-card" key={selected.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .22 }} aria-live="polite" aria-labelledby="portal-map-selected-title">
        <div className="portal-map-selected-image">
          <Image id={selected.image} alt={`Illustrative scenery for ${selected.name}`} />
          <span className={`portal-map-selected-status is-${status.toLowerCase().replace(' ', '-')}`}><i />{status}</span>
        </div>
        <div className="portal-map-selected-copy">
          <span className="portal-eyebrow">SELECTED DESTINATION · {selected.dayLabel.toUpperCase()}</span>
          <h2 id="portal-map-selected-title">{selected.name}</h2>
          <span className="portal-map-selected-region"><MapPin size={13} />{selected.region} <i /> Day {selectedDay}</span>
          <h3>{selected.experience}</h3>
          <p>{selected.description}</p>
          <div className="portal-map-selected-features"><span><Clock3 size={14} />Experience</span><span><BedDouble size={14} />Stay preview</span><span><Utensils size={14} />Local food</span></div>
          <Link to="/my-journey/trip" className="portal-button portal-button--forest">View Day Details <ArrowUpRight size={15} /></Link>
          <small className="portal-map-selected-note">All destination details are illustrative demo content.</small>
        </div>
      </motion.section>
      <section className="portal-map-overview-card">
        <div className="portal-map-section-heading"><div><span className="portal-eyebrow">SAMPLE ROUTE</span><h2>Journey Overview</h2></div><CalendarDays size={18} /></div>
        <div className="portal-map-overview-stats">
          <span><strong>{journeyMapSummary.durationDays}</strong><small>Days</small></span>
          <span><strong>{journeyMapSummary.destinations}</strong><small>Destinations</small></span>
          <span><strong>{journeyMapSummary.experiences}</strong><small>Experiences</small></span>
        </div>
        <div className="portal-map-overview-status"><span><i className="is-completed" />{journeyMapSummary.completedDays} completed days</span><span><i className="is-upcoming" />{journeyMapSummary.upcomingExperiences} upcoming experiences</span></div>
        <p>Route and progress are sample values only.</p>
      </section>
    </aside>
  )
}

export type { JourneyStop }
