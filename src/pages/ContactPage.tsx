import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowDown, ArrowRight, ArrowUpRight, BookOpen, CalendarDays, Check, Compass, Globe2, Handshake, Leaf, Map, MessageCircle, Mountain, Route, Sprout } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ContactInquiryForm } from '../components/ContactInquiryForm'
import { Image } from '../components/Image'
import { SectionHeading } from '../components/SectionHeading'
import { contactFaqs, contactMethods, internationalTravelValues, planningSteps, regionHighlights, responsibleTravelPractices } from '../data/contact'

const methodIcons = { compass: Compass, message: MessageCircle, globe: Globe2, handshake: Handshake }
const internationalIcons = { calendar: CalendarDays, compass: Compass, route: Route, book: BookOpen }

export function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <Image id="photo-1464822759023-fed622ff2c3b" alt="Mountain ridges and Himalayan peaks in Uttarakhand" className="contact-hero__image" />
        <div className="contact-hero__shade" />
        <motion.div className="contact-hero__copy" initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="eyebrow eyebrow--gold">START YOUR JOURNEY</span>
          <h1>Start Your<br /><em>Himalayan Journey.</em></h1>
          <p>Tell us what kind of Himalayan experience you are looking for, and we’ll help you shape your journey around Uttarakhand’s landscapes, culture, food, villages and adventures.</p>
          <div className="contact-hero__actions">
            <a className="contact-hero-button" href="#trip-inquiry">Plan My Journey <ArrowUpRight size={17} /></a>
            <Link className="contact-hero-link" to="/experiences">Explore Experiences <ArrowRight size={16} /></Link>
          </div>
        </motion.div>
        <a className="contact-hero-note" href="#contact-intro"><span><Mountain size={16} /></span><span>LANDSCAPE · CULTURE · CONNECTION</span><ArrowDown size={15} /></a>
        <motion.aside className="contact-hero-card" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.24 }}>
          <span className="contact-hero-card__top">A JOURNEY THAT STARTS WITH YOU <i>01 / 04</i></span>
          <strong>What calls you<br />to the mountains?</strong>
          <span className="contact-hero-card__bottom"><Sprout size={17} /> A thoughtful way to begin</span>
        </motion.aside>
      </section>

      <section className="contact-intro" id="contact-intro">
        <div className="contact-intro__inner">
          <motion.div className="contact-intro__statement" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <span className="eyebrow">A JOURNEY TAKES MANY SHAPES</span>
            <h2>Let’s Plan<br /><em>Something Meaningful.</em></h2>
            <p>Every traveller arrives with a different idea of the Himalayas.</p>
          </motion.div>
          <motion.div className="contact-intro__card" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
            <span className="contact-intro__quote">“</span>
            <p>Some want quiet mountain villages. Some want trekking and adventure. Some want to understand local food and culture. Some simply want to slow down and experience mountain life.</p>
            <p>Devbhoomi Trip is designed around those different ways of travelling.</p>
            <span className="contact-intro__signature">YOUR UTTARAKHAND, YOUR WAY</span>
          </motion.div>
        </div>
      </section>

      <section className="contact-methods">
        <div className="contact-methods__inner">
          <div className="contact-methods__heading"><SectionHeading eyebrow="A GOOD PLACE TO BEGIN" title="What Would You Like to Talk About?" description="Choose a starting point and tell us a little about what brings you here." /></div>
          <div className="contact-method-grid">
            {contactMethods.map(({ title, description, icon }, index) => {
              const Icon = methodIcons[icon]
              return <motion.a className="contact-method-card" href="#trip-inquiry" key={title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.42, delay: index * 0.06 }}>
                <span className="contact-method-card__icon"><Icon size={21} /></span>
                <span className="contact-method-card__number">0{index + 1}</span>
                <h3>{title}</h3><p>{description}</p><span className="contact-method-card__link">Start here <ArrowUpRight size={15} /></span>
              </motion.a>
            })}
          </div>
        </div>
      </section>

      <ContactInquiryForm />

      <section className="contact-steps">
        <div className="contact-steps__inner">
          <div className="contact-steps__heading"><SectionHeading eyebrow="A THOUGHTFUL WAY FORWARD" title="From First Message to Mountain Memories" description="Every journey begins somewhere. Here is the path from your first idea to time spent in the hills." /></div>
          <div className="contact-step-grid">
            {planningSteps.map(({ number, title, description }, index) => <motion.article className="contact-step-card" key={number} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.42, delay: index * 0.06 }}>
              <span className="contact-step-card__number">{number}</span><span className="contact-step-card__rule" /><h3>{title}</h3><p>{description}</p>
            </motion.article>)}
          </div>
        </div>
      </section>

      <section className="contact-international">
        <div className="contact-international__inner">
          <div className="contact-international__image"><Image id="photo-1470770841072-f978cf4d019e" alt="A mountain valley and hillside settlement in Uttarakhand" /><span>THE JOURNEY STARTS BEFORE ARRIVAL</span></div>
          <div className="contact-international__copy">
            <span className="eyebrow eyebrow--gold">FOR TRAVELLERS NEAR AND FAR</span>
            <h2>Planning<br /><em>From Far Away?</em></h2>
            <p>For international travellers, planning a Himalayan journey can involve questions about destinations, travel time, local experiences, accommodation and how to move between regions.</p>
            <p>Devbhoomi Trip is designed to make discovering and planning Uttarakhand easier, wherever your planning begins.</p>
            <div className="contact-international-grid">
              {internationalTravelValues.map(({ title, description, icon }, index) => {
                const Icon = internationalIcons[icon]
                return <motion.article className="contact-international-card" key={title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: index * 0.05 }}>
                  <Icon size={18} /><h3>{title}</h3><p>{description}</p>
                </motion.article>
              })}
            </div>
            <a href="#trip-inquiry" className="contact-inline-link">Share your travel ideas <ArrowRight size={15} /></a>
          </div>
        </div>
      </section>

      <section className="contact-faq">
        <div className="contact-faq__inner">
          <div className="contact-faq__heading"><SectionHeading eyebrow="GOOD TO KNOW" title="A Few Things You May Be Wondering" description="A little clarity before you start planning." /></div>
          <div className="contact-faq-list">
            {contactFaqs.map(({ question, answer }, index) => {
              const isOpen = openFaq === index
              const answerId = `contact-faq-answer-${index}`
              return <article className={`contact-faq-item${isOpen ? ' is-open' : ''}`} key={question}>
                <h3><button type="button" aria-expanded={isOpen} aria-controls={answerId} onClick={() => setOpenFaq(isOpen ? null : index)}><span><i>0{index + 1}</i>{question}</span><span className="contact-faq-toggle" aria-hidden="true">{isOpen ? '−' : '+'}</span></button></h3>
                <AnimatePresence initial={false}><motion.div id={answerId} className="contact-faq-answer" initial={{ height: 0, opacity: 0 }} animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.24 }} aria-hidden={!isOpen}><p>{answer}</p></motion.div></AnimatePresence>
              </article>
            })}
          </div>
        </div>
      </section>

      <section className="contact-region">
        <Image id="photo-1464822759023-fed622ff2c3b" alt="Atmospheric mountain landscape representing Uttarakhand's many regions" className="contact-region__image" />
        <div className="contact-region__shade" />
        <div className="contact-region__inner">
          <div className="contact-region__heading"><span className="eyebrow eyebrow--gold">A LAND OF MANY WORLDS</span><h2>Uttarakhand<br /><em>Is Waiting.</em></h2><p>From Kumaon and Garhwal to the valleys, villages, forests and rivers in between.</p></div>
          <div className="contact-region__labels">{regionHighlights.map((highlight, index) => <span key={highlight}><i>0{index + 1}</i>{highlight}</span>)}</div>
          <span className="contact-region__caption"><Map size={15} /> An editorial view of the region — not a navigation map.</span>
        </div>
      </section>

      <section className="contact-respect">
        <div className="contact-respect__inner">
          <span className="contact-respect__icon"><Leaf size={22} /></span>
          <div className="contact-respect__copy"><span className="eyebrow">A GENTLE REMINDER</span><h2>Travel With Respect.</h2><p>Uttarakhand is home to communities, traditions, ecosystems and cultural practices that deserve respect.</p></div>
          <ul>{responsibleTravelPractices.map((practice) => <li key={practice}><Check size={15} />{practice}</li>)}</ul>
        </div>
      </section>

      <section className="contact-final-cta">
        <Image id="photo-1470770841072-f978cf4d019e" alt="Evening light settling over a Himalayan valley" className="contact-final-cta__image" />
        <div className="contact-final-cta__shade" />
        <motion.div className="contact-final-cta__copy" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
          <span className="eyebrow eyebrow--gold">THE FIRST STEP IS YOURS</span>
          <h2>Your Himalayan Story<br /><em>Starts With a Conversation.</em></h2>
          <p>Tell us what you want to discover, experience and remember.</p>
          <div><a className="contact-hero-button" href="#trip-inquiry">Plan My Journey <ArrowUpRight size={17} /></a><Link className="contact-hero-link" to="/explore">Explore Uttarakhand <ArrowRight size={16} /></Link></div>
        </motion.div>
      </section>
    </div>
  )
}
