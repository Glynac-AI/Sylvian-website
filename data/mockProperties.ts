// data/mockProperties.ts

export interface Property {
    id: number
    title: string
    location: string
    propertyType: string
    image: string
    targetYield: string
    investmentTerm: string
    minimumInvestment: string
    fundingStatus: 'Active' | 'Closing Soon' | 'Closed' // Updated types
    fundingProgress: number
    totalRaise: string
    description: string
    highlights: string[]
    // Detailed information for property detail page
    propertyDetails: {
        address: string
        yearBuilt: number
        totalUnits?: number
        squareFeet: number
        occupancyRate: string
        annualRent: string
        propertyValue: string
    }
    investmentStructure: {
        structureType: string
        seniorDebt: string
        loanToValue: string
        debtServiceCoverage: string
        reserveAmount: string
    }
    financials: {
        projectedAnnualReturn: string
        cashDistributionSchedule: string
        holdPeriod: string
        exitStrategy: string
    }
    documents: {
        category: string
        files: {
            name: string
            size: string
            uploadDate: string
        }[]
    }[]
}

export const mockProperties: Property[] = [
    {
        id: 1,
        title: 'Riverside Luxury Apartments',
        location: 'Austin, TX',
        propertyType: 'Multifamily',
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
        targetYield: '7.5%',
        investmentTerm: '5 years',
        minimumInvestment: '$25,000',
        fundingStatus: 'Active', // Changed
        fundingProgress: 45,
        totalRaise: '$5,000,000',
        description: 'Class A multifamily property with established rental income in a prime Austin location. This property features modern amenities, strong tenant demographics, and consistent cash flow performance.',
        highlights: ['95% occupancy rate', 'Recent renovations', 'Strong rental market'],
        propertyDetails: {
            address: '2500 Riverside Drive, Austin, TX 78741',
            yearBuilt: 2018,
            totalUnits: 120,
            squareFeet: 145000,
            occupancyRate: '95%',
            annualRent: '$3,240,000',
            propertyValue: '$28,500,000'
        },
        investmentStructure: {
            structureType: 'Ring-Fenced SPV with Lockbox',
            seniorDebt: '$17,100,000 (60% LTV)',
            loanToValue: '60%',
            debtServiceCoverage: '1.45x',
            reserveAmount: '$450,000'
        },
        financials: {
            projectedAnnualReturn: '7.5% - 8.2%',
            cashDistributionSchedule: 'Quarterly',
            holdPeriod: '5 years',
            exitStrategy: 'Refinance or Sale'
        },
        documents: [
            {
                category: 'Offering Documents',
                files: [
                    { name: 'Private Placement Memorandum', size: '2.4 MB', uploadDate: '2026-01-10' },
                    { name: 'Subscription Agreement', size: '856 KB', uploadDate: '2026-01-10' },
                    { name: 'Operating Agreement', size: '1.2 MB', uploadDate: '2026-01-10' }
                ]
            },
            {
                category: 'Property Information',
                files: [
                    { name: 'Property Appraisal Report', size: '5.6 MB', uploadDate: '2026-01-08' },
                    { name: 'Rent Roll', size: '324 KB', uploadDate: '2026-01-15' },
                    { name: 'Property Photos', size: '12.4 MB', uploadDate: '2026-01-08' },
                    { name: 'Floor Plans', size: '3.2 MB', uploadDate: '2026-01-08' }
                ]
            },
            {
                category: 'Financial Documents',
                files: [
                    { name: 'Pro Forma Financial Model', size: '1.8 MB', uploadDate: '2026-01-10' },
                    { name: 'Historical Financials (3 years)', size: '945 KB', uploadDate: '2026-01-10' },
                    { name: 'Operating Budget 2026', size: '456 KB', uploadDate: '2026-01-12' }
                ]
            },
            {
                category: 'Legal & Compliance',
                files: [
                    { name: 'Title Insurance Policy', size: '2.1 MB', uploadDate: '2026-01-05' },
                    { name: 'Environmental Report (Phase I)', size: '4.2 MB', uploadDate: '2026-01-05' },
                    { name: 'Property Survey', size: '8.9 MB', uploadDate: '2026-01-05' },
                    { name: 'Zoning Documentation', size: '1.5 MB', uploadDate: '2026-01-05' }
                ]
            },
            {
                category: 'Loan Documents',
                files: [
                    { name: 'Senior Loan Agreement', size: '3.4 MB', uploadDate: '2026-01-07' },
                    { name: 'Lockbox Agreement', size: '876 KB', uploadDate: '2026-01-07' },
                    { name: 'Intercreditor Agreement', size: '1.1 MB', uploadDate: '2026-01-07' }
                ]
            }
        ]
    },
    {
        id: 2,
        title: 'Downtown Office Complex',
        location: 'Nashville, TN',
        propertyType: 'Commercial',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
        targetYield: '6.8%',
        investmentTerm: '7 years',
        minimumInvestment: '$50,000',
        fundingStatus: 'Closing Soon', // Changed
        fundingProgress: 78,
        totalRaise: '$8,500,000',
        description: 'Premium office space with long-term corporate tenants and stable cash flows. Located in Nashville\'s central business district with excellent access to transportation and amenities.',
        highlights: ['10-year lease agreements', 'Fortune 500 tenants', 'Prime downtown location'],
        propertyDetails: {
            address: '500 Commerce Street, Nashville, TN 37203',
            yearBuilt: 2015,
            squareFeet: 185000,
            occupancyRate: '92%',
            annualRent: '$5,920,000',
            propertyValue: '$42,000,000'
        },
        investmentStructure: {
            structureType: 'Ring-Fenced SPV with Lockbox',
            seniorDebt: '$25,200,000 (60% LTV)',
            loanToValue: '60%',
            debtServiceCoverage: '1.52x',
            reserveAmount: '$680,000'
        },
        financials: {
            projectedAnnualReturn: '6.8% - 7.5%',
            cashDistributionSchedule: 'Quarterly',
            holdPeriod: '7 years',
            exitStrategy: 'Refinance or Sale'
        },
        documents: [
            {
                category: 'Offering Documents',
                files: [
                    { name: 'Private Placement Memorandum', size: '2.8 MB', uploadDate: '2026-01-05' },
                    { name: 'Subscription Agreement', size: '921 KB', uploadDate: '2026-01-05' },
                    { name: 'Operating Agreement', size: '1.4 MB', uploadDate: '2026-01-05' }
                ]
            },
            {
                category: 'Property Information',
                files: [
                    { name: 'Property Appraisal Report', size: '6.2 MB', uploadDate: '2026-01-03' },
                    { name: 'Tenant Lease Abstracts', size: '1.2 MB', uploadDate: '2026-01-10' },
                    { name: 'Property Photos', size: '15.8 MB', uploadDate: '2026-01-03' },
                    { name: 'Building Plans', size: '4.5 MB', uploadDate: '2026-01-03' }
                ]
            },
            {
                category: 'Financial Documents',
                files: [
                    { name: 'Pro Forma Financial Model', size: '2.1 MB', uploadDate: '2026-01-05' },
                    { name: 'Historical Financials (5 years)', size: '1.5 MB', uploadDate: '2026-01-05' },
                    { name: 'Operating Budget 2026', size: '523 KB', uploadDate: '2026-01-08' }
                ]
            },
            {
                category: 'Legal & Compliance',
                files: [
                    { name: 'Title Insurance Policy', size: '2.4 MB', uploadDate: '2025-12-28' },
                    { name: 'Environmental Report (Phase I)', size: '3.8 MB', uploadDate: '2025-12-28' },
                    { name: 'Property Survey', size: '10.2 MB', uploadDate: '2025-12-28' },
                    { name: 'Zoning Documentation', size: '1.7 MB', uploadDate: '2025-12-28' }
                ]
            },
            {
                category: 'Loan Documents',
                files: [
                    { name: 'Senior Loan Agreement', size: '3.9 MB', uploadDate: '2026-01-02' },
                    { name: 'Lockbox Agreement', size: '945 KB', uploadDate: '2026-01-02' },
                    { name: 'Intercreditor Agreement', size: '1.3 MB', uploadDate: '2026-01-02' }
                ]
            }
        ]
    },
    {
        id: 3,
        title: 'Suburban Retail Center',
        location: 'Denver, CO',
        propertyType: 'Retail',
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
        targetYield: '7.2%',
        investmentTerm: '5 years',
        minimumInvestment: '$35,000',
        fundingStatus: 'Active', // Changed
        fundingProgress: 23,
        totalRaise: '$4,200,000',
        description: 'Anchored retail center with diverse tenant mix in a high-growth suburban market. Strong traffic patterns and excellent visibility from major thoroughfares.',
        highlights: ['National retail anchors', 'High traffic location', 'Strong demographics'],
        propertyDetails: {
            address: '8900 Park Meadows Drive, Denver, CO 80124',
            yearBuilt: 2012,
            squareFeet: 95000,
            occupancyRate: '88%',
            annualRent: '$2,375,000',
            propertyValue: '$18,500,000'
        },
        investmentStructure: {
            structureType: 'Ring-Fenced SPV with Lockbox',
            seniorDebt: '$11,100,000 (60% LTV)',
            loanToValue: '60%',
            debtServiceCoverage: '1.38x',
            reserveAmount: '$350,000'
        },
        financials: {
            projectedAnnualReturn: '7.2% - 7.8%',
            cashDistributionSchedule: 'Quarterly',
            holdPeriod: '5 years',
            exitStrategy: 'Sale'
        },
        documents: [
            {
                category: 'Offering Documents',
                files: [
                    { name: 'Private Placement Memorandum', size: '2.2 MB', uploadDate: '2026-01-12' },
                    { name: 'Subscription Agreement', size: '798 KB', uploadDate: '2026-01-12' },
                    { name: 'Operating Agreement', size: '1.1 MB', uploadDate: '2026-01-12' }
                ]
            },
            {
                category: 'Property Information',
                files: [
                    { name: 'Property Appraisal Report', size: '4.8 MB', uploadDate: '2026-01-10' },
                    { name: 'Tenant Lease Abstracts', size: '845 KB', uploadDate: '2026-01-14' },
                    { name: 'Property Photos', size: '10.2 MB', uploadDate: '2026-01-10' },
                    { name: 'Site Plan', size: '2.8 MB', uploadDate: '2026-01-10' }
                ]
            },
            {
                category: 'Financial Documents',
                files: [
                    { name: 'Pro Forma Financial Model', size: '1.6 MB', uploadDate: '2026-01-12' },
                    { name: 'Historical Financials (3 years)', size: '867 KB', uploadDate: '2026-01-12' },
                    { name: 'Operating Budget 2026', size: '412 KB', uploadDate: '2026-01-13' }
                ]
            },
            {
                category: 'Legal & Compliance',
                files: [
                    { name: 'Title Insurance Policy', size: '1.9 MB', uploadDate: '2026-01-08' },
                    { name: 'Environmental Report (Phase I)', size: '3.5 MB', uploadDate: '2026-01-08' },
                    { name: 'Property Survey', size: '7.4 MB', uploadDate: '2026-01-08' },
                    { name: 'Zoning Documentation', size: '1.3 MB', uploadDate: '2026-01-08' }
                ]
            },
            {
                category: 'Loan Documents',
                files: [
                    { name: 'Senior Loan Agreement', size: '3.1 MB', uploadDate: '2026-01-09' },
                    { name: 'Lockbox Agreement', size: '823 KB', uploadDate: '2026-01-09' },
                    { name: 'Intercreditor Agreement', size: '1.0 MB', uploadDate: '2026-01-09' }
                ]
            }
        ]
    }
]

// Helper function to get property by ID
export function getPropertyById(id: number): Property | undefined {
    return mockProperties.find(property => property.id === id)
}