import { CalendarDays, MapPin, Mountain, Route } from 'lucide-react'
import { journeyMapSummary } from '../../../data/journeyMap'

export function JourneyMapHero() {
  return (
    <section className="portal-map-hero">
      <div className="portal-map-hero__copy">
        <span className="portal-eyebrow"><i /> MY JOURNEY · VISUAL ROUTE</span>
        <h2>Your Journey Across <em>Uttarakhand</em></h2>
        <p>Follow the places, experiences and memories that make up your Himalayan journey.</p>
        <div className="portal-map-hero__meta">
          <span><CalendarDays size={15} />{journeyMapSummary.durationDays} Days</span><i />
          <span><MapPin size={15} />{journeyMapSummary.destinations} Destinations</span><i />
          <span><Route size={15} />{journeyMapSummary.experiences} Experiences</span>
        </div>
      </div>
      <div className="portal-map-hero__status">
        <span><Mountain size={17} />DAY {journeyMapSummary.currentDay} / {journeyMapSummary.durationDays}</span>
        <strong><i />JOURNEY IN PROGRESS</strong>
        <small>Sample journey status</small>
      </div>
    </section>
  )
}
