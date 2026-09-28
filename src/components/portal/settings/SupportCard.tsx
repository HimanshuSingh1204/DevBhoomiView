import { ArrowUpRight, Compass, LifeBuoy, ShieldAlert } from 'lucide-react'
import { SettingsCard } from './SettingsControls'

const supportOptions = [
  { title: 'TRIP SUPPORT', description: 'Questions about your itinerary.', icon: Compass },
  { title: 'JOURNEY HELP', description: 'Help with portal features.', icon: LifeBuoy },
  { title: 'EMERGENCY INFORMATION', description: 'Emergency contacts will be provided with your confirmed trip information.', icon: ShieldAlert },
]

export function SupportCard({ onContact }: { onContact: () => void }) {
  return <SettingsCard eyebrow="HERE FOR YOUR JOURNEY" title="Need Help With Your Journey?" className="portal-settings-support">
    <div className="portal-settings-support__grid">{supportOptions.map(({ title, description, icon: Icon }) => <article key={title}><span><Icon size={17} /></span><strong>{title}</strong><p>{description}</p></article>)}</div>
    <button type="button" className="portal-settings-button portal-settings-button--forest" onClick={onContact}>CONTACT SUPPORT <ArrowUpRight size={13} /></button>
  </SettingsCard>
}
