import React from 'react'
import { Check } from 'lucide-react';

const exit = [
    {
        point: "Exit occurs via asset sale or refinance "
    },
    {
        point: "Timing may be adjusted to preserve income "
    },
    {
        point: "Proceeds are distributed according to the same capital priority "
    }
];

const handling = [
    {
        point: "The event is documented  "
    },
    {
        point: "Relevant parties are notified "
    },
    {
        point: "Escalation follows predefined procedures "
    },
];

const cadence = [
    {
        point: "Quarterly operating summaries "
    },
    {
        point: "Rent and occupancy updates "
    },
    {
        point: "Reserve balances "
    },
    {
        point: "Coverage metrics "
    },
    {
        point: "Distribution calculations "
    },
    {
        point: "Material event disclosures "
    },
];

const TheThree = () => {
  return (
    <div>
        <div className='bg-white px-6 py-24'>

            {/* Reporting Cadence  */}
            <div className="text-center mb-32">
                <h2 className="mb-6 text-3xl font-bold text-slate-900 lg:text-4xl">
                    Reporting Cadence  
                </h2>

                <p className="mb-6 text-gray-700">
                    Reporting formats are standardized across issuances.  
                </p>

                <div className="mx-auto flex max-w-xl flex-col rounded-2xl border border-green-200 bg-green-50 p-8">
                    <ul className="space-y-4 text-center">
                    {cadence.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-700 mt-1 shrink-0" />
                        <span className="text-slate-800">{item.point}</span>
                        </li>
                    ))}
                    </ul>
                </div>
            </div>

            {/* Material Event Handling  */}
            <div className="text-center mb-32">
                <h2 className="mb-6 text-3xl font-bold text-slate-900 lg:text-4xl">
                    Material Event Handling 
                </h2>

                <p className="mb-6 text-gray-700">
                    Material events do not permit structural changes. 
                </p>

                <div className="mx-auto flex max-w-xl flex-col rounded-2xl border border-blue-200 bg-blue-50 p-8">
                    <ul className="space-y-4 text-center">
                    {handling.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-blue-700 mt-1 shrink-0" />
                        <span className="text-slate-800">{item.point}</span>
                        </li>
                    ))}
                    </ul>
                </div>
            </div>

            {/* Exit Execution */}
            <div className='mb-32 mx-auto max-w-7xl'>
                <div className='transition-all duration-700 ease-out translate-y-0 opacity-100 transition-delay:0ms'>
                    <div className='mx-auto max-w-4xl text-center'>
                        <h2 className='mb-4 text-center text-3xl font-bold text-slate-900 lg:text-4xl'>Exit Execution </h2>
                        <p className='mb-10 text-slate-600'>There are no redemption features and no early liquidity mechanisms. </p>
                        <div className='rounded-2xl border border-slate-200 bg-white p-10 shadow-sm'>
                            <ul className='text-center list-disc list-inside marker:text-blue-500 text-slate-800 text-md'>
                                {exit.map((item,index)=>(
                                    <li key={index}>{item.point}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        
    </div>
  )
}

export default TheThree
