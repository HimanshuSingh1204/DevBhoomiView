import { ArrowUpRight, CircleHelp, Compass, Mountain, UserRound } from 'lucide-react'
import { Link } from 'react-router-dom'
import { quickActions } from '../../data/touristJourney'

const icons = { compass: Compass, profile: UserRound, help: CircleHelp }

export function QuickActions() {
  return (
    <section className="portal-quick-section">
      <div className="portal-section-heading"><div><span className="portal-eyebrow">A FEW USEFUL PLACES</span><h2>Quick Actions</h2></div></div>
      <div className="portal-quick-layout">
        <div className="portal-quick-grid">
          {quickActions.map(({ title, detail, icon, section }) => {
            const Icon = icons[icon as keyof typeof icons]
            const to = section === 'experiences' || section === 'contact' ? `/${section}` : `/my-journey/${section}`
            return <Link to={to} className="portal-quick-card" key={title}><span className="portal-quick-icon"><Icon size={19} /></span><span className="portal-quick-copy"><strong>{title}</strong><small>{detail}</small></span><span className="portal-quick-arrow"><ArrowUpRight size={16} /></span></Link>
          })}
        </div>
        <Link to="/" className="portal-brand-card">
          <span className="portal-brand-card__mark"><Mountain size={25} /></span><span className="portal-brand-card__copy"><small>DEV BHOOMI TRIP</small><strong>Uttarakhand</strong><em>Live the Himalayas</em></span><ArrowUpRight size={17} />
        </Link>
      </div>
    </section>
  )
}
