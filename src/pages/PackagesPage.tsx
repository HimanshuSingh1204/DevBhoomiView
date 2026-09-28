import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Camera, Check, Compass, Footprints, Heart, Home, Leaf, Music2, Utensils, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { tenDayHimalayanJourney } from '../data/packages'
import { JourneyDayCard } from '../components/JourneyDayCard'
import { Image } from '../components/Image'
import { SectionHeading } from '../components/SectionHeading'

const journeyThemes = [
  { title: 'NATURE', description: 'Mountain landscapes, forests, valleys and rivers.', image: 'photo-1464278533981-50106e6176b1', icon: Leaf },
  { title: 'CULTURE', description: 'Local traditions, food, music and village life.', image: 'photo-1513836279014-a89f7a76ae86', icon: Music2 },
  { title: 'ADVENTURE', description: 'Trekking, rafting and outdoor experiences.', image: 'photo-1464822759023-fed622ff2c3b', icon: Footprints },
]

const highlightDetails = [
  { description: 'Outdoor experiences shaped around the selected route and local conditions.', icon: Footprints },
  { description: 'Time to share regional flavours and learn about local ingredients.', icon: Utensils },
  { description: 'Opportunities to encounter local stories, music and traditions.', icon: Music2 },
  { description: 'Selected stays and homestay coordination as part of the plan.', icon: Home },
  { description: 'Room for photography stops among landscapes and everyday life.', icon: Camera },
]

const responsiblePrinciples = [
  { title: 'Respect Local Culture', icon: Heart },
  { title: 'Support Local Communities', icon: Home },
  { title: 'Protect Nature', icon: Leaf },
  { title: 'Reduce Waste', icon: X },
  { title: 'Travel Responsibly', icon: Compass },
]

const passportStamps = [
  { title: 'TREK', icon: Footprints },
  { title: 'FOOD', icon: Utensils },
  { title: 'CULTURE', icon: Music2 },
  { title: 'VILLAGE', icon: Home },
  { title: 'ADVENTURE', icon: Compass },
]

const memoryCards = [
  { title: 'PHOTO ALBUM', description: 'Your selected journey photographs.', image: 'photo-1519681393784-d120267933ba', icon: Camera },
  { title: 'TRIP REEL', description: 'A visual story of your Himalayan experience.', image: 'photo-1464822759023-fed622ff2c3b', icon: Compass },
  { title: 'CERTIFICATE', description: 'Certificate of Himalayan Experience.', image: 'photo-1472396961693-142e6e269027', icon: Check },
  { title: 'TRIP STORY', description: 'A personal digital page containing your journey.', image: 'photo-1470770841072-f978cf4d019e', icon: Heart },
]

const routePositions = [
  { left: '12%', top: '12%' }, { left: '32%', top: '27%' }, { left: '62%', top: '18%' },
  { left: '76%', top: '42%' }, { left: '53%', top: '59%' }, { left: '27%', top: '74%' }, { left: '70%', top: '84%' },
]

export function PackagesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <div className="packages-page">
      <section className="packages-hero">
        <Image id="photo-1470770841072-f978cf4d019e" alt="Golden evening light across a Himalayan valley" className="packages-hero__image" />
        <div className="packages-hero__shade" />
        <motion.div className="packages-hero__copy" initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="eyebrow eyebrow--gold">THE COMPLETE HIMALAYAN EXPERIENCE</span>
          <h1>10 Days.<br /><em>One Himalayan Story.</em></h1>
          <p>Journey through Uttarakhand's landscapes, villages, food, culture and adventure — thoughtfully connected into one unforgettable experience.</p>
          <div className="packages-hero__actions"><a className="button button--gold" href="#plan-this-journey">Plan This Journey <ArrowUpRight size={16} /></a><Link className="button button--outline-light" to="/experiences">Explore Experiences <ArrowUpRight size={16} /></Link></div>
        </motion.div>
        <motion.aside className="packages-hero-panel" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.16 }}>
          {tenDayHimalayanJourney.stats.map((stat) => <div className="packages-hero-panel__item" key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}
        </motion.aside>
        <a className="packages-scroll" href="#journey-intro"><span>Scroll to the journey</span><ArrowDown size={15} /></a>
      </section>

      <section className="journey-intro" id="journey-intro">
        <div className="journey-intro__copy"><span className="eyebrow">YOUR JOURNEY</span><h2>More Than a Holiday.<br /><em>A Journey Through Devbhoomi.</em></h2><p>From your first arrival to your final mountain memory, every day is designed to bring you closer to Uttarakhand.</p><span className="journey-intro__note">A curated example journey. Final arrangements depend on the selected package, season, availability and local conditions.</span></div>
        <div className="journey-theme-grid">{journeyThemes.map(({ title, description, image, icon: Icon }, index) => <motion.article className="journey-theme-card" key={title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.05 }}><Image id={image} alt={`${title.toLowerCase()} in Uttarakhand`} className="journey-theme-card__image" /><span className="journey-theme-card__shade" /><div><Icon size={18} /><span>{title}</span><p>{description}</p></div></motion.article>)}</div>
      </section>

      <section className="journey-itinerary" id="itinerary">
        <div className="journey-itinerary__heading"><SectionHeading eyebrow="THE TEN-DAY JOURNEY" title="Your 10-Day Himalayan Journey" description="Every day brings a different side of Uttarakhand." /><span className="journey-itinerary__disclaimer">Curated example itinerary · Activities and locations may vary by selected package, season and local conditions.</span></div>
        <div className="journey-timeline">{tenDayHimalayanJourney.days.map((day, index) => <motion.div key={day.day} className="journey-timeline__item" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.45, delay: (index % 2) * 0.04 }}><span className="journey-timeline__node"><span>{String(day.day).padStart(2, '0')}</span></span><JourneyDayCard journeyDay={day} index={index} /></motion.div>)}</div>
      </section>

      <section className="journey-map-section">
        <div className="journey-map-section__heading"><SectionHeading eyebrow="FOLLOW THE JOURNEY" title="Your Route Through Uttarakhand" description="A visual guide to the kinds of landscapes and experiences that may shape the route." /></div>
        <div className="journey-map-panel">
          <div className="journey-map-panel__map">
            <span className="journey-map-panel__label">ILLUSTRATIVE JOURNEY VISUALIZATION · NOT TO SCALE</span>
            <svg className="journey-map-route" viewBox="0 0 800 430" role="img" aria-label="Illustrative route connecting Uttarakhand journey experiences; not a geographic map">
              <path d="M82 83 C182 44 198 159 289 137 S383 54 468 111 S557 254 644 204 S718 280 679 342 S531 344 455 297 S308 384 217 313 S130 261 103 331" />
              <path className="journey-map-route__highlight" d="M82 83 C182 44 198 159 289 137 S383 54 468 111 S557 254 644 204 S718 280 679 342 S531 344 455 297 S308 384 217 313 S130 261 103 331" />
            </svg>
            {tenDayHimalayanJourney.routeStops.map((stop, index) => <span className={`journey-map-stop journey-map-stop--${stop.category.toLowerCase()}`} key={`${stop.label}-${index}`} style={routePositions[index]}><i /><span>{stop.label}</span></span>)}
            <span className="journey-map-panel__compass" aria-hidden="true">N<span />S</span>
          </div>
          <div className="journey-map-legend"><span className="journey-map-legend__title">JOURNEY MARKERS</span>{(['Stay', 'Adventure', 'Food', 'Culture', 'Photo'] as const).map((category) => <span className="journey-map-legend__item" key={category}><i className={`journey-map-legend__dot journey-map-legend__dot--${category.toLowerCase()}`} />{category}</span>)}<span className="journey-map-legend__note">Visual route only; exact stops are confirmed during package planning.</span></div>
        </div>
      </section>

      <section className="package-highlights">
        <div className="package-highlights__inner"><div className="package-highlights__heading"><span className="eyebrow eyebrow--gold">TRIP HIGHLIGHTS</span><h2>Everything That Makes<br />the Journey <em>Special</em></h2></div><div className="package-highlight-grid">{tenDayHimalayanJourney.highlights.map((highlight, index) => { const detail = highlightDetails[index]; const Icon = detail.icon; return <motion.article className="package-highlight-card" key={highlight} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.04 }}><span><Icon size={22} strokeWidth={1.5} /></span><h3>{highlight}</h3><p>{detail.description}</p></motion.article> })}</div></div>
      </section>

      <section className="package-inclusions">
        <div className="package-inclusions__inner"><SectionHeading eyebrow="CLEAR FROM THE START" title="What Your Journey Includes" description="Sample package inclusions for this website preview. Final details depend on the selected package." /><div className="package-inclusions__columns"><article className="package-inclusion-list package-inclusion-list--included"><h3><Check size={19} />Included</h3><ul>{tenDayHimalayanJourney.included.map((item) => <li key={item}><Check size={16} />{item}</li>)}</ul></article><article className="package-inclusion-list package-inclusion-list--excluded"><h3><X size={19} />Not Included</h3><ul>{tenDayHimalayanJourney.excluded.map((item) => <li key={item}><X size={16} />{item}</li>)}</ul></article></div></div>
      </section>

      <section className="package-stats" aria-label="Journey summary"><div className="package-stats__inner">{tenDayHimalayanJourney.stats.map((stat) => <div className="package-stat" key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</div></section>

      <section className="digital-passport" id="digital-passport">
        <div className="digital-passport__copy"><span className="eyebrow">A CONNECTED JOURNEY</span><h2>Your Journey Becomes<br /><em>Your Passport.</em></h2><p>Every experience becomes part of your personal Himalayan journey.</p><p className="digital-passport__note">A preview of a future digital journey feature.</p><a href="#journey-memories" className="underlined-link">See How It Works <ArrowUpRight size={15} /></a></div>
        <div className="digital-passport-card"><div className="digital-passport-card__top"><span>DEV BHOOMI TRIP</span><Compass size={20} /></div><span className="digital-passport-card__eyebrow">PERSONAL JOURNEY PASSPORT</span><h3>HIMALAYAN<br />JOURNEY</h3><span className="digital-passport-card__duration">10 DAYS</span><div className="digital-passport-card__stamps">{passportStamps.map(({ title, icon: Icon }) => <span key={title}><Icon size={16} />{title}</span>)}</div><span className="digital-passport-card__footer">YOUR EXPERIENCES · YOUR MEMORIES · YOUR STORY</span></div>
        <p className="digital-passport__footnote">Your experiences, memories and milestones stay connected in one digital journey.</p>
      </section>

      <section className="journey-memories" id="journey-memories">
        <div className="journey-memories__image"><Image id="photo-1464822759023-fed622ff2c3b" alt="Himalayan mountain scenery behind digital journey keepsakes" /><span className="journey-memories__shade" /></div>
        <div className="journey-memories__inner"><SectionHeading eyebrow="THE STORY YOU TAKE HOME" title="Leave With More Than Memories." description="At the end of your journey, your Himalayan story comes together in one digital collection." light /><div className="journey-memory-grid">{memoryCards.map(({ title, description, image, icon: Icon }, index) => <motion.article className="journey-memory-card" key={title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.04 }}><Image id={image} alt="" className="journey-memory-card__image" /><span className="journey-memory-card__shade" /><div className="journey-memory-card__content"><Icon size={19} /><span>{title}</span><p>{description}</p></div></motion.article>)}</div></div>
      </section>

      <section className="responsible-travel"><div className="responsible-travel__inner"><div><span className="eyebrow eyebrow--gold">TRAVEL WITH RESPECT</span><h2>Travel Lightly.<br /><em>Connect Deeply.</em></h2><p>Small choices can help make space for a more thoughtful journey through the hills.</p></div><div className="responsible-travel__principles">{responsiblePrinciples.map(({ title, icon: Icon }, index) => <div className="responsible-principle" key={title}><span><Icon size={19} strokeWidth={1.5} /></span><strong>{title}</strong><i>0{index + 1}</i></div>)}</div></div></section>

      <section className="package-faq" id="package-faq"><div className="package-faq__inner"><SectionHeading eyebrow="A FEW THINGS TO KNOW" title="Questions About the Journey" description="Every itinerary is shaped around your selected package and the conditions on the ground." /><div className="package-faq__list">{tenDayHimalayanJourney.faqs.map((faq, index) => <div className={`package-faq__item${openFaq === index ? ' is-open' : ''}`} key={faq.question}><h3><button type="button" aria-expanded={openFaq === index} aria-controls={`package-faq-answer-${index}`} id={`package-faq-question-${index}`} onClick={() => setOpenFaq(openFaq === index ? null : index)}>{faq.question}<span aria-hidden="true">{openFaq === index ? '−' : '+'}</span></button></h3><div id={`package-faq-answer-${index}`} role="region" aria-labelledby={`package-faq-question-${index}`} hidden={openFaq !== index}><p>{faq.answer}</p></div></div>)}</div></div></section>

      <section className="packages-cta" id="plan-this-journey"><Image id="photo-1470770841072-f978cf4d019e" alt="Evening light over a Himalayan valley" className="packages-cta__image" /><span className="packages-cta__shade" /><motion.div className="packages-cta__copy" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}><span className="eyebrow eyebrow--gold">A JOURNEY THAT FEELS LIKE YOURS</span><h2>Ready to Live the<br /><em>Himalayan Experience?</em></h2><p>Tell us how you want to experience Uttarakhand. We'll help shape the journey around you.</p><div><Link to="/contact" className="button button--gold">Plan My Journey <ArrowUpRight size={16} /></Link><Link to="/contact" className="button button--outline-light">Talk to Us <ArrowUpRight size={16} /></Link></div></motion.div></section>
    </div>
  )
}