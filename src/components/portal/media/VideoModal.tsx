import { AnimatePresence, motion } from 'framer-motion'
import { MapPin, Play, Video, X } from 'lucide-react'
import { useEffect } from 'react'
import type { MediaItem } from '../../../data/tripMedia'
import { Image } from '../../Image'

export function VideoModal({ item, onClose }: { item: MediaItem | undefined; onClose: () => void }) {
  useEffect(() => {
    if (!item) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [item, onClose])

  return <AnimatePresence>{item && <motion.div className="portal-video-modal" role="dialog" aria-modal="true" aria-labelledby="portal-video-modal-title" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}>
    <motion.div className="portal-video-modal__card" initial={{ y: 14, scale: .985 }} animate={{ y: 0, scale: 1 }} exit={{ y: 8, scale: .99 }}>
      <button type="button" className="portal-media-modal-close" aria-label="Close video preview" onClick={onClose}><X size={20} /></button>
      <div className="portal-video-modal__poster"><Image id={item.image} alt={`Illustrative still for ${item.title}`} /><span><i><Play size={24} fill="currentColor" /></i><strong>Video preview</strong></span><button type="button" disabled aria-label="Video playback unavailable in this demo"><Play size={17} fill="currentColor" /> Video preview</button></div>
      <div className="portal-video-modal__copy"><span className="portal-eyebrow portal-eyebrow--gold"><Video size={13} /> DEMO VIDEO</span><h2 id="portal-video-modal-title">{item.title}</h2><p>{item.experience} · Day {item.day}</p><span><MapPin size={14} />{item.destination}</span><small>This is a demo media item. Video playback will be connected to trip media storage later.</small></div>
    </motion.div>
  </motion.div>}</AnimatePresence>
}
