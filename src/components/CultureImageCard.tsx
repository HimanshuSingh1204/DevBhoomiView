import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { CultureCard } from '../types'
import { Image } from './Image'

export function CultureImageCard({ card, index = 0, variant = 'default' }: { card: CultureCard; index?: number; variant?: 'default' | 'food' | 'community' | 'clothing' }) {
  return (
    <article className={`culture-image-card culture-image-card--${variant} culture-image-card--${index % 3}`}>
      <div className="culture-image-card__photo"><Image id={card.image} alt={card.imageAlt} className="culture-image-card__image" /><span className="culture-image-card__shade" />{card.category && <span className="culture-image-card__category">{card.category}</span>}</div>
      <div className="culture-image-card__body"><h3>{card.title}</h3><p>{card.description}</p>{card.href && <Link to={card.href} className="culture-image-card__link">Explore Experience <ArrowUpRight size={15} /></Link>}</div>
    </article>
  )
}