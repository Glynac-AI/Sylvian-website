import configPromise from '@payload-config'
import { getPayload } from 'payload'

export async function getOfferings() {
    const payload = await getPayload({ config: configPromise })
    const result = await payload.find({
        collection: 'offerings',
        limit: 100,
        depth: 1,
        select: {
            title: true,
            image: true,
            noteType: true,
            fundingStatus: true,
            targetYield: true,
            investmentTerm: true,
            minimumInvestment: true,
            fundingProgress: true,
            totalProperties: true,
            geographicMarkets: true,
        },
    })
    return result.docs
}

export async function getOfferingById(id: string) {
    const payload = await getPayload({ config: configPromise })
    const result = await payload.find({
        collection: 'offerings',
        where: { id: { equals: id } },
        depth: 2, // resolves sponsor + image + sponsor's fields
        limit: 1,
    })
    return result.docs[0] ?? null
}

export async function getSponsors() {
    const payload = await getPayload({ config: configPromise })
    const result = await payload.find({
        collection: 'sponsors',
        limit: 100,
        depth: 1, // resolves logo + activePortfolios
    })
    return result.docs
}

export async function getSponsorById(id: string) {
    const payload = await getPayload({ config: configPromise })
    const result = await payload.find({
        collection: 'sponsors',
        where: { id: { equals: id } },
        depth: 2,
        limit: 1,
    })
    return result.docs[0] ?? null
}

export async function getOfferingsBySponsor(sponsorId: string) {
    const payload = await getPayload({ config: configPromise })
    const result = await payload.find({
        collection: 'offerings',
        where: { sponsor: { equals: sponsorId } },
        depth: 1,
        limit: 100,
        select: {
            title: true,
            image: true,
            noteType: true,
            fundingStatus: true,
            targetYield: true,
            investmentTerm: true,
            minimumInvestment: true,
        },
    })
    return result.docs
}