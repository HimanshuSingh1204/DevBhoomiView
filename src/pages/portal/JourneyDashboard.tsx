import { touristProfile } from '../../data/touristJourney'
import { DigitalGiftPreview } from '../../components/portal/DigitalGiftPreview'
import { JourneyHighlights } from '../../components/portal/JourneyHighlights'
import { JourneyHero } from '../../components/portal/JourneyHero'
import { JourneyMapPreview } from '../../components/portal/JourneyMapPreview'
import { JourneyProgress } from '../../components/portal/JourneyProgress'
import { PassportPreview } from '../../components/portal/PassportPreview'
import { QuickActions } from '../../components/portal/QuickActions'
import { StoryPreview } from '../../components/portal/StoryPreview'
import { TodaysJourney } from '../../components/portal/TodaysJourney'
import { UpcomingExperience } from '../../components/portal/UpcomingExperience'

export function JourneyDashboard() {
  return (
    <div className="portal-dashboard">
      <JourneyHero />
      <section className="portal-overview-row" aria-label="Example trip metrics and digital passport">
        <div className="portal-overview-metrics"><div className="portal-overview-heading"><span className="portal-eyebrow">YOUR TRIP AT A GLANCE</span><span className="portal-demo-chip"><i /> DEMO DATA · {touristProfile.name}</span></div><JourneyProgress /></div>
        <PassportPreview />
      </section>
      <section className="portal-main-grid" aria-label="Trip itinerary, map and media">
        <TodaysJourney />
        <JourneyMapPreview />
        <UpcomingExperience />
        <JourneyHighlights />
        <StoryPreview />
        <DigitalGiftPreview />
      </section>
      <QuickActions />
      <p className="portal-dashboard-disclaimer">This frontend portal preview uses mock profile, itinerary, media counts and certificate details. It is not connected to real bookings, GPS, media files, certificates, or accounts.</p>
    </div>
  )
}
