import { motion } from 'framer-motion'
import { ArrowUpRight, MapPin, Navigation, Route } from 'lucide-react'
import { Link } from 'react-router-dom'
import { routeDestinations } from '../../data/touristJourney'

export function JourneyMapPreview() {
  return (
    <motion.section className="portal-map-section" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .35 }} aria-labelledby="portal-map-title">
      <div className="portal-card-heading"><div><span className="portal-eyebrow">DEMO ROUTE · NOT LIVE GPS</span><h2 id="portal-map-title">Your Trip Map</h2></div><Link to="/my-journey/map">Open Full Map <ArrowUpRight size={14} /></Link></div>
      <div className="portal-map-card">
        <div className="portal-map-art" role="img" aria-label="Illustrative route preview with Nainital, Almora, Chopta, Auli, and Rishikesh; not a geographic map">
          <span className="portal-map-region-label portal-map-region-label--top">HIMALAYAN VALLEYS</span>
          <span className="portal-map-region-label portal-map-region-label--bottom">UTTARAKHAND · JOURNEY PREVIEW</span>
          <svg className="portal-map-route" viewBox="0 0 1000 430" preserveAspectRatio="none" aria-hidden="true"><path d="M140 110 C245 200 260 330 370 290 S495 80 590 140 S716 260 830 90 S850 300 760 325" /></svg>
          {routeDestinations.map(({ name, state, x, y }) => <span key={name} className={`portal-map-place portal-map-place--${state}`} style={{ left: `${x}%`, top: `${y}%` }}><i>{state === 'current' ? <Navigation size={12} /> : <MapPin size={12} />}</i><span>{name}</span></span>)}
          <span className="portal-map-note"><Route size={12} /> Schematic only · no exact coordinates, directions or live location</span>
        </div>
        <div className="portal-map-legend">
          <span><i className="is-destination" />Destination</span>
          <span><i className="is-current" />Current Location</span>
          <span><i className="is-next" />Next Stop</span>
          <span><i className="is-completed" />Completed</span>
        </div>
      </div>
    </motion.section>
  )
}
