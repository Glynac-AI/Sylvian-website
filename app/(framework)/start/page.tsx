import StartHero from '@/components/start/StartHero'
import StakeholdersSection from '@/components/start/StakeholdersSection'
import DefinitionSection from '@/components/start/DefinitionSection'
import DisciplineSummary from '@/components/start/DisciplineSummary'
import NextSteps from '@/components/start/NextSteps'
import PageFooter from '@/components/layout/PageFooter'

export default function StartPage() {
    return (
        <>
            <StartHero />
            <StakeholdersSection />
            <DisciplineSummary />
            <DefinitionSection />
            <NextSteps />
            <PageFooter />
        </>
    )
}