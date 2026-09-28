import { AnimatePresence, motion } from 'framer-motion'
import { Check, Pencil, UserRound, X } from 'lucide-react'
import { useEffect, useState, type FormEvent } from 'react'
import type { TravellerProfile } from '../../../data/settings'

export function ProfileSettings({ profile, onSave }: { profile: TravellerProfile; onSave: (profile: TravellerProfile) => void }) {
  const [isEditing, setIsEditing] = useState(false)
  const [draft, setDraft] = useState(profile)
  const [notice, setNotice] = useState('')

  useEffect(() => {
    if (!isEditing) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsEditing(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [isEditing])

  const openEditor = () => {
    setDraft(profile)
    setNotice('')
    setIsEditing(true)
  }

  const saveProfile = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSave(draft)
    setIsEditing(false)
    setNotice('Profile changes saved locally for this demo.')
  }

  const updateField = (key: keyof TravellerProfile, value: string) => setDraft((current) => ({ ...current, [key]: value }))
  const fullName = `${profile.firstName} ${profile.lastName}`.trim()

  return <>
    <section className="portal-settings-card portal-settings-profile" aria-labelledby="portal-settings-profile-title">
      <header className="portal-settings-section-heading"><span className="portal-settings-eyebrow">PROFILE</span><h2 id="portal-settings-profile-title">Your Traveller Profile</h2><p>Your sample traveller profile, stored locally in this demo.</p></header>
      <div className="portal-settings-profile__body">
        <span className="portal-settings-profile__avatar" aria-hidden="true">{profile.firstName.charAt(0)}{profile.lastName.charAt(0)}</span>
        <div className="portal-settings-profile__identity"><span className="portal-settings-profile__role"><UserRound size={13} /> EXPLORER</span><h3>{fullName}</h3><span className="portal-settings-demo-label">DEMO CONTACT DETAILS</span></div>
        <button className="portal-settings-button portal-settings-button--forest portal-settings-profile__edit" type="button" onClick={openEditor}><Pencil size={14} /> EDIT PROFILE</button>
      </div>
      <dl className="portal-settings-profile__details">
        <div><dt>Email</dt><dd>{profile.email}</dd></div><div><dt>Phone</dt><dd>{profile.phone}</dd></div><div><dt>Country</dt><dd>{profile.country}</dd></div><div><dt>Trip</dt><dd>10-Day Himalayan Experience</dd></div>
      </dl>
      <p className="portal-settings-profile__disclaimer">Demo profile only. The contact information above is illustrative and is not verified or connected to an account.</p>
      <AnimatePresence>{notice && <motion.p className="portal-settings-inline-notice" role="status" initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}><Check size={14} />{notice}</motion.p>}</AnimatePresence>
    </section>
    {isEditing && <motion.div className="portal-settings-dialog" role="dialog" aria-modal="true" aria-labelledby="portal-settings-edit-title" initial={{ opacity: 0 }} animate={{ opacity: 1 }} onMouseDown={(event) => { if (event.target === event.currentTarget) setIsEditing(false) }}>
        <motion.form className="portal-settings-dialog__card" onSubmit={saveProfile} initial={{ opacity: 0, y: 12, scale: .985 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 8 }}>
          <button autoFocus className="portal-settings-dialog__close" type="button" aria-label="Close edit profile dialog" onClick={() => setIsEditing(false)}><X size={18} /></button>
          <span className="portal-settings-eyebrow">DEMO TRAVELLER PROFILE</span><h2 id="portal-settings-edit-title">Edit Your Profile</h2>
          <p className="portal-settings-dialog__intro">Changes stay in this page's local demo state. Use illustrative contact details only.</p>
          <div className="portal-settings-form-grid">
            <label>First Name<input autoFocus autoComplete="given-name" required value={draft.firstName} onChange={(event) => updateField('firstName', event.target.value)} /></label>
            <label>Last Name<input autoComplete="family-name" required value={draft.lastName} onChange={(event) => updateField('lastName', event.target.value)} /></label>
            <label>Email<input type="email" autoComplete="email" required value={draft.email} onChange={(event) => updateField('email', event.target.value)} /></label>
            <label>Phone<input type="tel" autoComplete="tel" value={draft.phone} onChange={(event) => updateField('phone', event.target.value)} /></label>
            <label className="is-wide">Country<input autoComplete="country-name" required value={draft.country} onChange={(event) => updateField('country', event.target.value)} /></label>
          </div>
          <div className="portal-settings-dialog__actions"><button className="portal-settings-button portal-settings-button--quiet" type="button" onClick={() => setIsEditing(false)}>CANCEL</button><button className="portal-settings-button portal-settings-button--forest" type="submit">SAVE CHANGES</button></div>
        </motion.form>
    </motion.div>}
  </>
}
