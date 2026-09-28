import { ArrowLeft, ArrowUpRight, CircleHelp, Compass, Mountain, Sparkles } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { sidebarJourneyLinks } from '../../data/touristJourney'

const sections = sidebarJourneyLinks.filter(({ section }) => section)

export function PortalSection() {
  const { section = '' } = useParams()
  const page = sections.find((item) => item.section === section)
  if (!page) {
    return <section className="portal-coming-page"><span className="portal-coming-icon"><Compass size={24} /></span><span className="portal-eyebrow">A LITTLE OFF THE TRAIL</span><h2>We couldn’t find this page.</h2><p>Return to your journey dashboard to find your way.</p><Link to="/my-journey" className="portal-button portal-button--forest"><ArrowLeft size={16} /> Back to My Journey</Link></section>
  }
  return (
    <section className="portal-coming-page">
      <span className="portal-coming-icon"><Mountain size={25} /></span>
      <span className="portal-eyebrow"><Sparkles size={13} /> YOUR JOURNEY, TAKING SHAPE</span>
      <h2>{page.title}</h2>
      <p>This part of your journey portal is coming soon. We’re keeping this preview clear: nothing is being booked, uploaded, checked in, or saved yet.</p>
      <span className="portal-coming-badge"><i /> COMING SOON <span>·</span> DEMO PORTAL</span>
      <Link to="/my-journey" className="portal-button portal-button--forest"><ArrowLeft size={16} /> Back to Dashboard</Link>
      <Link to="/contact" className="portal-coming-help">Need a hand? <CircleHelp size={15} /><ArrowUpRight size={13} /></Link>
    </section>
  )
}
