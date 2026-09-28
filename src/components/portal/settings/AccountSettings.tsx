import { AlertTriangle, LogOut, UserRoundX } from 'lucide-react'
import { SettingsCard } from './SettingsControls'

export type AccountAction = 'sign-out' | 'delete-account'

export function AccountSettings({ onAction }: { onAction: (action: AccountAction) => void }) {
  return <SettingsCard eyebrow="ACCOUNT" title="Manage Your Account" description="Demo controls only. Account actions are not connected." className="portal-settings-account">
    <div className="portal-settings-account__note"><AlertTriangle size={17} /><span>No real account, session or journey data will be changed by these actions.</span></div>
    <div className="portal-settings-account__actions"><button type="button" className="portal-settings-button portal-settings-button--quiet" onClick={() => onAction('sign-out')}><LogOut size={14} /> SIGN OUT</button><button type="button" className="portal-settings-button portal-settings-button--danger" onClick={() => onAction('delete-account')}><UserRoundX size={14} /> DELETE ACCOUNT</button></div>
  </SettingsCard>
}
