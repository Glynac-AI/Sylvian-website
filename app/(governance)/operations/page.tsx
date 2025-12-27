import OperationsHero from '@/components/operations/OperationsHero'
import StepsSection from '@/components/operations/StepsSection'
import ReportingSection from '@/components/operations/ReportingSection'
import Prohibitions from '@/components/operations/Prohibitions'

export default function OperationsPage() {
    return (
        <>
            <OperationsHero />
            <StepsSection />
            <ReportingSection />
            <Prohibitions />
        </>
    )
}