import OperationsHero from '@/components/operations/OperationsHero'
import StepsSection from '@/components/operations/StepsSection'
import ReportingSection from '@/components/operations/ReportingSection'
import DetailedProhibitions from '@/components/operations/DetailedProhibitions'

export default function OperationsPage() {
    return (
        <>
            <OperationsHero />
            <StepsSection />
            <ReportingSection />
            <DetailedProhibitions />
        </>
    )
}