import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, BadgeCheck, Camera, Check, Compass, FileBadge, Globe2, HeartHandshake, Images, MapPin, Mountain, Music2, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { certificateAchievements, certificateData, certificatePurposePoints, certificateStats } from '../../../data/certificate'
import { passportSummary } from '../../../data/passport'
import { Image } from '../../Image'

const achievementIcons = { explored: MapPin, experienced: Compass, connected: HeartHandshake, remembered: Images }
const achievementStats = [
  { value: certificateStats.days, label: 'Days', icon: 'days' },
  { value: certificateStats.destinations, label: 'Destinations', icon: 'places' },
  { value: certificateStats.experiences, label: 'Experiences', icon: 'experiences' },
  { value: certificateStats.adventures, label: 'Adventures', icon: 'adventures' },
  { value: certificateStats.culturalMoments, label: 'Cultural Moments', icon: 'culture' },
  { value: certificateStats.memories, label: 'Memories', icon: 'memories' },
] as const
const statIcons = { days: FileBadge, places: MapPin, experiences: Compass, adventures: Mountain, culture: Music2, memories: Camera }

export function CertificateStatus() {
  return <section className="portal-certificate-status-card" aria-labelledby="portal-certificate-status-title">
    <div className="portal-certificate-status-card__copy"><span className="portal-eyebrow">CERTIFICATE STATUS</span><h2 id="portal-certificate-status-title">Your Certificate Will Be Ready At The End Of Your Journey.</h2><p>Complete your journey to unlock the final certificate.</p><span className="portal-certificate-status-pill"><i /> JOURNEY IN PROGRESS</span></div>
    <div className="portal-certificate-status-card__progress"><div className="portal-certificate-ring" role="progressbar" aria-label="Sample journey completion" aria-valuemin={0} aria-valuemax={100} aria-valuenow={certificateData.completionPercentage}><svg viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="43" /><motion.circle cx="50" cy="50" r="43" initial={{ pathLength: 0 }} whileInView={{ pathLength: certificateData.completionPercentage / 100 }} viewport={{ once: true }} transition={{ duration: .8 }} /></svg><strong>{certificateData.completionPercentage}<small>%</small></strong></div><div><span className="portal-eyebrow">JOURNEY COMPLETED</span><h3>{certificateData.completedDays} / {certificateData.duration} Days</h3><div className="portal-certificate-status-track"><motion.i initial={{ width: 0 }} whileInView={{ width: `${certificateData.completionPercentage}%` }} viewport={{ once: true }} transition={{ duration: .8, delay: .1 }} /></div><small>Current status: {certificateData.status}</small></div></div>
    <span className="portal-certificate-status-note"><BadgeCheck size={14} /> This preview is not certified or verified.</span>
  </section>
}

export function CertificateDetails() {
  const details = [
    ['Traveller', certificateData.travellerName, 'traveller'],
    ['Journey', certificateData.journeyName, 'journey'],
    ['Region', certificateData.region, 'region'],
    ['Duration', `${certificateData.duration} Days`, 'duration'],
    ['Destinations', String(certificateData.destinations), 'destinations'],
    ['Experiences', String(certificateData.experiences), 'experiences'],
    ['Certificate status', certificateData.status, 'status'],
    ['Certificate ID', certificateData.certificateId, 'certificate-id'],
  ]
  return <section className="portal-certificate-details-section" aria-labelledby="portal-certificate-details-title"><header className="portal-certificate-section-heading"><span className="portal-eyebrow">A FEW DETAILS</span><h2 id="portal-certificate-details-title">Certificate Details</h2></header><div className="portal-certificate-details-grid">{details.map(([label, value, id], index) => <motion.article key={id} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .22, delay: index * .025 }}><span>{label}</span><strong>{value}</strong>{id === 'status' && <i className="portal-certificate-detail-demo">DEMO</i>}</motion.article>)}</div></section>
}

export function CertificateMeaning() {
  return <section className="portal-certificate-meaning-section" aria-labelledby="portal-certificate-meaning-title"><header className="portal-certificate-section-heading"><span className="portal-eyebrow">MORE THAN A CERTIFICATE</span><h2 id="portal-certificate-meaning-title">A Record of the Journey.</h2></header><div className="portal-certificate-meaning-grid">{certificateAchievements.map(({ title, description, icon }, index) => { const Icon = achievementIcons[icon]; return <motion.article key={title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .24, delay: index * .04 }}><span><Icon size={20} /></span><small>{title}</small><p>{description}</p></motion.article> })}</div></section>
}

export function CertificateAchievements() {
  return <section className="portal-certificate-achievements" aria-labelledby="portal-certificate-achievements-title"><header className="portal-certificate-section-heading"><span className="portal-eyebrow">JOURNEY ACHIEVEMENTS · DEMO</span><h2 id="portal-certificate-achievements-title">A Journey at a Glance</h2></header><div className="portal-certificate-achievement-stats">{achievementStats.map(({ value, label, icon }, index) => { const Icon = statIcons[icon]; return <motion.article key={label} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .22, delay: index * .03 }}><span><Icon size={17} /></span><strong>{value}</strong><small>{label}</small></motion.article> })}</div><p>Sample journey counts · no verified activity or media is recorded.</p></section>
}

export function PassportConnection() {
  return <section className="portal-certificate-passport"><div className="portal-certificate-passport__copy"><span className="portal-eyebrow portal-eyebrow--gold"><Mountain size={13} /> YOUR HIMALAYAN PASSPORT</span><h2>Every Stamp Becomes Part of Your Story.</h2><p>Your digital passport records the destinations and experiences collected throughout the journey.</p><div className="portal-certificate-passport__counts"><span><b>{passportSummary.completedDestinations} / {passportSummary.totalDestinations}</b><small>Destinations</small></span><span><b>{passportSummary.completedExperiences} / {passportSummary.totalExperiences}</b><small>Experiences</small></span></div><Link to="/my-journey/passport" className="portal-button portal-button--gold">View My Passport <ArrowRight size={14} /></Link></div><div className="portal-certificate-passport__visual"><div className="portal-certificate-mini-passport"><span><Mountain size={17} /> DEV BHOOMI TRIP</span><i><Mountain size={28} /></i><strong>HIMALAYAN<br /><em>PASSPORT</em></strong><small>UTTARAKHAND · INDIA</small><b>DEMO KEEPSAKE</b></div><div className="portal-certificate-passport__stamp"><Check size={13} />{passportSummary.completedDestinations} sample destination stamps</div></div></section>
}

export function StoryConnection() {
  return <section className="portal-certificate-story-connection"><div><span className="portal-eyebrow">YOUR STORY</span><h2>The Certificate Marks the Journey.<br /><em>The Story Keeps It Alive.</em></h2><p>Return to your digital travel story and revisit the moments that made your journey unique.</p><Link to="/my-journey/story" className="portal-button portal-button--forest">Read My Trip Story <ArrowUpRight size={14} /></Link></div><span className="portal-certificate-story-connection__mark"><Images size={27} /></span></section>
}

export function CertificateActions({ onDownload, onExpand }: { onDownload: () => void; onExpand: () => void }) {
  return <section className="portal-certificate-actions"><div><span className="portal-eyebrow portal-eyebrow--gold">YOUR JOURNEY, PRESERVED</span><h2>Keep Your Journey With You.</h2><p>Your digital keepsake is a demo preview. Downloads will be available when the certificate service is connected.</p></div><div><button className="portal-button portal-button--gold" type="button" onClick={onDownload}>Download Certificate <ArrowRight size={14} /></button><button className="portal-button portal-button--glass" type="button" onClick={onExpand}>View Certificate <ArrowUpRight size={14} /></button></div></section>
}

export function CertificateShare({ onShare, onCopyLink }: { onShare: () => void; onCopyLink: () => void }) {
  return <section className="portal-certificate-share"><span><Globe2 size={19} /></span><div><span className="portal-eyebrow">SHARE YOUR JOURNEY</span><h2>A keepsake to share, in the future.</h2><p>A future version will allow you to share a verified version of your journey certificate. No public certificate or link is available now.</p></div><div><button type="button" className="portal-button portal-button--forest" onClick={onShare}>Share <ArrowUpRight size={13} /></button><button type="button" className="portal-button portal-button--outline" onClick={onCopyLink}>Copy Link <Check size={13} /></button></div></section>
}

export function CertificateVerification() {
  return <section className="portal-certificate-verification"><div><span className="portal-eyebrow">FUTURE VERIFICATION</span><h2>A Certificate That Can Be Verified.</h2><p>In a future version, each completed journey certificate can include a secure verification link or QR code.</p><strong><i /> VERIFICATION · COMING SOON</strong></div><div className="portal-certificate-fake-qr" role="img" aria-label="Decorative QR-style graphic, not scannable and not for verification"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><span>DEMO</span></div></section>
}

export function CertificateResponsibleTravel() {
  return <section className="portal-certificate-responsible"><span className="portal-certificate-responsible__icon"><HeartHandshake size={22} /></span><div><span className="portal-eyebrow portal-eyebrow--gold">TRAVEL WITH PURPOSE</span><h2>The Best Souvenir Is<br /><em>a Meaningful Journey.</em></h2></div><p>The certificate is a reminder that travel is not only about the places we visit. It is also about how respectfully we experience them and the communities and landscapes we encounter.</p><ul>{certificatePurposePoints.map((point) => <li key={point}><Check size={14} />{point}</li>)}</ul></section>
}

export function CertificateCTA() {
  return <section className="portal-certificate-final-cta"><Image id="photo-1470770841072-f978cf4d019e" alt="Illustrative Himalayan mountain valley in evening light" /><span /><div><span className="portal-eyebrow portal-eyebrow--gold"><Sparkles size={13} /> YOUR NEXT CHAPTER AWAITS</span><h2>Your Himalayan Story Doesn't End Here.</h2><p>Your passport, memories, story and certificate are pieces of one journey — a journey worth remembering.</p><nav><Link to="/my-journey/story" className="portal-button portal-button--gold">View My Story <ArrowRight size={14} /></Link><Link to="/my-journey" className="portal-button portal-button--glass">Return to Dashboard <ArrowUpRight size={14} /></Link></nav></div><small>ILLUSTRATIVE JOURNEY · DEMO PREVIEW</small></section>
}
