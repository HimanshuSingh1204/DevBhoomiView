import { motion } from 'framer-motion'
import { BadgeCheck, Mountain, ShieldCheck } from 'lucide-react'
import { passportIdentity, passportSummary } from '../../../data/passport'

function DemoQrMark() {
  return <div className="portal-passport-qr" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
}

export function PassportIdentityProgress() {
  return (
    <section className="portal-passport-identity-progress" aria-label="Passport identity and journey completion">
      <motion.article className="portal-passport-identity" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .4, delay: .06 }}>
        <div className="portal-passport-identity__cover">
          <div className="portal-passport-identity__grain" />
          <div className="portal-passport-identity__top"><span><Mountain size={19} />{passportIdentity.organization}</span><b>PASSPORT <i /> DEMO</b></div>
          <div className="portal-passport-identity__body">
            <span className="portal-passport-identity__seal"><Mountain size={29} /></span>
            <div><span className="portal-eyebrow portal-eyebrow--gold">HIMALAYAN TRAVEL KEEPSAKE</span><h2>Traveler<br /><em>Passport</em></h2><p>{passportIdentity.tagline}</p></div>
          </div>
          <div className="portal-passport-identity__bottom"><span>UTTARAKHAND <i /> INDIA</span><span className="portal-passport-id">ID · {passportSummary.passportId}</span></div>
        </div>
        <div className="portal-passport-identity__details">
          <div className="portal-passport-identity__brand"><span><Mountain size={16} />{passportIdentity.organization}</span><span className="portal-passport-demo-pill"><i /> DEMO PASSPORT</span></div>
          <div className="portal-passport-identity__fields">
            <span><small>TRAVELER</small><strong>{passportSummary.traveler}</strong></span>
            <span><small>JOURNEY</small><strong>{passportSummary.journey}</strong></span>
            <span><small>JOURNEY STATUS</small><strong><i className="portal-passport-status-dot" />{passportSummary.status}</strong></span>
            <span><small>REGION</small><strong>{passportSummary.region}</strong></span>
          </div>
          <div className="portal-passport-identity__footer"><span>{passportIdentity.disclaimer}</span><DemoQrMark /></div>
        </div>
      </motion.article>
      <motion.section className="portal-passport-progress-card" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .4, delay: .12 }} aria-labelledby="portal-passport-progress-title">
        <div className="portal-passport-section-heading"><div><span className="portal-eyebrow">YOUR STORY IN PROGRESS</span><h2 id="portal-passport-progress-title">Your Journey Progress</h2></div><BadgeCheck size={20} /></div>
        <div className="portal-passport-progress-main"><div className="portal-passport-progress-ring" role="progressbar" aria-label="Sample journey completion" aria-valuemin={0} aria-valuemax={100} aria-valuenow={passportSummary.completionPercent}><svg viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="43" /><motion.circle cx="50" cy="50" r="43" initial={{ pathLength: 0 }} animate={{ pathLength: passportSummary.completionPercent / 100 }} transition={{ duration: .9, delay: .2 }} /></svg><strong>{passportSummary.completionPercent}<small>%</small></strong></div><div><span className="portal-eyebrow">JOURNEY COMPLETED</span><h3>{passportSummary.completedDays} <i>/</i> {passportSummary.totalDays} Days</h3><p>Your passport grows with every destination and experience you complete.</p></div></div>
        <div className="portal-passport-progress-track"><motion.i initial={{ width: 0 }} animate={{ width: `${passportSummary.completionPercent}%` }} transition={{ duration: .8, delay: .2 }} /></div>
        <div className="portal-passport-progress-facts"><span><small>DESTINATIONS</small><strong>{passportSummary.completedDestinations} / {passportSummary.totalDestinations}</strong></span><span><small>EXPERIENCES</small><strong>{passportSummary.completedExperiences} / {passportSummary.totalExperiences}</strong></span><span className="portal-passport-progress-mark"><ShieldCheck size={16} /><small>DEMO PROGRESS</small></span></div>
      </motion.section>
    </section>
  )
}
