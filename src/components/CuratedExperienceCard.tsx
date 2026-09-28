import { ArrowUpRight, Clock3, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Experience } from '../types'
import { Image } from './Image'

export function CuratedExperienceCard({ experience }: { experience: Experience }) {
  const categorySlug = experience.category.toLowerCase().replaceAll(' ', '-')

  return (
    <article className="curated-experience-card">
      <div className="curated-experience-card__image-wrap">
        <Image id={experience.image} alt={experience.title} className="curated-experience-card__image" />
        <span className="curated-experience-card__shade" />
        <span className="curated-experience-card__category">{experience.category}</span>
        <span className="curated-experience-card__duration"><Clock3 size={13} />{experience.duration}</span>
      </div>
      <div className="curated-experience-card__body">
        <h3>{experience.title}</h3>
        <span className="curated-experience-card__location"><MapPin size={14} />{experience.location}</span>
        <p>{experience.description}</p>
        <Link to={`/experiences?category=${categorySlug}#curated-experiences`} className="curated-experience-card__link">Explore Experience <ArrowUpRight size={16} /></Link>
      </div>
    </article>
  )
}