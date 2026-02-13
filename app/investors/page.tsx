import Reveal from '@/components/layout/Reveal'
import BannerQuote from '@/components/ui/BannerQuote'
import Checklist from '@/components/ui/Checklist'
import SectionHeading from '@/components/ui/SectionHeading'

export default function InvestorsPage() {
  return (
    <>
      <section className="relative flex min-h-screen flex-col items-center justify-center">
        <div className="section-inner text-center">
          <Reveal>
            <SectionHeading
              line1="Institutional Capital"
              line2="Verified Operating Record"
              align="center"
              size="xl"
              className="mb-6"
              as="h1"
            />
          </Reveal>
        </div>
      </section>

      <section>
        <div className="section-inner">
          <Reveal>
            <BannerQuote backgroundClassName="bg-[#F5F5F3]">
              Sylvan provides institutional investors with verified sponsor operating records so allocation decisions can be made on evidence, not pitch decks.
            </BannerQuote>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="section-inner">
          <Reveal>
            <div className="rounded-2xl border border-[#174F3B]/20 bg-[#174F3B]/5 px-6 py-5 text-center">
              <div className="text-sm font-semibold uppercase tracking-[0.15em] text-[#174F3B]">
                THIS EVIDENCE INFORMS WHETHER A SPONSOR DEMONSTRATES THE OPERATIONAL DISCIPLINE REQUIRED FOR LONG-TERM CAPITAL, BEFORE THAT CAPITAL IS EVER DEPLOYED.
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="section-inner">
          <Reveal>
            <div className="flex items-center justify-between mb-6">
              <SectionHeading line1="Fiduciary" line2="Audit Trail" size="lg" as="h2" />
              <span className="rounded-full border border-slate-300 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-slate-600">
                Auditable Record
              </span>
            </div>
            <Checklist
              items={[
                'Documented sponsor monitoring',
                'Consistent oversight standards across sponsors',
                'Clear audit trails of disclosures and performance events',
                'Evidence-based decision processes',
              ]}
            />
          </Reveal>
        </div>
      </section>
    </>
  )
}
