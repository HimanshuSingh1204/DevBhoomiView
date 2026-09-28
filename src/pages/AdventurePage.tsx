import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight, ArrowUpRight, Backpack, Camera, CloudSun, Compass, Footprints, Heart, Home, MapPin, Mountain, ShieldCheck, Snowflake, TentTree, Trees, Umbrella, Utensils, Waves } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { adventureActivities, adventureCategories, adventureFaqs, adventureGallery, adventureJourneyStops, adventureLevels, adventureMapPlaces, adventurePackingList, communityConnections, featuredAdventures, safetyPrinciples, seasonalAdventures } from '../data/adventures'
import type { AdventureDifficulty, AdventureLevelFilter } from '../data/adventures'
import { FoodEditorialCard } from '../components/FoodEditorialCard'
import { Image } from '../components/Image'
import { SectionHeading } from '../components/SectionHeading'

const categoryIcons: Record<(typeof adventureCategories)[number]['icon'], LucideIcon> = {
  trek: Footprints,
  water: Waves,
  camp: TentTree,
  nature: Trees,
  snow: Snowflake,
  photo: Camera,
}

const safetyIcons: Record<(typeof safetyPrinciples)[number]['icon'], LucideIcon> = {
  guide: Compass,
  weather: CloudSun,
  equipment: Backpack,
  limits: Heart,
  guidance: ShieldCheck,
  insurance: Umbrella,
}

const connectionIcons: Record<(typeof communityConnections)[number]['icon'], LucideIcon> = {
  guide: Compass,
  stay: Home,
  food: Utensils,
}

const difficultyLabel: Record<AdventureDifficulty, string> = {
  Easy: 'Easy',
  Moderate: 'Moderate',
  Challenging: 'Challenging',
  Seasonal: 'Depends on activity',
}

export function AdventurePage() {
  const [activeLevel, setActiveLevel] = useState<AdventureLevelFilter>('All')
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const filteredAdventures = featuredAdventures.filter((adventure) => activeLevel === 'All' || adventure.difficulty === activeLevel)

  return (
    <div className="adventure-page">
      <section className="adventure-hero">
        <Image id="photo-1464822759023-fed622ff2c3b" alt="Dramatic Himalayan peaks rising above a rugged mountain landscape" className="adventure-hero__image" />
        <div className="adventure-hero__shade" />
        <motion.div className="adventure-hero__copy" initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="eyebrow eyebrow--gold">ADVENTURE IN DEV BHOOMI</span>
          <h1>Find Your<br /><em>Wild Side.</em></h1>
          <p>From mountain trails and river adventures to camping, nature walks and high-altitude experiences, discover a different side of Uttarakhand.</p>
          <div className="adventure-hero__actions"><a className="adventure-glass-button" href="#featured-adventures">Explore Adventures <ArrowUpRight size={16} /></a><Link to="/contact" className="adventure-glass-button">Plan My Journey <ArrowUpRight size={16} /></Link></div>
        </motion.div>
        <a className="adventure-hero__scroll" href="#adventure-intro"><span>Discover the outdoors</span><ArrowDown size={15} /></a>
        <span className="adventure-hero__label"><Mountain size={15} /> TREK · EXPLORE · ADVENTURE</span>
      </section>

      <section className="adventure-intro" id="adventure-intro">
        <div className="adventure-intro__photo"><Image id="photo-1464278533981-50106e6176b1" alt="Green Himalayan mountains and a forested outdoor landscape" /><span>STEP OUT · TAKE IT SLOW</span></div>
        <motion.div className="adventure-intro__copy" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
          <span className="eyebrow">THE ADVENTURE EXPERIENCE</span>
          <h2>Mountains Made<br /><em>to Be Explored.</em></h2>
          <p>Uttarakhand offers landscapes for travellers who want to walk, climb, paddle, camp, photograph and simply spend more time outdoors.</p>
          <p>Outdoor experiences vary from place to place. Not every activity is available in every destination, and plans depend on season, local conditions and operators.</p>
          <ul>{adventureActivities.map((activity) => <li key={activity}><span />{activity}</li>)}</ul>
        </motion.div>
      </section>

      <section className="adventure-categories" id="adventure-categories">
        <div className="adventure-section-heading"><SectionHeading eyebrow="FIND YOUR KIND OF OUTDOORS" title="Choose Your Adventure" description="Explore different ways to experience the landscapes, with activities shaped by place and local conditions." /></div>
        <div className="adventure-category-grid">{adventureCategories.map((category, index) => { const Icon = categoryIcons[category.icon]; return <motion.article className="adventure-category-card" key={category.slug} initial={{ opacity: 0, y: 17 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.42, delay: (index % 3) * 0.04 }}><div className="adventure-category-card__photo"><Image id={category.image} alt={category.imageAlt} /><span /><span className="adventure-category-card__icon"><Icon size={18} strokeWidth={1.6} /></span></div><div className="adventure-category-card__body"><span className="eyebrow">{category.title}</span><p>{category.description}</p><Link to={category.slug === 'nature-walks' ? '/experiences?category=nature' : category.slug === 'photography' ? '/experiences?category=photography' : '/experiences?category=adventure'}>Explore <ArrowRight size={15} /></Link></div></motion.article> })}</div>
      </section>

      <section className="adventure-featured" id="featured-adventures">
        <div className="adventure-featured__inner">
          <div className="adventure-featured__heading"><SectionHeading eyebrow="HANDPICKED ADVENTURES" title="Choose Your Level of Adventure" description="These are examples of outdoor experiences. Specific arrangements and availability depend on the selected activity and local conditions." /><span className="adventure-featured__note">Difficulty can vary depending on route, weather, altitude, season and individual conditions.</span></div>
          <div className="adventure-level-filter" role="group" aria-label="Filter adventures by difficulty">{adventureLevels.map((level) => <button type="button" key={level} aria-pressed={activeLevel === level} className={activeLevel === level ? 'is-active' : ''} onClick={() => setActiveLevel(level)}>{level.toUpperCase()}</button>)}</div>
          <div className="adventure-featured-grid" aria-live="polite">{filteredAdventures.length > 0 ? filteredAdventures.map((adventure, index) => <motion.div key={adventure.slug} layout initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.24, delay: index * 0.025 }}><FoodEditorialCard title={adventure.title} category={`${adventure.category} · ${difficultyLabel[adventure.difficulty]}`} description={adventure.description} image={adventure.image} imageAlt={adventure.imageAlt} duration={adventure.duration} href="/experiences?category=adventure" action="Explore" variant="compact" /></motion.div>) : <p className="adventure-featured-empty">No examples are assigned this difficulty. Conditions and individual requirements can change how an activity feels.</p>}</div>
        </div>
      </section>

      <section className="adventure-safety">
        <div className="adventure-safety__inner"><div className="adventure-safety__heading"><span className="eyebrow eyebrow--gold">ADVENTURE RESPONSIBLY</span><h2>Adventure Should Feel<br /><em>Exciting — And Responsible.</em></h2><p>Outdoor experiences carry changing conditions and activity-specific risks. Make informed choices and follow local guidance.</p></div><div className="adventure-safety-grid">{safetyPrinciples.map(({ id, title, description, icon }) => { const Icon = safetyIcons[icon]; return <article className="adventure-safety-card" key={id}><span><Icon size={19} strokeWidth={1.5} /></span><div><h3>{title}</h3><p>{description}</p></div></article> })}</div></div>
      </section>

      <section className="adventure-seasons">
        <div className="adventure-section-heading"><SectionHeading eyebrow="OUTDOORS THROUGH THE YEAR" title="Adventure Changes With the Seasons" description="A broad guide to the feel of each season, not a guarantee of activities or operating dates." /></div>
        <div className="adventure-season-grid">{seasonalAdventures.map((season, index) => <motion.div key={season.id} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.04 }}><FoodEditorialCard title={season.title} category="SEASONAL OUTLOOK" description={season.description} image={season.image} imageAlt={season.imageAlt} variant="compact" /></motion.div>)}</div>
        <p className="adventure-seasons__note">Availability depends on weather, local conditions, operators and route status.</p>
      </section>

      <section className="adventure-community">
        <div className="adventure-community__photo"><Image id="photo-1470770841072-f978cf4d019e" alt="A village and mountain landscape in Uttarakhand" /><span>PEOPLE · PLACE · OUTDOORS</span></div>
        <motion.div className="adventure-community__copy" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
          <span className="eyebrow">BEYOND THE TRAIL</span><h2>Adventure With<br /><em>a Local Connection.</em></h2>
          <p>Where possible, connect outdoor experiences with local guides, homestays, food and communities — turning an activity into a deeper journey.</p>
          <div className="adventure-community__cards">{communityConnections.map(({ id, title, description, icon }) => { const Icon = connectionIcons[icon]; return <article className="adventure-community-card" key={id}><Icon size={18} /><span><strong>{title}</strong><small>{description}</small></span></article> })}</div>
          <Link to="/homestays" className="button button--forest">Explore Homestays <ArrowRight size={16} /></Link>
        </motion.div>
      </section>

      <section className="adventure-map-section">
        <div className="adventure-section-heading"><SectionHeading eyebrow="LANDSCAPES TO DISCOVER" title="Where Adventure Takes You" description="A schematic view of places connected with Uttarakhand's outdoor experiences. This illustration is not to scale." /></div>
        <div className="adventure-map-panel" role="img" aria-label="Illustrative, not-to-scale map-style overview naming Rishikesh, Auli, Chopta, Munsiyari, Kumaon and Garhwal. No routes or geographic positions are shown.">
          <div className="adventure-map-panel__terrain" aria-hidden="true"><svg viewBox="0 0 1200 540" preserveAspectRatio="none"><path d="M0 337 112 292l95 31 114-132 87 92 112-183 99 159 95-90 128 129 112-82 126 104 120-54v274H0Z" /><path d="M0 389c142-114 229 48 362-62s201-191 343-77 238 100 495-27" /><path d="M0 447c174-87 231 33 385-54s220-135 355-46 269 56 460-19" /><path d="M35 230c137-70 242-28 341-107s216-67 337 3 234 65 451-10" /></svg></div>
          <span className="adventure-map-panel__eyebrow">UTTARAKHAND · SCHEMATIC OVERVIEW</span>
          {adventureMapPlaces.map((place, index) => <span className={`adventure-map-place adventure-map-place--${index + 1}`} key={place.name}><i><MapPin size={13} /></i><strong>{place.name}</strong><small>{place.category}</small></span>)}
          <div className="adventure-map-legend" aria-label="Map legend">{['TREK', 'WATER', 'CAMP', 'NATURE', 'SNOW'].map((item) => <span key={item}><i />{item}</span>)}</div>
          <span className="adventure-map-disclaimer">Illustrative only · Not a geographic map</span>
        </div>
      </section>

      <section className="adventure-packing">
        <div className="adventure-packing__inner"><div className="adventure-packing__heading"><span className="eyebrow">A THOUGHTFUL START</span><h2>Pack for<br /><em>the Mountains.</em></h2><p>Your exact packing list depends on the destination, season and activity.</p></div><ul className="adventure-packing-list">{adventurePackingList.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, '0')}</span>{item}<Backpack size={16} aria-hidden="true" /></li>)}</ul></div>
      </section>

      <section className="adventure-journey">
        <div className="adventure-journey__heading"><SectionHeading eyebrow="OUTDOORS ALONG THE WAY" title="Adventure Is Part of the Journey." description="Outdoor moments in the sample ten-day itinerary. Final arrangements can vary." /></div>
        <div className="adventure-journey__stops">{adventureJourneyStops.map((stop) => <article className="adventure-journey-stop" key={stop.day}><div><Image id={stop.image} alt={stop.imageAlt} /><span>{stop.day}</span></div><h3>{stop.title}</h3></article>)}</div>
        <Link to="/packages" className="button button--forest">View the 10-Day Journey <ArrowRight size={16} /></Link>
      </section>

      <section className="adventure-gallery">
        <div className="adventure-section-heading"><SectionHeading eyebrow="A VISUAL JOURNAL" title="Out Into the Mountains" description="Trails, river valleys, forest paths and moments worth remembering." /></div>
        <div className="adventure-gallery-grid">{adventureGallery.map((image, index) => <motion.figure className={`adventure-gallery-item adventure-gallery-item--${image.shape}`} key={image.caption} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: (index % 4) * 0.035 }}><Image id={image.image} alt={image.alt} className="adventure-gallery-item__image" /><figcaption>{image.caption}</figcaption></motion.figure>)}</div>
      </section>

      <section className="adventure-faq">
        <div className="adventure-faq__inner"><SectionHeading eyebrow="BEFORE YOU HEAD OUT" title="A Few Things to Know" description="Suitability and availability depend on the specific activity, route, season, operator and traveller." /><div className="adventure-faq__list">{adventureFaqs.map((faq, index) => <div className={`adventure-faq__item${openFaq === index ? ' is-open' : ''}`} key={faq.question}><h3><button type="button" aria-expanded={openFaq === index} aria-controls={`adventure-faq-answer-${index}`} id={`adventure-faq-question-${index}`} onClick={() => setOpenFaq(openFaq === index ? null : index)}>{faq.question}<span aria-hidden="true">{openFaq === index ? '−' : '+'}</span></button></h3><div id={`adventure-faq-answer-${index}`} role="region" aria-labelledby={`adventure-faq-question-${index}`} hidden={openFaq !== index}><p>{faq.answer}</p></div></div>)}</div></div>
      </section>

      <section className="adventure-final-cta"><Image id="photo-1470770841072-f978cf4d019e" alt="A wide Himalayan valley beneath an evening sky" className="adventure-final-cta__image" /><span className="adventure-final-cta__shade" /><motion.div className="adventure-final-cta__copy" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}><span className="eyebrow eyebrow--gold">STEP OUT · FIND YOUR PACE</span><h2>Your Next Adventure<br /><em>Starts in the Mountains.</em></h2><p>Choose your experience and let Devbhoomi Trip help shape the journey.</p><div><Link to="/experiences?category=adventure" className="button button--gold">Explore Experiences <ArrowUpRight size={16} /></Link><Link to="/contact" className="button button--outline-light">Plan My Journey <ArrowUpRight size={16} /></Link></div></motion.div></section>
    </div>
  )
}
