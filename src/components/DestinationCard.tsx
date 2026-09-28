import { ArrowUpRight, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Place } from '../types'
import { Image } from './Image'

type DestinationCardProps = {
  destination: Place
  featured?: boolean
}

export function DestinationCard({ destination, featured = false }: DestinationCardProps) {
  return (
    <article className={`destination-card${featured ? ' destination-card--featured' : ''}`}>
      <Image id={destination.image} alt={`${destination.name} in ${destination.region}`} className="destination-card__image" />
      <span className="destination-card__shade" />
      <span className="destination-card__region"><MapPin size={13} />{destination.region}</span>
      <div className="destination-card__content">
        <span className="destination-card__category">{destination.categories[0]}</span>
        <h3>{destination.name}</h3>
        <p>{destination.description}</p>
        <div className="destination-card__footer">
          <span>{destination.experienceCount} experiences</span>
          <Link to={`/destinations?place=${encodeURIComponent(destination.name)}`} className="destination-card__link">Explore <ArrowUpRight size={16} /></Link>
        </div>
      </div>
    </article>
  )
}