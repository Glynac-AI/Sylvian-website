import React from 'react'
import {ArrowRight} from 'lucide-react'

const firmlevel = [
    {
        point: "Capital position within the stack "
    },
    {
        point: "Maximum leverage limits "
    },
    {
        point: "Cash-flow priority and reserve rules "
    },
    {
        point: "Enforcement and amendment restrictions"
    },
    {
        point: "Reporting standards "
    }
];

const assets = [
    {
        point: "Property type and geography "
    },
    {
        point: "Rent history and lease rollover profile "
    },
    {
        point: "Loan-to-value and coverage metrics "
    },
    {
        point: "Reserve levels "
    },
    {
        point: "Duration and exit assumptions "
    }
];

const alters = [
    {
        point: "Leverage limits "
    },
    {
        point: "Payment priority "
    },
    {
        point: "Governance rights "
    }
];

const CIOFramework = () => {
  return (
    <div>
      <div className='bg-white px-6 py-24'>

         {/* CIO framework */}
         
        <div className='text-center '>
            <h4 className='font-bold text-black text-2xl mb-2'>CIO Governance Framework</h4>
            <p className='text-gray-700 mb-10'>Sylvan separates governance into one-time structural approval and per-issuance asset review. </p>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-40 max-w-5xl mx-auto'>
                <div className='flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:border-blue-200 hover:shadow-lg'>
                    <h4 className='font-semibold text-black mb-4'>One-Time Structure Approval (Firm Level) </h4>
                    <ul className='space-y-3 text-left list-disc list-inside marker:text-blue-500 text-slate-600'>
                        {firmlevel.map((firm,index)=>(
                            <li key={index}>{firm.point}</li>
                        ))}
                    </ul>

                    <p className="mt-3 text-right flex items-start gap-2 text-slate-900">
                        <ArrowRight className="h-4 w-4 mt-1 shrink-0" />
                        <span>Once approved, this structure cannot be modified at the issuance level.</span>
                    </p>

                    <p className="mt-3 text-right flex items-start gap-2 text-slate-900">
                        <ArrowRight className="h-4 w-4 mt-1 shrink-0" />
                        <span>If an investment requires special rules or exceptions, it does not qualify for Sylvan.</span>
                    </p>

                </div>

                <div className='flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:border-blue-200 hover:shadow-lg'>
                    <h4 className='font-semibold text-black mb-4'>Per-Issuance Review (Asset Level)  </h4>
                    <ul className='space-y-3 text-left list-disc list-inside marker:text-blue-500 text-slate-600'>
                        {assets.map((asset,index)=>(
                            <li key={index}>{asset.point}</li>
                        ))}
                    </ul>

                    <p className="mt-3 flex items-start gap-2 text-slate-900">
                        <ArrowRight className="h-4 w-4 mt-1 shrink-0" />
                        <span>Issuances cannot alter:</span>
                        <ul className='text-right list-disc list-inside marker:text-blue-500 text-slate-600'>
                            {alters.map((alter,index)=>(
                                <li key={index}>{alter.point}</li>
                            ))}
                        </ul>
                    </p>

                    <p className="mt-3 flex items-start gap-2 text-slate-900">
                        <ArrowRight className="h-4 w-4 mt-1 shrink-0" />
                        <span>Only asset-level characteristics vary. </span>
                    </p>
                </div>
            </div>
        </div>
      </div> 
    </div>
  )
}

export default CIOFramework
