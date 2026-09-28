import { Accessibility } from 'lucide-react'
import { accessibilitySettings, type AccessibilityPreferences } from '../../../data/settings'
import { SettingToggle, SettingsCard } from './SettingsControls'

export function AccessibilitySettings({ value, onChange }: { value: AccessibilityPreferences; onChange: (value: AccessibilityPreferences) => void }) {
  return <SettingsCard eyebrow="ACCESSIBILITY" title="Make Your Journey Comfortable" description="Adjust a few local display preferences for this demo." className="portal-settings-accessibility">
    <div className="portal-settings-toggle-list">{accessibilitySettings.map(({ key, label, description }) => <div className="portal-settings-toggle-row" key={key}><span className="portal-settings-toggle-row__icon"><Accessibility size={15} /></span><span className="portal-settings-toggle-row__copy"><strong>{label}</strong><small>{description}</small></span><SettingToggle id={`setting-accessibility-${key}`} label={label} checked={value[key]} onChange={(checked) => onChange({ ...value, [key]: checked })} /></div>)}</div>
    <p className="portal-settings-card-note">Reduced motion, large text and contrast apply to this portal preview. Video autoplay is not enabled by this demo.</p>
  </SettingsCard>
}
