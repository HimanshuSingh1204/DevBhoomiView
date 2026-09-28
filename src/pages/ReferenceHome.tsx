import type { FormEvent } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight, ArrowUpRight, CalendarDays, Camera, Compass, Footprints, Home as HomeIcon, Landmark, Leaf, Mountain, ShieldCheck, Sprout, Utensils, UsersRound } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { destinationCategories } from '../data/destinations'
import { experiences } from '../data/experiences'
import { DestinationCategoryCard } from '../components/DestinationCategoryCard'
import { ExperienceCard } from '../components/ExperienceCard'
import { Image } from '../components/Image'

const reveal = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.55 },
}

const reasons = [
  { title: 'Pure Nature', description: 'Room to breathe, wander and reconnect.', icon: Leaf },
  { title: 'Local Communities', description: 'Meet the people who make a place.', icon: UsersRound },
  { title: 'Safe Travel', description: 'Thoughtful guidance, every step.', icon: ShieldCheck },
  { title: 'Sustainable Tourism', description: 'Travel with care for the hills.', icon: Sprout },
  { title: 'Rich Culture', description: 'Living traditions, shared generously.', icon: Landmark },
]

const highlights = [
  { title: 'Trekking & Adventure', icon: Footprints },
  { title: 'Local Cuisine', icon: Utensils },
  { title: 'Cultural Experiences', icon: UsersRound },
  { title: 'Village Homestays', icon: HomeIcon },
  { title: 'Photography Spots', icon: Camera },
]

export function ReferenceHome() {
  const navigate = useNavigate()

  function searchJourney(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const location = form.get('location')?.toString() ?? ''
    navigate(`/explore${location ? `?place=${encodeURIComponent(location)}` : ''}`)
  }

  return (
    <>
      <section className="hero" id="home">
        <Image id="photo-1470770841072-f978cf4d019e" alt="Warm morning light across a Himalayan valley" className="hero__image" />
        <div className="hero__shade" />
        <motion.div className="hero__content" {...reveal}>
          <span className="hero-kicker"><span /> DISCOVER · EXPLORE · EXPERIENCE</span>
          <h1>Live the<br /><em>Himalayan</em><br /><em className="hero-highlight">Experience</em></h1>
          <p>From snow-capped peaks to hidden villages, experience adventure, culture, food and the warmth of Pahadi life.</p>
        </motion.div>
        <motion.aside className="hero-featured" {...reveal}>
          <span className="hero-featured__label">Featured Destination <span>01 / 06</span></span>
          <div className="hero-featured__row">
            <Image id="photo-1464822759023-fed622ff2c3b" alt="Mountain peaks above Chopta" className="hero-featured__image" />
            <span className="hero-featured__copy"><strong>Chopta - Tungnath</strong><small>Trek to the world's highest Shiva temple</small></span>
            <Link to="/destinations" aria-label="Explore Chopta and Tungnath"><ArrowUpRight size={18} /></Link>
          </div>
        </motion.aside>
        <form className="hero-search" onSubmit={searchJourney}>
          <label className="hero-search__field"><span>LOCATION</span><select name="location" defaultValue=""><option value="">Where do you want to go?</option><option>Kumaon</option><option>Garhwal</option><option>Chopta</option><option>Munsiyari</option></select></label>
          <span className="hero-search__divider" />
          <label className="hero-search__field hero-search__date"><span>DATE</span><input aria-label="Select dates" type="date" name="date" /></label>
          <span className="hero-search__divider" />
          <label className="hero-search__field hero-search__guests"><span>GUESTS</span><select name="guests" defaultValue="2"><option value="1">1 Guest</option><option value="2">2 Guests</option><option value="3">3 Guests</option><option value="4">4 Guests</option><option value="5">5+ Guests</option></select></label>
          <button type="submit" className="hero-search__submit">Explore <ArrowRight size={17} /></button>
        </form>
        <a className="hero-scroll" href="#explore"><span>Scroll Down</span><ArrowDown size={14} /></a>
      </section>

      <section className="explore-section" id="explore">
        <motion.div className="explore-intro" {...reveal}>
          <span className="eyebrow">EXPLORE UTTARAKHAND</span>
          <h2>Find Your Perfect<br /><em>Destination</em></h2>
          <p>From the serene valleys of Kumaon to the majestic peaks of Garhwal, every corner of Uttarakhand tells a unique story.</p>
          <Link className="underlined-link" to="/destinations">Explore All <ArrowRight size={15} /></Link>
          <span className="explore-index">30 N &nbsp; / &nbsp; 79 E</span>
        </motion.div>
        <div className="destination-category-grid">
          {destinationCategories.map((category, index) => <motion.div key={category.id} {...reveal} transition={{ duration: 0.5, delay: index * 0.06 }}><DestinationCategoryCard category={category} /></motion.div>)}
        </div>
      </section>

      <section className="why-section">
        <div className="why-inner">
          <motion.div className="why-intro" {...reveal}>
            <span className="eyebrow eyebrow--gold">WHY DEV BHOOMI TRIP</span>
            <h2>More Than Just<br />a <em>Destination</em></h2>
            <p>It's a feeling. A connection. A journey that stays with you forever.</p>
            <Link className="underlined-link underlined-link--light" to="/about">Our Story <ArrowRight size={15} /></Link>
          </motion.div>
          <div className="reason-grid">
            {reasons.map(({ title, description, icon: Icon }, index) => <motion.article className="reason-item" key={title} {...reveal} transition={{ duration: 0.5, delay: index * 0.05 }}><span className="reason-icon"><Icon size={20} strokeWidth={1.45} /></span><h3>{title}</h3><p>{description}</p></motion.article>)}
          </div>
        </div>
      </section>

      <section className="featured-section" id="experiences">
        <div className="featured-inner">
          <motion.div className="featured-heading" {...reveal}>
            <div><span className="eyebrow">A FEW WAYS TO WANDER</span><h2>Handpicked for <em>You</em></h2><p>Curated experiences that bring you closer to the real Uttarakhand.</p></div>
            <Link className="underlined-link" to="/experiences">View All Experiences <ArrowRight size={15} /></Link>
          </motion.div>
          <div className="experience-grid">
            {experiences.slice(0, 5).map((experience, index) => <motion.div key={experience.id} {...reveal} transition={{ duration: 0.5, delay: index * 0.04 }}><ExperienceCard experience={experience} /></motion.div>)}
          </div>
        </div>
      </section>

      <section className="journey-wrap">
        <div className="journey-section">
          <Image id="photo-1464822759023-fed622ff2c3b" alt="Mountain landscape along the Himalayan journey" className="journey-photo" />
          <div className="journey-wash" />
          <div className="journey-main">
            <motion.div className="journey-copy" {...reveal}>
              <span className="eyebrow eyebrow--gold">10-DAY JOURNEY</span>
              <h2>The Complete<br /><em>Himalayan</em><br />Experience</h2>
              <p>A 10-day curated journey through the best of Uttarakhand - nature, culture, adventure and more.</p>
              <Link to="/packages" className="button button--gold">View Package <ArrowUpRight size={16} /></Link>
            </motion.div>
            <div className="journey-route" aria-label="Illustrative route map across Uttarakhand">
              <span className="journey-route__eyebrow"><Compass size={14} /> THE HIMALAYAN CIRCUIT</span>
              <svg className="route-map" viewBox="0 0 340 310" role="img" aria-label="Route from Rishikesh through Chopta and Auli to Almora">
                <path d="M53 57 C92 16 133 90 164 112 S210 161 252 132 S293 188 272 229 S214 260 174 239 S106 217 74 258" />
                <circle cx="53" cy="57" r="5" /><circle cx="164" cy="112" r="5" /><circle cx="252" cy="132" r="5" /><circle cx="272" cy="229" r="5" /><circle cx="74" cy="258" r="5" />
              </svg>
              <span className="route-label route-label--one">Rishikesh</span><span className="route-label route-label--two">Chopta</span><span className="route-label route-label--three">Auli</span><span className="route-label route-label--four">Almora</span><span className="route-label route-label--five">Nainital</span>
              <span className="journey-route__compass">N<br /><i />S</span>
            </div>
            <motion.aside className="trip-highlights" {...reveal}>
              <span className="trip-highlights__eyebrow">YOUR JOURNEY, IN BRIEF</span>
              <h3>Trip Highlights</h3>
              <ul>{highlights.map(({ title, icon: Icon }) => <li key={title}><Icon size={15} strokeWidth={1.5} /><span>{title}</span></li>)}</ul>
              <Link to="/packages" className="trip-highlights__link">View Itinerary <ArrowUpRight size={15} /></Link>
            </motion.aside>
          </div>
          <div className="journey-stats"><div><CalendarDays size={17} /><span><strong>10 Days</strong><small>At your own pace</small></span></div><span className="journey-stats__divider" /><div><Mountain size={18} /><span><strong>10 Destinations</strong><small>Across the Kumaon & Garhwal</small></span></div><span className="journey-stats__divider" /><div><Compass size={18} /><span><strong>1 Unforgettable Journey</strong><small>Made to stay with you</small></span></div></div>
        </div>
      </section>
    </>
  )
}