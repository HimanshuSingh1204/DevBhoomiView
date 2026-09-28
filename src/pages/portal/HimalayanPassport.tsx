import { useState } from 'react'
import { PassportHero } from '../../components/portal/passport/PassportHero'
import { PassportIdentityProgress } from '../../components/portal/passport/PassportIdentityProgress'
import { PassportStamps } from '../../components/portal/passport/PassportStamps'
import { PassportStampDetail } from '../../components/portal/passport/PassportStampDetail'
import { PassportCategories, PassportCheckInCard, PassportMemoryCta, PassportResponsibleTravel, PassportStats } from '../../components/portal/passport/PassportExtras'
import { passportStamps, type PassportStamp } from '../../data/passport'

export function HimalayanPassport() {
  const [selectedStamp, setSelectedStamp] = useState<PassportStamp>(passportStamps.find(({ id }) => id === 'chopta') ?? passportStamps[0])

  return (
    <div className="portal-himalayan-passport-page">
      <PassportHero />
      <PassportIdentityProgress />
      <section className="portal-passport-collection-layout" aria-label="Passport stamp collection and selected stamp details">
        <PassportStamps selectedStampId={selectedStamp.id} onSelectStamp={setSelectedStamp} />
        <PassportStampDetail stamp={selectedStamp} />
      </section>
      <PassportCheckInCard />
      <PassportStats />
      <PassportCategories />
      <PassportResponsibleTravel />
      <PassportMemoryCta />
      <p className="portal-dashboard-disclaimer">This digital passport is a visual prototype only. It does not provide identity verification, QR validation, real check-ins, or confirmed travel data.</p>
    </div>
  )
}
