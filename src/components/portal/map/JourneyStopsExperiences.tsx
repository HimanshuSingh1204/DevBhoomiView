import { ArrowUpRight, Compass, MapPin, Mountain } from 'lucide-react'
import { journeyMapCategories, journeyMapExperiences, journeyStops, type JourneyMapCategory, type JourneyStop } from '../../../data/journeyMap'
import { Image } from '../../Image'

type JourneyStopsExperiencesProps = {
  activeCategory: 'All' | JourneyMapCategory
  selectedStopId: string
  onSelectCategory: (category: 'All' | JourneyMapCategory) => void
  onSelectStop: (stop: JourneyStop) => void
}

export function JourneyStopsExperiences({ activeCategory, selectedStopId, onSelectCategory, onSelectStop }: JourneyStopsExperiencesProps) {
  const experiences = activeCategory === 'All' ? journeyMapExperiences : journeyMapExperiences.filter(({ category }) => category === activeCategory)

  return (
    <div className="portal-map-stops-experiences">
      <section className="portal-map-stops-section" aria-labelledby="portal-map-stops-title">
        <div className="portal-map-section-heading"><div><span className="portal-eyebrow">FIVE HIGHLIGHTS · DEMO DATA</span><h2 id="portal-map-stops-title">Your Journey Stops</h2></div><span className="portal-map-stop-count"><MapPin size={13} />5 stops</span></div>
        <div className="portal-map-stop-cards">
          {journeyStops.map((stop, index) => {
            const isDimmed = activeCategory !== 'All' && !journeyMapExperiences.some((experience) => experience.stopId === stop.id && experience.category === activeCategory)
            return <button type="button" key={stop.id} className={`portal-map-stop-card${selectedStopId === stop.id ? ' is-selected' : ''}${isDimmed ? ' is-dimmed' : ''}`} aria-pressed={selectedStopId === stop.id} onClick={() => onSelectStop(stop)}>
            <span className="portal-map-stop-card-image"><Image id={stop.image} alt={`Illustrative view for ${stop.name}`} /><i>{String(index + 1).padStart(2, '0')}</i><span className={`portal-map-stop-card-status is-${stop.status.toLowerCase().replace(' ', '-')}`}>{stop.status}</span></span>
            <span className="portal-map-stop-card-copy"><small>{stop.dayLabel} · {stop.category}</small><strong>{stop.name}</strong><span>{stop.experience}</span><i>View Details <ArrowUpRight size={13} /></i></span>
          </button>
          })}
        </div>
      </section>

      <section className="portal-map-experiences-section" aria-labelledby="portal-map-experiences-title">
        <div className="portal-map-section-heading"><div><span className="portal-eyebrow">EXPERIENCES ALONG THE ROUTE</span><h2 id="portal-map-experiences-title">Explore by Experience</h2></div><Compass size={19} /></div>
        <div className="portal-map-experience-filters" role="group" aria-label="Filter experiences by category">
          {journeyMapCategories.map((category) => <button type="button" key={category} className={activeCategory === category ? 'is-active' : ''} aria-pressed={activeCategory === category} onClick={() => onSelectCategory(category)}>{category}</button>)}
        </div>
        <div className="portal-map-experience-results" aria-live="polite">
          {experiences.map((experience) => {
            const stop = journeyStops.find(({ id }) => id === experience.stopId)
            if (!stop) return null
            return <button type="button" key={`${experience.stopId}-${experience.title}`} onClick={() => onSelectStop(stop)} className={selectedStopId === stop.id ? 'is-selected' : ''}>
              <span><Mountain size={15} /></span><span><strong>{experience.title}</strong><small>{stop.name} · {experience.category}</small></span><ArrowUpRight size={14} />
            </button>
          })}
          {experiences.length === 0 && <p>No sample experiences are listed for this category yet.</p>}
        </div>
      </section>
    </div>
  )
}
