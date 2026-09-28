import { useEffect, useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Camera, Compass, Heart, Leaf, Mountain, Search, Sparkles, UsersRound, Utensils } from 'lucide-react'
import { Link, useSearchParams } from 'react-router-dom'
import { experienceCategories, experiences, travelStyles } from '../data/experiences'
import type { ExperienceCategory } from '../types'
import { CuratedExperienceCard } from '../components/CuratedExperienceCard'
import { Image } from '../components/Image'
import { SectionHeading } from '../components/SectionHeading'

type ActiveCategory = ExperienceCategory | 'All Experiences'

const locations = ['Anywhere', 'Kumaon', 'Garhwal', 'Rishikesh', 'Uttarakhand']
const categoryIcons: Record<ActiveCategory, typeof Mountain> = {
  'All Experiences': Compass,
  Adventure: Mountain,
  Nature: Leaf,
  Culture: Sparkles,
  Food: Utensils,
  'Village Life': Heart,
  Wellness: Leaf,
  Photography: Camera,
}

function categoryFromQuery(value: string): ActiveCategory {
  const label = value.split('-').map((part) => part[0]?.toUpperCase() + part.slice(1).toLowerCase()).join(' ')
  return experienceCategories.includes(label as ActiveCategory) ? label as ActiveCategory : 'All Experiences'
}

const detailStats = [
  { title: 'LOCAL CONNECTION', description: 'Community-led experiences', icon: UsersRound },
  { title: 'SLOW TRAVEL', description: 'Meaningful time in each place', icon: Compass },
  { title: 'REAL MEMORIES', description: 'Photos, stories & moments to keep', icon: Heart },
]

const localDiscoveries = [
  { title: 'Hidden Villages', description: 'Follow a quieter road into mountain life.', icon: Mountain },
  { title: 'Local Food', description: 'Gather around a table shaped by the hills.', icon: Utensils },
  { title: 'Mountain Stories', description: 'Listen to the people who know these places.', icon: UsersRound },
  { title: 'Traditional Life', description: 'Notice the rhythms and rituals of everyday life.', icon: Sparkles },
]

export function ExperiencesPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [activeCategory, setActiveCategory] = useState<ActiveCategory>(() => categoryFromQuery(searchParams.get('category') ?? ''))
  const [location, setLocation] = useState(searchParams.get('location') ?? 'Anywhere')
  const [travelDate, setTravelDate] = useState(searchParams.get('date') ?? '')
  const [guests, setGuests] = useState(searchParams.get('guests') ?? '2')

  useEffect(() => {
    setActiveCategory(categoryFromQuery(searchParams.get('category') ?? ''))
    setLocation(searchParams.get('location') ?? 'Anywhere')
    setTravelDate(searchParams.get('date') ?? '')
    setGuests(searchParams.get('guests') ?? '2')
  }, [searchParams])

  const filteredExperiences = experiences.filter((experience) => {
    const matchesCategory = activeCategory === 'All Experiences' || experience.category === activeCategory
    const matchesLocation = location === 'Anywhere' || experience.location.toLowerCase().includes(location.toLowerCase())
    return matchesCategory && matchesLocation
  })

  function applyHeroFilters(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const params = new URLSearchParams()
    if (activeCategory !== 'All Experiences') params.set('category', activeCategory.toLowerCase().replaceAll(' ', '-'))
    if (location !== 'Anywhere') params.set('location', location)
    if (travelDate) params.set('date', travelDate)
    if (guests !== '2') params.set('guests', guests)
    setSearchParams(params, { replace: true })
    document.getElementById('curated-experiences')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  function chooseCategory(category: ActiveCategory) {
    setActiveCategory(category)
    const params = new URLSearchParams(searchParams)
    if (category === 'All Experiences') params.delete('category')
    else params.set('category', category.toLowerCase().replaceAll(' ', '-'))
    setSearchParams(params, { replace: true })
  }

  function chooseStyle(categories: ExperienceCategory[]) {
    const category = categories[0]
    if (!category) return
    chooseCategory(category)
    document.getElementById('curated-experiences')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="experiences-page">
      <section className="experiences-hero">
        <Image id="photo-1464822759023-fed622ff2c3b" alt="Himalayan mountains rising above a forest valley" className="experiences-hero__image" />
        <div className="experiences-hero__shade" />
        <motion.div className="experiences-hero__copy" initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="eyebrow eyebrow--gold">EXPERIENCE UTTARAKHAND</span>
          <h1>Do More Than Visit.<br /><em>Live Uttarakhand.</em></h1>
          <p>Discover the experiences, traditions, flavours and adventures that make the Himalayas unforgettable.</p>
        </motion.div>
        <motion.div className="experiences-hero__float" initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }}><span><Mountain size={17} /> A PLACE TO BEGIN</span><strong>On the mountain trail</strong><small>Find your own pace in the hills</small></motion.div>
        <span className="experiences-hero__caption">DEV BHOOMI TRIP &nbsp;·&nbsp; LIVE THE HIMALAYAN EXPERIENCE</span>
      </section>

      <form className="experience-search" onSubmit={applyHeroFilters} aria-label="Find an experience">
        <label><span>WHAT DO YOU WANT TO EXPERIENCE?</span><select value={activeCategory} onChange={(event) => setActiveCategory(event.target.value as ActiveCategory)}>{experienceCategories.map((category) => <option key={category}>{category}</option>)}</select></label>
        <span className="experience-search__divider" />
        <label><span>WHERE?</span><select value={location} onChange={(event) => setLocation(event.target.value)}>{locations.map((item) => <option key={item}>{item}</option>)}</select></label>
        <span className="experience-search__divider" />
        <label className="experience-search__date"><span>DATE</span><input type="date" aria-label="Choose a date" value={travelDate} onChange={(event) => setTravelDate(event.target.value)} /></label>
        <span className="experience-search__divider" />
        <label className="experience-search__guests"><span>GUESTS</span><select value={guests} onChange={(event) => setGuests(event.target.value)}><option value="1">1 Guest</option><option value="2">2 Guests</option><option value="3">3 Guests</option><option value="4">4 Guests</option><option value="5">5+ Guests</option></select></label>
        <button type="submit"><Search size={17} /><span>Explore Experiences</span></button>
      </form>

      <section className="experience-category-section" aria-label="Filter experiences by category">
        <div className="experience-category-heading"><span className="eyebrow">FIND YOUR KIND OF JOURNEY</span><span>{filteredExperiences.length} experiences to explore</span></div>
        <div className="experience-category-rail">{experienceCategories.map((category) => {
          const Icon = categoryIcons[category]
          return <button key={category} type="button" className={`experience-category-pill${activeCategory === category ? ' is-active' : ''}`} aria-pressed={activeCategory === category} onClick={() => chooseCategory(category)}><Icon size={17} strokeWidth={1.6} /><span>{category}</span></button>
        })}</div>
      </section>

      <section className="curated-experiences" id="curated-experiences">
        <div className="experiences-section-heading"><SectionHeading eyebrow="CURATED EXPERIENCES" title="Experience the Real Uttarakhand" description="Go beyond sightseeing and connect with the people, places and traditions that make Devbhoomi unique." /><Link to="/contact" className="underlined-link">Plan with us <ArrowUpRight size={15} /></Link></div>
        {filteredExperiences.length > 0 ? <div className="curated-experience-grid">{filteredExperiences.map((experience, index) => <motion.div key={experience.id} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.48, delay: (index % 3) * 0.05 }}><CuratedExperienceCard experience={experience} /></motion.div>)}</div> : <div className="experience-empty"><Compass size={27} /><p>No experiences in this category yet. Try another way to explore.</p><button type="button" onClick={() => chooseCategory('All Experiences')}>View all experiences</button></div>}
      </section>

      <section className="experience-story" id="experience-story">
        <div className="experience-story__photo"><Image id="photo-1470770841072-f978cf4d019e" alt="Warm light over a quiet Himalayan village" /><span>UTTARAKHAND · AT YOUR OWN PACE</span></div>
        <motion.div className="experience-story__copy" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="eyebrow">A DIFFERENT KIND OF TRAVEL</span>
          <h2>Travel With<br />a <em>Story</em></h2>
          <p>Meet local communities. Taste traditional food. Walk through villages. Learn the stories behind the mountains.</p>
          <div className="experience-story__stats">{detailStats.map(({ title, description, icon: Icon }) => <div className="experience-story-stat" key={title}><span className="experience-story-stat__icon"><Icon size={19} strokeWidth={1.5} /></span><span><strong>{title}</strong><small>{description}</small></span></div>)}</div>
          <a href="#curated-experiences" className="button button--forest">Discover Our Experiences <ArrowRight size={16} /></a>
        </motion.div>
      </section>

      <section className="experience-styles">
        <div className="experience-styles__inner">
          <div className="experience-styles__heading"><SectionHeading eyebrow="TRAVEL IN YOUR OWN WAY" title="For Every Kind of Traveller" description="Choose a feeling. We’ll help you find an experience that fits." /></div>
          <div className="experience-style-grid">{travelStyles.map(({ id, title, description, categories: styleCategories }, index) => <motion.button className="experience-style-card" key={id} type="button" onClick={() => chooseStyle(styleCategories)} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: (index % 3) * 0.04 }}><span className="experience-style-card__index">0{index + 1}</span><h3>{title}</h3><p>{description}</p><span className="experience-style-card__arrow"><ArrowUpRight size={16} /></span></motion.button>)}</div>
        </div>
      </section>

      <section className="local-experiences">
        <div className="local-experiences__inner">
          <motion.div className="local-experiences__copy" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}><span className="eyebrow eyebrow--gold">BEYOND THE TOURIST TRAIL</span><h2>Discover the Uttarakhand<br /><em>Most Visitors Never See.</em></h2><p>Some of the most meaningful moments happen away from crowded viewpoints — in villages, kitchens, forests, local markets and conversations with people.</p><Link to="/destinations#hidden-uttarakhand" className="local-experiences__link">Explore Hidden Uttarakhand <ArrowRight size={16} /></Link></motion.div>
          <div className="local-experience-grid">{localDiscoveries.map(({ title, description, icon: Icon }, index) => <motion.article className="local-experience-card" key={title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.05 }}><span className="local-experience-card__icon"><Icon size={21} strokeWidth={1.5} /></span><h3>{title}</h3><p>{description}</p></motion.article>)}</div>
        </div>
      </section>

      <section className="experience-journey">
        <div className="experience-journey__inner"><div><span className="eyebrow">ONE JOURNEY, MANY WAYS TO FEEL</span><h2>Want the Complete<br /><em>Himalayan Experience?</em></h2><p>Combine nature, culture, food, adventure and village life into one carefully planned journey.</p><Link to="/packages" className="button button--gold">View the 10-Day Journey <ArrowRight size={16} /></Link></div><div className="experience-journey__facts"><div><strong>10</strong><span>DAYS</span></div><div><strong>10+</strong><span>EXPERIENCES</span></div><div><strong>SEVERAL</strong><span>DESTINATIONS</span></div><div><strong>ONE</strong><span>HIMALAYAN STORY</span></div></div></div>
      </section>

      <section className="experiences-cta">
        <Image id="photo-1464822759023-fed622ff2c3b" alt="The Himalayas in soft evening light" className="experiences-cta__image" /><div className="experiences-cta__shade" />
        <motion.div className="experiences-cta__copy" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}><span className="eyebrow eyebrow--gold">THERE’S A PLACE FOR YOU HERE</span><h2>Your Himalayan Story<br /><em>Starts Here.</em></h2><p>Don't just visit Uttarakhand. Experience it.</p><div><Link to="/contact" className="button button--gold">Plan My Journey <ArrowUpRight size={16} /></Link><Link to="/destinations" className="button button--outline-light">Explore Destinations <ArrowUpRight size={16} /></Link></div></motion.div>
      </section>
    </div>
  )
}