import { useState } from 'react'
import { TripDetails } from '../../components/portal/TripDetails'
import { TripHero } from '../../components/portal/TripHero'
import { TripSummaryProgress } from '../../components/portal/TripSummaryProgress'
import { TripTimeline } from '../../components/portal/TripTimeline'

export function TripPage() {
  const [selectedDay, setSelectedDay] = useState(3)

  return (
    <div className="portal-trip-page">
      <TripHero />
      <TripSummaryProgress />
      <TripTimeline selectedDay={selectedDay} onSelectDay={setSelectedDay} />
      <TripDetails selectedDay={selectedDay} />
      <p className="portal-dashboard-disclaimer">This detailed itinerary is a frontend demo only. It is not connected to real bookings, accommodation, transport, activities, or traveller accounts.</p>
    </div>
  )
}
