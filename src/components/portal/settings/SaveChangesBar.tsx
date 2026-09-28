import { Check, RotateCcw, Save } from 'lucide-react'
import { motion } from 'framer-motion'

export function SaveChangesBar({ dirty, savedNotice, onDiscard, onSave }: { dirty: boolean; savedNotice: boolean; onDiscard: () => void; onSave: () => void }) {
  return dirty || savedNotice ? <motion.aside className={`portal-settings-savebar${dirty ? ' is-dirty' : ' is-saved'}`} role={savedNotice && !dirty ? 'status' : 'region'} aria-label="Settings save status" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}>
      <span className="portal-settings-savebar__status">{savedNotice && !dirty ? <Check size={15} /> : <i />}{savedNotice && !dirty ? 'SAVED' : 'UNSAVED CHANGES'}</span>
      {dirty && <div><button type="button" className="portal-settings-button portal-settings-button--quiet" onClick={onDiscard}><RotateCcw size={13} /> DISCARD</button><button type="button" className="portal-settings-button portal-settings-button--gold" onClick={onSave}><Save size={13} /> SAVE CHANGES</button></div>}
    </motion.aside> : null
}
