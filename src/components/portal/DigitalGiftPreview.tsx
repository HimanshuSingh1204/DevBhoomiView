import { ArrowUpRight, Award, Check, Mountain } from 'lucide-react'
import { Link } from 'react-router-dom'
import { certificateData } from '../../data/certificate'

export function DigitalGiftPreview() {
  return (
    <section className="portal-certificate-card" aria-labelledby="portal-certificate-title">
      <div className="portal-card-heading"><div><span className="portal-eyebrow">A SAMPLE JOURNEY KEEPSAKE</span><h2 id="portal-certificate-title">My Certificate</h2></div><Link to="/my-journey/certificate">View Certificate <ArrowUpRight size={14} /></Link></div>
      <div className="portal-certificate-paper">
        <span className="portal-certificate-corner portal-certificate-corner--one" /><span className="portal-certificate-corner portal-certificate-corner--two" />
        <span className="portal-certificate-seal"><Mountain size={21} /></span>
        <span className="portal-certificate-brand">DEV BHOOMI TRIP · UTTARAKHAND</span>
        <Award size={18} className="portal-certificate-award" />
        <h3>CERTIFICATE OF JOURNEY</h3>
        <span className="portal-certificate-subtitle">THIS MOCK CERTIFICATE IS PRESENTED TO</span>
        <strong>{certificateData.travellerName.toUpperCase()}</strong>
        <i className="portal-certificate-rule" />
        <span className="portal-certificate-experience">{certificateData.journeyName.toUpperCase()}</span>
        <span className="portal-certificate-foot"><span><Check size={12} /> DEMO PREVIEW · NOT OFFICIAL</span><span>IN PROGRESS</span></span>
      </div>
      <p className="portal-card-disclaimer">Illustrative certificate layout only · not an official certificate of completion.</p>
    </section>
  )
}
