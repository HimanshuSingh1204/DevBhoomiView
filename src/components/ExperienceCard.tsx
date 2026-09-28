import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Experience } from '../types'
import { Image } from './Image'

export function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <Link className="experience-card" to="/experiences">
      <div className="experience-card__photo">
        <Image id={experience.image} alt={experience.title} className="experience-card__image" />
        <h3 className="experience-card__title-overlay">{experience.title}</h3>
        <span className="experience-card__category">{experience.category}</span>
        <span className="round-arrow"><ArrowUpRight size={18} /></span>
      </div>
      <div className="experience-card__details"><span>{experience.location}</span><span>{experience.duration}</span></div>
    </Link>
  )
}