import { ScanBeam } from '@/components/scan-beam'
import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { MetricsMarquee } from '@/components/metrics-marquee'
import { CoreSection } from '@/components/core-section'
import { Services } from '@/components/services'
import { Industries } from '@/components/industries'
import { DemoSection } from '@/components/demo-section'
import { Pricing } from '@/components/pricing'
import { Manifesto } from '@/components/manifesto'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <ScanBeam />
      <SiteHeader />
      <main>
        <Hero />
        <MetricsMarquee />
        <CoreSection />
        <Services />
        <Industries />
        <DemoSection />
        <Pricing />
        <Manifesto />
      </main>
      <SiteFooter />
    </>
  )
}
