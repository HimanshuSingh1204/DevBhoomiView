import { MotionConfig, motion } from 'framer-motion'
import { AlertTriangle, Check, X } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'
import { AccessibilitySettings } from '../../components/portal/settings/AccessibilitySettings'
import { AccountSettings, type AccountAction } from '../../components/portal/settings/AccountSettings'
import { DataPrivacySettings } from '../../components/portal/settings/DataPrivacySettings'
import { JourneyPreferences } from '../../components/portal/settings/JourneyPreferences'
import { LanguageRegionSettings } from '../../components/portal/settings/LanguageRegionSettings'
import { NotificationSettings } from '../../components/portal/settings/NotificationSettings'
import { PrivacySettings } from '../../components/portal/settings/PrivacySettings'
import { ProfileSettings } from '../../components/portal/settings/ProfileSettings'
import { SaveChangesBar } from '../../components/portal/settings/SaveChangesBar'
import { SecuritySettings, type SecurityAction } from '../../components/portal/settings/SecuritySettings'
import { SettingsCTA } from '../../components/portal/settings/SettingsCTA'
import { SettingsHero } from '../../components/portal/settings/SettingsHero'
import { SupportCard } from '../../components/portal/settings/SupportCard'
import { demoSettings, type SettingsData } from '../../data/settings'

type SettingsDialog = 'change-password' | 'sign-out-devices' | 'view-data' | 'download-data' | 'sign-out' | 'delete-account' | 'support'

const modalCopy: Record<SettingsDialog, { eyebrow: string; title: string; body: string; confirm?: string; danger?: boolean }> = {
  'change-password': { eyebrow: 'ACCOUNT SECURITY · DEMO', title: 'Password settings are not connected.', body: 'Password management will be connected when authentication is implemented.' },
  'sign-out-devices': { eyebrow: 'ACCOUNT SECURITY · DEMO', title: 'Your devices remain signed in.', body: 'Multi-device session management will be available after authentication is connected.' },
  'view-data': { eyebrow: 'YOUR JOURNEY DATA · DEMO', title: 'Your data at a glance.', body: 'This traveller portal displays illustrative journey details, sample memories, passport stamps, a trip story and a certificate preview. No personal journey data is stored or exported by this demo.' },
  'download-data': { eyebrow: 'DATA EXPORT · DEMO', title: 'Data export is not connected.', body: 'Data export will be available after the backend and storage systems are connected.' },
  'sign-out': { eyebrow: 'ACCOUNT · DEMO', title: 'Sign out of this demo portal?', body: 'No real authentication is connected. Continuing will leave this demo session active.', confirm: 'SIGN OUT' },
  'delete-account': { eyebrow: 'ACCOUNT · DEMO', title: 'Delete Account?', body: 'Account deletion will permanently remove your traveller profile and associated journey data once account management is connected.', confirm: 'DELETE ACCOUNT', danger: true },
  support: { eyebrow: 'JOURNEY SUPPORT · DEMO', title: 'We’re here to help.', body: 'Support messaging will be connected in a future version. Emergency contacts will be provided with your confirmed trip information.' },
}

export function Settings() {
  const [settings, setSettings] = useState<SettingsData>(() => structuredClone(demoSettings))
  const [savedSettings, setSavedSettings] = useState<SettingsData>(() => structuredClone(demoSettings))
  const [dialog, setDialog] = useState<SettingsDialog | null>(null)
  const [savedNotice, setSavedNotice] = useState(false)
  const [actionNotice, setActionNotice] = useState('')
  const dirty = JSON.stringify(settings) !== JSON.stringify(savedSettings)

  const closeDialog = useCallback(() => setDialog(null), [])

  useEffect(() => {
    if (!dialog) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeDialog()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [dialog, closeDialog])

  useEffect(() => {
    document.documentElement.classList.toggle('portal-user-reduced-motion', settings.accessibility.reducedMotion)
    return () => document.documentElement.classList.remove('portal-user-reduced-motion')
  }, [settings.accessibility.reducedMotion])

  useEffect(() => {
    document.documentElement.classList.toggle('portal-user-large-text', settings.accessibility.largeText)
    return () => document.documentElement.classList.remove('portal-user-large-text')
  }, [settings.accessibility.largeText])

  useEffect(() => {
    document.documentElement.classList.toggle('portal-user-high-contrast', settings.accessibility.highContrast)
    return () => document.documentElement.classList.remove('portal-user-high-contrast')
  }, [settings.accessibility.highContrast])

  const update = <K extends keyof SettingsData>(key: K, value: SettingsData[K]) => {
    setSettings((current) => ({ ...current, [key]: value }))
    setSavedNotice(false)
  }

  const saveSettings = () => {
    setSavedSettings(settings)
    setSavedNotice(true)
    setActionNotice('Your settings were saved locally for this demo.')
  }

  const discardSettings = () => {
    setSettings(savedSettings)
    setSavedNotice(false)
    setActionNotice('Unsaved changes were discarded.')
  }

  const actOnSecurity = (action: SecurityAction) => setDialog(action)
  const actOnAccount = (action: AccountAction) => setDialog(action)

  const confirmDemoAction = () => {
    if (dialog === 'sign-out') setActionNotice('Demo sign-out is unavailable; your portal session remains active.')
    else if (dialog === 'delete-account') setActionNotice('Account deletion is disabled in this demo. No data has been deleted.')
    closeDialog()
  }

  const dialogData = dialog ? modalCopy[dialog] : null

  return <MotionConfig reducedMotion={settings.accessibility.reducedMotion ? 'always' : 'never'}>
    <main className={`portal-settings-page${settings.accessibility.largeText ? ' is-large-text' : ''}${settings.accessibility.highContrast ? ' is-high-contrast' : ''}`}>
      <SettingsHero profile={settings.profile} />
      <ProfileSettings profile={settings.profile} onSave={(profile) => update('profile', profile)} />
      <div className="portal-settings-columns">
        <JourneyPreferences value={settings.journey} onChange={(value) => update('journey', value)} />
        <NotificationSettings value={settings.notifications} onChange={(value) => update('notifications', value)} />
        <LanguageRegionSettings value={settings.region} onChange={(value) => update('region', value)} />
        <PrivacySettings value={settings.privacy} onChange={(value) => update('privacy', value)} />
        <AccessibilitySettings value={settings.accessibility} onChange={(value) => update('accessibility', value)} />
        <SecuritySettings onAction={actOnSecurity} />
      </div>
      <DataPrivacySettings onViewData={() => setDialog('view-data')} onDownloadData={() => setDialog('download-data')} />
      <AccountSettings onAction={actOnAccount} />
      <SupportCard onContact={() => setDialog('support')} />
      <section className="portal-settings-information">
        <span className="portal-settings-eyebrow portal-settings-eyebrow--gold">YOUR INFORMATION</span>
        <p>Your journey preferences help personalise your travel experience. In the production version, data handling and privacy controls will be connected to the Devbhoomi Trip backend.</p>
        <div><button type="button" disabled aria-disabled="true">Privacy Policy · COMING SOON</button><i /><button type="button" disabled aria-disabled="true">Terms of Service · COMING SOON</button></div>
      </section>
      <SettingsCTA />
      <p className="portal-settings-disclaimer">Frontend-only traveller settings preview. Changes are local to this page and are not connected to an account or backend.</p>
      {actionNotice && <motion.p className="portal-settings-live-notice" role="status" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}><Check size={14} />{actionNotice}<button type="button" aria-label="Dismiss message" onClick={() => setActionNotice('')}><X size={14} /></button></motion.p>}
      <SaveChangesBar dirty={dirty} savedNotice={savedNotice} onDiscard={discardSettings} onSave={saveSettings} />
      {dialog && dialogData && <motion.div className="portal-settings-dialog" role="dialog" aria-modal="true" aria-labelledby="portal-settings-dialog-title" initial={{ opacity: 0 }} animate={{ opacity: 1 }} onMouseDown={(event) => { if (event.target === event.currentTarget) closeDialog() }}>
          <motion.section className={`portal-settings-dialog__card portal-settings-dialog__message${dialogData.danger ? ' is-danger' : ''}`} initial={{ opacity: 0, y: 12, scale: .985 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 8 }}>
            <button autoFocus className="portal-settings-dialog__close" type="button" aria-label="Close settings dialog" onClick={closeDialog}><X size={18} /></button>
            <span className="portal-settings-dialog__icon">{dialogData.danger ? <AlertTriangle size={21} /> : <Check size={21} />}</span>
            <span className="portal-settings-eyebrow">{dialogData.eyebrow}</span>
            <h2 id="portal-settings-dialog-title">{dialogData.title}</h2>
            <p>{dialogData.body}</p>
            {dialogData.confirm && <div className="portal-settings-dialog__actions"><button className="portal-settings-button portal-settings-button--quiet" type="button" onClick={closeDialog}>CANCEL</button><button className={`portal-settings-button ${dialogData.danger ? 'portal-settings-button--danger' : 'portal-settings-button--forest'}`} type="button" onClick={confirmDemoAction}>{dialogData.confirm}</button></div>}
            {!dialogData.confirm && <button className="portal-settings-button portal-settings-button--forest" type="button" onClick={closeDialog}>GOT IT <Check size={13} /></button>}
          </motion.section>
      </motion.div>}
    </main>
  </MotionConfig>
}
