import ImplHero from '@/components/implementation/ImplHero'
import ResourcesGrid from '@/components/implementation/ResourcesGrid'
import CommAndChecklists from '@/components/implementation/CommAndChecklists'
import CustomizationBoundaries from '@/components/implementation/CustomizationBoundaries'

export default function ImplementationPage() {
    return (
        <>
            <ImplHero />
            <ResourcesGrid />
            <CommAndChecklists />
            <CustomizationBoundaries />
        </>
    )
}