import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight, ArrowUpRight, BadgeCheck, Camera, Check, ChevronRight, Compass, HeartHandshake, Images, MapPin, Mountain, Play, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { storyAdventureTopics, storyChapters, storyCultureTopics, storyDestinations, storyExperiences, storyFoodTopics, storyStats, type StoryChapter, type StoryExperience } from '../../../data/tripStory'
import { Image } from '../../Image'

export function StoryHero() {
  return <motion.section className="portal-story-hero" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .4 }}>
    <Image id="photo-1464822759023-fed622ff2c3b" alt="Illustrative Himalayan mountain range beneath a wide sky" />
    <span className="portal-story-hero__shade" />
    <div className="portal-story-hero__copy"><span className="portal-eyebrow portal-eyebrow--gold"><Sparkles size={14} /> MY HIMALAYAN STORY</span><h2>A Journey Through<br /><em>Devbhoomi</em></h2><p>Ten days.<br />Five destinations.<br />Countless moments.<br /><br />A journey that becomes a story long after the journey ends.</p><div className="portal-story-hero__meta"><span>10 DAYS</span><i /><span>5 DESTINATIONS</span><i /><span>8 EXPERIENCES</span><i /><span>245 MEMORIES</span></div></div>
    <div className="portal-story-hero__glass"><span>MY JOURNEY</span><strong>2026 ·<br />UTTARAKHAND</strong><i><Mountain size={18} /></i></div>
    <a className="portal-story-hero__scroll" href="#story-beginning" aria-label="Scroll to the beginning of the story"><ArrowDown size={15} /></a>
    <small>DEMO JOURNEY · AN ILLUSTRATIVE TRAVEL STORY</small>
  </motion.section>
}

export function StoryIntro() {
  return <section className="portal-story-intro" id="story-beginning"><div><span className="portal-eyebrow">THE BEGINNING</span><h2>Every Journey Begins<br />With a First Step.</h2><p>This is where your Himalayan story begins.</p><p>From the first arrival to the final goodbye, every destination, meal, trail and conversation becomes part of the journey.</p></div><blockquote>“Travel deeper.<br />Experience more.<br /><em>Remember everything.</em>”</blockquote></section>
}

export function StoryStats() {
  const stats = [
    ['10', 'DAYS'], ['5', 'DESTINATIONS'], ['8', 'EXPERIENCES'],
    ['3', 'ADVENTURES'], ['2', 'CULTURAL MOMENTS'], ['245', 'MEMORIES'],
  ]
  return <section className="portal-story-stats" aria-label="Illustrative journey statistics">{stats.map(([value, label], index) => <motion.div key={label} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .28, delay: index * .04 }}><strong>{value}</strong><span>{label}</span></motion.div>)}</section>
}

export function StoryTimeline({ onViewMemories }: { onViewMemories: (chapter: StoryChapter) => string }) {
  return <section className="portal-story-timeline" id="story-timeline" aria-labelledby="portal-story-timeline-title"><header className="portal-story-section-heading"><span className="portal-eyebrow">THE JOURNEY</span><h2 id="portal-story-timeline-title">Ten Days. One Himalayan Story.</h2><p>Ten illustrative chapters, inspired by the sample journey itinerary.</p></header>
    <div className="portal-story-chapters">{storyChapters.map((chapter, index) => <motion.article className={`portal-story-chapter ${index % 2 ? 'is-reversed' : ''}`} key={chapter.id} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .12 }} transition={{ duration: .35 }}>
      <div className="portal-story-chapter__image"><Image id={chapter.image} alt={`Illustrative scene for day ${chapter.day}: ${chapter.title}`} /><span>DAY {String(chapter.day).padStart(2, '0')}</span><small>{chapter.status}</small></div>
      <div className="portal-story-chapter__copy"><span className="portal-eyebrow">DAY {String(chapter.day).padStart(2, '0')} <i /> {chapter.destination.toUpperCase()}</span><span className="portal-story-chapter__experience">{chapter.experience.toUpperCase()}</span><h3>{chapter.title}</h3><p>{chapter.description}</p><ul>{chapter.highlights.map((highlight) => <li key={highlight}><Check size={13} />{highlight}</li>)}</ul><div className="portal-story-chapter__meta"><span><Images size={13} />{chapter.memoryCount} sample memories</span><span><MapPin size={13} />{chapter.destination}</span></div><Link className="portal-story-text-link" to={onViewMemories(chapter)}>View Memories <ArrowUpRight size={14} /></Link></div>
    </motion.article>)}</div>
  </section>
}

export function StoryDestinations() {
  return <section className="portal-story-destinations portal-story-section" aria-labelledby="portal-story-destinations-title"><header className="portal-story-section-heading"><span className="portal-eyebrow">PLACES ALONG THE WAY</span><h2 id="portal-story-destinations-title">Five Places. Five Different Stories.</h2><p>Sample stops from an illustrative Uttarakhand itinerary.</p></header><div className="portal-story-destination-grid">{storyDestinations.map((place, index) => <motion.article className="portal-story-destination-card" key={place.name} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .25, delay: index * .04 }}><div><Image id={place.image} alt={`Illustrative landscape for ${place.name}`} /><span>{place.day.toUpperCase()}</span></div><section><span className="portal-eyebrow">{place.day.toUpperCase()}</span><h3>{place.name}</h3><p>{place.description}</p><small><Images size={12} />{place.memoryCount} sample memories</small></section></motion.article>)}</div></section>
}

export function StoryExperiences() {
  return <section className="portal-story-section" aria-labelledby="portal-story-experiences-title"><header className="portal-story-section-heading"><span className="portal-eyebrow">MOMENTS ALONG THE WAY</span><h2 id="portal-story-experiences-title">More Than Places</h2><p>Experiences that give an itinerary its human details.</p></header><div className="portal-story-experience-grid">{storyExperiences.map((experience, index) => <ExperienceCard key={experience.title} experience={experience} index={index} />)}</div></section>
}

function ExperienceCard({ experience, index }: { experience: StoryExperience; index: number }) {
  return <motion.article className="portal-story-experience-card" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .25, delay: index * .035 }}><Image id={experience.image} alt={`Illustrative image for ${experience.title}`} /><div><span>{experience.category.toUpperCase()} · DEMO</span><h3>{experience.title}</h3><p>{experience.description}</p></div></motion.article>
}

export function CultureStorySection() {
  return <section className="portal-story-culture portal-story-section" aria-labelledby="portal-story-culture-title"><div className="portal-story-culture__intro"><span className="portal-eyebrow portal-eyebrow--gold">CULTURE</span><h2 id="portal-story-culture-title">Meet the Culture<br />Behind the Mountains.</h2><p>Culture lives in daily practices, community and place. Any participation or observation belongs in its local context, guided by permission and respect.</p><span className="portal-story-culture__principle"><HeartHandshake size={16} />Listen first. Follow community guidance.</span></div><div className="portal-story-culture__topics">{storyCultureTopics.map((topic) => <article key={topic.title}><Image id={topic.image} alt={topic.imageAlt} /><div><span>LOCAL CULTURE</span><h3>{topic.title}</h3><p>{topic.description}</p></div></article>)}<div className="portal-story-culture__values">{['Local traditions', 'Pahadi music', 'Folk experiences', 'Traditional clothing', 'Village life', 'Local food'].map((item) => <span key={item}><Check size={12} />{item}</span>)}</div></div></section>
}

export function FoodStorySection() {
  return <section className="portal-story-section portal-story-food" aria-labelledby="portal-story-food-title"><header className="portal-story-section-heading"><span className="portal-eyebrow">TASTE OF THE HIMALAYAS</span><h2 id="portal-story-food-title">Some Memories Are Meant to Be Tasted.</h2><p>Regional dishes and ingredients, with recipes and preparations shaped by each kitchen.</p></header><div className="portal-story-food-grid">{storyFoodTopics.map((food) => <article key={food.title}><Image id={food.image} alt={food.imageAlt} /><div><h3>{food.title}</h3><p>{food.description}</p></div></article>)}</div><Link className="portal-story-button-link" to="/food">View Food Experiences <ArrowUpRight size={14} /></Link></section>
}

export function AdventureStorySection() {
  return <section className="portal-story-adventure portal-story-section" aria-labelledby="portal-story-adventure-title"><header className="portal-story-section-heading"><span className="portal-eyebrow portal-eyebrow--gold">ADVENTURE</span><h2 id="portal-story-adventure-title">Find Your Wild Side.</h2><p>Outdoor experiences are shaped by the route, weather and local guidance.</p></header><div className="portal-story-adventure-grid">{storyAdventureTopics.map((activity) => <article key={activity.title}><span><Compass size={17} /></span><h3>{activity.title}</h3><p>{activity.description}</p></article>)}</div><p className="portal-story-safety">Adventure experiences should always follow local guidance, weather conditions and appropriate safety practices.</p></section>
}

export function StoryQuote() {
  return <section className="portal-story-quote"><span className="portal-eyebrow">A NOTE TO REMEMBER</span><blockquote>“You don't return from the mountains with only photographs.<br /><em>You return with stories.</em>”</blockquote></section>
}

export function DigitalMemoryPackage() {
  const items = [
    { title: 'PHOTO ALBUM', description: 'Your collected journey photographs.', icon: Camera, href: '/my-journey/media', action: 'Explore memories' },
    { title: 'TRIP REEL', description: 'A future cinematic summary of your journey.', icon: Play, href: '', action: 'Coming soon' },
    { title: 'HIMALAYAN PASSPORT', description: 'Your collection of destination and experience stamps.', icon: BadgeCheck, href: '/my-journey/passport', action: 'View passport' },
    { title: 'CERTIFICATE', description: 'A demo digital journey certificate.', icon: Check, href: '/my-journey/certificate', action: 'View certificate' },
    { title: 'INTERACTIVE MAP', description: 'A static illustration of your sample route.', icon: MapPin, href: '/my-journey/map', action: 'Explore map' },
  ]
  return <section className="portal-story-section" aria-labelledby="portal-story-package-title"><header className="portal-story-section-heading"><span className="portal-eyebrow">YOUR JOURNEY, PRESERVED</span><h2 id="portal-story-package-title">A Story You Can Take Home.</h2></header><div className="portal-story-package-grid">{items.map(({ title, description, icon: Icon, href, action }) => <article key={title}><span><Icon size={18} /></span><div><small>{title}</small><p>{description}</p>{href ? <Link to={href}>{action} <ArrowUpRight size={12} /></Link> : <span className="portal-story-coming-soon">{action}</span>}</div></article>)}</div></section>
}

export function StoryProgress() {
  return <section className="portal-story-progress" aria-labelledby="portal-story-progress-title"><div><span className="portal-eyebrow">A SAMPLE JOURNEY, STILL UNFOLDING</span><h2 id="portal-story-progress-title">Your Story So Far</h2><p>Illustrative progress based on the demo itinerary.</p><div className="portal-story-progress__track" role="progressbar" aria-label="Sample journey documented" aria-valuemin={0} aria-valuemax={100} aria-valuenow={storyStats.completion}><i /></div></div><strong className="portal-story-progress__percent">{storyStats.completion}<small>%</small><span>JOURNEY DOCUMENTED</span></strong><div className="portal-story-progress__stats"><span><b>{storyStats.completedDays} / {storyStats.days}</b><small>Days</small></span><span><b>{storyStats.completedDestinations} / {storyStats.destinations}</b><small>Destinations</small></span><span><b>{storyStats.memories}</b><small>Memories · demo</small></span></div></section>
}

export function ShareStoryCard({ onPreview, onShare }: { onPreview: () => void; onShare: () => void }) {
  return <section className="portal-story-share"><span className="portal-story-share__icon"><Images size={20} /></span><div><span className="portal-eyebrow portal-eyebrow--gold">SHARE YOUR JOURNEY</span><h2>One Day, Share the Story.</h2><p>A future version will let you create a beautiful public version of your Himalayan journey to share with friends and family.</p></div><div><button type="button" className="portal-button portal-button--gold" onClick={onPreview}>Preview Story <ArrowUpRight size={14} /></button><button type="button" className="portal-button portal-button--glass" onClick={onShare}>Share Journey <ArrowRight size={14} /></button></div></section>
}

export function StoryCTA() {
  return <section className="portal-story-final-cta"><Image id="photo-1470770841072-f978cf4d019e" alt="Illustrative evening light over a Himalayan valley" /><span /><div><span className="portal-eyebrow portal-eyebrow--gold">YOUR NEXT CHAPTER AWAITS</span><h2>Your Story Is Still Being Written.</h2><p>There are still mountains to see, conversations to have and memories to collect.</p><nav><Link className="portal-button portal-button--gold" to="/my-journey/passport">View My Passport <ArrowRight size={14} /></Link><Link className="portal-button portal-button--glass" to="/my-journey/trip">View My Trip <ChevronRight size={15} /></Link></nav></div><small>ILLUSTRATIVE DEMO JOURNEY</small></section>
}

export function StoryMediaSectionHeading() {
  return <header className="portal-story-section-heading"><span className="portal-eyebrow">MEMORIES, GATHERED</span><h2>Moments Worth Remembering</h2><p>A small selection from the illustrative trip-media collection.</p></header>
}
