import { motion } from 'framer-motion'
import { Mountain } from 'lucide-react'
import { Image } from '../../Image'
import type { TravellerProfile } from '../../../data/settings'

export function SettingsHero({ profile }: { profile: TravellerProfile }) {
  return <motion.section className="portal-settings-hero" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .3 }}>
    <Image id="photo-1464822759023-fed622ff2c3b" alt="" />
    <span className="portal-settings-hero__shade" />
    <div className="portal-settings-hero__copy">
      <span className="portal-settings-eyebrow portal-settings-eyebrow--gold">YOUR JOURNEY</span>
      <h2>Journey <em>Settings</em></h2>
      <p>Personalise how your Devbhoomi Trip experience works for you.</p>
    </div>
    <aside className="portal-settings-hero__traveller">
      <span>TRAVELLER PROFILE</span>
      <div><i>{`${profile.firstName.charAt(0)}${profile.lastName.charAt(0)}`}</i><strong>{profile.firstName} {profile.lastName}<small>EXPLORER</small></strong></div>
      <span className="portal-settings-hero__mountain"><Mountain size={13} /> DEV BHOOMI TRIP · DEMO</span>
    </aside>
    <small className="portal-settings-hero__caption">YOUR PERSONAL JOURNEY · DEMO EXPERIENCE</small>
  </motion.section>
}
