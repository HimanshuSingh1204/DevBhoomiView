import { ArrowUpRight, BookOpen, Camera, FileBadge, Map, Mountain, NotebookPen } from 'lucide-react'
import { SettingsCard } from './SettingsControls'

const dataCategories = [
  { title: 'Trip Information', description: 'Itinerary and destination information.', icon: Map },
  { title: 'Journey Memories', description: 'Photos and videos associated with your trip.', icon: Camera },
  { title: 'Passport', description: 'Destination and experience stamps.', icon: BookOpen },
  { title: 'Trip Story', description: 'Your digital journey story.', icon: NotebookPen },
  { title: 'Certificate', description: 'Your journey certificate.', icon: FileBadge },
]

export function DataPrivacySettings({ onViewData, onDownloadData }: { onViewData: () => void; onDownloadData: () => void }) {
  return <SettingsCard eyebrow="YOUR DATA" title="Your Journey Data" description="The kinds of sample journey information shown in this traveller portal." className="portal-settings-data">
    <div className="portal-settings-data__grid">{dataCategories.map(({ title, description, icon: Icon }) => <article key={title}><span><Icon size={17} /></span><div><strong>{title}</strong><small>{description}</small></div></article>)}</div>
    <p className="portal-settings-card-note"><Mountain size={14} /> This page displays illustrative demo information only. No data export or storage is connected.</p>
    <div className="portal-settings-data__actions"><button type="button" className="portal-settings-button portal-settings-button--forest" onClick={onViewData}>VIEW MY DATA <ArrowUpRight size={13} /></button><button type="button" className="portal-settings-button portal-settings-button--outline" onClick={onDownloadData}>DOWNLOAD MY DATA <ArrowUpRight size={13} /></button></div>
  </SettingsCard>
}
