import IncomeHero from '@/components/income-downside/IncomeHero'
import DownsideMechanics from '@/components/income-downside/DownsideMechanics'
import WaterfallRecap from '@/components/income-downside/WaterfallRecap'
import ProhibitionsSection from '@/components/income-downside/ProhibitionsSection'
import StressRecoverySection from '@/components/income-downside/StressRecoverySection'

export default function IncomeDownsidePage() {
    return (
        <>
            <IncomeHero />
            <WaterfallRecap />
            <DownsideMechanics />
            <ProhibitionsSection />
            <StressRecoverySection />
        </>
    )
}