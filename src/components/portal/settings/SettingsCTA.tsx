import { ArrowLeft, ArrowRight, Mountain } from 'lucide-react'
import { Link } from 'react-router-dom'

export function SettingsCTA() {
  return <section className="portal-settings-cta">
    <span><Mountain size={19} /></span>
    <div><small>THE MOUNTAINS ARE WAITING</small><h2>Ready to Continue Your Journey?</h2><p>Return to your travel dashboard or revisit the details of your upcoming trip.</p></div>
    <nav><Link to="/my-journey" className="portal-settings-button portal-settings-button--gold"><ArrowLeft size={13} /> BACK TO MY JOURNEY</Link><Link to="/my-journey/trip" className="portal-settings-button portal-settings-button--glass">VIEW MY TRIP <ArrowRight size={13} /></Link></nav>
  </section>
}
