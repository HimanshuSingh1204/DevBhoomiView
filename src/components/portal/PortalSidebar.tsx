import { ArrowLeft, ArrowUpRight, BadgeCheck, Bell, BookOpen, Camera, CircleHelp, FileText, LayoutDashboard, Map, Mountain, NotebookPen, Settings, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { sidebarJourneyLinks, touristProfile } from '../../data/touristJourney'

const icons: Record<string, typeof LayoutDashboard> = {
  dashboard: LayoutDashboard,
  calendar: BookOpen,
  map: Map,
  passport: BadgeCheck,
  camera: Camera,
  story: NotebookPen,
  certificate: FileText,
  settings: Settings,
}

type PortalSidebarProps = {
  open: boolean
  onClose: () => void
}

export function PortalSidebar({ open, onClose }: PortalSidebarProps) {
  const [showNotice, setShowNotice] = useState(false)

  return (
    <>
      {open && <button className="portal-drawer-scrim" type="button" aria-label="Close journey menu" onClick={onClose} />}
      <aside id="portal-navigation-drawer" className={`portal-sidebar${open ? ' is-open' : ''}`} aria-label="Journey navigation">
        <div className="portal-brand-row">
          <Link to="/" className="portal-brand" onClick={onClose}>
            <span className="portal-brand__mark"><Mountain size={21} strokeWidth={1.5} /></span>
            <span>DEV BHOOMI TRIP<small>LIVE THE HIMALAYAN EXPERIENCE</small></span>
          </Link>
          <button className="portal-drawer-close" type="button" aria-label="Close journey menu" onClick={onClose}><X size={20} /></button>
        </div>
        <div className="portal-sidebar-profile">
          <span className="portal-avatar portal-avatar--sidebar">{touristProfile.initials}</span>
          <span className="portal-sidebar-profile__identity"><strong>{touristProfile.greeting}</strong><small>{touristProfile.accountLabel}</small></span>
          <button className="portal-sidebar-bell" type="button" aria-label="Demo notifications" aria-expanded={showNotice} onClick={() => setShowNotice((shown) => !shown)}><Bell size={17} /><i /></button>
        </div>
        {showNotice && <div className="portal-sidebar-notice" role="status">No new notifications. This is a demo portal.</div>}
        <nav className="portal-nav" aria-label="My journey">
          <span className="portal-nav-label">MY JOURNEY</span>
          {sidebarJourneyLinks.map(({ title, section, icon }) => {
            const Icon = icons[icon]
            const to = section ? `/my-journey/${section}` : '/my-journey'
            return <NavLink key={title} to={to} end={!section} onClick={onClose} className={({ isActive }) => `portal-nav-link${isActive ? ' is-active' : ''}`}><Icon size={18} strokeWidth={1.7} /><span>{title}</span>{title === 'Dashboard' && <i className="portal-nav-active-dot" />}</NavLink>
          })}
        </nav>
        <div className="portal-sidebar-bottom">
          <div className="portal-sidebar-motto"><Mountain size={17} /><p>Not just a trip,<br /><em>it’s a journey within.</em></p></div>
          <a href="mailto:hello@devbhoomitrip.in?subject=Journey%20portal%20help"><CircleHelp size={17} />Help</a>
          <Link to="/" onClick={onClose}><ArrowLeft size={17} />Back to Website<ArrowUpRight className="portal-sidebar-external" size={14} /></Link>
          <span className="portal-demo-tag"><i /> DEMO EXPERIENCE</span>
        </div>
      </aside>
    </>
  )
}
