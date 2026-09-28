import { KeyRound, ShieldCheck } from 'lucide-react'
import { SettingsCard } from './SettingsControls'

export type SecurityAction = 'change-password' | 'sign-out-devices'

export function SecuritySettings({ onAction }: { onAction: (action: SecurityAction) => void }) {
  return <SettingsCard eyebrow="SECURITY" title="Keep Your Account Secure" description="A quick look at demo account security details." className="portal-settings-security">
    <div className="portal-settings-security__facts"><div><span>ACCOUNT EMAIL</span><strong>traveller@example.com</strong><small>Illustrative demo contact</small></div><div><span>PASSWORD</span><strong aria-label="Demo password, hidden">••••••••••••</strong><small>No password is stored or managed here</small></div><div><span>LAST SIGN-IN</span><strong>Demo information</strong><small>Authentication is not connected</small></div></div>
    <div className="portal-settings-security__actions"><button type="button" className="portal-settings-button portal-settings-button--quiet" onClick={() => onAction('change-password')}><KeyRound size={14} /> CHANGE PASSWORD</button><button type="button" className="portal-settings-button portal-settings-button--quiet" onClick={() => onAction('sign-out-devices')}><ShieldCheck size={14} /> SIGN OUT ALL DEVICES</button></div>
  </SettingsCard>
}
