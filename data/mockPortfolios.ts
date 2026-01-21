// data/mockPortfolios.ts

export interface PropertyInPortfolio {
    name: string
    location: string
    propertyType: string
    image: string
    squareFeet: number
    occupancyRate: string
    yearBuilt: number
    totalUnits?: number
    annualRent: string
    propertyValue: string
}

export interface Portfolio {
    id: number
    title: string
    strategy: string // e.g., 'Diversified Growth', 'Income-Focused', 'Value-Add'
    image: string
    targetYield: string
    investmentTerm: string
    minimumInvestment: string
    fundingStatus: 'Available' | 'Funding' | 'Funded'
    fundingProgress: number
    totalRaise: string
    description: string
    highlights: string[]

    // Portfolio-specific aggregates
    portfolioMetrics: {
        totalProperties: number
        totalValue: string
        averageOccupancy: string
        totalSquareFeet: number
        totalUnits: number
        geographicMarkets: string[] // e.g., ['Austin, TX', 'Nashville, TN']
    }

    // Property mix/allocation
    propertyAllocation: {
        type: string // e.g., 'Multifamily', 'Commercial', 'Retail'
        percentage: number
        count: number
    }[]

    // Risk diversification
    diversification: {
        geographicDiversification: string // e.g., '4 markets across 3 states'
        assetTypeDiversification: string // e.g., '3 asset classes'
        tenantDiversification: string // e.g., '50+ unique tenants'
    }

    // Risk Factors
    riskFactors: {
        risk: string
        description: string
        mitigation: string
    }[]

    // Sponsor Profile
    sponsorProfile: {
        name: string
        totalAUM: string
        historicalPerformance: string
        propertiesManaged: number
        yearsInBusiness: number
        teamSize: string
        description: string
    }

    // Individual properties in the portfolio
    properties: PropertyInPortfolio[]

    // Capital Stack (for visualization)
    capitalStack: {
        layer: string // 'Senior Debt', 'Junior Debt', 'Preferred Equity', 'Common Equity'
        amount: string
        percentage: number
        yieldRange?: string
    }[]

    // Investment structure (aggregate)
    investmentStructure: {
        structureType: string
        totalSeniorDebt: string
        weightedAvgLTV: string
        weightedAvgDSCR: string
        totalReserves: string
    }

    // Financial information (aggregate)
    financials: {
        projectedAnnualReturn: string
        cashDistributionSchedule: string
        holdPeriod: string
        exitStrategy: string
        totalAnnualRent: string
    }

    // Documents for the portfolio
    documents: {
        category: string
        files: {
            name: string
            size: string
            uploadDate: string
            isGated?: boolean // If true, requires form submission to access
        }[]
    }[]
}

export const mockPortfolios: Portfolio[] = [
    {
        id: 1,
        title: 'Sunbelt Multifamily Growth Portfolio',
        strategy: 'Diversified Growth',
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
        targetYield: '7.8%',
        investmentTerm: '5 years',
        minimumInvestment: '$50,000',
        fundingStatus: 'Available',
        fundingProgress: 42,
        totalRaise: '$18,500,000',
        description: 'A carefully curated portfolio of Class A multifamily properties across high-growth Sunbelt markets. This diversified portfolio combines stable cash flow with appreciation potential in markets experiencing strong population and job growth.',
        highlights: [
            'Diversified across 4 high-growth markets',
            'Average 94% occupancy rate',
            'Properties built 2015 or newer',
            'Strong institutional-quality assets'
        ],
        portfolioMetrics: {
            totalProperties: 4,
            totalValue: '$112,000,000',
            averageOccupancy: '94%',
            totalSquareFeet: 520000,
            totalUnits: 485,
            geographicMarkets: ['Austin, TX', 'Phoenix, AZ', 'Charlotte, NC', 'Nashville, TN']
        },
        propertyAllocation: [
            { type: 'Multifamily', percentage: 100, count: 4 }
        ],
        diversification: {
            geographicDiversification: '4 markets across 4 states',
            assetTypeDiversification: 'Class A Multifamily',
            tenantDiversification: '485+ residential tenants'
        },
        riskFactors: [
            {
                risk: 'Interest Rate Risk',
                description: 'Rising interest rates may increase borrowing costs and reduce property valuations, potentially impacting returns and refinancing options.',
                mitigation: 'Fixed-rate senior debt locked for 5 years provides stable financing costs. Debt is structured at 60% LTV, providing equity cushion against valuation changes.'
            },
            {
                risk: 'Vacancy Risk',
                description: 'Extended vacancy periods or tenant turnover could reduce rental income and impact cash distributions to investors.',
                mitigation: 'Portfolio currently maintains 94% average occupancy across high-demand Sunbelt markets with strong job growth. Properties are Class A quality attracting stable tenant base.'
            }
        ],
        sponsorProfile: {
            name: 'Sylvan Capital',
            totalAUM: '$500M+',
            historicalPerformance: 'Avg. Realized IRR: 14.2%',
            propertiesManaged: 45,
            yearsInBusiness: 12,
            teamSize: '25+ professionals',
            description: 'Sylvan Capital is a vertically integrated real estate investment and management firm specializing in multifamily and commercial properties across high-growth markets. Our experienced team combines institutional-grade underwriting with hands-on asset management.'
        },
        capitalStack: [
            {
                layer: 'Senior Debt',
                amount: '$67,200,000',
                percentage: 60,
                yieldRange: '5.5% - 6.0%'
            },
            {
                layer: 'Preferred Equity',
                amount: '$22,400,000',
                percentage: 20,
                yieldRange: '9.0% - 10.0%'
            },
            {
                layer: 'Common Equity',
                amount: '$22,400,000',
                percentage: 20,
                yieldRange: '12.0% - 15.0%'
            }
        ],
        properties: [
            {
                name: 'Riverside Luxury Apartments',
                location: 'Austin, TX',
                propertyType: 'Multifamily',
                image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
                squareFeet: 145000,
                occupancyRate: '95%',
                yearBuilt: 2018,
                totalUnits: 120,
                annualRent: '$3,240,000',
                propertyValue: '$28,500,000'
            },
            {
                name: 'Desert Vista Residences',
                location: 'Phoenix, AZ',
                propertyType: 'Multifamily',
                image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
                squareFeet: 132000,
                occupancyRate: '93%',
                yearBuilt: 2019,
                totalUnits: 115,
                annualRent: '$2,875,000',
                propertyValue: '$26,200,000'
            },
            {
                name: 'Queen City Gardens',
                location: 'Charlotte, NC',
                propertyType: 'Multifamily',
                image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80',
                squareFeet: 128000,
                occupancyRate: '96%',
                yearBuilt: 2017,
                totalUnits: 125,
                annualRent: '$2,950,000',
                propertyValue: '$27,800,000'
            },
            {
                name: 'Music Row Apartments',
                location: 'Nashville, TN',
                propertyType: 'Multifamily',
                image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&q=80',
                squareFeet: 115000,
                occupancyRate: '92%',
                yearBuilt: 2020,
                totalUnits: 125,
                annualRent: '$3,180,000',
                propertyValue: '$29,500,000'
            }
        ],
        investmentStructure: {
            structureType: 'Ring-Fenced SPV Structure with Individual Lockboxes',
            totalSeniorDebt: '$67,200,000',
            weightedAvgLTV: '60%',
            weightedAvgDSCR: '1.48x',
            totalReserves: '$1,850,000'
        },
        financials: {
            projectedAnnualReturn: '7.8% - 8.5%',
            cashDistributionSchedule: 'Quarterly',
            holdPeriod: '5 years',
            exitStrategy: 'Selective refinance or portfolio sale',
            totalAnnualRent: '$12,245,000'
        },
        documents: [
            {
                category: 'Offering Documents',
                files: [
                    { name: 'Portfolio Private Placement Memorandum', size: '4.8 MB', uploadDate: '2026-01-10', isGated: true },
                    { name: 'Subscription Agreement', size: '1.2 MB', uploadDate: '2026-01-10', isGated: true },
                    { name: 'Operating Agreement', size: '1.8 MB', uploadDate: '2026-01-10', isGated: true },
                    { name: 'Portfolio Strategy Overview', size: '2.1 MB', uploadDate: '2026-01-10', isGated: false }
                ]
            },
            {
                category: 'Portfolio Information',
                files: [
                    { name: 'Portfolio Summary Report', size: '8.4 MB', uploadDate: '2026-01-08' },
                    { name: 'Individual Property Appraisals', size: '22.3 MB', uploadDate: '2026-01-08' },
                    { name: 'Consolidated Rent Roll', size: '1.8 MB', uploadDate: '2026-01-15' },
                    { name: 'Portfolio Photos & Videos', size: '45.2 MB', uploadDate: '2026-01-08' },
                    { name: 'Market Analysis Reports', size: '12.6 MB', uploadDate: '2026-01-08' }
                ]
            },
            {
                category: 'Financial Documents',
                files: [
                    { name: 'Portfolio Pro Forma Model', size: '3.4 MB', uploadDate: '2026-01-10', isGated: true },
                    { name: 'Historical Financials (3 years)', size: '2.8 MB', uploadDate: '2026-01-10', isGated: true },
                    { name: 'Portfolio Operating Budget 2026', size: '1.2 MB', uploadDate: '2026-01-12', isGated: false },
                    { name: 'Sensitivity Analysis', size: '945 KB', uploadDate: '2026-01-10', isGated: false }
                ]
            },
            {
                category: 'Legal & Compliance',
                files: [
                    { name: 'Title Insurance Policies (All Properties)', size: '8.4 MB', uploadDate: '2026-01-05' },
                    { name: 'Environmental Reports (Phase I)', size: '16.8 MB', uploadDate: '2026-01-05' },
                    { name: 'Property Surveys', size: '32.4 MB', uploadDate: '2026-01-05' },
                    { name: 'Zoning Documentation', size: '5.8 MB', uploadDate: '2026-01-05' }
                ]
            },
            {
                category: 'Loan Documents',
                files: [
                    { name: 'Master Loan Agreement', size: '5.2 MB', uploadDate: '2026-01-07' },
                    { name: 'Individual Property Loan Documents', size: '14.8 MB', uploadDate: '2026-01-07' },
                    { name: 'Lockbox Agreements', size: '3.2 MB', uploadDate: '2026-01-07' },
                    { name: 'Intercreditor Agreement', size: '1.8 MB', uploadDate: '2026-01-07' }
                ]
            }
        ]
    },
    {
        id: 2,
        title: 'Metro Core Mixed-Use Portfolio',
        strategy: 'Income-Focused',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
        targetYield: '7.2%',
        investmentTerm: '7 years',
        minimumInvestment: '$75,000',
        fundingStatus: 'Funding',
        fundingProgress: 73,
        totalRaise: '$32,500,000',
        description: 'A diversified portfolio combining premium office and retail assets in thriving urban markets. This portfolio focuses on stable income generation through long-term corporate tenants and essential retail anchors.',
        highlights: [
            '92% weighted average occupancy',
            'Fortune 500 and investment-grade tenants',
            '8.5 year weighted average lease term',
            'Prime downtown locations'
        ],
        portfolioMetrics: {
            totalProperties: 5,
            totalValue: '$186,500,000',
            averageOccupancy: '92%',
            totalSquareFeet: 625000,
            totalUnits: 0,
            geographicMarkets: ['Nashville, TN', 'Denver, CO', 'Atlanta, GA', 'Charlotte, NC']
        },
        propertyAllocation: [
            { type: 'Commercial Office', percentage: 65, count: 3 },
            { type: 'Retail', percentage: 35, count: 2 }
        ],
        diversification: {
            geographicDiversification: '4 markets across 4 states',
            assetTypeDiversification: '2 asset classes (Office & Retail)',
            tenantDiversification: '35+ commercial tenants across sectors'
        },
        riskFactors: [
            {
                risk: 'Interest Rate Risk',
                description: 'Changes in interest rates may affect property valuations and refinancing capabilities, potentially impacting overall portfolio returns.',
                mitigation: 'Fixed-rate financing locked for 7 years eliminates near-term refinancing risk. Conservative 60% LTV provides substantial equity protection.'
            },
            {
                risk: 'Tenant Concentration Risk',
                description: 'Reliance on key tenants in office and retail sectors could impact income if major tenants vacate or fail to renew leases.',
                mitigation: 'Portfolio includes Fortune 500 and investment-grade tenants with 8.5-year weighted average lease terms. Diversified across 35+ tenants in multiple sectors.'
            }
        ],
        sponsorProfile: {
            name: 'Sylvan Capital',
            totalAUM: '$500M+',
            historicalPerformance: 'Avg. Realized IRR: 14.2%',
            propertiesManaged: 45,
            yearsInBusiness: 12,
            teamSize: '25+ professionals',
            description: 'Sylvan Capital is a vertically integrated real estate investment and management firm specializing in multifamily and commercial properties across high-growth markets. Our experienced team combines institutional-grade underwriting with hands-on asset management.'
        },
        capitalStack: [
            {
                layer: 'Senior Debt',
                amount: '$111,900,000',
                percentage: 60,
                yieldRange: '5.2% - 5.8%'
            },
            {
                layer: 'Preferred Equity',
                amount: '$37,300,000',
                percentage: 20,
                yieldRange: '8.5% - 9.5%'
            },
            {
                layer: 'Common Equity',
                amount: '$37,300,000',
                percentage: 20,
                yieldRange: '11.0% - 13.0%'
            }
        ],
        properties: [
            {
                name: 'Downtown Office Complex',
                location: 'Nashville, TN',
                propertyType: 'Commercial Office',
                image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
                squareFeet: 185000,
                occupancyRate: '92%',
                yearBuilt: 2015,
                annualRent: '$5,920,000',
                propertyValue: '$42,000,000'
            },
            {
                name: 'Midtown Tower',
                location: 'Atlanta, GA',
                propertyType: 'Commercial Office',
                image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80',
                squareFeet: 210000,
                occupancyRate: '95%',
                yearBuilt: 2016,
                annualRent: '$7,350,000',
                propertyValue: '$58,500,000'
            },
            {
                name: 'Uptown Business Center',
                location: 'Charlotte, NC',
                propertyType: 'Commercial Office',
                image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?w=800&q=80',
                squareFeet: 142000,
                occupancyRate: '88%',
                yearBuilt: 2014,
                annualRent: '$4,680,000',
                propertyValue: '$38,000,000'
            },
            {
                name: 'Suburban Retail Center',
                location: 'Denver, CO',
                propertyType: 'Retail',
                image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
                squareFeet: 95000,
                occupancyRate: '88%',
                yearBuilt: 2012,
                annualRent: '$2,375,000',
                propertyValue: '$18,500,000'
            },
            {
                name: 'Southside Shopping Plaza',
                location: 'Nashville, TN',
                propertyType: 'Retail',
                image: 'https://images.unsplash.com/photo-1519566335946-e6f65f11c7ea?w=800&q=80',
                squareFeet: 88000,
                occupancyRate: '93%',
                yearBuilt: 2013,
                annualRent: '$2,420,000',
                propertyValue: '$19,500,000'
            }
        ],
        investmentStructure: {
            structureType: 'Ring-Fenced SPV Structure with Individual Lockboxes',
            totalSeniorDebt: '$111,900,000',
            weightedAvgLTV: '60%',
            weightedAvgDSCR: '1.52x',
            totalReserves: '$3,250,000'
        },
        financials: {
            projectedAnnualReturn: '7.2% - 7.9%',
            cashDistributionSchedule: 'Quarterly',
            holdPeriod: '7 years',
            exitStrategy: 'Individual asset disposition or portfolio sale',
            totalAnnualRent: '$22,745,000'
        },
        documents: [
            {
                category: 'Offering Documents',
                files: [
                    { name: 'Portfolio Private Placement Memorandum', size: '5.4 MB', uploadDate: '2026-01-05' },
                    { name: 'Subscription Agreement', size: '1.4 MB', uploadDate: '2026-01-05' },
                    { name: 'Operating Agreement', size: '2.1 MB', uploadDate: '2026-01-05' },
                    { name: 'Portfolio Strategy Overview', size: '2.8 MB', uploadDate: '2026-01-05' }
                ]
            },
            {
                category: 'Portfolio Information',
                files: [
                    { name: 'Portfolio Summary Report', size: '11.2 MB', uploadDate: '2026-01-03' },
                    { name: 'Individual Property Appraisals', size: '28.6 MB', uploadDate: '2026-01-03' },
                    { name: 'Consolidated Lease Abstracts', size: '4.2 MB', uploadDate: '2026-01-10' },
                    { name: 'Portfolio Photos & Videos', size: '58.4 MB', uploadDate: '2026-01-03' },
                    { name: 'Market Analysis Reports', size: '15.8 MB', uploadDate: '2026-01-03' }
                ]
            },
            {
                category: 'Financial Documents',
                files: [
                    { name: 'Portfolio Pro Forma Model', size: '4.2 MB', uploadDate: '2026-01-05' },
                    { name: 'Historical Financials (5 years)', size: '3.8 MB', uploadDate: '2026-01-05' },
                    { name: 'Portfolio Operating Budget 2026', size: '1.6 MB', uploadDate: '2026-01-08' },
                    { name: 'Sensitivity Analysis', size: '1.2 MB', uploadDate: '2026-01-05' }
                ]
            },
            {
                category: 'Legal & Compliance',
                files: [
                    { name: 'Title Insurance Policies (All Properties)', size: '10.8 MB', uploadDate: '2025-12-28' },
                    { name: 'Environmental Reports (Phase I)', size: '18.4 MB', uploadDate: '2025-12-28' },
                    { name: 'Property Surveys', size: '42.8 MB', uploadDate: '2025-12-28' },
                    { name: 'Zoning Documentation', size: '7.2 MB', uploadDate: '2025-12-28' }
                ]
            },
            {
                category: 'Loan Documents',
                files: [
                    { name: 'Master Loan Agreement', size: '6.4 MB', uploadDate: '2026-01-02' },
                    { name: 'Individual Property Loan Documents', size: '18.2 MB', uploadDate: '2026-01-02' },
                    { name: 'Lockbox Agreements', size: '4.2 MB', uploadDate: '2026-01-02' },
                    { name: 'Intercreditor Agreement', size: '2.4 MB', uploadDate: '2026-01-02' }
                ]
            }
        ]
    },
    {
        id: 3,
        title: 'Value-Add Opportunity Portfolio',
        strategy: 'Value-Add',
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
        targetYield: '8.5%',
        investmentTerm: '4 years',
        minimumInvestment: '$100,000',
        fundingStatus: 'Available',
        fundingProgress: 28,
        totalRaise: '$24,800,000',
        description: 'A strategic portfolio of underperforming assets with significant upside potential through renovations, improved management, and market repositioning. This portfolio targets superior returns through active value creation.',
        highlights: [
            'Significant rent growth potential',
            'Below-market occupancy rates',
            'Capital improvement plans in place',
            'Experienced operating partners'
        ],
        portfolioMetrics: {
            totalProperties: 6,
            totalValue: '$98,500,000',
            averageOccupancy: '78%',
            totalSquareFeet: 445000,
            totalUnits: 342,
            geographicMarkets: ['Indianapolis, IN', 'Kansas City, MO', 'Memphis, TN', 'Birmingham, AL']
        },
        propertyAllocation: [
            { type: 'Multifamily', percentage: 60, count: 4 },
            { type: 'Retail', percentage: 25, count: 1 },
            { type: 'Industrial', percentage: 15, count: 1 }
        ],
        diversification: {
            geographicDiversification: '4 markets across 4 states',
            assetTypeDiversification: '3 asset classes (Multifamily, Retail, Industrial)',
            tenantDiversification: '350+ tenants across residential and commercial'
        },
        riskFactors: [
            {
                risk: 'Vacancy Risk',
                description: 'Current below-market occupancy rates (78% average) present execution risk during lease-up and renovation periods.',
                mitigation: 'Capital improvement plans funded with $2.45M reserves. Experienced operating partners with proven track record in value-add repositioning.'
            },
            {
                risk: 'Renovation Execution Risk',
                description: 'Renovation delays or cost overruns could impact projected returns and timeline to stabilization.',
                mitigation: 'Fixed-price construction contracts in place. Phased renovation approach minimizes operational disruption. Contingency reserves allocated for unexpected costs.'
            }
        ],
        sponsorProfile: {
            name: 'Sylvan Capital',
            totalAUM: '$500M+',
            historicalPerformance: 'Avg. Realized IRR: 14.2%',
            propertiesManaged: 45,
            yearsInBusiness: 12,
            teamSize: '25+ professionals',
            description: 'Sylvan Capital is a vertically integrated real estate investment and management firm specializing in multifamily and commercial properties across high-growth markets. Our experienced team combines institutional-grade underwriting with hands-on asset management.'
        },
        capitalStack: [
            {
                layer: 'Senior Debt',
                amount: '$59,100,000',
                percentage: 60,
                yieldRange: '6.0% - 6.5%'
            },
            {
                layer: 'Preferred Equity',
                amount: '$19,700,000',
                percentage: 20,
                yieldRange: '10.0% - 11.0%'
            },
            {
                layer: 'Common Equity',
                amount: '$19,700,000',
                percentage: 20,
                yieldRange: '14.0% - 18.0%'
            }
        ],
        properties: [
            {
                name: 'Riverside Gardens',
                location: 'Indianapolis, IN',
                propertyType: 'Multifamily',
                image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
                squareFeet: 112000,
                occupancyRate: '76%',
                yearBuilt: 2005,
                totalUnits: 98,
                annualRent: '$1,680,000',
                propertyValue: '$16,200,000'
            },
            {
                name: 'Westside Apartments',
                location: 'Kansas City, MO',
                propertyType: 'Multifamily',
                image: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?w=800&q=80',
                squareFeet: 98000,
                occupancyRate: '72%',
                yearBuilt: 2008,
                totalUnits: 86,
                annualRent: '$1,420,000',
                propertyValue: '$14,500,000'
            },
            {
                name: 'Parkview Residences',
                location: 'Memphis, TN',
                propertyType: 'Multifamily',
                image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80',
                squareFeet: 88000,
                occupancyRate: '80%',
                yearBuilt: 2006,
                totalUnits: 78,
                annualRent: '$1,280,000',
                propertyValue: '$13,800,000'
            },
            {
                name: 'Southgate Commons',
                location: 'Birmingham, AL',
                propertyType: 'Multifamily',
                image: 'https://images.unsplash.com/photo-1515263487990-61b07816b324?w=800&q=80',
                squareFeet: 75000,
                occupancyRate: '82%',
                yearBuilt: 2007,
                totalUnits: 80,
                annualRent: '$1,180,000',
                propertyValue: '$12,500,000'
            },
            {
                name: 'Crossroads Shopping Center',
                location: 'Indianapolis, IN',
                propertyType: 'Retail',
                image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&q=80',
                squareFeet: 52000,
                occupancyRate: '68%',
                yearBuilt: 2004,
                annualRent: '$845,000',
                propertyValue: '$8,200,000'
            },
            {
                name: 'Northside Distribution Center',
                location: 'Kansas City, MO',
                propertyType: 'Industrial',
                image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
                squareFeet: 85000,
                occupancyRate: '88%',
                yearBuilt: 2010,
                annualRent: '$1,245,000',
                propertyValue: '$15,800,000'
            }
        ],
        investmentStructure: {
            structureType: 'Ring-Fenced SPV Structure with Individual Lockboxes',
            totalSeniorDebt: '$59,100,000',
            weightedAvgLTV: '60%',
            weightedAvgDSCR: '1.32x',
            totalReserves: '$2,450,000'
        },
        financials: {
            projectedAnnualReturn: '8.5% - 10.2%',
            cashDistributionSchedule: 'Quarterly',
            holdPeriod: '4 years',
            exitStrategy: 'Stabilization and individual asset sales',
            totalAnnualRent: '$7,650,000'
        },
        documents: [
            {
                category: 'Offering Documents',
                files: [
                    { name: 'Portfolio Private Placement Memorandum', size: '5.8 MB', uploadDate: '2026-01-12' },
                    { name: 'Subscription Agreement', size: '1.3 MB', uploadDate: '2026-01-12' },
                    { name: 'Operating Agreement', size: '1.9 MB', uploadDate: '2026-01-12' },
                    { name: 'Value-Add Business Plan', size: '4.2 MB', uploadDate: '2026-01-12' }
                ]
            },
            {
                category: 'Portfolio Information',
                files: [
                    { name: 'Portfolio Summary Report', size: '9.8 MB', uploadDate: '2026-01-10' },
                    { name: 'Individual Property Appraisals', size: '24.2 MB', uploadDate: '2026-01-10' },
                    { name: 'Consolidated Rent Roll', size: '2.4 MB', uploadDate: '2026-01-14' },
                    { name: 'Portfolio Photos & Videos', size: '38.6 MB', uploadDate: '2026-01-10' },
                    { name: 'Renovation Plans & Budgets', size: '18.4 MB', uploadDate: '2026-01-10' }
                ]
            },
            {
                category: 'Financial Documents',
                files: [
                    { name: 'Portfolio Pro Forma Model', size: '3.8 MB', uploadDate: '2026-01-12' },
                    { name: 'Historical Financials (3 years)', size: '2.4 MB', uploadDate: '2026-01-12' },
                    { name: 'Portfolio Operating Budget 2026', size: '1.4 MB', uploadDate: '2026-01-13' },
                    { name: 'Value-Add ROI Analysis', size: '2.2 MB', uploadDate: '2026-01-12' }
                ]
            },
            {
                category: 'Legal & Compliance',
                files: [
                    { name: 'Title Insurance Policies (All Properties)', size: '9.2 MB', uploadDate: '2026-01-08' },
                    { name: 'Environmental Reports (Phase I)', size: '16.8 MB', uploadDate: '2026-01-08' },
                    { name: 'Property Surveys', size: '36.4 MB', uploadDate: '2026-01-08' },
                    { name: 'Zoning Documentation', size: '6.4 MB', uploadDate: '2026-01-08' }
                ]
            },
            {
                category: 'Loan Documents',
                files: [
                    { name: 'Master Loan Agreement', size: '5.8 MB', uploadDate: '2026-01-09' },
                    { name: 'Individual Property Loan Documents', size: '16.4 MB', uploadDate: '2026-01-09' },
                    { name: 'Lockbox Agreements', size: '3.8 MB', uploadDate: '2026-01-09' },
                    { name: 'Intercreditor Agreement', size: '2.1 MB', uploadDate: '2026-01-09' }
                ]
            }
        ]
    }
]

// Helper function to get portfolio by ID
export function getPortfolioById(id: number): Portfolio | undefined {
    return mockPortfolios.find(portfolio => portfolio.id === id)
}
