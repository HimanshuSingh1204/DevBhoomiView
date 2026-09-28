import { ArrowUpRight, Play } from 'lucide-react'
import { Link } from 'react-router-dom'
import { demoTrip } from '../../data/touristJourney'
import { Image } from '../Image'

export function StoryPreview() {
  return (
    <section className="portal-story-card" aria-labelledby="portal-story-title">
      <div className="portal-card-heading"><div><span className="portal-eyebrow">A JOURNAL IN THE MAKING</span><h2 id="portal-story-title">My Trip Story</h2></div><Link to="/my-journey/story">View Story <ArrowUpRight size={14} /></Link></div>
      <Link to="/my-journey/story" className="portal-story-image">
        <Image id="photo-1470770841072-f978cf4d019e" alt="Illustrative mountain valley for a sample Himalayan journey story" />
        <span className="portal-story-play"><Play size={19} fill="currentColor" /></span>
        <span className="portal-story-image-caption">DAY {String(demoTrip.currentDay).padStart(2, '0')} / {demoTrip.totalDays} · DEMO STORY</span>
      </Link>
      <div className="portal-story-body"><h3>The Story of My Himalayan Journey</h3><p>From misty mornings to starry nights, a 10-day adventure through the heart of Uttarakhand.</p></div>
      <p className="portal-demo-footnote">Sample story content — no personal trip story has been saved.</p>
    </section>
  )
}
