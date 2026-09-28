import { ArrowUpRight, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { JourneyDay } from '../types'
import { Image } from './Image'

export function JourneyDayCard({ journeyDay, index }: { journeyDay: JourneyDay; index: number }) {
  const experienceUrl = journeyDay.experienceSlug ? `/experiences?category=${encodeURIComponent(journeyDay.experienceSlug)}` : ''

  return (
    <article className={`journey-day-card journey-day-card--${index % 2 === 0 ? 'left' : 'right'}`}>
      <div className="journey-day-card__image-wrap"><Image id={journeyDay.image} alt={`${journeyDay.title} in ${journeyDay.location ?? 'Uttarakhand'}`} className="journey-day-card__image" /><span className="journey-day-card__image-shade" /><span className="journey-day-card__image-day">DAY {String(journeyDay.day).padStart(2, '0')}</span></div>
      <div className="journey-day-card__body">
        <div className="journey-day-card__meta"><span>DAY {String(journeyDay.day).padStart(2, '0')}</span><span>{journeyDay.category}</span></div>
        <h3>{journeyDay.title}</h3>
        <p>{journeyDay.description}</p>
        <div className="journey-day-card__details">{journeyDay.location && <span><MapPin size={14} />{journeyDay.location}</span>}{journeyDay.approximateTiming && <span>{journeyDay.approximateTiming}</span>}</div>
        {experienceUrl && <Link className="journey-day-card__link" to={experienceUrl}>Related experiences <ArrowUpRight size={15} /></Link>}
      </div>
    </article>
  )
}