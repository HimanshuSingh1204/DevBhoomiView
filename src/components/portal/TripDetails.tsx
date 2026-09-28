import { ArrowUpRight, BadgeCheck, BedDouble, BookOpen, Camera, Check, CircleHelp, Compass, Coffee, MapPin, Moon, Plane, Route, ShieldCheck, Sun, Utensils, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { responsibleTravelGuidelines, tripAccommodation, tripDayDetails, tripExcludedItems, tripIncludedItems, tripImportantInformation, tripMeals, tripTimelineDays, tripTransport } from '../../data/touristJourney'
import { Image } from '../Image'

type TripDetailsProps = {
  selectedDay: number
}

const mealIcons = { sunrise: Coffee, utensils: Utensils, moon: Moon }
const transportIcons = { plane: Plane, car: Route, route: Compass, flag: MapPin }

export function TripDetails({ selectedDay }: TripDetailsProps) {
  const selected = tripTimelineDays.find(({ day }) => day === selectedDay)
  const day = selected ?? tripTimelineDays[2]
  const details = tripDayDetails.find(({ day: detailDay }) => detailDay === day.day) ?? tripDayDetails[2]

  return (
    <section className="portal-trip-details" aria-labelledby="portal-trip-details-title">
      <div className="portal-trip-details-primary">
        <section className="portal-trip-selected-day">
          <div className="portal-trip-section-heading"><div><span className="portal-eyebrow">SELECTED DAY · DAY {String(day.day).padStart(2, '0')}</span><h2 id="portal-trip-details-title">{day.title}</h2></div><span className={`portal-itinerary-status is-${day.status.toLowerCase()}`}>{day.status}</span></div>
          <Image id={day.image} alt={`Illustrative Himalayan scenery for ${day.title}`} className="portal-trip-selected-image" />
          <div className="portal-trip-selected-copy"><span><MapPin size={14} />{day.destination ?? 'Uttarakhand'} <i /> {day.category}</span><p>{details.description}</p></div>
          <div className="portal-trip-schedule">
            {details.schedule.map((item) => <div className="portal-trip-schedule-item" key={item.time}><span>{item.time}</span><div><strong>{item.title}</strong><p>{item.detail}</p></div></div>)}
          </div>
        </section>
        <section className="portal-trip-experience-card">
          <span className="portal-trip-detail-icon"><Compass size={20} /></span>
          <span className="portal-eyebrow">EXPERIENCE · DEMO DETAILS</span>
          <h3>{day.title}</h3>
          <div className="portal-trip-experience-facts"><span><small>Category</small><strong>{day.category}</strong></span><span><small>Duration</small><strong>{details.duration}</strong></span><span><small>Difficulty</small><strong>{day.category === 'Adventure' ? 'Moderate' : 'Easygoing'}</strong></span></div>
          <p>Sample activity information only. Conditions and activity details may vary; follow local guidance.</p>
        </section>
      </div>

      <div className="portal-trip-detail-grid">
        <section className="portal-trip-info-card">
          <div className="portal-trip-section-heading"><div><span className="portal-eyebrow">DEMO STAY DETAILS</span><h2>Accommodation</h2></div><BedDouble size={20} /></div>
          <h3>{tripAccommodation.name}</h3>
          <div className="portal-trip-info-lines"><span><small>Check-in</small><strong>{tripAccommodation.checkIn}</strong></span><span><small>Check-out</small><strong>{tripAccommodation.checkOut}</strong></span><span><small>Guests</small><strong>{tripAccommodation.guests}</strong></span></div>
          <p className="portal-trip-data-note">Generic stay type only · no property or availability is represented.</p>
        </section>

        <section className="portal-trip-info-card">
          <div className="portal-trip-section-heading"><div><span className="portal-eyebrow">SAMPLE MEAL IDEAS</span><h2>Food Along The Journey</h2></div><Utensils size={20} /></div>
          <div className="portal-trip-meal-list">{tripMeals.map(({ name, description, icon }) => {
            const Icon = mealIcons[icon]
            return <article key={name}><span><Icon size={17} /></span><div><strong>{name}</strong><p>{description}</p></div></article>
          })}</div>
        </section>

        <section className="portal-trip-info-card">
          <div className="portal-trip-section-heading"><div><span className="portal-eyebrow">ILLUSTRATIVE ROUTE</span><h2>Journey Transport</h2></div><Route size={20} /></div>
          <div className="portal-trip-transport">{tripTransport.map(({ title, detail, icon }, index) => {
            const Icon = transportIcons[icon]
            return <div className="portal-trip-transport-stop" key={title}><span className="portal-trip-transport-icon"><Icon size={17} /></span>{index < tripTransport.length - 1 && <i /> }<strong>{title}</strong><small>{detail}</small></div>
          })}</div>
          <p className="portal-trip-data-note">No vehicle, operator or pickup details are provided.</p>
        </section>

        <section className="portal-trip-info-card">
          <div className="portal-trip-section-heading"><div><span className="portal-eyebrow">GENERAL OVERVIEW</span><h2>What’s Included</h2></div><Check size={20} /></div>
          <ul className="portal-trip-check-list">{tripIncludedItems.map((item) => <li key={item}><Check size={15} />{item}</li>)}</ul>
        </section>

        <section className="portal-trip-info-card">
          <div className="portal-trip-section-heading"><div><span className="portal-eyebrow">GENERAL OVERVIEW</span><h2>Not Included</h2></div><X size={20} /></div>
          <ul className="portal-trip-check-list is-excluded">{tripExcludedItems.map((item) => <li key={item}><X size={15} />{item}</li>)}</ul>
        </section>

        <section className="portal-trip-info-card portal-trip-before-card">
          <div className="portal-trip-section-heading"><div><span className="portal-eyebrow">A FEW HELPFUL NOTES</span><h2>Before You Begin</h2></div><ShieldCheck size={20} /></div>
          <ul className="portal-trip-info-list">{tripImportantInformation.map((item) => <li key={item}>{item}</li>)}</ul>
        </section>
      </div>

      <section className="portal-trip-responsible">
        <span className="portal-trip-detail-icon"><Sun size={20} /></span>
        <div><span className="portal-eyebrow portal-eyebrow--gold">TRAVEL WITH RESPECT</span><h2>Leave the mountains as beautiful as you found them.</h2></div>
        <ul>{responsibleTravelGuidelines.map((item) => <li key={item}>{item}</li>)}</ul>
      </section>

      <section className="portal-trip-actions">
        <div className="portal-trip-section-heading"><div><span className="portal-eyebrow">KEEP EXPLORING</span><h2>Your Trip, Your Way</h2></div><CircleHelp size={20} /></div>
        <div className="portal-trip-action-grid">
          <Link to="/my-journey/map"><span className="portal-trip-action-icon"><MapPin size={18} /></span><span><strong>View Journey Map</strong><small>Explore the schematic route</small></span><ArrowUpRight size={15} /></Link>
          <Link to="/my-journey/passport"><span className="portal-trip-action-icon"><BadgeCheck size={18} /></span><span><strong>Open Himalayan Passport</strong><small>View your demo keepsake</small></span><ArrowUpRight size={15} /></Link>
          <Link to="/my-journey/media"><span className="portal-trip-action-icon"><Camera size={18} /></span><span><strong>View Photos & Videos</strong><small>Browse sample media</small></span><ArrowUpRight size={15} /></Link>
          <Link to="/my-journey/story"><span className="portal-trip-action-icon"><BookOpen size={18} /></span><span><strong>View Trip Story</strong><small>Open the story preview</small></span><ArrowUpRight size={15} /></Link>
        </div>
        <p className="portal-trip-data-note">All trip details on this page are mock data for a visual portal preview.</p>
      </section>
    </section>
  )
}
