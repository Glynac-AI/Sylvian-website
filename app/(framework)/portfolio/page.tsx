import PortfolioHero from '@/components/portfolio/PortfolioHero'
import RoleDetails from '@/components/portfolio/RoleDetails'
import DirectComparisonSection from '@/components/portfolio/DirectComparisonSection'
import Comparisons from '@/components/portfolio/Comparisons'
import SuitabilitySection from '@/components/portfolio/SuitabilitySection'
import PageFooter from '@/components/layout/PageFooter'

export default function PortfolioPage() {
    return (
        <>
            <PortfolioHero />
            <RoleDetails />
            <DirectComparisonSection />
            <Comparisons />
            <SuitabilitySection />
            <PageFooter />
        </>
    )
}