import { useState } from 'react'
import { ArrowUpRight, Camera, Download, Video } from 'lucide-react'
import { Link } from 'react-router-dom'
import { memories, tripMediaStats } from '../../data/touristJourney'
import { Image } from '../Image'

export function UpcomingExperience() {
  const [downloadMessage, setDownloadMessage] = useState('')

  return (
    <section className="portal-media-card" aria-labelledby="portal-media-title">
      <div className="portal-card-heading"><div><span className="portal-eyebrow">DEMO MEDIA PREVIEW</span><h2 id="portal-media-title">My Photos & Videos</h2></div><Link to="/my-journey/media" aria-label="View all demo media">View All <ArrowUpRight size={14} /></Link></div>
      <div className="portal-media-mosaic">
        {memories.map(({ title, image, kind }, index) => <div className={`portal-media-image portal-media-image--${index + 1}`} key={title}><Image id={image} alt={`Illustrative ${kind.toLowerCase()} image for ${title}`} /><span>{title}</span></div>)}
      </div>
      <div className="portal-media-stats"><span><Camera size={16} /><strong>{tripMediaStats.photos}</strong><small>Photos</small></span><i /><span><Video size={16} /><strong>{tripMediaStats.videos}</strong><small>Videos</small></span></div>
      <button type="button" className="portal-download-button" onClick={() => setDownloadMessage('Demo preview only — there are no real media files to download.')}><Download size={14} />Download All</button>
      {downloadMessage && <p className="portal-media-notice" role="status">{downloadMessage}</p>}
      <p className="portal-card-disclaimer">{tripMediaStats.demoNote}</p>
    </section>
  )
}
