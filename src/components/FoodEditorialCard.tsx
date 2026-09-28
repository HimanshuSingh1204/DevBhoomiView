import { ArrowUpRight } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Image } from './Image'

type FoodEditorialCardProps = {
  title: string
  category: string
  description: string
  image: string
  imageAlt: string
  href?: string
  action?: string
  duration?: string
  variant?: 'light' | 'dark' | 'compact'
  icon?: LucideIcon
}

export function FoodEditorialCard({ title, category, description, image, imageAlt, href, action = 'Discover', duration, variant = 'light', icon: Icon }: FoodEditorialCardProps) {
  return (
    <article className={`food-editorial-card food-editorial-card--${variant}`}>
      <div className="food-editorial-card__photo"><Image id={image} alt={imageAlt} className="food-editorial-card__image" /><span className="food-editorial-card__shade" /><span className="food-editorial-card__category">{Icon && <Icon size={13} aria-hidden="true" />}{category}</span>{duration && <span className="food-editorial-card__duration">{duration}</span>}</div>
      <div className="food-editorial-card__body"><h3>{title}</h3><p>{description}</p>{href && <Link to={href} className="food-editorial-card__link">{action} <ArrowUpRight size={15} /></Link>}</div>
    </article>
  )
}