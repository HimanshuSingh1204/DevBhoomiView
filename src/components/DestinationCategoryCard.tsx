import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { DestinationCategory } from '../types'
import { Image } from './Image'

export function DestinationCategoryCard({ category }: { category: DestinationCategory }) {
  return (
    <Link className="destination-category" to={category.href}>
      <Image id={category.image} alt={`${category.name}, Uttarakhand`} className="destination-category__image" />
      <span className="destination-category__overlay" />
      <span className="destination-category__count">{category.count}</span>
      <span className="destination-category__title">{category.name}</span>
      <span className="destination-category__arrow"><ArrowUpRight size={17} /></span>
    </Link>
  )
}