// app/offerings/page.tsx
import OfferingsClient from './OfferingsClient'
import { getOfferings } from '@/lib/payload'

export default async function OfferingsPage() {
    const offerings = await getOfferings()
    return <OfferingsClient offerings={offerings} />
}