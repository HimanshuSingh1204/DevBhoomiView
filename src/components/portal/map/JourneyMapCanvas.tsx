import { useState } from 'react'
import { ArrowDown, Camera, Compass, Leaf, LocateFixed, MapPin, Minus, Mountain, Plus, RotateCcw, Sparkles, Utensils, BedDouble } from 'lucide-react'
import { journeyMapExperiences, journeyMapSummary, journeyStops, type JourneyStop } from '../../../data/journeyMap'

type JourneyMapCanvasProps = {
  selectedStopId: string
  activeCategory: string
  onSelectStop: (stop: JourneyStop) => void
  onViewJourney: () => void
}

const categoryLegend = [
  { title: 'Adventure', Icon: Mountain },
  { title: 'Food', Icon: Utensils },
  { title: 'Culture', Icon: Sparkles },
  { title: 'Stay', Icon: BedDouble },
  { title: 'Nature', Icon: Leaf },
  { title: 'Photography', Icon: Camera },
]

export function JourneyMapCanvas({ selectedStopId, activeCategory, onSelectStop, onViewJourney }: JourneyMapCanvasProps) {
  const [zoom, setZoom] = useState(1)
  const selected = journeyStops.find((stop) => stop.id === selectedStopId) ?? journeyStops[0]
  const increaseZoom = () => setZoom((value) => Math.min(1.25, Number((value + .1).toFixed(2))))
  const decreaseZoom = () => setZoom((value) => Math.max(.85, Number((value - .1).toFixed(2))))

  return (
    <section className="portal-journey-map-card" aria-label="Illustrative Uttarakhand journey map">
      <div className="portal-map-canvas">
        <div className="portal-map-terrain" aria-hidden="true">
          <svg className="portal-map-landscape" viewBox="0 0 1200 700" preserveAspectRatio="none">
            <defs>
              <linearGradient id="mapLand" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#f5f0df" /><stop offset="1" stopColor="#e7eadb" /></linearGradient>
              <linearGradient id="mapRiver" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#a9c2b6" /><stop offset="1" stopColor="#c3d0bf" /></linearGradient>
              <pattern id="mapGrain" width="35" height="35" patternUnits="userSpaceOnUse"><circle cx="4" cy="8" r="1" fill="#9eac91" opacity=".18" /><circle cx="22" cy="26" r=".8" fill="#9eac91" opacity=".14" /></pattern>
            </defs>
            <rect width="1200" height="700" fill="url(#mapLand)" />
            <rect width="1200" height="700" fill="url(#mapGrain)" />
            <path d="M0 0h1200v151l-82 23-72-44-77 51-77-56-91 55-89-65-86 64-91-66-93 61-73-50-94 36-73-54-102 42Z" fill="#899b7e" opacity=".39" />
            <path d="m0 150 72-44 73 50 94-36 73 54 93-61 91 66 86-64 89 65 91-55 77 56 77-51 72 44 82-23v95l-83 42-86-26-102 73-95-38-97 62-83-28-91 54-100-40-83 37-72-50-82 23-70-56Z" fill="#c4cbb0" opacity=".44" />
            <path d="M0 411c100-53 161-43 245 8s143 39 225-4 123-27 192 19 141 39 220-20 168-76 318-9v295H0Z" fill="#66816b" opacity=".21" />
            <path d="M-20 576c123-109 231-15 312-87s156-102 258-32 147 82 239 13 154-57 232-8 147 26 211-40" fill="none" stroke="#8caa91" strokeWidth="39" strokeLinecap="round" opacity=".18" />
            <path d="M-20 576c123-109 231-15 312-87s156-102 258-32 147 82 239 13 154-57 232-8 147 26 211-40" fill="none" stroke="url(#mapRiver)" strokeWidth="13" strokeLinecap="round" opacity=".8" />
            <path d="M0 295c118-68 206-28 281 4s135 24 209-33 130-63 201-5 155 75 240 23 168-70 269-25M36 660c82-59 159-64 237-31m302-252c80-48 149-44 216-10m119-39c71-33 143-28 232 16" fill="none" stroke="#82977c" strokeWidth="2" opacity=".25" />
            <path d="m92 217 30-43 28 43Zm81-28 24-34 22 34Zm408-72 47-70 46 70Zm130 40 37-53 36 53Zm208-59 43-62 44 62Z" fill="#74866f" opacity=".32" />
            <path d="M110 532c23-13 43-13 65 0m70 38c22-15 46-15 68 0m477-119c19-14 40-14 59 0m-72 37c18-12 39-12 58 0m147 4c23-15 45-15 68 0" fill="none" stroke="#506f58" strokeWidth="7" strokeLinecap="round" opacity=".3" />
          </svg>
        </div>
        <div className="portal-map-land-label portal-map-land-label--north">THE HIMALAYAN RANGE</div>
        <div className="portal-map-land-label portal-map-land-label--south">UTTARAKHAND · SCHEMATIC VIEW</div>
        <div className="portal-map-map-watermark"><Mountain size={15} /> DEV BHOOMI TRIP <i /> JOURNEY PREVIEW</div>

        <div className="portal-map-route-and-markers" style={{ transform: `scale(${zoom})` }}>
        <svg className="portal-map-journey-path" viewBox="0 0 1000 600" preserveAspectRatio="none" aria-hidden="true">
          <path className="portal-map-route-shadow" d="M170 180 C225 225 300 340 380 350 S490 208 570 205 S700 214 780 192 S825 320 820 432" />
          <path className="portal-map-route-line" d="M170 180 C225 225 300 340 380 350 S490 208 570 205 S700 214 780 192 S825 320 820 432" />
        </svg>

        {journeyStops.map((stop, index) => {
          const isSelected = selectedStopId === stop.id
          const hasMatchingExperience = journeyMapExperiences.some((experience) => experience.stopId === stop.id && (activeCategory === 'All' || experience.category === activeCategory))
          const isDimmed = !hasMatchingExperience
          return <button
            key={stop.id}
            type="button"
            className={`portal-map-stop-marker is-${stop.status.toLowerCase().replace(' ', '-')} ${stop.id === journeyMapSummary.nextStopId ? 'is-next-stop' : ''} ${isSelected ? 'is-selected' : ''} ${isDimmed ? 'is-dimmed' : ''}`}
            style={{ left: `${stop.illustrationPosition.x}%`, top: `${stop.illustrationPosition.y}%` }}
            aria-label={`Select ${stop.name}, ${stop.dayLabel}, ${stop.status}`}
            aria-pressed={isSelected}
            onClick={() => onSelectStop(stop)}
          >
            <span className="portal-map-stop-pin"><MapPin size={16} /><i>{String(index + 1).padStart(2, '0')}</i></span>
            <span className="portal-map-stop-label">{stop.name}<small>{stop.dayLabel}</small></span>
          </button>
        })}
          </div>

        <div className="portal-map-current-indicator">
          <span><LocateFixed size={14} /> YOU ARE HERE · DEMO</span>
          <strong>Day {journeyMapSummary.currentDay} · Nainital</strong>
          <small>Tiffin Top Trek <i /> Next: Chopta</small>
        </div>
        <div className="portal-map-controls" aria-label="Schematic map controls">
          <button type="button" onClick={increaseZoom} aria-label="Zoom in" disabled={zoom >= 1.25}><Plus size={17} /></button>
          <button type="button" onClick={decreaseZoom} aria-label="Zoom out" disabled={zoom <= .85}><Minus size={17} /></button>
          <button type="button" onClick={() => setZoom(1)} aria-label="Reset map view"><RotateCcw size={15} /></button>
        </div>
        <div className="portal-map-zoom-label" aria-live="polite">Illustration scale {Math.round(zoom * 100)}%</div>
        <button className="portal-map-view-journey" type="button" onClick={onViewJourney}><span>View Full Journey</span><ArrowDown size={15} /></button>

        <div className="portal-map-legend-glass">
          <strong>Journey Legend</strong>
          <span><i className="is-destination"><MapPin size={11} /></i>Destination</span>
          <span><i className="is-current"><LocateFixed size={11} /></i>Current stop</span>
          <span><i className="is-next"><ArrowDown size={11} /></i>Next stop</span>
          <span><i className="is-completed"><Compass size={11} /></i>Completed</span>
          <span className="portal-map-legend-divider" />
          {categoryLegend.map(({ title, Icon }) => <span className="portal-map-category-key" key={title}><b><Icon size={11} /></b>{title}</span>)}
        </div>
        <span className="portal-map-disclaimer">Illustrative map only · not to scale · no exact coordinates or GPS</span>
      </div>
      <div className="portal-map-canvas-footer">
        <span><i /> Connected sample route</span>
        <span>Selected stop: <strong>{selected.name}</strong></span>
        <span>Locations and route are demo data</span>
      </div>
    </section>
  )
}
