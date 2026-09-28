import { motion } from 'framer-motion'
import { ArrowRight, CalendarDays, Camera, Check, ChevronRight, Heart, Images, MapPin, Mountain, Play, Sparkles, Video } from 'lucide-react'
import { Link } from 'react-router-dom'
import { journeyDayMedia, mediaAlbums, mediaDestinations, tripMediaSummary, type MediaAlbum, type MediaCategory, type MediaItem } from '../../../data/tripMedia'
import { Image } from '../../Image'

const metricIcons = { photos: Camera, videos: Video, albums: Images, days: CalendarDays, destinations: MapPin, adventures: Mountain }

export function MediaHero() {
  return (
    <motion.section className="portal-media-hero" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .4 }}>
      <Image id="photo-1464822759023-fed622ff2c3b" alt="Illustrative Himalayan peaks above a mountain valley" />
      <span className="portal-media-hero__shade" />
      <div className="portal-media-hero__copy"><span className="portal-eyebrow portal-eyebrow--gold"><Camera size={14} /> MY MEMORIES</span><h2>Your Himalayan<br /><em>Memories</em></h2><p>The places you visited, the people you met and the moments you collected — all in one place.</p><div className="portal-media-hero__meta"><span><Camera size={14} />245 Photos</span><i /><span><Video size={14} />12 Videos</span><i /><span><CalendarDays size={14} />10 Days</span></div></div>
      <div className="portal-media-hero__collection"><span>MEMORY COLLECTION</span><strong>245 moments<br />collected</strong><i><Sparkles size={15} /></i></div>
      <small>DEMO JOURNEY · ILLUSTRATIVE MEDIA</small>
    </motion.section>
  )
}

export function MediaStats() {
  return <section className="portal-media-stats" aria-label="Demo memory collection statistics">{tripMediaSummary.map(({ value, label, icon }, index) => { const Icon = metricIcons[icon]; return <motion.article className="portal-metric-card" key={label} initial={{ opacity: 0, y: 9 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .28, delay: index * .035 }}><span className="portal-metric-icon"><Icon size={17} /></span><strong className="portal-metric-value">{value}</strong><span className="portal-metric-label">{label}</span><span className="portal-metric-detail">Demo collection</span></motion.article> })}</section>
}

export function FeaturedMemory({ item, onOpen }: { item: MediaItem; onOpen: (id: string) => void }) {
  return <motion.section className="portal-featured-memory" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .35 }}>
    <Image id={item.image} alt={`Illustrative Himalayan scene for ${item.experience}`} /><span className="portal-featured-memory__shade" />
    <div className="portal-featured-memory__copy"><span className="portal-eyebrow portal-eyebrow--gold"><Sparkles size={13} /> FEATURED MEMORY</span><h2>Moments From<br />the Mountains</h2><div><span>DAY {item.day}</span><i /><span>{item.destination.toUpperCase()}</span></div><p>{item.experience}</p><button type="button" className="portal-button portal-button--gold" onClick={() => onOpen(item.id)}>View Memory <ArrowRight size={15} /></button></div>
    <small>Illustrative demo memory · not a verified visit</small>
  </motion.section>
}

type MediaFilterBarProps = {
  category: MediaCategory
  day: string
  destination: string
  album: string
  onCategoryChange: (category: MediaCategory) => void
  onDayChange: (day: string) => void
  onDestinationChange: (destination: string) => void
}

export function MediaFilterBar({ category, day, destination, album, onCategoryChange, onDayChange, onDestinationChange }: MediaFilterBarProps) {
  const categories: MediaCategory[] = ['All', 'Photos', 'Videos', 'Favourites']
  return <section className="portal-media-filterbar" aria-label="Filter demo memories">
    <div className="portal-media-filterbar__tabs" role="group" aria-label="Media type">{categories.map((item) => <button key={item} type="button" className={category === item ? 'is-active' : ''} aria-pressed={category === item} onClick={() => onCategoryChange(item)}>{item}</button>)}</div>
    <label><span>DAY</span><select value={day} onChange={(event) => onDayChange(event.target.value)}><option value="">All Days</option>{journeyDayMedia.map(({ day: dayNumber }) => <option key={dayNumber} value={dayNumber}>Day {dayNumber}</option>)}</select></label>
    <label><span>DESTINATION</span><select value={destination} onChange={(event) => onDestinationChange(event.target.value)}><option value="">All Destinations</option>{mediaDestinations.map((place) => <option key={place}>{place}</option>)}</select></label>
    <span className="portal-media-filterbar__demo"><i /> DEMO DATA{album && <b> · ALBUM FILTER</b>}</span>
  </section>
}

export function PhotoCard({ item, index, onOpen, onToggleFavourite }: { item: MediaItem; index: number; onOpen: (id: string) => void; onToggleFavourite: (id: string) => void }) {
  return <motion.article className={`portal-photo-card portal-photo-card--${index % 4}`} layout initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: .97 }} transition={{ duration: .22 }}>
    <button type="button" className="portal-photo-card__image" onClick={() => onOpen(item.id)} aria-label={`Open ${item.experience}, day ${item.day}, ${item.destination}`}>
      <Image id={item.thumbnail} alt={`Illustrative ${item.experience} memory in ${item.destination}`} /><span className="portal-photo-card__overlay" /><span className="portal-photo-card__day">DAY {item.day}</span><span className="portal-photo-card__zoom"><Images size={17} /> View memory</span>
    </button>
    <button type="button" className={`portal-media-favourite ${item.isFavourite ? 'is-favourite' : ''}`} aria-label={item.isFavourite ? `Remove ${item.title} from favourites` : `Add ${item.title} to favourites`} aria-pressed={item.isFavourite} onClick={() => onToggleFavourite(item.id)}><Heart size={17} fill={item.isFavourite ? 'currentColor' : 'none'} /></button>
    <div className="portal-photo-card__copy"><span><MapPin size={12} />{item.destination.toUpperCase()}</span><h3>{item.experience}</h3><p>{item.caption}</p><small>DEMO MEMORY</small></div>
  </motion.article>
}

export function PhotoGallery({ items, onOpen, onToggleFavourite }: { items: MediaItem[]; onOpen: (id: string) => void; onToggleFavourite: (id: string) => void }) {
  return <div className="portal-photo-grid">{items.map((item, index) => <PhotoCard key={item.id} item={item} index={index} onOpen={onOpen} onToggleFavourite={onToggleFavourite} />)}</div>
}

export function VideoCard({ item, index, onOpen, onToggleFavourite }: { item: MediaItem; index: number; onOpen: (id: string) => void; onToggleFavourite: (id: string) => void }) {
  return <motion.article className="portal-video-card" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .22, delay: index * .035 }}>
    <button type="button" className="portal-video-card__image" onClick={() => onOpen(item.id)} aria-label={`Play preview: ${item.title}, day ${item.day}, ${item.destination}`}><Image id={item.thumbnail} alt={`Illustrative video preview for ${item.title}`} /><i><Play size={18} fill="currentColor" /></i><small>{item.duration}</small></button>
    <button type="button" className={`portal-media-favourite portal-video-card__favourite ${item.isFavourite ? 'is-favourite' : ''}`} aria-label={item.isFavourite ? `Remove ${item.title} from favourites` : `Add ${item.title} to favourites`} aria-pressed={item.isFavourite} onClick={() => onToggleFavourite(item.id)}><Heart size={16} fill={item.isFavourite ? 'currentColor' : 'none'} /></button>
    <button type="button" className="portal-video-card__copy" onClick={() => onOpen(item.id)}><span>DAY {item.day} <i /> {item.destination.toUpperCase()}</span><strong>{item.title}</strong><small>{item.experience}</small></button>
  </motion.article>
}

export function MediaVideoGallery({ items, onOpen, onToggleFavourite }: { items: MediaItem[]; onOpen: (id: string) => void; onToggleFavourite: (id: string) => void }) {
  return <div className="portal-video-grid portal-video-grid--gallery">{items.map((item, index) => <VideoCard key={item.id} item={item} index={index} onOpen={onOpen} onToggleFavourite={onToggleFavourite} />)}</div>
}

export function VideoSection({ items, onOpen, onToggleFavourite }: { items: MediaItem[]; onOpen: (id: string) => void; onToggleFavourite: (id: string) => void }) {
  return <section className="portal-media-section" aria-labelledby="portal-video-title"><div className="portal-media-section-heading"><div><span className="portal-eyebrow">TRIP VIDEOS · DEMO</span><h2 id="portal-video-title">Moving Memories</h2></div><span className="portal-demo-chip"><i />SAMPLE PREVIEWS</span></div>
    <div className="portal-video-grid">{items.map((item, index) => <VideoCard key={item.id} item={item} index={index} onOpen={onOpen} onToggleFavourite={onToggleFavourite} />)}</div>
    <p className="portal-media-section-note">Video cards use illustrative stills. No video files or playback are connected.</p>
  </section>
}

export function AlbumSection({ activeAlbum, onSelectAlbum }: { activeAlbum: string; onSelectAlbum: (id: string) => void }) {
  return <section className="portal-media-section" aria-labelledby="portal-albums-title"><div className="portal-media-section-heading"><div><span className="portal-eyebrow">YOUR JOURNEY ALBUMS</span><h2 id="portal-albums-title">Chapters of the Journey</h2></div><span className="portal-demo-chip"><i />ILLUSTRATIVE COUNTS</span></div>
    <div className="portal-album-grid">{mediaAlbums.map((album, index) => <AlbumCard key={album.id} album={album} index={index} selected={activeAlbum === album.id} onSelect={() => onSelectAlbum(activeAlbum === album.id ? '' : album.id)} />)}</div>
    {activeAlbum && <button className="portal-media-clear-album" type="button" onClick={() => onSelectAlbum('')}>Clear album filter <Check size={13} /></button>}
  </section>
}

function AlbumCard({ album, index, selected, onSelect }: { album: MediaAlbum; index: number; selected: boolean; onSelect: () => void }) {
  return <motion.button type="button" className={`portal-album-card ${selected ? 'is-selected' : ''}`} aria-pressed={selected} onClick={onSelect} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .25, delay: index * .035 }}><span className="portal-album-card__image"><Image id={album.coverImage} alt={`Illustrative cover for ${album.title}`} /><i><ArrowRight size={17} /></i></span><span className="portal-album-card__copy"><strong>{album.title}</strong><small>{album.photoCount} Photos · {album.videoCount} Videos <i /> DEMO</small><span><MapPin size={12} />{album.destination} <i /> {album.day}</span></span></motion.button>
}

export function JourneyMediaTimeline({ selectedDay, onSelectDay }: { selectedDay: string; onSelectDay: (day: string) => void }) {
  return <section className="portal-media-section portal-day-timeline-section" aria-labelledby="portal-day-timeline-title"><div className="portal-media-section-heading"><div><span className="portal-eyebrow">TEN DAYS, COUNTLESS MOMENTS</span><h2 id="portal-day-timeline-title">Your Journey In Moments</h2></div><span className="portal-demo-chip"><i />DEMO TIMELINE</span></div>
    <div className="portal-day-timeline">{journeyDayMedia.map((item) => <button key={item.day} type="button" className={`portal-day-timeline__item ${selectedDay === String(item.day) ? 'is-selected' : ''}`} aria-pressed={selectedDay === String(item.day)} onClick={() => onSelectDay(selectedDay === String(item.day) ? '' : String(item.day))}><span className="portal-day-timeline__image"><Image id={item.image} alt={`Illustrative scenery for day ${item.day}: ${item.title}`} /><i>DAY {item.day}</i></span><strong>{item.title}</strong><span>{item.mediaCount} sample items</span><small className={`is-${item.status.toLowerCase()}`}><i />{item.status}</small></button>)}</div>
  </section>
}

export function FavouriteMemories({ items, onOpen, onToggleFavourite }: { items: MediaItem[]; onOpen: (id: string) => void; onToggleFavourite: (id: string) => void }) {
  return <section className="portal-media-section" aria-labelledby="portal-favourites-title"><div className="portal-media-section-heading"><div><span className="portal-eyebrow">FAVOURITE MOMENTS</span><h2 id="portal-favourites-title">Moments Worth Keeping</h2></div><span className="portal-demo-chip"><Heart size={13} />{items.length} SAVED</span></div>
    {items.length ? <div className="portal-photo-grid portal-photo-grid--favourites">{items.map((item, index) => item.type === 'photo' ? <PhotoCard key={item.id} item={item} index={index} onOpen={onOpen} onToggleFavourite={onToggleFavourite} /> : <VideoCard key={item.id} item={item} index={index} onOpen={onOpen} onToggleFavourite={onToggleFavourite} />)}</div> : <div className="portal-media-empty"><span><Heart size={22} /></span><h3>Your favourite moments will appear here.</h3><p>Save the memories you want to return to.</p></div>}
  </section>
}

export function PhotographerMediaCard() {
  return <section className="portal-photographer-card"><span><Camera size={22} /></span><div><span className="portal-eyebrow">YOUR JOURNEY, CAPTURED</span><h2>Memories Captured Along the Way</h2><p>Future Devbhoomi trips can include professionally captured moments uploaded directly into your personal journey gallery.</p></div><strong>PHOTOGRAPHER MEDIA <i /> COMING SOON</strong></section>
}

export function MemoryCollectionCTA({ onNotify }: { onNotify: (message: string) => void }) {
  return <section className="portal-memory-collection-cta"><span className="portal-memory-collection-cta__icon"><Images size={22} /></span><div><span className="portal-eyebrow portal-eyebrow--gold">YOUR MEMORY COLLECTION</span><h2>A collection to keep close.</h2><p>Download and sharing will be available when trip media storage is connected.</p></div><div className="portal-memory-collection-cta__actions"><button type="button" className="portal-button portal-button--gold" onClick={() => onNotify('Album download will be available once trip media storage is connected.')}>Download Album <ArrowRight size={14} /></button><button type="button" className="portal-button portal-button--glass" onClick={() => onNotify('Public memory sharing will be available in a future version.')}>Share Journey <ArrowRight size={14} /></button></div></section>
}

export function MediaStoryCTA() {
  return <section className="portal-media-story-cta"><span className="portal-media-story-cta__mark"><Mountain size={24} /></span><span className="portal-eyebrow portal-eyebrow--gold">EVERY JOURNEY LEAVES A TRACE</span><h2>Every Journey Becomes a Story.</h2><p>Your photos capture where you went.<br />Your memories capture how it felt.</p><nav><Link className="portal-button portal-button--gold" to="/my-journey/story">View Trip Story <ChevronRight size={15} /></Link><Link className="portal-button portal-button--glass" to="/my-journey/passport">View My Passport <ArrowRight size={14} /></Link></nav><small>DEMO JOURNEY · SAMPLE MEDIA</small></section>
}

export function MediaFilterSummary({ visibleCount }: { visibleCount: number }) {
  return <p className="portal-media-result-count" aria-live="polite">{visibleCount} demo {visibleCount === 1 ? 'memory' : 'memories'} shown</p>
}
