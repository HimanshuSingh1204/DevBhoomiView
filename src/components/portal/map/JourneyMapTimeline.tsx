import { journeyMapTimeline } from '../../../data/journeyMap'

type JourneyMapTimelineProps = {
  selectedDay: number
  onSelectDay: (day: number, stopId: string) => void
}

export function JourneyMapTimeline({ selectedDay, onSelectDay }: JourneyMapTimelineProps) {
  return (
    <section className="portal-map-timeline-section" id="portal-map-full-journey" aria-labelledby="portal-map-timeline-title">
      <div className="portal-map-section-heading"><div><span className="portal-eyebrow">TEN DAYS · ONE SAMPLE ROUTE</span><h2 id="portal-map-timeline-title">Journey Timeline</h2></div><span className="portal-demo-chip"><i />DEMO ITINERARY</span></div>
      <div className="portal-map-timeline">
        {journeyMapTimeline.map(({ day, title, destination, stopId, status }) => <button type="button" key={day} className={`portal-map-timeline-day is-${status.toLowerCase()}${selectedDay === day ? ' is-selected' : ''}`} aria-pressed={selectedDay === day} onClick={() => onSelectDay(day, stopId)}>
          <span className="portal-map-timeline-node">{String(day).padStart(2, '0')}</span>
          <small>DAY {day}</small><strong>{title}</strong><span>{destination}</span><i>{status}</i>
        </button>)}
      </div>
      <p className="portal-map-timeline-note">Selecting a day highlights its corresponding sample destination on the map.</p>
    </section>
  )
}
