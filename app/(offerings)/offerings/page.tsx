import OfferingsHero from '@/components/offerings/OfferingsHero'
import CommonFramework from '@/components/offerings/CommonFramework'
import CoreSection from '@/components/offerings/CoreSection'
import OffsetSection from '@/components/offerings/OffsetSection'
import DSTSection from '@/components/offerings/DSTSection'

export default function OfferingsPage() {
    return (
        <>
            <OfferingsHero />
            <CommonFramework />
            
            {/* The 3 Paths (Now directly on the page) */}
            <div className="bg-slate-50 pt-24">
                 <div className="mx-auto max-w-[1280px] px-6 text-center">
                    <h2 className="text-3xl font-bold text-slate-900 lg:text-4xl">
                        Available Access Paths
                    </h2>
                    <p className="mt-4 text-lg text-slate-600">
                        Choose the timing and structure that fits your portfolio.
                    </p>
                 </div>
            </div>

            <CoreSection />
            <OffsetSection />
            <DSTSection />
        </>
    )
}