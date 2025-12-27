import DSTExplainedHero from '@/components/dst-explained/DSTExplainedHero'
import DSTComparison from '@/components/dst-explained/DSTComparison'
import DSTDetailedInfo from '@/components/dst-explained/DSTDetailedInfo'
import DSTMyths from '@/components/dst-explained/DSTMyths'

export default function DSTExplainedPage() {
    return (
        <>
            <DSTExplainedHero />
            <DSTComparison />
            <DSTDetailedInfo />
            <DSTMyths />
        </>
    )
}