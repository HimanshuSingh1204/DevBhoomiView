import { Globe2 } from 'lucide-react'
import type { RegionPreferences } from '../../../data/settings'
import { SettingsCard } from './SettingsControls'

export function LanguageRegionSettings({ value, onChange }: { value: RegionPreferences; onChange: (value: RegionPreferences) => void }) {
  return <SettingsCard eyebrow="LANGUAGE & REGION" title="Make It Feel Like Home" description="Set the regional formats used by your journey portal." className="portal-settings-region">
    <div className="portal-settings-select-grid">
      <label><span><Globe2 size={14} /> Language</span><select value={value.language} onChange={() => onChange({ ...value, language: 'English' })}><option value="English">English</option><option value="hi" disabled>हिन्दी — COMING SOON</option><option value="fr" disabled>Français — COMING SOON</option></select><small>Other languages are not yet available.</small></label>
      <label><span><Globe2 size={14} /> Country / Region</span><select value={value.country} onChange={(event) => onChange({ ...value, country: event.target.value })}><option>India</option><option>Nepal</option><option>United States</option><option>United Kingdom</option></select></label>
      <label><span>Date Format</span><select value={value.dateFormat} onChange={(event) => onChange({ ...value, dateFormat: event.target.value as RegionPreferences['dateFormat'] })}><option>DD/MM/YYYY</option><option>MM/DD/YYYY</option><option>YYYY-MM-DD</option></select></label>
      <label><span>Distance</span><select value={value.distance} onChange={(event) => onChange({ ...value, distance: event.target.value as RegionPreferences['distance'] })}><option>Kilometres</option><option>Miles</option></select></label>
      <label><span>Currency</span><select value={value.currency} onChange={(event) => onChange({ ...value, currency: event.target.value as RegionPreferences['currency'] })}><option>INR</option><option>USD</option><option>EUR</option></select></label>
    </div>
    <p className="portal-settings-card-note">Display preferences only. This does not change trip pricing or provide translations.</p>
  </SettingsCard>
}
