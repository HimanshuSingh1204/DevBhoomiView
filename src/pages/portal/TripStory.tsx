import { AnimatePresence, motion } from 'framer-motion'
import { Check, X } from 'lucide-react'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { MediaLightbox } from '../../components/portal/media/MediaLightbox'
import { VideoModal } from '../../components/portal/media/VideoModal'
import { AdventureStorySection, CultureStorySection, DigitalMemoryPackage, FoodStorySection, ShareStoryCard, StoryCTA, StoryDestinations, StoryExperiences, StoryHero, StoryIntro, StoryProgress, StoryStats, StoryTimeline, StoryQuote } from '../../components/portal/story/StorySections'
import { StoryMemoryCollage } from '../../components/portal/story/StoryMemoryCollage'
import { storyChapters, storyMemories } from '../../data/tripStory'
import { tripMediaItems, type MediaItem } from '../../data/tripMedia'

export function TripStory() {
  const [selectedMemoryId, setSelectedMemoryId] = useState('')
  const [previewOpen, setPreviewOpen] = useState(false)
  const [notice, setNotice] = useState('')
  const [favouriteIds, setFavouriteIds] = useState<string[]>([])
  const selectedMemory = useMemo<MediaItem | undefined>(() => {
    const memory = storyMemories.find(({ id }) => id === selectedMemoryId)
    const media = tripMediaItems.find(({ id }) => id === selectedMemoryId)
    if (!memory || !media) return undefined
    return { ...media, isFavourite: favouriteIds.includes(media.id) }
  }, [favouriteIds, selectedMemoryId])

  const closePreview = useCallback(() => setPreviewOpen(false), [])
  const dismissNotice = useCallback(() => setNotice(''), [])
  const selectedPhoto = selectedMemory?.type === 'photo' ? selectedMemory : undefined
  const selectedVideo = selectedMemory?.type === 'video' ? selectedMemory : undefined

  useEffect(() => {
    if (!previewOpen && !notice) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closePreview()
        dismissNotice()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [previewOpen, notice, closePreview, dismissNotice])

  const openMemory = useCallback((id: string) => {
    if (tripMediaItems.some((item) => item.id === id)) setSelectedMemoryId(id)
  }, [])

  const navigateMemory = useCallback((direction: -1 | 1) => {
    const photos = tripMediaItems.filter(({ type }) => type === 'photo')
    if (!photos.length) return
    const currentIndex = photos.findIndex(({ id }) => id === selectedMemoryId)
    setSelectedMemoryId(photos[(currentIndex + direction + photos.length) % photos.length].id)
  }, [selectedMemoryId])

  const toggleFavourite = useCallback((id: string) => {
    setFavouriteIds((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id])
  }, [])

  const mediaUrlForChapter = (chapter: (typeof storyChapters)[number]) =>
    `/my-journey/media?day=${chapter.day}&destination=${encodeURIComponent(chapter.destination)}`

  return (
    <div className="portal-trip-story-page">
      <StoryHero />
      <StoryIntro />
      <StoryStats />
      <StoryTimeline onViewMemories={mediaUrlForChapter} />
      <StoryDestinations />
      <StoryExperiences />
      <CultureStorySection />
      <FoodStorySection />
      <AdventureStorySection />
      <StoryMemoryCollage onOpen={openMemory} />
      <StoryQuote />
      <DigitalMemoryPackage />
      <StoryProgress />
      <ShareStoryCard onPreview={() => setPreviewOpen(true)} onShare={() => setNotice('Public story sharing will be available in a future version.')} />
      <StoryCTA />
      <p className="portal-dashboard-disclaimer">This is a frontend-only sample story built from demo itinerary and illustrative media. It does not confirm travel, bookings, completed activities, personal uploads or public sharing.</p>
      <MediaLightbox
        item={selectedPhoto}
        onClose={() => setSelectedMemoryId('')}
        onPrevious={() => navigateMemory(-1)}
        onNext={() => navigateMemory(1)}
        onToggleFavourite={toggleFavourite}
      />
      <VideoModal item={selectedVideo} onClose={() => setSelectedMemoryId('')} />
      <AnimatePresence>
        {(previewOpen || notice) && <motion.div className="portal-story-dialog" role="dialog" aria-modal="true" aria-labelledby="portal-story-dialog-title" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(event) => { if (event.target === event.currentTarget) { closePreview(); dismissNotice() } }}>
          <motion.div className="portal-story-dialog__card" initial={{ opacity: 0, y: 12, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 8 }}>
            <button type="button" className="portal-story-dialog__close" aria-label="Close story dialog" onClick={() => { closePreview(); dismissNotice() }}><X size={18} /></button>
            <span className="portal-story-dialog__icon">{notice ? <Check size={22} /> : <span>2026</span>}</span>
            <span className="portal-eyebrow">{notice ? 'SHARE YOUR JOURNEY' : 'DEMO STORY PREVIEW'}</span>
            <h2 id="portal-story-dialog-title">{notice ? 'A story to share, someday.' : 'A Journey Through Devbhoomi'}</h2>
            <p>{notice || 'Ten days, five destinations and a collection of illustrative moments — brought together as a private travel-journal preview. No story is published or shared.'}</p>
            <span className="portal-story-dialog__demo">DEMO CONTENT · NOT PUBLISHED</span>
            <button type="button" className="portal-button portal-button--forest" onClick={() => { closePreview(); dismissNotice() }}>Continue reading</button>
          </motion.div>
        </motion.div>}
      </AnimatePresence>
    </div>
  )
}
