import GovernanceHero from '@/components/governance/GovernanceHero'
import CIOFramework from '@/components/governance/CIOFramework'
import ComplianceControls from '@/components/governance/ComplianceControls'
import ExamNarrative from '@/components/governance/ExamNarrative'

export default function GovernancePage() {
    return (
        <>
            <GovernanceHero />
            <CIOFramework />
            <ComplianceControls />
            <ExamNarrative />
        </>
    )
}
