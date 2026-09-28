import { useState } from 'react'
import { Bell, ChevronDown, Menu, Mountain, X } from 'lucide-react'
import { demoTrip, touristProfile } from '../../data/touristJourney'

type PortalHeaderProps = {
  onMenuClick: () => void
  menuOpen: boolean
  title: string
}

export function PortalHeader({ onMenuClick, menuOpen, title }: PortalHeaderProps) {
  const [showNotifications, setShowNotifications] = useState(false)
  const [showProfile, setShowProfile] = useState(false)

  return (
    <header className="portal-header">
      <div className="portal-header-left">
        <button className="portal-menu-trigger" type="button" aria-label={menuOpen ? 'Close journey menu' : 'Open journey menu'} aria-expanded={menuOpen} aria-controls="portal-navigation-drawer" onClick={onMenuClick}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
        <span className="portal-header-mark" aria-hidden="true"><Mountain size={17} /></span>
        <div><span className="portal-header-eyebrow">YOUR TRAVEL JOURNAL</span><h1>{title}</h1></div>
      </div>
      <div className="portal-header-actions">
        <span className="portal-header-trip"><i />{demoTrip.title}</span>
        <div className="portal-header-popover-wrap">
          <button className={`portal-notification-button${showNotifications ? ' is-active' : ''}`} type="button" aria-label="Notifications (demo)" aria-expanded={showNotifications} onClick={() => { setShowNotifications((current) => !current); setShowProfile(false) }}><Bell size={18} /><i /></button>
          {showNotifications && <div className="portal-popover portal-notification-popover" role="status"><span className="eyebrow">JOURNEY NOTES</span><strong>All caught up</strong><p>Trip updates and reminders will appear here. This is a demo portal.</p><button type="button" onClick={() => setShowNotifications(false)} aria-label="Close notifications"><X size={15} /></button></div>}
        </div>
        <div className="portal-header-popover-wrap">
          <button className="portal-profile-button" type="button" aria-expanded={showProfile} onClick={() => { setShowProfile((current) => !current); setShowNotifications(false) }}>
            <span className="portal-avatar portal-avatar--header">{touristProfile.initials}</span><span className="portal-profile-name"><strong>{touristProfile.name}</strong><small>{touristProfile.accountLabel}</small></span><ChevronDown size={15} />
          </button>
          {showProfile && <div className="portal-popover portal-profile-popover"><span className="portal-avatar">{touristProfile.initials}</span><strong>{touristProfile.name}</strong><p>Sample profile · Not a real traveller account</p><button type="button" onClick={() => setShowProfile(false)}>Close</button></div>}
        </div>
      </div>
    </header>
  )
}
