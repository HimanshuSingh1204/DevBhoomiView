import { BellRing } from 'lucide-react'
import { notificationSettings, type NotificationPreferences as NotificationPreferencesData } from '../../../data/settings'
import { SettingToggle, SettingsCard } from './SettingsControls'

export function NotificationSettings({ value, onChange }: { value: NotificationPreferencesData; onChange: (value: NotificationPreferencesData) => void }) {
  return <SettingsCard eyebrow="NOTIFICATIONS" title="Stay Updated, Your Way" description="Choose which journey messages this demo would show you." className="portal-settings-notifications">
    <div className="portal-settings-toggle-list">{notificationSettings.map(({ key, label, description }) => <div className="portal-settings-toggle-row" key={key}><span className="portal-settings-toggle-row__icon"><BellRing size={15} /></span><span className="portal-settings-toggle-row__copy"><strong>{label}</strong><small>{description}</small></span><SettingToggle id={`setting-notification-${key}`} label={`${label} notifications`} checked={value[key]} onChange={(checked) => onChange({ ...value, [key]: checked })} /></div>)}</div>
    <p className="portal-settings-card-note">Notification delivery is not connected in this frontend-only demo.</p>
  </SettingsCard>
}
