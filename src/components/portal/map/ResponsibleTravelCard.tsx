import { HeartHandshake, Leaf } from 'lucide-react'
import { responsibleTravelGuidelines } from '../../../data/touristJourney'

export function ResponsibleTravelCard() {
  return (
    <section className="portal-map-responsible-card">
      <span className="portal-map-responsible-icon"><HeartHandshake size={21} /></span>
      <div><span className="portal-eyebrow">TRAVEL WITH CARE</span><h2>Travel Through Uttarakhand With Respect</h2></div>
      <ul>{responsibleTravelGuidelines.slice(0, 5).map((guideline) => <li key={guideline}><Leaf size={13} />{guideline}</li>)}</ul>
    </section>
  )
}
