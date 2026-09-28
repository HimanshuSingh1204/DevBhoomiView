import { useEffect, useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Camera, Compass, Landmark, Leaf, MapPin, Mountain, Search, Utensils, UsersRound } from 'lucide-react'
import { Link, useSearchParams } from 'react-router-dom'
import { destinations, destinationCategories } from '../data/destinations'
import { experiences } from '../data/experiences'
import type { Place } from '../types'
import { DestinationCategoryCard } from '../components/DestinationCategoryCard'
import { Image } from '../components/Image'
import { SectionHeading } from '../components/SectionHeading'

const popularNames = ['Nainital', 'Almora', 'Ranikhet', 'Chopta', 'Auli', 'Munsiyari', 'Rishikesh', 'Mussoorie']
const popularDestinations = popularNames.map((name) => destinations.find((place) => place.name === name)!).filter(Boolean)

const experienceFilters = [
  { name: 'Adventure', icon: Mountain },
  { name: 'Culture', icon: Landmark },
  { name: 'Food', icon: Utensils },
  { name: 'Village Life', icon: UsersRound },
  { name: 'Nature', icon: Leaf },
  { name: 'Photography', icon: Camera },
]

const experienceTerms: Record<string, string[]> = {
  Adventure: ['Trekking', 'River Rafting'],
  Culture: ['Cultural Evening', 'Local Market'],
  Food: ['Pahadi Food'],
  'Village Life': ['Village Stay'],
  Nature: ['Forest Walk'],
  Photography: ['Photography'],
}

const durations = ['short', 'weekend', 'long']

function experienceFromQuery(value: string) {
  const normalized = value.toLowerCase().replaceAll('-', ' ')
  return experienceFilters.find((item) => item.name.toLowerCase() === normalized)?.name ?? ''
}

type Filters = { destination: string; region: string; experience: string; duration: string }

function ExploreDestinationCard({ place, index }: { place: Place; index: number }) {
  return (
    <motion.article className="explore-destination-card" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.5, delay: (index % 4) * 0.05 }}>
      <Image id={place.image} alt={`${place.name}, Uttarakhand`} className="explore-destination-card__image" />
      <span className="explore-destination-card__shade" />
      <span className="explore-destination-card__region"><MapPin size={13} />{place.region}</span>
      <div className="explore-destination-card__content">
        <span className="explore-destination-card__count">{place.experienceCount} curated experiences</span>
        <h3>{place.name}</h3>
        <p>{place.description}</p>
        <Link to="/destinations" className="explore-destination-card__link">Explore <ArrowUpRight size={16} /></Link>
      </div>
    </motion.article>
  )
}

export function ExplorePage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const queryPlace = searchParams.get('place') ?? ''
  const queryRegion = searchParams.get('region') ?? ''
  const queryExperience = searchParams.get('experience') ?? ''
  const queryDuration = searchParams.get('duration') ?? ''
  const isRegion = (value: string) => ['kumaon', 'garhwal'].includes(value.toLowerCase())
  const [filters, setFilters] = useState<Filters>(() => ({
    destination: popularNames.includes(queryPlace) ? queryPlace : '',
    region: queryRegion ? queryRegion[0].toUpperCase() + queryRegion.slice(1).toLowerCase() : (isRegion(queryPlace) ? queryPlace : ''),
    experience: experienceFromQuery(queryExperience),
    duration: durations.includes(queryDuration) ? queryDuration : '',
  }))

  useEffect(() => {
    const place = searchParams.get('place') ?? ''
    const region = searchParams.get('region') ?? ''
    const experience = searchParams.get('experience') ?? ''
    const duration = searchParams.get('duration') ?? ''
    setFilters((current) => ({
      ...current,
      destination: popularNames.includes(place) ? place : '',
      region: region ? region[0].toUpperCase() + region.slice(1).toLowerCase() : (isRegion(place) ? place : ''),
      experience: experienceFromQuery(experience),
      duration: durations.includes(duration) ? duration : '',
    }))
  }, [searchParams])

  const filteredDestinations = popularDestinations.filter((place) => {
    if (filters.destination && place.name !== filters.destination) return false
    if (filters.region && place.region !== filters.region) return false
    if (!filters.experience && !filters.duration) return true

    const matchingExperiences = experiences.filter((experience) => {
      const relevantLocation = experience.location.toLowerCase().includes(place.name.toLowerCase()) || experience.location.toLowerCase().includes(place.region.toLowerCase())
      const relevantType = !filters.experience || experienceTerms[filters.experience]?.includes(experience.category)
      const duration = experience.duration.toLowerCase()
      const relevantDuration = !filters.duration || (filters.duration === 'short' && /half|morning|evening/.test(duration)) || (filters.duration === 'weekend' && /1 day|2 days/.test(duration)) || (filters.duration === 'long' && /3 nights|4 days|5 days/.test(duration))
      return relevantLocation && relevantType && relevantDuration
    })

    return matchingExperiences.length > 0
  })

  function applyFilters(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const params = new URLSearchParams()
    if (filters.destination) params.set('place', filters.destination)
    if (filters.region) params.set('region', filters.region.toLowerCase())
    if (filters.experience) params.set('experience', filters.experience.toLowerCase().replaceAll(' ', '-'))
    if (filters.duration) params.set('duration', filters.duration)
    setSearchParams(params, { replace: true })
    document.getElementById('popular-destinations')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  function updateFilter(key: keyof Filters, value: string) {
    setFilters((current) => ({ ...current, [key]: value }))
  }

  return (
    <div className="explore-page">
      <section className="explore-hero">
        <Image id="photo-1464822759023-fed622ff2c3b" alt="The Himalayan range above Uttarakhand" className="explore-hero__image" />
        <div className="explore-hero__shade" />
        <motion.div className="explore-hero__copy" initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
          <span className="eyebrow eyebrow--gold">A LAND OF MANY WORLDS</span>
          <h1>Explore<br /><em>Uttarakhand</em></h1>
          <p>From peaceful valleys to majestic Himalayan peaks, discover places that tell a different story.</p>
          <a href="#explore-regions" className="explore-hero__link">Find your way <ArrowRight size={15} /></a>
        </motion.div>
        <span className="explore-hero__caption">UTTARAKHAND, INDIA &nbsp;·&nbsp; 30° N / 79° E</span>
      </section>

      <form className="explore-filter" onSubmit={applyFilters} aria-label="Filter destinations">
        <label><span>DESTINATION</span><select value={filters.destination} onChange={(event) => updateFilter('destination', event.target.value)}><option value="">Any destination</option>{popularDestinations.map((place) => <option key={place.name}>{place.name}</option>)}</select></label>
        <span className="explore-filter__divider" />
        <label><span>REGION</span><select value={filters.region} onChange={(event) => updateFilter('region', event.target.value)}><option value="">All regions</option><option>Kumaon</option><option>Garhwal</option></select></label>
        <span className="explore-filter__divider" />
        <label><span>EXPERIENCE</span><select value={filters.experience} onChange={(event) => updateFilter('experience', event.target.value)}><option value="">Any experience</option>{experienceFilters.map((item) => <option key={item.name}>{item.name}</option>)}</select></label>
        <span className="explore-filter__divider" />
        <label><span>DURATION</span><select value={filters.duration} onChange={(event) => updateFilter('duration', event.target.value)}><option value="">Any duration</option><option value="short">A few hours</option><option value="weekend">1-2 days</option><option value="long">3+ days</option></select></label>
        <button type="submit" className="explore-filter__submit"><Search size={17} />Search</button>
      </form>

      <section className="explore-regions" id="explore-regions">
        <div className="explore-section-heading"><SectionHeading eyebrow="FIND YOUR BEARING" title="Three ways into the hills" description="Start with a region, then follow the roads and stories that draw you in." /></div>
        <div className="explore-region-grid">
          {destinationCategories.filter((category) => category.id !== 'top-experiences').map((category, index) => <motion.div key={category.id} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.06 }}><DestinationCategoryCard category={category} /></motion.div>)}
        </div>
      </section>

      <section className="explore-popular" id="popular-destinations">
        <div className="explore-popular__heading">
          <SectionHeading eyebrow="POPULAR DESTINATIONS" title="Places worth taking the long way for" description="A few starting points for a journey that can unfold at your own pace." />
          <span className="explore-result-count">{filteredDestinations.length} {filteredDestinations.length === 1 ? 'place' : 'places'} to explore</span>
        </div>
        {filteredDestinations.length > 0 ? <div className="explore-destination-grid">{filteredDestinations.map((place, index) => <ExploreDestinationCard key={place.name} place={place} index={index} />)}</div> : <div className="explore-empty"><Compass size={25} /><p>No places match those filters yet. Try another combination.</p><button type="button" onClick={() => { setFilters({ destination: '', region: '', experience: '', duration: '' }); setSearchParams({}, { replace: true }) }}>Clear filters</button></div>}
      </section>

      <section className="explore-experiences">
        <div className="explore-experiences__inner">
          <div><span className="eyebrow eyebrow--gold">FOLLOW A FEELING</span><h2>What brings you<br /><em>to the mountains?</em></h2><p>Choose a thread to follow. There is always more than one way to experience the hills.</p></div>
          <div className="explore-experience-grid">{experienceFilters.map(({ name, icon: Icon }) => <button key={name} className={`explore-experience${filters.experience === name ? ' is-active' : ''}`} type="button" aria-pressed={filters.experience === name} onClick={() => { updateFilter('experience', filters.experience === name ? '' : name); document.getElementById('popular-destinations')?.scrollIntoView({ behavior: 'smooth', block: 'start' }) }}><Icon size={22} strokeWidth={1.5} /><span>{name}</span><ArrowUpRight size={15} /></button>)}</div>
        </div>
      </section>

      <section className="explore-closing">
        <Image id="photo-1470770841072-f978cf4d019e" alt="Last light settling over a Himalayan valley" className="explore-closing__image" />
        <div className="explore-closing__shade" />
        <motion.div className="explore-closing__copy" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}><span className="eyebrow eyebrow--gold">THE HILLS ARE CALLING</span><h2>Your Himalayan<br /><em>Story Starts Here</em></h2><p>Take the first step. We will help you find the rest of the way.</p><Link to="/contact" className="button button--gold">Plan your journey <ArrowRight size={16} /></Link></motion.div>
      </section>
    </div>
  )
}