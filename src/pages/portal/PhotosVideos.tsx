import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { useCallback, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { MediaLightbox } from '../../components/portal/media/MediaLightbox'
import { MediaVideoGallery, MediaStats, MediaHero, FeaturedMemory, FavouriteMemories, JourneyMediaTimeline, MediaFilterBar, MediaFilterSummary, MediaStoryCTA, MemoryCollectionCTA, PhotographerMediaCard, PhotoGallery, VideoSection, AlbumSection } from '../../components/portal/media/MediaSections'
import { VideoModal } from '../../components/portal/media/VideoModal'
import { journeyDayMedia, tripMediaItems, type MediaCategory } from '../../data/tripMedia'

export function PhotosVideos() {
  const [searchParams] = useSearchParams()
  const [items, setItems] = useState(tripMediaItems)
  const [category, setCategory] = useState<MediaCategory>('All')
  const [day, setDay] = useState(() => searchParams.get('day') ?? '')
  const [destination, setDestination] = useState(() => searchParams.get('destination') ?? '')
  const [album, setAlbum] = useState('')
  const [selectedPhotoId, setSelectedPhotoId] = useState('')
  const [selectedVideoId, setSelectedVideoId] = useState('')
  const [notice, setNotice] = useState('')

  const filteredItems = useMemo(() => items.filter((item) => {
    const matchesCategory = category === 'Videos'
      ? item.type === 'video'
      : category === 'Favourites'
        ? item.isFavourite
        : category === 'Photos'
          ? item.type === 'photo'
          : true
    return matchesCategory
      && (!day || item.day === Number(day))
      && (!destination || item.destination === destination)
      && (!album || item.album === album)
  }), [album, category, day, destination, items])
  const filteredPhotos = useMemo(() => filteredItems.filter(({ type }) => type === 'photo'), [filteredItems])
  const filteredVideos = useMemo(() => filteredItems.filter(({ type }) => type === 'video'), [filteredItems])
  const videoItems = useMemo(() => items.filter(({ type }) => type === 'video'), [items])
  const favouriteItems = useMemo(() => items.filter(({ isFavourite }) => isFavourite), [items])
  const selectedPhoto = items.find(({ id }) => id === selectedPhotoId)
  const selectedVideo = items.find(({ id }) => id === selectedVideoId)
  const featuredMemory = items.find(({ id }) => id === 'memory-trek') ?? items[0]
  const activeDay = day ? journeyDayMedia.find(({ day: dayNumber }) => dayNumber === Number(day))?.title : ''

  const toggleFavourite = useCallback((id: string) => {
    setItems((current) => current.map((item) => item.id === id ? { ...item, isFavourite: !item.isFavourite } : item))
  }, [])

  const showPhoto = useCallback((id: string) => setSelectedPhotoId(id), [])
  const closePhoto = useCallback(() => setSelectedPhotoId(''), [])
  const showFavourite = useCallback((id: string) => {
    const item = items.find((media) => media.id === id)
    if (item?.type === 'video') setSelectedVideoId(id)
    else showPhoto(id)
  }, [items, showPhoto])
  const navigatePhoto = useCallback((direction: -1 | 1) => {
    const photos = items.filter((item) => item.type === 'photo' && (!day || item.day === Number(day)) && (!destination || item.destination === destination) && (!album || item.album === album) && (category !== 'Favourites' || item.isFavourite))
    if (!photos.length) return
    const currentIndex = photos.findIndex(({ id }) => id === selectedPhotoId)
    const nextIndex = currentIndex < 0 ? 0 : (currentIndex + direction + photos.length) % photos.length
    setSelectedPhotoId(photos[nextIndex].id)
  }, [album, category, day, destination, items, selectedPhotoId])

  const showNotice = (message: string) => setNotice(message)

  return (
    <div className="portal-photos-videos-page">
      <MediaHero />
      <MediaStats />
      <FeaturedMemory item={featuredMemory} onOpen={showPhoto} />
      <MediaFilterBar category={category} day={day} destination={destination} album={album} onCategoryChange={setCategory} onDayChange={setDay} onDestinationChange={setDestination} />
      {activeDay && <button className="portal-media-day-filter" type="button" onClick={() => setDay('')}>Showing Day {day} · {activeDay}<X size={14} aria-hidden="true" /><span className="sr-only">Clear day filter</span></button>}
      <MediaFilterSummary visibleCount={filteredItems.length} />
      <section className="portal-media-section portal-photo-gallery-section" aria-labelledby="portal-photo-gallery-title"><div className="portal-media-section-heading"><div><span className="portal-eyebrow">YOUR PERSONAL JOURNEY ALBUM</span><h2 id="portal-photo-gallery-title">{category === 'Videos' ? 'Video Memories' : category === 'Favourites' ? 'Your Favourite Memories' : 'Moments in the Making'}</h2></div><span className="portal-demo-chip"><i />DEMO GALLERY</span></div>
        <AnimatePresence mode="wait">
          {category === 'Videos'
            ? <motion.div key="videos" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><MediaVideoGallery items={filteredVideos} onOpen={setSelectedVideoId} onToggleFavourite={toggleFavourite} /></motion.div>
            : filteredPhotos.length
              ? <motion.div key="photos" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><PhotoGallery items={filteredPhotos} onOpen={showPhoto} onToggleFavourite={toggleFavourite} />{(category === 'All' || category === 'Favourites') && filteredVideos.length > 0 && <MediaVideoGallery items={filteredVideos} onOpen={setSelectedVideoId} onToggleFavourite={toggleFavourite} />}</motion.div>
              : category === 'Favourites' && filteredVideos.length > 0
                ? <motion.div key="favourite-videos" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><MediaVideoGallery items={filteredVideos} onOpen={setSelectedVideoId} onToggleFavourite={toggleFavourite} /></motion.div>
              : <motion.div key="empty" className="portal-media-empty portal-media-empty--filtered" initial={{ opacity: 0 }} animate={{ opacity: 1 }}><span> <X size={18} /></span><h3>No demo memories match these filters.</h3><p>Try another day, destination or album.</p></motion.div>}
        </AnimatePresence>
      </section>
      <VideoSection items={videoItems} onOpen={setSelectedVideoId} onToggleFavourite={toggleFavourite} />
      <AlbumSection activeAlbum={album} onSelectAlbum={setAlbum} />
      <JourneyMediaTimeline selectedDay={day} onSelectDay={setDay} />
      <FavouriteMemories items={favouriteItems} onOpen={showFavourite} onToggleFavourite={toggleFavourite} />
      <PhotographerMediaCard />
      <MemoryCollectionCTA onNotify={showNotice} />
      <MediaStoryCTA />
      <p className="portal-dashboard-disclaimer">All images, captions and media counts on this page are illustrative demo content. No personal uploads, real trip media, bookings or verified visits are stored.</p>
      <AnimatePresence>{notice && <motion.div className="portal-media-toast" role="status" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }}><span>{notice}</span><button type="button" aria-label="Dismiss message" onClick={() => setNotice('')}><X size={16} /></button></motion.div>}</AnimatePresence>
      <MediaLightbox item={selectedPhoto} onClose={closePhoto} onPrevious={() => navigatePhoto(-1)} onNext={() => navigatePhoto(1)} onToggleFavourite={toggleFavourite} />
      <VideoModal item={selectedVideo} onClose={() => setSelectedVideoId('')} />
    </div>
  )
}
