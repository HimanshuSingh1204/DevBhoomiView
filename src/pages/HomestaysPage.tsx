import { useMemo, useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, BookOpen, Camera, Check, ChevronDown, Droplets, Heart, Home, Landmark, MapPin, Mountain, Recycle, Search, Sprout, Sun, Trees, Utensils, UsersRound } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { destinations } from '../data/destinations'
import { homestayCultureStories, homestayDailyFlow, homestayDestinationGroups, homestayExperienceOptions, homestayExperiencePillars, homestayFaqs, homestayFilters, homestayFoodTopics, homestayGallery, homestayJourneyStops, homestaySampleListing, homestayTypes, homestayTopics, internationalVisitorStories, responsibleHomestayPrinciples } from '../data/homestays'
import type { HomestayFilter } from '../data/homestays'
import { Image } from '../components/Image'
import { SectionHeading } from '../components/SectionHeading'

const pillarIcons: Record<(typeof homestayExperiencePillars)[number]['icon'], LucideIcon> = {
  food: Utensils,
  stories: BookOpen,
  village: Home,
  community: UsersRound,
  slow: Sun,
}

const principleIcons: Record<(typeof responsibleHomestayPrinciples)[number]['icon'], LucideIcon> = {
  privacy: Camera,
  rules: Check,
  customs: Landmark,
  waste: Recycle,
  resources: Droplets,
  local: Sprout,
}

const internationalIcons: Record<(typeof internationalVisitorStories)[number]['icon'], LucideIcon> = {
  people: UsersRound,
  culture: BookOpen,
  memories: Heart,
}

const destinationOptions = ['Any destination', 'Kumaon', 'Garhwal', ...destinations.map((destination) => destination.name)]

const experienceFeature: Record<(typeof homestayExperienceOptions)[number], string | null> = {
  'Any experience': null,
  'Village life': 'Village Experience',
  'Local food': 'Local Food',
  'Culture & heritage': 'Community',
  'Nature & trails': 'Nature',
}

export function HomestaysPage() {
  const [activeFilter, setActiveFilter] = useState<HomestayFilter>('All')
  const [destination, setDestination] = useState('Any destination')
  const [stayType, setStayType] = useState('Any stay type')
  const [experience, setExperience] = useState<(typeof homestayExperienceOptions)[number]>('Any experience')
  const [guests, setGuests] = useState('2')
  const [searchMessage, setSearchMessage] = useState('')
  const [showExampleNote, setShowExampleNote] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const filteredSample = useMemo(() => {
    const stay = homestaySampleListing
    const matchesType = activeFilter === 'All' || stay.type.toLowerCase() === activeFilter.toLowerCase()
    const matchesSelect = stayType === 'Any stay type' || stay.type.toLowerCase() === stayType.toLowerCase()
    const matchesDestination = destination === 'Any destination' || stay.location.toLowerCase().includes(destination.toLowerCase())
    const requiredFeature = experienceFeature[experience]
    const matchesExperience = !requiredFeature || stay.features.includes(requiredFeature)
    return matchesType && matchesSelect && matchesDestination && matchesExperience ? [stay] : []
  }, [activeFilter, destination, experience, stayType])

  function submitSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const count = filteredSample.length
    setSearchMessage(count ? 'One illustrative example matches these selections. This is not a live accommodation search.' : 'No illustrative examples match these selections. Contact us to discuss a suitable area or stay type.')
  }

  return (
    <div className="homestays-page">
      <section className="homestays-hero">
        <Image id="photo-1470770841072-f978cf4d019e" alt="A Himalayan village nestled among green mountain slopes" className="homestays-hero__image" />
        <div className="homestays-hero__shade" />
        <motion.div className="homestays-hero__copy" initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="eyebrow eyebrow--gold">STAY WITH THE MOUNTAINS</span>
          <h1>Don't Just Stay.<br /><em>Stay With the People.</em></h1>
          <p>Experience Uttarakhand through village homes, local food, mountain life and the warmth of Pahadi hospitality.</p>
          <div className="homestays-hero__actions"><a href="#homestay-search" className="homestays-glass-button">Explore Homestays <ArrowUpRight size={16} /></a><Link to="/contact" className="homestays-glass-button">Plan My Journey <ArrowUpRight size={16} /></Link></div>
        </motion.div>
        <span className="homestays-hero__label"><Home size={15} /> LOCAL · AUTHENTIC · COMMUNITY</span>
      </section>

      <section className="homestays-intro">
        <div className="homestays-intro__photo"><Image id="photo-1470770841072-f978cf4d019e" alt="Village homes and mountain scenery in Uttarakhand" /><span>ARRIVE · SLOW DOWN · FEEL AT HOME</span></div>
        <motion.div className="homestays-intro__copy" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
          <span className="eyebrow">HIMALAYAN HOMESTAYS</span>
          <h2>Feel at Home<br /><em>in the Mountains.</em></h2>
          <p>A homestay gives you a different way to experience Uttarakhand — slower, more personal and closer to everyday village life.</p>
          <p>Each stay is different. Hosts, facilities and activities vary, so experiences depend on the individual property and the people who welcome you.</p>
          <ul>{homestayTopics.map((topic) => <li key={topic}><span />{topic}</li>)}</ul>
        </motion.div>
      </section>

      <section className="homestays-types">
        <div className="homestays-section-heading"><SectionHeading eyebrow="A STAY THAT FEELS LIKE YOU" title="Find Your Kind of Mountain Stay" description="Every home and host is different. Explore a few ways a stay in the mountains might feel." /></div>
        <div className="homestays-type-grid">{homestayTypes.map((type, index) => <motion.article className="homestays-type-card" key={type.slug} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.42, delay: (index % 3) * 0.04 }}><div className="homestays-type-card__photo"><Image id={type.image} alt={type.imageAlt} /><span /><i aria-hidden="true">{index === 0 ? <Home size={18} /> : index === 1 ? <Heart size={18} /> : index === 2 ? <Sprout size={18} /> : index === 3 ? <Mountain size={18} /> : index === 4 ? <Landmark size={18} /> : <Trees size={18} />}</i></div><div className="homestays-type-card__body"><h3>{type.title}</h3><p>{type.description}</p><Link to="/destinations">Explore <ArrowRight size={15} /></Link></div></motion.article>)}</div>
      </section>

      <section className="homestays-day">
        <div className="homestays-day__photo"><Image id="photo-1470770841072-f978cf4d019e" alt="Morning light over a Himalayan village and mountain valley" /><span>A DAY WITH YOUR HOST</span></div>
        <motion.div className="homestays-day__copy" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
          <span className="eyebrow">A DAY WITH YOUR HOST</span>
          <h2>Wake Up to<br /><em>Mountain Life.</em></h2>
          <p className="homestays-day__disclaimer">An example experience flow. Actual activities depend on the host, location and season.</p>
          <ol className="homestays-day-flow">{homestayDailyFlow.map((moment) => <li key={moment.time}><time>{moment.time}</time><span>{moment.title}</span></li>)}</ol>
          <Link to="/experiences/village-homestay" className="button button--forest">Explore Village Experiences <ArrowRight size={16} /></Link>
        </motion.div>
      </section>

      <section className="homestays-pillars">
        <div className="homestays-pillars__inner"><SectionHeading eyebrow="BEYOND A PLACE TO SLEEP" title="Stay for the Experience." description="The moments around a stay are personal to each home, host and place." light /><div className="homestays-pillar-grid">{homestayExperiencePillars.map(({ title, description, icon }) => { const Icon = pillarIcons[icon]; return <article className="homestays-pillar-card" key={title}><span><Icon size={19} strokeWidth={1.5} /></span><h3>{title}</h3><p>{description}</p></article> })}</div></div>
      </section>

      <section className="homestays-destinations">
        <div className="homestays-section-heading"><SectionHeading eyebrow="EXPLORE THE REGIONS" title="Where Could You Stay?" description="Discover the landscapes and places of Uttarakhand. These destination regions are not a directory of specific homestays." /></div>
        <div className="homestays-destination-grid">{homestayDestinationGroups.map((destinationCard, index) => <motion.article className="homestays-destination-card" key={destinationCard.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: (index % 3) * 0.04 }}><Link to="/destinations" aria-label={`Explore destinations: ${destinationCard.title}`}><Image id={destinationCard.image} alt={destinationCard.imageAlt} /><span className="homestays-destination-card__shade" /><span className="homestays-destination-card__label"><MapPin size={14} /> UTTARAKHAND</span><span className="homestays-destination-card__title">{destinationCard.title}<ArrowUpRight size={17} /></span></Link></motion.article>)}</div>
      </section>

      <section className="homestays-food">
        <div className="homestays-food__image"><Image id="photo-1528605248644-14dd04022da1" alt="A meal arranged for people to share together" /><span>A SHARED TABLE · WHEN OFFERED</span></div>
        <motion.div className="homestays-food__copy" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
          <span className="eyebrow">FOOD · HOME · HOSPITALITY</span>
          <h2>A Kitchen Is Often<br /><em>the Heart of the Home.</em></h2>
          <p>Some of the most memorable travel moments happen around a shared meal.</p>
          <ul>{homestayFoodTopics.map((topic) => <li key={topic}><Utensils size={15} />{topic}</li>)}</ul>
          <Link to="/food" className="underlined-link">Explore Pahadi Food <ArrowRight size={15} /></Link>
        </motion.div>
      </section>

      <section className="homestays-culture">
        <div className="homestays-culture__heading"><SectionHeading eyebrow="PLACE · PEOPLE · EVERYDAY LIFE" title="Live Closer to the Culture." description="Village stays can create opportunities to learn about local traditions, crafts, food and everyday life — always with respect for the host community." /><Link to="/culture" className="underlined-link">Explore Culture <ArrowRight size={15} /></Link></div>
        <div className="homestays-culture-grid">{homestayCultureStories.map((story, index) => <motion.article className="homestays-culture-card" key={story.id} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.05 }}><div><Image id={story.image} alt={story.imageAlt} /><span /></div><span className="eyebrow">{story.title}</span><p>{story.description}</p></motion.article>)}</div>
      </section>

      <section className="responsible-homestays">
        <div className="responsible-homestays__inner"><div><span className="eyebrow eyebrow--gold">STAY RESPONSIBLY</span><h2>Be a<br /><em>Good Guest.</em></h2><p>Every home has its own rhythms. A little consideration helps make the stay more meaningful for everyone.</p></div><div className="responsible-homestays-grid">{responsibleHomestayPrinciples.map(({ id, title, description, icon }) => { const Icon = principleIcons[icon]; return <article className="responsible-homestay-card" key={id}><span><Icon size={19} strokeWidth={1.5} /></span><div><h3>{title}</h3><p>{description}</p></div></article> })}</div></div>
      </section>

      <section className="homestay-search" id="homestay-search">
        <div className="homestay-search__heading"><SectionHeading eyebrow="START EXPLORING" title="Find a Stay That Fits Your Journey." description="Explore the available editorial example using simple filters. This is a frontend preview, not a live booking search." /></div>
        <form className="homestay-search-panel" onSubmit={submitSearch}>
          <label><span>DESTINATION</span><select value={destination} onChange={(event) => setDestination(event.target.value)}>{destinationOptions.map((option) => <option key={option}>{option}</option>)}</select><ChevronDown size={14} aria-hidden="true" /></label>
          <label><span>STAY TYPE</span><select value={stayType} onChange={(event) => setStayType(event.target.value)}><option>Any stay type</option>{homestayFilters.filter((filter) => filter !== 'All').map((filter) => <option key={filter}>{filter}</option>)}</select><ChevronDown size={14} aria-hidden="true" /></label>
          <label><span>EXPERIENCE</span><select value={experience} onChange={(event) => setExperience(event.target.value as (typeof homestayExperienceOptions)[number])}>{homestayExperienceOptions.map((option) => <option key={option}>{option}</option>)}</select><ChevronDown size={14} aria-hidden="true" /></label>
          <label><span>GUESTS</span><select value={guests} onChange={(event) => setGuests(event.target.value)}>{['1', '2', '3', '4', '5+'].map((option) => <option key={option} value={option}>{option} {option === '1' ? 'Guest' : 'Guests'}</option>)}</select><ChevronDown size={14} aria-hidden="true" /></label>
          <button type="submit" className="button button--forest"><Search size={16} /> Search Homestays</button>
        </form>
        <div className="homestay-filter-row" role="group" aria-label="Filter the example stay by type">{homestayFilters.map((filter) => <button type="button" key={filter} aria-pressed={activeFilter === filter} className={activeFilter === filter ? 'is-active' : ''} onClick={() => { setActiveFilter(filter); setSearchMessage('') }}>{filter}</button>)}</div>
        <div className="homestay-listing-wrap" aria-live="polite">
          {filteredSample.length ? filteredSample.map((stay) => <article className="homestay-listing" key={stay.slug}><div className="homestay-listing__image"><Image id={stay.image} alt={stay.imageAlt} /><span className="homestay-listing__tag">ILLUSTRATIVE EXAMPLE</span></div><div className="homestay-listing__body"><span className="eyebrow">{stay.region} · UTTARAKHAND</span><h3>{stay.title}</h3><p>{stay.description}</p><ul>{stay.features.map((feature) => <li key={feature}><Check size={13} />{feature}</li>)}</ul><button type="button" className="button button--forest" aria-expanded={showExampleNote} onClick={() => setShowExampleNote((shown) => !shown)}>View Stay <ArrowUpRight size={15} /></button>{showExampleNote && <p className="homestay-listing__note" role="status">This is an illustrative concept, not a specific accommodation listing. Host details, facilities, rates and availability are not provided.</p>}</div></article>) : <p className="homestay-search__empty">No example stay matches these filters. Search results are illustrative only; no live property inventory is connected.</p>}
        </div>
        {searchMessage && <p className="homestay-search__message" role="status">{searchMessage} Guest selection: {guests}.</p>}
      </section>

      <section className="homestays-international">
        <div className="homestays-international__backdrop"><Image id="photo-1470770841072-f978cf4d019e" alt="A mountain village surrounded by Himalayan landscapes" /><span /></div>
        <div className="homestays-international__inner"><div className="homestays-international__heading"><span className="eyebrow eyebrow--gold">A DIFFERENT WAY TO EXPERIENCE UTTARAKHAND</span><h2>See Uttarakhand<br />Through <em>Local Eyes.</em></h2><p>For international travellers, a homestay can turn a destination into a personal experience — sharing food, learning everyday customs and seeing the mountains beyond the usual tourist route.</p></div><div className="homestays-international-grid">{internationalVisitorStories.map(({ title, description, icon }) => { const Icon = internationalIcons[icon]; return <article className="homestays-international-card" key={title}><span><Icon size={19} /></span><h3>{title}</h3><p>{description}</p></article> })}</div></div>
      </section>

      <section className="homestay-journey">
        <div className="homestay-journey__heading"><SectionHeading eyebrow="A PLACE IN THE ITINERARY" title="Make a Homestay Part of Your Journey." description="An example of village, food and culture moments in the ten-day journey." /></div>
        <div className="homestay-journey__stops">{homestayJourneyStops.map((stop) => <article className="homestay-journey-stop" key={stop.day}><div><Image id={stop.image} alt={stop.imageAlt} /><span>{stop.day}</span></div><h3>{stop.title}</h3></article>)}</div>
        <Link to="/packages" className="button button--forest">View the 10-Day Journey <ArrowRight size={16} /></Link>
      </section>

      <section className="homestay-gallery">
        <div className="homestays-section-heading"><SectionHeading eyebrow="A VISUAL JOURNAL" title="A Home in the Hills" description="Village paths, mountain views, kitchens and the everyday moments around a stay." /></div>
        <div className="homestay-gallery-grid">{homestayGallery.map((image) => <figure className={`homestay-gallery-item homestay-gallery-item--${image.shape}`} key={image.caption}><Image id={image.image} alt={image.alt} className="homestay-gallery-item__image" /><figcaption>{image.caption}</figcaption></figure>)}</div>
      </section>

      <section className="homestay-faq">
        <div className="homestay-faq__inner"><SectionHeading eyebrow="PLANNING YOUR STAY" title="A Few Things to Know" description="Facilities, meals, room arrangements and activities vary by individual property and host." /><div className="homestay-faq__list">{homestayFaqs.map((faq, index) => <div className={`homestay-faq__item${openFaq === index ? ' is-open' : ''}`} key={faq.question}><h3><button type="button" aria-expanded={openFaq === index} aria-controls={`homestay-faq-answer-${index}`} id={`homestay-faq-question-${index}`} onClick={() => setOpenFaq(openFaq === index ? null : index)}>{faq.question}<span aria-hidden="true">{openFaq === index ? '−' : '+'}</span></button></h3><div id={`homestay-faq-answer-${index}`} role="region" aria-labelledby={`homestay-faq-question-${index}`} hidden={openFaq !== index}><p>{faq.answer}</p></div></div>)}</div></div>
      </section>

      <section className="homestays-final-cta"><Image id="photo-1470770841072-f978cf4d019e" alt="A peaceful Himalayan valley beneath an evening sky" className="homestays-final-cta__image" /><span className="homestays-final-cta__shade" /><motion.div className="homestays-final-cta__copy" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}><span className="eyebrow eyebrow--gold">LOCAL · PERSONAL · UNFORGETTABLE</span><h2>Stay Somewhere<br /><em>You Will Remember.</em></h2><p>Experience the mountains through the people who call them home.</p><div><Link to="/experiences" className="button button--gold">Explore Experiences <ArrowUpRight size={16} /></Link><Link to="/contact" className="button button--outline-light">Plan My Journey <ArrowUpRight size={16} /></Link></div></motion.div></section>
    </div>
  )
}
