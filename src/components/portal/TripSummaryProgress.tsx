import { CalendarDays, Camera, Compass, MapPin, UsersRound } from 'lucide-react'
import { tripOverview } from '../../data/touristJourney'

const summaryMetrics = [
  { value: tripOverview.durationDays, label: 'Days', detail: 'Trip duration', Icon: CalendarDays },
  { value: tripOverview.experienceCount, label: 'Experiences', detail: 'Along the route', Icon: Compass },
  { value: tripOverview.destinationCount, label: 'Destinations', detail: 'Planned stops', Icon: MapPin },
  { value: tripOverview.travellers, label: 'Travellers', detail: 'Demo party size', Icon: UsersRound },
  { value: tripOverview.photoCount, label: 'Photos', detail: 'Mock count · no files', Icon: Camera },
]

export function TripSummaryProgress() {
  const progress = Math.round((tripOverview.currentDay / tripOverview.durationDays) * 100)

  return (
    <section className="portal-trip-overview" aria-label="Trip summary and progress">
      <div className="portal-trip-summary">
        <div className="portal-overview-heading"><span className="portal-eyebrow">TRIP SUMMARY</span><span className="portal-demo-chip"><i /> DEMO DATA</span></div>
        <div className="portal-metric-grid">
          {summaryMetrics.map(({ value, label, detail, Icon }) => (
            <article className="portal-metric-card" key={label}>
              <span className="portal-metric-icon"><Icon size={17} /></span>
              <strong className="portal-metric-value">{value}</strong>
              <span className="portal-metric-label">{label}</span>
              <span className="portal-metric-detail">{detail}</span>
            </article>
          ))}
        </div>
      </div>
      <section className="portal-trip-progress" aria-labelledby="portal-trip-progress-title">
        <div className="portal-card-heading"><div><span className="portal-eyebrow">A JOURNEY TAKING SHAPE</span><h2 id="portal-trip-progress-title">Your Journey Progress</h2></div><strong className="portal-trip-progress-percent">{progress}% <small>Complete</small></strong></div>
        <div className="portal-trip-progress-day"><strong>Day {tripOverview.currentDay} <i>of</i> {tripOverview.durationDays}</strong><span>{tripOverview.status}</span></div>
        <div className="portal-trip-progress-track" role="progressbar" aria-label="Example journey progress" aria-valuemin={0} aria-valuemax={tripOverview.durationDays} aria-valuenow={tripOverview.currentDay}><i style={{ width: `${progress}%` }} /></div>
        <div className="portal-trip-progress-stats">
          <span><small>Completed</small><strong>{tripOverview.completedDays} Days</strong></span>
          <span><small>Current</small><strong>{tripOverview.currentExperience}</strong></span>
          <span><small>Next</small><strong>{tripOverview.nextExperience}</strong></span>
          <span><small>Remaining</small><strong>{tripOverview.remainingDays} Days</strong></span>
        </div>
      </section>
    </section>
  )
}
