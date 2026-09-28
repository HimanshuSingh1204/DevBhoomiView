import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, BookOpen, Camera, Compass, Heart, Home, Leaf, Map, Mountain, Shield, Sparkles, UsersRound, Utensils } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { brandValues, communityWays, digitalStoryFeatures, internationalTravelValues, journeySteps, missionSteps, responsibleValues, visionPillars } from '../data/about'
import { Image } from '../components/Image'
import { SectionHeading } from '../components/SectionHeading'

type AboutIcon = (typeof visionPillars)[number]['icon']

const icons: Record<AboutIcon, LucideIcon> = {
  discover: Compass,
  connect: UsersRound,
  experience: Mountain,
  remember: Heart,
  guide: Compass,
  stay: Home,
  food: Utensils,
  local: UsersRound,
  culture: BookOpen,
  nature: Leaf,
  slow: Mountain,
  privacy: Shield,
  community: UsersRound,
  memory: Camera,
  authenticity: Sparkles,
  respect: Heart,
  curiosity: Compass,
  responsibility: Leaf,
  connection: UsersRound,
  journey: Map,
}

export function AboutPage() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <Image id="photo-1464822759023-fed622ff2c3b" alt="The Himalayan range rising above Uttarakhand's valleys" className="about-hero__image" />
        <div className="about-hero__shade" />
        <motion.div className="about-hero__copy" initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="eyebrow eyebrow--gold">OUR STORY</span>
          <h1>Travel Deeper.<br /><em>Experience Devbhoomi.</em></h1>
          <p>Devbhoomi Trip exists to help travellers experience Uttarakhand beyond the usual tourist trail — through nature, culture, food, adventure and real local connections.</p>
          <div className="about-hero__actions"><Link to="/explore" className="about-glass-button">Explore Uttarakhand <ArrowUpRight size={16} /></Link><Link to="/contact" className="about-glass-button">Plan My Journey <ArrowUpRight size={16} /></Link></div>
        </motion.div>
        <span className="about-hero__label"><Mountain size={15} /> LIVE THE HIMALAYAN EXPERIENCE</span>
      </section>

      <section className="about-why">
        <div className="about-why__photo"><Image id="photo-1470770841072-f978cf4d019e" alt="A Himalayan valley, forested slopes and a settlement in Uttarakhand" /><span>LANDSCAPE · LIFE · CONNECTION</span></div>
        <motion.div className="about-why__copy" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
          <span className="eyebrow">WHY WE EXIST</span>
          <h2>Uttarakhand Is<br /><em>More Than a Destination.</em></h2>
          <p>Uttarakhand has dramatic mountains, forests, rivers and valleys, but its identity is also shaped by villages, food, traditions, crafts, stories and the people who call these landscapes home.</p>
          <p>Devbhoomi Trip is designed around experiencing those different sides of Uttarakhand in a thoughtful and connected way.</p>
          <Link to="/destinations" className="underlined-link">Explore the destinations <ArrowRight size={15} /></Link>
        </motion.div>
      </section>

      <section className="about-vision">
        <div className="about-vision__inner"><SectionHeading eyebrow="OUR VISION" title="To Make Every Journey Meaningful." light /><div className="about-vision-grid">{visionPillars.map(({ title, description, icon }, index) => { const Icon = icons[icon]; return <motion.article className="about-vision-card" key={title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.05 }}><span className="about-card-index">0{index + 1}</span><span className="about-card-icon"><Icon size={19} /></span><h3>{title}</h3><p>{description}</p></motion.article> })}</div></div>
      </section>

      <section className="about-mission">
        <div className="about-mission__heading"><SectionHeading eyebrow="OUR MISSION" title="Building a Different Kind of Travel Experience." description="A connected journey from the first idea through the moments worth keeping." /></div>
        <div className="about-mission-timeline">{missionSteps.map(({ number, title, description, icon }, index) => { const Icon = icons[icon]; return <motion.article className="about-mission-step" key={title} initial={{ opacity: 0, x: index % 2 ? 12 : -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.42 }}><span className="about-mission-step__number">{number}</span><span className="about-mission-step__icon"><Icon size={19} /></span><div><h3>{title}</h3><p>{description}</p></div></motion.article> })}</div>
      </section>

      <section className="about-community">
        <div className="about-community__backdrop"><Image id="photo-1517457373958-b7bdd4587205" alt="People gathered in a shared community setting" /><span /></div>
        <div className="about-community__inner"><div className="about-community__heading"><span className="eyebrow eyebrow--gold">TRAVEL WITH THE COMMUNITY</span><h2>The People Are<br /><em>Part of the Journey.</em></h2><p>We want travel to create meaningful connections between visitors and the communities they meet.</p></div><div className="about-community-grid">{communityWays.map(({ title, description, icon }, index) => { const Icon = icons[icon]; return <motion.article className="about-community-card" key={title} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.045 }}><span><Icon size={19} /></span><h3>{title}</h3><p>{description}</p></motion.article> })}</div></div>
      </section>

      <section className="about-responsible">
        <div className="about-responsible__inner"><div><span className="eyebrow eyebrow--gold">OUR APPROACH</span><h2>Travel With<br /><em>Respect.</em></h2><p>Every journey can begin with curiosity, care and attention to the places and people we encounter.</p></div><div className="about-responsible-grid">{responsibleValues.map(({ title, description, icon }, index) => { const Icon = icons[icon]; return <article className="about-responsible-card" key={title}><span><Icon size={18} /></span><div><h3>{title}</h3><p>{description}</p></div><i>0{index + 1}</i></article> })}</div></div>
      </section>

      <section className="about-journey">
        <div className="about-journey__heading"><SectionHeading eyebrow="THE DEVBHOOMI JOURNEY" title="From First Search to Final Memory." description="A journey can unfold through discovery, preparation, new experiences and the memories you carry home." /></div>
        <div className="about-journey-flow">{journeySteps.map(({ number, title, description, icon }, index) => { const Icon = icons[icon]; return <div className="about-journey-step-wrap" key={title}><article className="about-journey-step"><span>{number}</span><Icon size={20} /><h3>{title}</h3><p>{description}</p></article>{index < journeySteps.length - 1 && <ArrowRight className="about-journey-arrow" size={17} aria-hidden="true" />}</div> })}</div>
      </section>

      <section className="about-digital">
        <div className="about-digital__inner"><div className="about-digital__heading"><span className="eyebrow">A FUTURE DIGITAL STORY</span><h2>Your Trip Becomes<br /><em>a Digital Story.</em></h2><p>We imagine a future Devbhoomi Trip experience where the moments and milestones of a journey can come together in one personal digital keepsake. These ideas describe a platform vision, not currently available features.</p><Link to="/packages" className="underlined-link">Explore the 10-Day Journey <ArrowRight size={15} /></Link></div><div className="about-digital-grid">{digitalStoryFeatures.map(({ id, title, description, image, imageAlt, icon }, index) => { const Icon = icons[icon]; return <motion.article className={`about-digital-card about-digital-card--${index + 1}`} key={id} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.42, delay: (index % 3) * 0.04 }}><Image id={image} alt={imageAlt} /><span className="about-digital-card__shade" /><div><Icon size={18} /><h3>{title}</h3><p>{description}</p><span className="about-digital-card__future">FUTURE PLATFORM VISION</span></div></motion.article> })}</div></div>
      </section>

      <section className="about-international">
        <div className="about-international__photo"><Image id="photo-1464278533981-50106e6176b1" alt="Open mountain landscapes in Uttarakhand" /><span>FOR TRAVELLERS FROM AROUND THE WORLD</span></div>
        <div className="about-international__copy"><span className="eyebrow">A DIFFERENT PERSPECTIVE</span><h2>See Uttarakhand<br /><em>Through a Different Lens.</em></h2><p>We want international visitors to experience the mountains not only as spectators, but through food, stories, landscapes, people and everyday moments.</p><div className="about-international-grid">{internationalTravelValues.map(({ title, description, icon }) => { const Icon = icons[icon]; return <article className="about-international-card" key={title}><Icon size={17} /><span><strong>{title}</strong><small>{description}</small></span></article> })}</div></div>
      </section>

      <section className="about-values">
        <div className="about-values__heading"><SectionHeading eyebrow="WHAT GUIDES US" title="Our Values" description="The principles we hope to bring to the way we share and experience Uttarakhand." /></div>
        <div className="about-values-grid">{brandValues.map(({ title, description, icon }, index) => { const Icon = icons[icon]; return <motion.article className="about-value-card" key={title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: (index % 3) * 0.04 }}><span><Icon size={18} /></span><i>0{index + 1}</i><h3>{title}</h3><p>{description}</p></motion.article> })}</div>
      </section>

      <section className="about-brand-statement"><span className="eyebrow">DEV BHOOMI TRIP</span><p className="about-brand-statement__title">LIVE THE HIMALAYAN<br /><em>EXPERIENCE.</em></p><p className="about-brand-statement__tagline">Not just a trip.<br />Not just a destination.<br /><em>A story you carry home.</em></p><span className="about-brand-statement__mark"><Mountain size={21} /></span></section>

      <section className="about-final-cta"><Image id="photo-1470770841072-f978cf4d019e" alt="Evening light across a Himalayan valley and mountain village" className="about-final-cta__image" /><span className="about-final-cta__shade" /><motion.div className="about-final-cta__copy" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}><span className="eyebrow eyebrow--gold">YOUR STORY STARTS HERE</span><h2>Your Himalayan Story<br /><em>Starts Here.</em></h2><p>Discover the places, people, flavours and experiences that make Uttarakhand unforgettable.</p><div><Link to="/explore" className="button button--gold">Explore Uttarakhand <ArrowUpRight size={16} /></Link><Link to="/contact" className="button button--outline-light">Plan My Journey <ArrowUpRight size={16} /></Link></div></motion.div></section>
    </div>
  )
}
