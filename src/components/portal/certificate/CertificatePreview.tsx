import { motion } from 'framer-motion'
import { Mountain, Sparkles } from 'lucide-react'
import { certificateData } from '../../../data/certificate'

type CertificatePaperProps = {
  compact?: boolean
}

export function CertificatePaper({ compact = false }: CertificatePaperProps) {
  return <article className={`portal-certificate-document ${compact ? 'is-compact' : ''}`} aria-label="Demo certificate preview">
    <div className="portal-certificate-document__frame" />
    <span className="portal-certificate-document__brand"><Mountain size={18} /> DEV BHOOMI TRIP <i /> UTTARAKHAND</span>
    <span className="portal-certificate-document__mark" aria-hidden="true"><Mountain size={22} /></span>
    <span className="portal-certificate-document__eyebrow">A DIGITAL TRAVEL KEEPSAKE · DEMO</span>
    <h2>CERTIFICATE<br /><em>OF JOURNEY</em></h2>
    <span className="portal-certificate-document__presented">THIS DEMO KEEPSAKE IS FOR</span>
    <strong className="portal-certificate-document__traveller">{certificateData.travellerName.toUpperCase()}</strong>
    <i className="portal-certificate-document__rule" />
    <span className="portal-certificate-document__for">a journey in progress ·</span>
    <strong className="portal-certificate-document__journey">{certificateData.journeyName.toUpperCase()}</strong>
    <p>through the landscapes, culture, food and experiences of Uttarakhand.</p>
    <div className="portal-certificate-document__landscape" aria-hidden="true"><svg viewBox="0 0 900 125" preserveAspectRatio="none"><path d="M0 104 105 52l56 34 103-68 91 61 86-44 88 57 81-53 81 51 98-72 111 64v63H0Z" /><path d="m0 111 144-39 76 29 107-51 74 44 95-29 81 35 87-42 78 37 102-34 56 23v41H0Z" /></svg></div>
    <div className="portal-certificate-document__signatures"><span><i />DEV BHOOMI TRIP<strong>Journey Team</strong></span><span><i />TRAVEL KEEPSAKE<strong>Uttarakhand · India</strong></span></div>
    <footer><span>JOURNEY <b>DEV BHOOMI TRIP</b></span><span>DESTINATION <b>UTTARAKHAND · INDIA</b></span><span>ID <b>{certificateData.certificateId}</b></span></footer>
    <span className="portal-certificate-document__demo"><Sparkles size={12} /> DEMO PREVIEW · NOT OFFICIAL · NOT VERIFIED</span>
  </article>
}

export function CertificatePreview({ onExpand }: { onExpand: () => void }) {
  return <section className="portal-certificate-preview-section" aria-labelledby="portal-certificate-preview-heading">
    <header className="portal-certificate-section-heading"><span className="portal-eyebrow">A KEEPSAKE OF THE JOURNEY</span><h2 id="portal-certificate-preview-heading">Your Digital Journey Certificate</h2><p>A visual preview only; this is not a verified or official certificate.</p></header>
    <motion.div className="portal-certificate-document-wrap" initial={{ opacity: 0, y: 14, scale: .99 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ duration: .42 }}><CertificatePaper /></motion.div>
    <button type="button" className="portal-certificate-expand" onClick={onExpand}>View Larger Certificate</button>
  </section>
}
