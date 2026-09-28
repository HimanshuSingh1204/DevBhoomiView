import { AnimatePresence, motion } from 'framer-motion'
import { Check, Download, Link2, Share2, X } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'
import { CertificateHero } from '../../components/portal/certificate/CertificateHero'
import { CertificatePaper, CertificatePreview } from '../../components/portal/certificate/CertificatePreview'
import { CertificateAchievements, CertificateActions, CertificateCTA, CertificateDetails, CertificateMeaning, CertificateResponsibleTravel, CertificateShare, CertificateStatus, CertificateVerification, PassportConnection, StoryConnection } from '../../components/portal/certificate/CertificateSections'

type CertificateDialogKind = 'preview' | 'download' | 'share' | 'copy'

const dialogContent: Record<Exclude<CertificateDialogKind, 'preview'>, { icon: 'download' | 'share' | 'copy'; eyebrow: string; title: string; description: string }> = {
  download: { icon: 'download', eyebrow: 'DEMO DOWNLOAD', title: 'This keepsake is a demo preview.', description: 'A downloadable file may be available when a certificate service is connected. No document has been created.' },
  share: { icon: 'share', eyebrow: 'SHARE YOUR JOURNEY', title: 'A journey to share, someday.', description: 'Public sharing is not available for this demo. No certificate URL has been published.' },
  copy: { icon: 'copy', eyebrow: 'PRIVATE BY DESIGN', title: 'There is no public link to copy.', description: 'A shareable link can be offered in a future version. This demo keeps your journey private and does not create a public URL.' },
}

export function Certificate() {
  const [dialog, setDialog] = useState<CertificateDialogKind | null>(null)
  const closeDialog = useCallback(() => setDialog(null), [])

  useEffect(() => {
    if (!dialog) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeDialog()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [dialog, closeDialog])

  return <main className="portal-certificate-page">
    <CertificateHero />
    <CertificateStatus />
    <CertificatePreview onExpand={() => setDialog('preview')} />
    <CertificateDetails />
    <CertificateMeaning />
    <CertificateAchievements />
    <PassportConnection />
    <StoryConnection />
    <CertificateActions onDownload={() => setDialog('download')} onExpand={() => setDialog('preview')} />
    <CertificateShare onShare={() => setDialog('share')} onCopyLink={() => setDialog('copy')} />
    <CertificateVerification />
    <CertificateResponsibleTravel />
    <CertificateCTA />
    <p className="portal-dashboard-disclaimer">Frontend-only demo preview. Journey details, progress and achievements are illustrative. This is not an official, verified or legal certificate; no certificate file, signature, verification record or public URL is generated.</p>
    <AnimatePresence>
      {dialog && <motion.div className="portal-certificate-dialog" role="dialog" aria-modal="true" aria-labelledby="portal-certificate-dialog-title" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(event) => { if (event.target === event.currentTarget) closeDialog() }}>
        <motion.div className={`portal-certificate-dialog__card ${dialog === 'preview' ? 'is-preview' : ''}`} initial={{ opacity: 0, y: 14, scale: .985 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 8 }}>
          <button type="button" className="portal-certificate-dialog__close" aria-label="Close certificate dialog" onClick={closeDialog}><X size={18} /></button>
          {dialog === 'preview' ? <><span className="portal-eyebrow" id="portal-certificate-dialog-title">LARGER CERTIFICATE PREVIEW · DEMO</span><div className="portal-certificate-dialog__paper"><CertificatePaper /></div><p>Demo keepsake only · Not official · Not verified</p></> : (() => { const content = dialogContent[dialog]; const Icon = content.icon === 'download' ? Download : content.icon === 'share' ? Share2 : Link2; return <><span className="portal-certificate-dialog__icon"><Icon size={21} /></span><span className="portal-eyebrow">{content.eyebrow}</span><h2 id="portal-certificate-dialog-title">{content.title}</h2><p>{content.description}</p><span className="portal-certificate-dialog__note"><Check size={13} /> DEMO ONLY · NO ACTION WAS COMPLETED</span><button type="button" className="portal-button portal-button--forest" onClick={closeDialog}>Continue <X size={13} /></button></> })()}
        </motion.div>
      </motion.div>}
    </AnimatePresence>
  </main>
}
