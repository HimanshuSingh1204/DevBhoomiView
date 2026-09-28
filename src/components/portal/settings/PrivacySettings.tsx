import { LockKeyhole } from 'lucide-react'
import { privacySettings, type PrivacyPreferences } from '../../../data/settings'
import { SettingToggle, SettingsCard } from './SettingsControls'

export function PrivacySettings({ value, onChange }: { value: PrivacyPreferences; onChange: (value: PrivacyPreferences) => void }) {
  return <SettingsCard eyebrow="PRIVACY" title="Your Journey, Your Choice." description="Your trip information and memories remain private unless you choose to share them." className="portal-settings-privacy">
    <div className="portal-settings-toggle-list">{privacySettings.map(({ key, label, detail }) => <div className="portal-settings-toggle-row" key={key}><span className="portal-settings-toggle-row__icon"><LockKeyhole size={15} /></span><span className="portal-settings-toggle-row__copy"><strong>{label}</strong><small>{key === 'profilePrivate' ? value.profilePrivate ? 'PRIVATE · DEMO PROFILE' : 'VISIBILITY PREVIEW · DEMO ONLY' : value[key] ? 'ON · DEMO ONLY — NOTHING IS PUBLISHED' : `${detail.toUpperCase()} · OFF`}</small></span><SettingToggle id={`setting-privacy-${key}`} label={key === 'profilePrivate' ? 'Keep profile private' : label} checked={value[key]} onChange={(checked) => onChange({ ...value, [key]: checked })} /></div>)}</div>
    <p className="portal-settings-card-note">These controls change local demo states only. They do not publish, share, or expose your information.</p>
  </SettingsCard>
}
