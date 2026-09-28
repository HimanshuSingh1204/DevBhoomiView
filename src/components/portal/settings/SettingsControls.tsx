import { motion } from 'framer-motion'

export function SettingToggle({ id, label, checked, onChange, disabled = false }: { id: string; label: string; checked: boolean; onChange: (checked: boolean) => void; disabled?: boolean }) {
  return <button
    id={id}
    type="button"
    role="switch"
    aria-checked={checked}
    aria-label={label}
    disabled={disabled}
    className={`portal-settings-switch${checked ? ' is-on' : ''}`}
    onClick={() => onChange(!checked)}
  ><motion.i layout transition={{ type: 'spring', stiffness: 480, damping: 34 }} /></button>
}

export function SettingsSectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return <header className="portal-settings-section-heading">
    <span className="portal-settings-eyebrow">{eyebrow}</span>
    <h2>{title}</h2>
    {description && <p>{description}</p>}
  </header>
}

export function SettingsCard({ eyebrow, title, description, children, className = '' }: { eyebrow: string; title: string; description?: string; children: React.ReactNode; className?: string }) {
  return <motion.section
    className={`portal-settings-card ${className}`}
    initial={{ opacity: 0, y: 8 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: .08 }}
    transition={{ duration: .25 }}
  >
    <SettingsSectionHeading eyebrow={eyebrow} title={title} description={description} />
    {children}
  </motion.section>
}
