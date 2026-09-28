import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Heart, X } from 'lucide-react'
import { useEffect } from 'react'
import type { MediaItem } from '../../../data/tripMedia'
import { Image } from '../../Image'

type MediaLightboxProps = {
  item: MediaItem | undefined
  onClose: () => void
  onPrevious: () => void
  onNext: () => void
  onToggleFavourite: (id: string) => void
}

export function MediaLightbox({ item, onClose, onPrevious, onNext, onToggleFavourite }: MediaLightboxProps) {
  useEffect(() => {
    if (!item) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft') onPrevious()
      if (event.key === 'ArrowRight') onNext()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [item, onClose, onNext, onPrevious])

  return <AnimatePresence>{item && <motion.div className="portal-media-lightbox" role="dialog" aria-modal="true" aria-labelledby="portal-media-lightbox-title" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}>
    <button type="button" className="portal-media-modal-close" aria-label="Close photo viewer" onClick={onClose}><X size={21} /></button>
    <button type="button" className="portal-media-lightbox__nav portal-media-lightbox__nav--previous" aria-label="Previous photo" onClick={onPrevious}><ArrowLeft size={20} /></button>
    <motion.div className="portal-media-lightbox__content" initial={{ y: 14, scale: .985 }} animate={{ y: 0, scale: 1 }} exit={{ y: 8, scale: .99 }}>
      <div className="portal-media-lightbox__image"><Image id={item.image} alt={`Illustrative ${item.experience} memory in ${item.destination}`} /></div>
      <div className="portal-media-lightbox__caption"><span className="portal-eyebrow portal-eyebrow--gold">DAY {item.day} · {item.destination.toUpperCase()}</span><h2 id="portal-media-lightbox-title">{item.experience}</h2><p>“{item.caption}”</p><small>Illustrative demo memory · not a verified visit</small><button type="button" className={`portal-media-modal-favourite ${item.isFavourite ? 'is-favourite' : ''}`} aria-label={item.isFavourite ? 'Remove from favourites' : 'Add to favourites'} aria-pressed={item.isFavourite} onClick={() => onToggleFavourite(item.id)}><Heart size={17} fill={item.isFavourite ? 'currentColor' : 'none'} />{item.isFavourite ? 'Saved to favourites' : 'Save as favourite'}</button></div>
    </motion.div>
    <button type="button" className="portal-media-lightbox__nav portal-media-lightbox__nav--next" aria-label="Next photo" onClick={onNext}><ArrowRight size={20} /></button>
    <span className="portal-media-lightbox__keyboard-hint">USE ← → TO EXPLORE · ESC TO CLOSE</span>
  </motion.div>}</AnimatePresence>
}
