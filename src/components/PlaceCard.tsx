import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Place } from '../types'
import { Image } from './Image'

export function PlaceCard({ place, index = 0 }: { place: Place; index?: number }) {
  return (
    <Link className={`place-card place-card--${index % 3}`} to="/destinations">
      <Image id={place.image} alt={`${place.name} in ${place.region}`} className="place-card__image" />
      <span className="place-card__veil" />
      <span className="place-card__meta">{place.region}</span>
      <span className="place-card__bottom">
        <span><strong>{place.name}</strong><small>{place.description}</small></span>
        <span className="round-arrow"><ArrowUpRight size={18} /></span>
      </span>
    </Link>
  )
}