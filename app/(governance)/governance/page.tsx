import GovernanceHero from '@/components/governance/GovernanceHero'
import CIOFramework from '@/components/governance/CIOFramework'
import StandardsSection from '@/components/governance/StandardsSection'
import ComplianceControls from '@/components/governance/ComplianceControls'
import ExamNarrative from '@/components/governance/ExamNarrative'

export default function GovernancePage() {
    return (
        <>
            <GovernanceHero />
            <CIOFramework />
            <StandardsSection />
            <ComplianceControls />
            <ExamNarrative />
        </>
    )
}