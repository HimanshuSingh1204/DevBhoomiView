import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, BookOpen, Camera, Ear, Heart, Landmark, Leaf, Music2, Shirt, Utensils, UsersRound } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { cultureExperiences, cultureGallery, culturePrinciples, cultureSoundStories, culturalWays, clothingStories, communityStories, foodStories } from '../data/culture'
import type { CulturePrinciple } from '../types'
import { CultureImageCard } from '../components/CultureImageCard'
import { Image } from '../components/Image'
import { SectionHeading } from '../components/SectionHeading'

const principleIcons: Record<CulturePrinciple['icon'], LucideIcon> = {
  camera: Camera,
  landmark: Landmark,
  shirt: Shirt,
  ear: Ear,
  heart: Heart,
  leaf: Leaf,
}

const cultureJourney = [
  { title: 'Village Stay', icon: UsersRound, href: '/experiences?category=village-life' },
  { title: 'Local Food', icon: Utensils, href: '/food' },
  { title: 'Folk Experience', icon: Music2, href: '/experiences?category=culture' },
  { title: 'Market & Crafts', icon: Landmark, href: '/experiences?category=culture' },
  { title: 'Mountain Stories', icon: BookOpen, href: '/packages#itinerary' },
]

export function CulturePage() {
  return (
    <div className="culture-page">
      <section className="culture-hero">
        <Image id="photo-1517457373958-b7bdd4587205" alt="People sharing a cultural performance in a community setting" className="culture-hero__image" />
        <div className="culture-hero__shade" />
        <motion.div className="culture-hero__copy" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
          <span className="eyebrow eyebrow--gold">THE SOUL OF DEV BHOOMI</span>
          <h1>Culture Is the<br /><em>Heart of the Journey.</em></h1>
          <p>Meet the traditions, stories, music, food, clothing and communities that give Uttarakhand its identity.</p>
          <div className="culture-hero__actions"><Link to="/experiences?category=culture" className="culture-glass-button">Explore Experiences <ArrowUpRight size={16} /></Link><a href="#pahadi-life" className="culture-glass-button">Discover Pahadi Life <ArrowRight size={16} /></a></div>
        </motion.div>
        <span className="culture-hero__label"><Landmark size={15} /> CULTURE · HERITAGE · COMMUNITY</span>
      </section>

      <section className="culture-intro" id="pahadi-life">
        <div className="culture-intro__photo"><Image id="photo-1470770841072-f978cf4d019e" alt="A Himalayan village in a green mountain valley" /><span>PEOPLE · PLACE · EVERYDAY LIFE</span></div>
        <motion.div className="culture-intro__copy" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
          <span className="eyebrow">THE CULTURE OF UTTARAKHAND</span>
          <h2>More Than<br /><em>Mountains</em></h2>
          <p>Uttarakhand is shaped not only by its landscapes, but also by the people, traditions and stories that have lived here for generations. Its communities are varied, with customs and expressions that differ from place to place.</p>
          <span className="culture-intro__list-label">WAYS TO EXPERIENCE LOCAL LIFE</span>
          <ul>{culturalWays.map((way) => <li key={way}><span />{way}</li>)}</ul>
          <p className="culture-intro__respect">Experiences are best approached with curiosity, permission and respect for local context.</p>
        </motion.div>
      </section>

      <section className="culture-experiences" id="cultural-experiences">
        <div className="culture-section-heading"><SectionHeading eyebrow="EXPERIENCE THE CULTURE" title="Step Into Local Life" description="Take time to listen, learn and share in experiences offered on community terms." /><Link to="/experiences?category=culture" className="underlined-link">More experiences <ArrowUpRight size={15} /></Link></div>
        <div className="culture-experience-grid">{cultureExperiences.map((card, index) => <motion.div key={card.id} initial={{ opacity: 0, y: 17 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.45, delay: (index % 3) * 0.045 }}><CultureImageCard card={card} index={index} /></motion.div>)}</div>
      </section>

      <section className="culture-sound">
        <div className="culture-sound__inner"><div className="culture-sound__heading"><span className="eyebrow eyebrow--gold">MUSIC · DANCE · STORIES</span><h2>Stories That Live<br />Through <em>Sound.</em></h2><p>Uttarakhand holds diverse regional musical and dance traditions. Their meanings and settings belong to the communities that keep them.</p></div><div className="culture-sound-grid">{cultureSoundStories.map((card, index) => <motion.div key={card.id} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.06 }}><CultureImageCard card={card} index={index} /></motion.div>)}</div></div>
      </section>

      <section className="jagar-section">
        <div className="jagar-section__image"><Image id="photo-1513836279014-a89f7a76ae86" alt="Quiet forest landscape in the Uttarakhand hills" /><span>LISTEN · LEARN · RESPECT</span></div>
        <motion.div className="jagar-section__copy" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
          <span className="eyebrow">A LIVING TRADITION</span>
          <h2>Understanding<br /><em>Jagar</em></h2>
          <p>Jagar is a traditional ritual and musical practice found in parts of Uttarakhand and connected with local spiritual and community traditions. Its meaning and form are specific to the people and places where it is practiced.</p>
          <p className="jagar-section__visitor-note">For visitors, the focus is understanding and respectful observation when communities choose to share these traditions.</p>
          <div className="jagar-respect-panel"><span>RESPECT FIRST</span><p>Some traditions are sacred and community-specific. Cultural experiences should always be approached with permission, sensitivity and respect.</p></div>
          <a href="#cultural-etiquette" className="underlined-link">Travel Responsibly <ArrowRight size={15} /></a>
        </motion.div>
      </section>

      <section className="culture-clothing">
        <div className="culture-clothing__heading"><SectionHeading eyebrow="TEXTILE · CRAFT · IDENTITY" title="Wear the Heritage" description="Traditional clothing reflects the landscapes, communities and history of the region. There is no single style that represents all of Uttarakhand." /></div>
        <div className="culture-clothing-grid">{clothingStories.map((card, index) => <motion.div key={card.id} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.05 }}><CultureImageCard card={card} index={index} variant="clothing" /></motion.div>)}</div>
      </section>

      <section className="culture-food">
        <div className="culture-food__backdrop"><Image id="photo-1470770841072-f978cf4d019e" alt="Warm light over a Himalayan home and hillside" /><span /></div>
        <div className="culture-food__inner"><div className="culture-food__heading"><span className="eyebrow eyebrow--gold">TASTE THE MOUNTAINS</span><h2>Every Meal Has<br />a <em>Story.</em></h2><p>Local ingredients, seasonal cooking, traditional preparation and family recipes offer a window into everyday life. Food varies between regions, households and seasons.</p><Link to="/food" className="button button--gold">Explore Pahadi Food <ArrowRight size={16} /></Link></div><div className="culture-food-grid">{foodStories.map((card, index) => <motion.div key={card.id} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: (index % 3) * 0.04 }}><CultureImageCard card={card} index={index} variant="food" /></motion.div>)}</div></div>
      </section>

      <section className="culture-community">
        <div className="culture-community__heading"><SectionHeading eyebrow="SEASON · PLACE · PEOPLE" title="Celebrate With the Community" description="Experiences depend on season, location and community availability." /></div>
        <div className="culture-community-grid">{communityStories.map((card, index) => <motion.div key={card.id} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.42, delay: index * 0.04 }}><CultureImageCard card={card} index={index} variant="community" /></motion.div>)}</div>
      </section>

      <section className="cultural-etiquette" id="cultural-etiquette">
        <div className="cultural-etiquette__inner"><div className="cultural-etiquette__heading"><span className="eyebrow eyebrow--gold">CULTURAL ETIQUETTE</span><h2>Be a Respectful<br /><em>Guest.</em></h2><p>Small acts of care help make a more thoughtful visit.</p></div><div className="cultural-principle-grid">{culturePrinciples.map(({ id, title, description, icon }, index) => { const Icon = principleIcons[icon]; return <motion.article className="cultural-principle-card" key={id} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: (index % 3) * 0.04 }}><span><Icon size={20} strokeWidth={1.5} /></span><h3>{title}</h3><p>{description}</p></motion.article> })}</div></div>
      </section>

      <section className="culture-journey"><div className="culture-journey__heading"><SectionHeading eyebrow="CULTURE IN THE JOURNEY" title="Make Culture Part of Your Journey" description="A few moments can connect into a deeper sense of place." /></div><div className="culture-journey__steps">{cultureJourney.map(({ title, icon: Icon, href }, index) => <div className="culture-journey-step-wrap" key={title}><Link to={href} className="culture-journey-step"><Icon size={20} strokeWidth={1.5} /><span>{title}</span><ArrowUpRight size={15} /></Link>{index < cultureJourney.length - 1 && <ArrowRight className="culture-journey__connector" size={18} />}</div>)}</div><Link to="/packages" className="button button--forest">View the 10-Day Journey <ArrowRight size={16} /></Link></section>

      <section className="culture-gallery"><div className="culture-gallery__heading"><SectionHeading eyebrow="A VISUAL JOURNAL" title="A Glimpse of Cultural Life" description="People, food, clothing, crafts and landscapes — each image a small window into a particular place." /></div><div className="culture-gallery-grid">{cultureGallery.map((image, index) => <motion.figure className={`culture-gallery-item culture-gallery-item--${image.shape}`} key={`${image.id}-${index}`} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.42, delay: (index % 4) * 0.04 }}><Image id={image.id} alt={image.alt} className="culture-gallery-item__image" /><figcaption>{image.caption}</figcaption></motion.figure>)}</div></section>

      <section className="culture-final-cta"><Image id="photo-1464822759023-fed622ff2c3b" alt="Himalayan peaks at the end of the day" className="culture-final-cta__image" /><span className="culture-final-cta__shade" /><motion.div className="culture-final-cta__copy" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}><span className="eyebrow eyebrow--gold">TRAVEL WITH CURIOSITY</span><h2>Don't Just See Uttarakhand.<br /><em>Understand It.</em></h2><p>Travel with curiosity. Meet people. Listen to stories. Experience the culture with respect.</p><div><Link to="/experiences?category=culture" className="button button--gold">Explore Cultural Experiences <ArrowUpRight size={16} /></Link><Link to="/contact" className="button button--outline-light">Plan My Journey <ArrowUpRight size={16} /></Link></div></motion.div></section>
    </div>
  )
}