import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import { storyMemories } from '../../../data/tripStory'
import { Image } from '../../Image'
import { StoryMediaSectionHeading } from './StorySections'

export function StoryMemoryCollage({ onOpen }: { onOpen: (id: string) => void }) {
  const memories = storyMemories.filter(({ id }) => ['memory-trek', 'memory-food', 'memory-village', 'memory-auli', 'memory-culture', 'video-trek'].includes(id))
  return <section className="portal-story-section portal-story-collage-section" aria-label="Illustrative journey photo and video collage"><StoryMediaSectionHeading /><div className="portal-story-collage">{memories.map((memory, index) => <motion.button type="button" className={`portal-story-collage__item portal-story-collage__item--${index + 1}`} key={memory.id} onClick={() => onOpen(memory.id)} aria-label={`Open ${memory.type} memory: ${memory.title}`} initial={{ opacity: 0, scale: .98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: .3, delay: index * .035 }}><Image id={memory.image} alt={memory.alt} />{memory.type === 'video' && <i><Play size={21} fill="currentColor" /></i>}<span>{memory.type === 'video' ? 'VIDEO PREVIEW' : memory.title.toUpperCase()}</span></motion.button>)}</div></section>
}
