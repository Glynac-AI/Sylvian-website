import React from 'react'
import { ArrowRight } from 'lucide-react';

const setups = [
    {
        point: "The structure is already approved at the firm level "
    },
    {
        point: "Assets are identified and underwritten"
    },
    {
        point: "Leverage, reserves, and duration are fixed "
    },
    {
        point: "Documentation is finalized and version-controlled "
    }
];

const settlements = [
    {
        point: "Investors subscribe through standard subscription documents "
    },
    {
        point: "Settlement occurs through the investor’s custodian "
    },
    {
        point: "Sylvan does not custody or transmit funds"
    },
    {
        point: "Capital is deployed according to the predefined structure "
    }
];

const SetupSettlement = () => {
  return (
    <div>
      <div className='bg-white px-6 py-24'>
        <div className='grid gap-8 lg:grid-cols-2 max-w-7xl mx-auto'>

            {/* Issuance Setup */}
            <div className='transition-all duration-700 ease-out translate-y-0 opacity-100 transition-delay: 180ms;'>
                <div className='flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-8'>
                    <h3 className='mb-6 text-xl font-bold text-slate-900'>Issuance Setup</h3>
                    <div className='mb-6 space-y-2'>
                        {settlements.map((item,index)=>(
                            <div key={index} className='flex items-center gap-3 rounded-lg bg-slate-50 p-3'>
                                <div className='flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white'></div>
                                <span className='text-sm text-slate-700'>{item.point}</span>
                            </div>
                        ))}
                    </div>
                    
                    <p className="mt-3 flex items-start gap-2 text-slate-900">
                        <ArrowRight className="h-4 w-4 mt-1 shrink-0" />
                        <span>If an issuance requires deviations from the approved structure, it is not launched on Sylvan. </span>
                    </p>
                </div>
            </div>

            {/* Subscription & Settlement */}
            <div className='transition-all duration-700 ease-out translate-y-0 opacity-100 transition-delay: 180ms;'>
                <div className='flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-8'>
                    <h3 className='mb-6 text-xl font-bold text-slate-900'>Subscription & Settlement  </h3>
                        <div className='mb-6 space-y-2'>
                            {settlements.map((item,index)=>(
                                <div key={index} className='flex items-center gap-3 rounded-lg bg-slate-50 p-3'>
                                    <div className='flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white'></div>
                                    <span className='text-sm text-slate-700'>{item.point}</span>
                                </div>
                            ))}
                        </div>
                    
                    <p className="mt-3 flex items-start gap-2 text-slate-900">
                        <ArrowRight className="h-4 w-4 mt-1 shrink-0" />
                        <span>All steps align with institutional custody workflows.</span>
                    </p>
                </div>
            </div>

        </div>
       </div>
    </div>
  )
}

export default SetupSettlement
