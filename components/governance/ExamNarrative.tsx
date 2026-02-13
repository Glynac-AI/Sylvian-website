import Reveal from '@/components/layout/Reveal'
import BannerQuote from '@/components/ui/BannerQuote'
import SectionHeading from '@/components/ui/SectionHeading'

export default function ExamNarrative() {
    return (
        <section>
            <div className="section-inner text-center">
                <Reveal>
                    <SectionHeading line1="Examination" line2="Narrative" align="center" size="lg" className="mb-8" />
                    <BannerQuote backgroundClassName="bg-slate-50" className="text-left text-lg">
                        Sylvan is a standardized private real estate income framework. The structure is approved once, assets are reviewed per issuance, and all materials and decisions are documented and version-controlled. There is no discretion to change leverage, priority, or rules after closing.
                    </BannerQuote>
                </Reveal>
            </div>
        </section>
    )
}