import { useState } from 'react'
import { JourneyMapCanvas } from '../../components/portal/map/JourneyMapCanvas'
import { JourneyMapHero } from '../../components/portal/map/JourneyMapHero'
import { JourneyMapTimeline } from '../../components/portal/map/JourneyMapTimeline'
import { JourneyStopsExperiences } from '../../components/portal/map/JourneyStopsExperiences'
import { MapDestinationPanel } from '../../components/portal/map/MapDestinationPanel'
import { ResponsibleTravelCard } from '../../components/portal/map/ResponsibleTravelCard'
import { journeyMapSummary, journeyMapTimeline, type JourneyMapCategory, type JourneyStop } from '../../data/journeyMap'

export function JourneyMapPage() {
  const [selectedStopId, setSelectedStopId] = useState(journeyMapSummary.currentStopId)
  const [selectedDay, setSelectedDay] = useState(journeyMapSummary.currentDay)
  const [activeCategory, setActiveCategory] = useState<'All' | JourneyMapCategory>('All')

  const selectStop = (stop: JourneyStop) => {
    setSelectedStopId(stop.id)
    const matchingTimelineDay = journeyMapTimeline.find(({ day, stopId }) => stopId === stop.id && day === journeyMapSummary.currentDay)
      ?? journeyMapTimeline.find(({ day, stopId }) => stopId === stop.id && day > journeyMapSummary.currentDay)
      ?? journeyMapTimeline.find(({ stopId }) => stopId === stop.id)
    if (matchingTimelineDay) setSelectedDay(matchingTimelineDay.day)
  }

  const selectDay = (day: number, stopId: string) => {
    setSelectedDay(day)
    setSelectedStopId(stopId)
  }

  const viewJourney = () => document.getElementById('portal-map-full-journey')?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  return (
    <div className="portal-journey-map-page">
      <JourneyMapHero />
      <section className="portal-map-workspace" aria-label="Journey map and selected destination">
        <JourneyMapCanvas selectedStopId={selectedStopId} activeCategory={activeCategory} onSelectStop={selectStop} onViewJourney={viewJourney} />
        <MapDestinationPanel selectedStopId={selectedStopId} selectedDay={selectedDay} />
      </section>
      <JourneyStopsExperiences activeCategory={activeCategory} selectedStopId={selectedStopId} onSelectCategory={setActiveCategory} onSelectStop={selectStop} />
      <JourneyMapTimeline selectedDay={selectedDay} onSelectDay={selectDay} />
      <ResponsibleTravelCard />
      <p className="portal-dashboard-disclaimer">This map is a static journey prototype. It does not use GPS, exact geographic coordinates, live tracking, or real booking data.</p>
    </div>
  )
}
