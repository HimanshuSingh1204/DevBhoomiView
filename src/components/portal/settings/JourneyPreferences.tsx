import { Check, Mountain } from 'lucide-react'
import { accommodationPreferences, travelInterests, travelPaces, type JourneyPreferences as JourneyPreferencesData, type TravelInterest } from '../../../data/settings'
import { SettingsCard } from './SettingsControls'

export function JourneyPreferences({ value, onChange }: { value: JourneyPreferencesData; onChange: (value: JourneyPreferencesData) => void }) {
  const toggleInterest = (interest: TravelInterest) => {
    const interests = value.interests.includes(interest) ? value.interests.filter((item) => item !== interest) : [...value.interests, interest]
    onChange({ ...value, interests })
  }

  return <SettingsCard eyebrow="JOURNEY PREFERENCES" title="Shape Your Himalayan Experience" description="Choose what inspires you. These sample preferences stay on this page.">
    <fieldset className="portal-settings-fieldset">
      <legend>Travel Interests <small>CHOOSE ALL THAT SPEAK TO YOU</small></legend>
      <div className="portal-settings-chip-list">{travelInterests.map((interest) => { const selected = value.interests.includes(interest); return <button key={interest} type="button" className={`portal-settings-chip${selected ? ' is-selected' : ''}`} aria-pressed={selected} onClick={() => toggleInterest(interest)}>{selected && <Check size={13} />}{interest}</button> })}</div>
    </fieldset>
    <fieldset className="portal-settings-fieldset">
      <legend>Travel Pace <small>FIND YOUR RHYTHM</small></legend>
      <div className="portal-settings-option-grid portal-settings-option-grid--three">{travelPaces.map((pace) => <button key={pace} type="button" className={`portal-settings-choice${value.pace === pace ? ' is-selected' : ''}`} aria-pressed={value.pace === pace} onClick={() => onChange({ ...value, pace })}><span>{pace}</span><small>{pace === 'Relaxed' ? 'Take it slow' : pace === 'Balanced' ? 'A little of everything' : 'Fill every day'}</small></button>)}</div>
    </fieldset>
    <fieldset className="portal-settings-fieldset">
      <legend>Accommodation Preference <small>YOUR HOME IN THE HILLS</small></legend>
      <div className="portal-settings-option-grid">{accommodationPreferences.map((stay) => <button key={stay} type="button" className={`portal-settings-choice${value.accommodation === stay ? ' is-selected' : ''}`} aria-pressed={value.accommodation === stay} onClick={() => onChange({ ...value, accommodation: stay })}><Mountain size={15} /><span>{stay}</span><small>{stay === 'Village Homestay' ? 'Local warmth and slow living' : 'A sample accommodation preference'}</small></button>)}</div>
    </fieldset>
  </SettingsCard>
}
