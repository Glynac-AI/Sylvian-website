import HowItWorksHero from '@/components/how-it-works/HowItWorksHero'
import ThreeLayersSection from '@/components/how-it-works/ThreeLayersSection'
import CapitalLeverageSection from '@/components/how-it-works/CapitalLeverageSection'
import WaterfallReserveSection from '@/components/how-it-works/WaterfallReserveSection'
import LifecycleSection from '@/components/how-it-works/LifecycleSection'
import PageFooter from '@/components/layout/PageFooter'

export default function HowItWorksPage() {
    return (
        <>
            <HowItWorksHero />
            <ThreeLayersSection />
            <CapitalLeverageSection />
            <WaterfallReserveSection />
            <LifecycleSection />
            <PageFooter />
        </>
    )
}