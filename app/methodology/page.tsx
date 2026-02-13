import Reveal from '@/components/layout/Reveal'
import ArrowList from '@/components/ui/ArrowList'
import BannerQuote from '@/components/ui/BannerQuote'
import Checklist from '@/components/ui/Checklist'
import SectionHeading from '@/components/ui/SectionHeading'

export default function MethodologyPage() {
  return (
    <>
      <section className="relative flex min-h-screen flex-col items-center justify-center">
        <div className="section-inner text-center">
          <Reveal>
            <SectionHeading
              line1="Institutional Oversight"
              line2="Standardized Contractual Discipline"
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
              Evidence is produced by placing sponsors under standardized contractual obligations and recording what happens when those obligations bind.
            </BannerQuote>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="section-inner">
          <Reveal>
            <SectionHeading
              line1="Operating Evidence"
              line2="Captured"
              size="lg"
              className="mb-8"
              as="h2"
            />
            <ArrowList
              items={[
                'Payment events and delinquencies',
                'Source of payments (Cash vs Capital)',
                'Reporting revisions and restatements',
              ]}
              className="text-slate-700"
            />
          </Reveal>
        </div>
      </section>

      <section>
        <div className="section-inner">
          <Reveal>
            <div className="flex items-center justify-between mb-6">
              <SectionHeading
                line1="Structural"
                line2="Safeguards"
                size="lg"
                as="h2"
              />
            </div>
            <Checklist
              items={[
                'Ring-fenced SPVs',
                'Standard covenant packages',
                'Uniform reserve requirements',
                'Defined payment mechanics',
              ]}
            />
          </Reveal>
        </div>
      </section>
    </>
  )
}
