import OfferingsHero from '@/components/offerings/OfferingsHero'
import CommonFramework from '@/components/offerings/CommonFramework'
import OfferingsDefinitions from '@/components/offerings/OfferingsDefinitions'
import EligibilityCriteria from '@/components/offerings/EligibilityCriteria'
import PathsSection from '@/components/offerings/PathsSection' 

export default function OfferingsPage() {
    return (
        <>
            <OfferingsHero />
            <CommonFramework />
            
            {/* Page 5: Definitions & Overview */}
            <OfferingsDefinitions />

            {/* Navigation to Sub-pages */}
            <PathsSection />

            {/* General Eligibility (Page 18 content that applies to all) */}
            <EligibilityCriteria />
        </>
    )
}