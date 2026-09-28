import { useState } from 'react'
import { ArrowDownToLine, ArrowUpRight, CalendarDays, MapPin, UsersRound } from 'lucide-react'
import { Link } from 'react-router-dom'
import { tripOverview } from '../../data/touristJourney'
import { Image } from '../Image'

export function TripHero() {
  const [showDownloadNotice, setShowDownloadNotice] = useState(false)

  return (
    <section className="portal-trip-hero" aria-labelledby="portal-trip-hero-title">
      <Image id="photo-1464822759023-fed622ff2c3b" alt="Cinematic view of Himalayan mountain peaks" className="portal-trip-hero__image" />
      <span className="portal-trip-hero__shade" />
      <div className="portal-trip-hero__content">
        <span className="portal-eyebrow portal-eyebrow--gold"><i /> MY TRIP · DEMO ITINERARY</span>
        <h2 id="portal-trip-hero-title">{tripOverview.title}</h2>
        <p>{tripOverview.subtitle}</p>
        <div className="portal-trip-hero__meta">
          <span><MapPin size={15} />{tripOverview.region}</span><i />
          <span><CalendarDays size={15} />{tripOverview.durationDays} Days</span><i />
          <span><UsersRound size={15} />{tripOverview.travellers} Travellers</span>
        </div>
        <span className="portal-trip-status"><i />{tripOverview.status}</span>
        <div className="portal-trip-hero__actions">
          <Link to="/my-journey/map" className="portal-button portal-button--gold">View Journey Map <ArrowUpRight size={15} /></Link>
          <button className="portal-trip-download" type="button" onClick={() => setShowDownloadNotice((shown) => !shown)}><ArrowDownToLine size={15} />Download Itinerary</button>
        </div>
        {showDownloadNotice && <p className="portal-trip-download-notice" role="status">Itinerary download is coming soon. No document has been created.</p>}
      </div>
      <span className="portal-trip-hero__footnote">Illustrative journey · dates and itinerary are demo data</span>
    </section>
  )
}
