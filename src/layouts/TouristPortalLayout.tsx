import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { PortalHeader } from '../components/portal/PortalHeader'
import { PortalSidebar } from '../components/portal/PortalSidebar'

const pageTitles: Record<string, string> = {
  '': 'My Himalayan Journey',
  trip: 'My Trip',
  map: 'Interactive Map',
  passport: 'My Passport',
  media: 'Photos & Videos',
  story: 'Trip Story',
  certificate: 'Certificate',
  settings: 'Settings',
}

export function TouristPortalLayout() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const location = useLocation()
  const section = location.pathname.split('/').filter(Boolean)[1] ?? ''
  const pageTitle = pageTitles[section] ?? 'My Himalayan Journey'

  useEffect(() => {
    setDrawerOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!drawerOpen) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setDrawerOpen(false)
    }
    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [drawerOpen])

  useEffect(() => {
    document.body.classList.add('tourist-portal-active')
    return () => document.body.classList.remove('tourist-portal-active')
  }, [])

  return (
    <div className="tourist-portal">
      <PortalSidebar open={drawerOpen} onClose={() => setDrawerOpen(false)} />
      <div className="portal-main-shell">
        <PortalHeader title={pageTitle} menuOpen={drawerOpen} onMenuClick={() => setDrawerOpen((open) => !open)} />
        <main className="portal-content"><Outlet /></main>
        <footer className="portal-footer"><span>DEV BHOOMI TRIP <i>·</i> LIVE THE HIMALAYAN EXPERIENCE</span><span>Traveller portal preview <b>DEMO DATA</b></span></footer>
      </div>
    </div>
  )
}
