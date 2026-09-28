import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight, ArrowUpRight, Coffee, CookingPot, Heart, Leaf, PackageCheck, Recycle, ShoppingBasket, Sprout, Utensils } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { foodCultureFlow, foodCultureTopics, foodExperiences, foodFaqs, foodGallery, foodJourneyStops, kitchenSteps, mountainIngredients, pahadiDishes, responsibleFoodPrinciples, seasonalFood } from '../data/food'
import type { FoodPrinciple } from '../types'
import { FoodEditorialCard } from '../components/FoodEditorialCard'
import { Image } from '../components/Image'
import { SectionHeading } from '../components/SectionHeading'

const principleIcons: Record<FoodPrinciple['icon'], LucideIcon> = {
  host: Heart,
  respect: Utensils,
  waste: Recycle,
  ingredient: Leaf,
  custom: PackageCheck,
}

const experienceIcons = {
  meal: Utensils,
  cooking: CookingPot,
  market: ShoppingBasket,
  breakfast: Coffee,
  farm: Sprout,
} satisfies Record<(typeof foodExperiences)[number]['icon'], LucideIcon>

export function FoodPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <div className="food-page">
      <section className="food-hero">
        <Image id="photo-1547592180-85f173990554" alt="A mountain meal prepared with regional ingredients" className="food-hero__image" />
        <span className="food-hero__shade" />
        <motion.div className="food-hero__copy" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
          <span className="eyebrow eyebrow--gold">TASTE THE HIMALAYAS</span>
          <h1>Every Meal<br /><em>Tells a Story.</em></h1>
          <p>Discover the flavours of Uttarakhand through traditional recipes, local ingredients, village kitchens and unforgettable meals.</p>
          <div className="food-hero__actions"><Link to="/experiences?category=food" className="food-glass-button">Explore Food Experiences <ArrowUpRight size={16} /></Link><Link to="/contact" className="food-glass-button">Plan My Journey <ArrowUpRight size={16} /></Link></div>
        </motion.div>
        <span className="food-hero__label"><Utensils size={15} /> LOCAL · TRADITIONAL · SEASONAL</span>
      </section>

      <section className="food-intro">
        <div className="food-intro__photo"><Image id="photo-1528605248644-14dd04022da1" alt="A table set for sharing a meal together" /><span>GATHER · COOK · SHARE</span></div>
        <motion.div className="food-intro__copy" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
          <span className="eyebrow">PAHADI FOOD CULTURE</span><h2>Flavours From<br /><em>the Mountains</em></h2>
          <p>Food in Uttarakhand is deeply connected with its landscape, seasons, local ingredients and everyday mountain life. Dishes and traditions vary between regions and households.</p>
          <ul>{foodCultureTopics.map((topic) => <li key={topic}><span />{topic}</li>)}</ul>
          <p className="food-intro__note">A meal can be an invitation to learn about place, family and season — one kitchen at a time.</p>
        </motion.div>
      </section>

      <section className="food-ingredients">
        <div className="food-section-heading"><SectionHeading eyebrow="FROM THE LAND" title="Ingredients of the Mountains" description="A closer look at grains, pulses, herbs and produce used in regional cooking." /></div>
        <div className="food-ingredient-grid">{mountainIngredients.map((item, index) => <motion.div key={item.slug} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.42, delay: (index % 3) * 0.04 }}><FoodEditorialCard title={item.name} category={item.category} description={item.description} image={item.image} imageAlt={item.imageAlt} action="Discover" href="#pahadi-dishes" /></motion.div>)}</div>
      </section>

      <section className="food-dishes" id="pahadi-dishes">
        <div className="food-section-heading"><SectionHeading eyebrow="TRADITIONAL FLAVOURS" title="Discover the Taste of Uttarakhand" description="A few examples from regional cuisine. Ingredients and recipes can differ between places and families." /><Link to="/experiences?category=food" className="underlined-link">Food experiences <ArrowUpRight size={15} /></Link></div>
        <div className="food-dish-grid">{pahadiDishes.map((item, index) => <motion.div key={item.slug} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.42, delay: (index % 4) * 0.035 }}><FoodEditorialCard title={item.name} category={item.category} description={item.description} image={item.image} imageAlt={item.imageAlt} action="Taste the Experience" href="/experiences?category=food" variant="compact" /></motion.div>)}</div>
      </section>

      <section className="village-kitchen">
        <div className="village-kitchen__photo"><Image id="photo-1556911220-bff31c812dba" alt="Preparing ingredients in a home kitchen" /><span>FROM THE KITCHEN · WITH PERMISSION</span></div>
        <motion.div className="village-kitchen__copy" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
          <span className="eyebrow">FROM THE KITCHEN</span><h2>Cook, Share,<br /><em>Connect.</em></h2>
          <p>Step into a local kitchen, learn about traditional ingredients and share a meal prepared with the people who know these flavours best.</p>
          <div className="village-kitchen__steps">{kitchenSteps.map((step, index) => <div className="village-kitchen-step" key={step.id}><span className="village-kitchen-step__number">0{index + 1}</span><span><strong>{step.title}</strong><small>{step.description}</small></span></div>)}</div>
          <Link to="/experiences/village-homestay" className="button button--forest">Explore Village Experiences <ArrowRight size={16} /></Link>
        </motion.div>
      </section>

      <section className="food-experiences">
        <div className="food-experiences__inner"><div className="food-experiences__heading"><span className="eyebrow eyebrow--gold">FOOD · PLACE · PEOPLE</span><h2>Food Is Part of<br />the <em>Journey.</em></h2><p>Take time to discover food in the settings where it is prepared, shared and enjoyed.</p></div><div className="food-experience-grid">{foodExperiences.map((experience, index) => { const Icon = experienceIcons[experience.icon]; return <motion.div key={experience.slug} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: (index % 3) * 0.04 }}><FoodEditorialCard title={experience.title} category={experience.category} description={experience.description} image={experience.image} imageAlt={experience.imageAlt} duration={experience.duration} href={experience.href} action="Explore" variant="dark" icon={Icon} /></motion.div> })}</div></div>
      </section>

      <section className="food-seasons">
        <div className="food-section-heading"><SectionHeading eyebrow="SEASONAL TABLE" title="Food Changes With the Seasons" description="A broad editorial view: what is cooked and shared depends on the place, season and household." /></div>
        <div className="food-season-grid">{seasonalFood.map((season, index) => <motion.div key={season.id} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.05 }}><FoodEditorialCard title={season.title} category="IN SEASON" description={season.description} image={season.image} imageAlt={season.imageAlt} variant="compact" /></motion.div>)}</div>
      </section>

      <section className="food-culture-flow">
        <div className="food-culture-flow__copy"><span className="eyebrow">FOOD · FAMILY · PLACE</span><h2>A Meal Is<br /><em>More Than Food.</em></h2><p>Recipes carry memories, families pass down techniques, and shared meals create connections between travellers and communities.</p><Link to="/culture" className="underlined-link">Explore Culture & Heritage <ArrowRight size={15} /></Link></div>
        <div className="food-culture-flow__steps" aria-label="Food connects stories, people and memories">{foodCultureFlow.map((item, index) => <div className="food-flow-step-wrap" key={item}><span className="food-flow-step"><span>0{index + 1}</span><strong>{item}</strong></span>{index < foodCultureFlow.length - 1 && <ArrowDown className="food-flow-arrow" size={18} />}</div>)}</div>
      </section>

      <section className="food-gallery"><div className="food-gallery__heading"><SectionHeading eyebrow="A VISUAL JOURNAL" title="At the Pahadi Table" description="Ingredients, preparation, market visits and meals shared along the way." /></div><div className="food-gallery-grid">{foodGallery.map((image, index) => <motion.figure className={`food-gallery-item food-gallery-item--${image.shape}`} key={`${image.id}-${index}`} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: (index % 4) * 0.04 }}><Image id={image.id} alt={image.alt} className="food-gallery-item__image" /><figcaption>{image.caption}</figcaption></motion.figure>)}</div></section>

      <section className="responsible-food"><div className="responsible-food__inner"><div><span className="eyebrow eyebrow--gold">EAT LOCAL · TRAVEL RESPONSIBLY</span><h2>Let Your Meal<br /><em>Support the Mountains.</em></h2><p>Approach kitchens, ingredients and hosts with care. Follow each host's guidance.</p></div><div className="responsible-food__grid">{responsibleFoodPrinciples.map(({ id, title, description, icon }) => { const Icon = principleIcons[icon]; return <article className="responsible-food-card" key={id}><span><Icon size={19} strokeWidth={1.5} /></span><div><h3>{title}</h3><p>{description}</p></div></article> })}</div></div></section>

      <section className="food-journey"><div className="food-journey__heading"><SectionHeading eyebrow="FOOD ALONG THE WAY" title="Taste Uttarakhand Along the Way" description="Food moments woven into the sample ten-day journey." /></div><div className="food-journey__stops">{foodJourneyStops.map((stop, index) => <article className="food-journey-stop" key={stop.day}><div className="food-journey-stop__image"><Image id={stop.image} alt={`${stop.title} in the Himalayan journey`} /><span>{stop.day}</span></div><h3>{stop.title}</h3>{index < foodJourneyStops.length - 1 && <ArrowRight className="food-journey-stop__connector" size={16} />}</article>)}</div><Link to="/packages" className="button button--forest">View the 10-Day Journey <ArrowRight size={16} /></Link></section>

      <section className="food-faq"><div className="food-faq__inner"><SectionHeading eyebrow="FOOD & YOUR JOURNEY" title="A Few Things to Know" description="Experiences depend on host, location, season and dietary requirements." /><div className="food-faq__list">{foodFaqs.map((faq, index) => <div className={`food-faq__item${openFaq === index ? ' is-open' : ''}`} key={faq.question}><h3><button type="button" aria-expanded={openFaq === index} aria-controls={`food-faq-answer-${index}`} id={`food-faq-question-${index}`} onClick={() => setOpenFaq(openFaq === index ? null : index)}>{faq.question}<span aria-hidden="true">{openFaq === index ? '−' : '+'}</span></button></h3><div id={`food-faq-answer-${index}`} role="region" aria-labelledby={`food-faq-question-${index}`} hidden={openFaq !== index}><p>{faq.answer}</p></div></div>)}</div></div></section>

      <section className="food-final-cta"><Image id="photo-1470770841072-f978cf4d019e" alt="Himalayan valley at the end of the day" className="food-final-cta__image" /><span className="food-final-cta__shade" /><motion.div className="food-final-cta__copy" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}><span className="eyebrow eyebrow--gold">TASTE · LISTEN · CONNECT</span><h2>Come Hungry.<br /><em>Leave With a Story.</em></h2><p>Discover the flavours, people and traditions behind Himalayan food.</p><div><Link to="/experiences?category=food" className="button button--gold">Explore Food Experiences <ArrowUpRight size={16} /></Link><Link to="/contact" className="button button--outline-light">Plan My Journey <ArrowUpRight size={16} /></Link></div></motion.div></section>
    </div>
  )
}