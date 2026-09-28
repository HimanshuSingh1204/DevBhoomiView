import { useEffect, useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Compass, Leaf, Search } from 'lucide-react'
import { Link, useSearchParams } from 'react-router-dom'
import { destinations } from '../data/destinations'
import { DestinationCard } from '../components/DestinationCard'
import { Image } from '../components/Image'
import { SectionHeading } from '../components/SectionHeading'

const regions = ['All', 'Kumaon', 'Garhwal']
const experiences = ['Nature', 'Adventure', 'Culture', 'Food', 'Village Life']
const featuredNames = ['Nainital', 'Chopta', 'Almora']

function experienceFromQuery(value: string) {
  return value.split('-').map((part) => part[0]?.toUpperCase() + part.slice(1).toLowerCase()).join(' ')
}

export function DestinationsPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const queryPlace = searchParams.get('place') ?? ''
  const queryRegion = searchParams.get('region') ?? ''
  const queryCategory = searchParams.get('category') ?? ''
  const [search, setSearch] = useState(queryPlace)
  const [region, setRegion] = useState(queryRegion ? queryRegion[0].toUpperCase() + queryRegion.slice(1).toLowerCase() : 'All')
  const [experience, setExperience] = useState(queryCategory ? experienceFromQuery(queryCategory) : '')

  useEffect(() => {
    const place = searchParams.get('place') ?? ''
    const selectedRegion = searchParams.get('region') ?? ''
    const category = searchParams.get('category') ?? ''
    setSearch(place)
    setRegion(selectedRegion ? selectedRegion[0].toUpperCase() + selectedRegion.slice(1).toLowerCase() : 'All')
    setExperience(category ? experienceFromQuery(category) : '')
  }, [searchParams])

  const filteredDestinations = destinations.filter((destination) => {
    const matchesSearch = destination.name.toLowerCase().includes(search.trim().toLowerCase())
    const matchesRegion = region === 'All' || destination.region === region
    const matchesExperience = !experience || destination.categories.includes(experience)
    return matchesSearch && matchesRegion && matchesExperience
  })

  const featuredDestinations = filteredDestinations.filter((destination) => featuredNames.includes(destination.name))
  const otherDestinations = filteredDestinations.filter((destination) => !featuredNames.includes(destination.name))

  function applySearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const params = new URLSearchParams()
    if (search.trim()) params.set('place', search.trim())
    if (region !== 'All') params.set('region', region.toLowerCase())
    if (experience) params.set('category', experience.toLowerCase().replaceAll(' ', '-'))
    setSearchParams(params, { replace: true })
    document.getElementById('destination-results')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  function updateRegion(value: string) {
    setRegion(value)
    const params = new URLSearchParams(searchParams)
    if (value === 'All') params.delete('region')
    else params.set('region', value.toLowerCase())
    setSearchParams(params, { replace: true })
  }

  function updateExperience(value: string) {
    const nextExperience = experience === value ? '' : value
    setExperience(nextExperience)
    const params = new URLSearchParams(searchParams)
    if (nextExperience) params.set('category', nextExperience.toLowerCase().replaceAll(' ', '-'))
    else params.delete('category')
    setSearchParams(params, { replace: true })
  }

  function clearFilters() {
    setSearch('')
    setRegion('All')
    setExperience('')
    setSearchParams({}, { replace: true })
  }

  return (
    <div className="destinations-page">
      <section className="destinations-hero">
        <Image id="photo-1470770841072-f978cf4d019e" alt="Himalayan valley and hillside settlement in Uttarakhand" className="destinations-hero__image" />
        <div className="destinations-hero__shade" />
        <motion.div className="destinations-hero__copy" initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
          <span className="eyebrow eyebrow--gold">PLACES WITH A STORY TO TELL</span>
          <h1>Discover<br /><em>Uttarakhand</em></h1>
          <p>Explore mountain towns, hidden valleys, sacred landscapes and villages across the Himalayas.</p>
        </motion.div>
        <span className="destinations-hero__caption">DEV BHOOMI TRIP &nbsp;·&nbsp; UTTARAKHAND</span>
      </section>

      <form className="destinations-search" onSubmit={applySearch} aria-label="Search destinations">
        <label htmlFor="destination-search"><span>FIND A PLACE</span><input id="destination-search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Try Nainital, Munsiyari, or a quiet valley" /></label>
        <button type="submit" aria-label="Search destinations"><Search size={19} /><span>Search</span><ArrowRight size={16} /></button>
      </form>

      <section className="destination-exploration-controls" aria-label="Destination filters">
        <div className="destination-filter-group">
          <div className="destination-filter-heading"><span className="eyebrow">CHOOSE YOUR REGION</span><span className="destination-filter-hint">A different rhythm in every range</span></div>
          <div className="destination-region-options" role="group" aria-label="Filter by region">{regions.map((item) => <button key={item} type="button" className={`destination-filter-button${region === item ? ' is-active' : ''}`} aria-pressed={region === item} onClick={() => updateRegion(item)}>{item}</button>)}</div>
        </div>
        <div className="destination-filter-group destination-filter-group--experiences">
          <div className="destination-filter-heading"><span className="eyebrow">FIND YOUR KIND OF JOURNEY</span><span className="destination-filter-hint">What would you like to experience?</span></div>
          <div className="destination-experience-options" role="group" aria-label="Filter by experience">{experiences.map((item) => <button key={item} type="button" className={`destination-experience-button${experience === item ? ' is-active' : ''}`} aria-pressed={experience === item} onClick={() => updateExperience(item)}><span>{item}</span><ArrowUpRight size={14} /></button>)}</div>
        </div>
      </section>

      {featuredDestinations.length > 0 && <section className="destinations-featured" id="destination-results">
        <div className="destinations-section-heading"><SectionHeading eyebrow="A FEW PLACES TO BEGIN" title="Featured destinations" description="Start with a familiar name, then take the road that feels like yours." /><span className="destinations-count">{filteredDestinations.length} {filteredDestinations.length === 1 ? 'place' : 'places'} found</span></div>
        <div className="destinations-featured-grid">{featuredDestinations.map((destination) => <DestinationCard key={destination.name} destination={destination} featured />)}</div>
      </section>}

      <section className="destinations-all" id={featuredDestinations.length === 0 ? 'destination-results' : undefined}>
        <div className="destinations-section-heading"><SectionHeading eyebrow="TAKE YOUR TIME" title="More places to find your way" description="From open ridgelines to quiet town lanes, let curiosity set the route." /><span className="destinations-count">{otherDestinations.length} {otherDestinations.length === 1 ? 'destination' : 'destinations'}</span></div>
        {filteredDestinations.length > 0 ? <div className="destinations-grid">{otherDestinations.map((destination) => <DestinationCard key={destination.name} destination={destination} />)}</div> : <div className="destinations-empty"><Compass size={28} /><p>No destinations match those filters. Try another region or experience.</p><button type="button" onClick={clearFilters}>Clear filters</button></div>}
      </section>

      <section className="hidden-uttarakhand" id="hidden-uttarakhand">
        <div className="hidden-uttarakhand__photo"><Image id="photo-1464278533981-50106e6176b1" alt="A quiet Himalayan hillside beyond the familiar routes" /><span>THE QUIETER SIDE OF THE HILLS</span></div>
        <motion.div className="hidden-uttarakhand__copy" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="eyebrow">HIDDEN UTTARAKHAND</span>
          <h2>Some of the best<br />places are the ones<br /><em>you almost miss.</em></h2>
          <p>Leave a little room in the itinerary. In Bageshwar and Pithoragarh, mountain life moves at its own pace, far from the familiar stopovers.</p>
          <div className="hidden-uttarakhand__links"><Link to="/destinations?place=Bageshwar">Bageshwar <ArrowUpRight size={15} /></Link><Link to="/destinations?place=Pithoragarh">Pithoragarh <ArrowUpRight size={15} /></Link></div>
          <span className="hidden-uttarakhand__note"><Leaf size={15} /> TAKE THE SCENIC ROUTE</span>
        </motion.div>
      </section>

      <section className="destinations-cta">
        <Image id="photo-1464822759023-fed622ff2c3b" alt="Mountain peaks in the last light of day" className="destinations-cta__image" />
        <div className="destinations-cta__shade" />
        <motion.div className="destinations-cta__copy" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="eyebrow eyebrow--gold">THE MOUNTAINS ARE CLOSER THAN THEY SEEM</span>
          <h2>Your Himalayan<br /><em>Story Starts Here</em></h2>
          <Link to="/explore" className="button button--gold">Start Exploring <ArrowRight size={16} /></Link>
        </motion.div>
      </section>
    </div>
  )
}