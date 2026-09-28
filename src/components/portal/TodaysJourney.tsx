import { motion } from 'framer-motion'
import { ArrowUpRight, CalendarDays, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { demoTrip, journeyDays } from '../../data/touristJourney'
import { Image } from '../Image'

export function TodaysJourney() {
  return (
    <motion.section className="portal-itinerary-card" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .4 }} aria-labelledby="portal-itinerary-title">
      <div className="portal-card-heading"><div><span className="portal-eyebrow">DEMO ITINERARY · {demoTrip.totalDays} DAYS</span><h2 id="portal-itinerary-title">Your 10-Day Itinerary</h2></div><Link to="/my-journey/trip">View Full Itinerary <ArrowUpRight size={14} /></Link></div>
      <div className="portal-itinerary-list">
        {journeyDays.map(({ day, title, destination, status, image }, index) => <article className={`portal-itinerary-row${status === 'Today' ? ' is-today' : ''}`} key={day}>
          <span className={`portal-itinerary-node${status === 'Completed' ? ' is-complete' : ''}${status === 'Today' ? ' is-current' : ''}`}>{status === 'Completed' ? '✓' : String(day).padStart(2, '0')}</span>
          {index < journeyDays.length - 1 && <i className={`portal-itinerary-connector${status === 'Completed' ? ' is-complete' : ''}`} />}
          <Image id={image} alt={`Illustrative landscape for day ${day} in ${destination}`} className="portal-itinerary-thumb" />
          <div className="portal-itinerary-info"><span>DAY {String(day).padStart(2, '0')} <i /> <MapPin size={11} /> {destination}</span><h3>{title}</h3></div>
          <span className={`portal-itinerary-status is-${status.toLowerCase()}`}>{status}</span>
        </article>)}
      </div>
      <p className="portal-card-disclaimer"><CalendarDays size={13} /> Example itinerary only · not a confirmed booking or live schedule.</p>
    </motion.section>
  )
}
