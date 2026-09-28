import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { CollectionContent } from '../types'
import { Image } from '../components/Image'
import { PlaceCard } from '../components/PlaceCard'
import { SectionHeading } from '../components/SectionHeading'

export function CollectionPage({ content }: { content: CollectionContent }) {
  return (
    <>
      <section className="collection-hero">
        <Image id={content.image} alt="Uttarakhand mountain landscape" className="collection-hero__image" />
        <div className="collection-hero__shade" />
        <motion.div className="collection-hero__copy" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
          <span className="eyebrow eyebrow--gold">{content.eyebrow}</span><h1>{content.title}</h1><p>{content.description}</p>
          <Link to="/contact" className="button button--gold">Plan your journey <ArrowUpRight size={16} /></Link>
        </motion.div>
        <span className="collection-hero__foot">DEV BHOOMI TRIP · UTTARAKHAND</span>
      </section>
      <section className="collection-section section-wrap">
        <SectionHeading eyebrow="Made for the curious" title="A few places to begin" description="Take a look around. Your journey can take shape from here." />
        <div className="collection-grid">{content.items.map((place, index) => <PlaceCard key={`${place.name}-${index}`} place={place} index={index} />)}</div>
        <div className="collection-bottom"><span>There is more to the hills than a single list can hold.</span><Link to="/contact" className="underlined-link">Tell us what you’re looking for <ArrowUpRight size={16} /></Link></div>
      </section>
    </>
  )
}