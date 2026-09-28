import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowDown, ArrowUp, MapPin } from 'lucide-react'
import { tripTimelineDays } from '../../data/touristJourney'
import { Image } from '../Image'

type TripTimelineProps = {
  selectedDay: number
  onSelectDay: (day: number) => void
}

export function TripTimeline({ selectedDay, onSelectDay }: TripTimelineProps) {
  const [expandedDays, setExpandedDays] = useState<number[]>([selectedDay])

  const toggleDay = (day: number) => {
    setExpandedDays((expanded) => expanded.includes(day) ? expanded.filter((item) => item !== day) : [...expanded, day])
    onSelectDay(day)
  }

  return (
    <section className="portal-trip-timeline-section" aria-labelledby="portal-trip-timeline-title">
      <div className="portal-trip-section-heading"><div><span className="portal-eyebrow">FROM ARRIVAL TO DEPARTURE</span><h2 id="portal-trip-timeline-title">Your 10-Day Journey</h2></div><span className="portal-demo-chip"><i /> SAMPLE ITINERARY</span></div>
      <div className="portal-trip-timeline">
        {tripTimelineDays.map(({ day, title, destination, category, status, image }, index) => {
          const isExpanded = expandedDays.includes(day)
          const isSelected = selectedDay === day
          return (
            <article className={`portal-trip-timeline-item is-${status.toLowerCase()}${isSelected ? ' is-selected' : ''}`} key={day}>
              <span className="portal-trip-timeline-number" aria-hidden="true">{String(day).padStart(2, '0')}</span>
              {index < tripTimelineDays.length - 1 && <span className="portal-trip-timeline-connector" aria-hidden="true" />}
              <div className="portal-trip-day-card">
                <button className="portal-trip-day-toggle" type="button" aria-expanded={isExpanded} aria-controls={`trip-day-${day}-details`} onClick={() => toggleDay(day)}>
                  <Image id={image} alt={`Illustrative landscape for ${title}`} className="portal-trip-day-thumb" />
                  <span className="portal-trip-day-copy">
                    <span className="portal-trip-day-meta">DAY {String(day).padStart(2, '0')} <i /> <MapPin size={12} />{destination}</span>
                    <strong>{title}</strong>
                    <span className="portal-trip-day-category">{category}</span>
                    <span className="portal-trip-day-details-link">View Details <span aria-hidden="true">→</span></span>
                  </span>
                  <span className={`portal-itinerary-status is-${status.toLowerCase()}`}>{status}</span>
                  <span className="portal-trip-day-chevron" aria-hidden="true">{isExpanded ? <ArrowUp size={16} /> : <ArrowDown size={16} />}</span>
                </button>
                <AnimatePresence initial={false}>
                  {isExpanded && <motion.div id={`trip-day-${day}-details`} className="portal-trip-day-expanded" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: .22 }}>
                    <p>{day === 4 ? 'A Himalayan trekking experience surrounded by mountain landscapes and high-altitude scenery.' : `${title} is part of this illustrative Uttarakhand journey. Day activities and arrangements are sample itinerary details.`}</p>
                    <span>{isSelected ? 'Details shown below' : 'Select this day to view its details below'}</span>
                  </motion.div>}
                </AnimatePresence>
              </div>
            </article>
          )
        })}
      </div>
      <p className="portal-trip-data-note">All day plans are illustrative demo records, not confirmed bookings or live schedules.</p>
    </section>
  )
}
