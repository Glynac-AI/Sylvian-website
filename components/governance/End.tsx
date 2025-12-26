import React from 'react'
import { Check } from 'lucide-react';

const prevents = [
    {
        point: "Silent leverage increases "
    },
    {
        point: "Asset substitutions "
    },
    {
        point: "Discretionary rule changes "
    },
    {
        point: "Undocumented amendments "
    },
    {
        point: "Inconsistent client explanations "
    }
];

const custody = [
    {
        point: "Investor assets are held at the investor’s custodian "
    },
    {
        point: "Sylvan does not custody or transmit client funds or securities "
    },
    {
        point: "Subscription and settlement align with custodian workflows "
    }
];

const End = () => {
  return (
    <div>
      <div className='bg-slate-50 px-6 py-24'>

        {/* Custody & Recordkeeping  */}
        <div className='text-center mb-32'>
           <h2 className="mb-6 text-3xl font-bold text-slate-900 lg:text-4xl">
                Custody & Recordkeeping 
            </h2>

            <p className="mb-6 text-gray-800 text-md">
                Sylvan maintains governance and documentation records only
            </p> 

            <div className='grid gap-6 lg:grid-cols-3 max-w-2xl mx-auto mt-8'>
                {custody.map((item,index)=>(
                    <div key={index} className='transition-all duration-700 ease-out translate-y-0 opacity-100 transition-delay:120ms'>
                        <div className='flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:border-blue-200 hover:shadow-lg'>
                            <p className='leading-relaxed text-slate-600'>{item.point}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* examination narrative  */}
        <div className='mb-32 mx-auto max-w-7xl'>
            <div className='transition-all duration-700 ease-out translate-y-0 opacity-100 transition-delay:0ms'>
                <div className='mx-auto max-w-4xl'>
                    <h2 className='mb-10 text-center text-3xl font-bold text-slate-900 lg:text-4xl'>Examination Narrative (Plain English) </h2>
                    <div className='rounded-2xl border border-slate-200 bg-white p-10 shadow-sm'>
                        <blockquote className='text-center text-lg italic leading-relaxed text-slate-700'>“Sylvan is a standardized private real estate income framework. 
The structure is approved once, assets are reviewed per issuance, and all materials and decisions are documented and version-controlled. 
There is no discretion to change leverage, priority, or rules after closing.” </blockquote>
                    </div>
                </div>
            </div>
        </div>

        {/* What Sylvan Prevents? */}
        <div className="text-center">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 lg:text-4xl">
                What Sylvan Prevents?
            </h2>

            <p className="mb-6 text-gray-700">
                If preventing these behaviors is important, Sylvan is designed to support that objective.
            </p>

            <div className="mx-auto flex max-w-xl flex-col rounded-2xl border border-blue-200 bg-blue-50 p-8">
                <ul className="space-y-4 text-center">
                {prevents.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-blue-700 mt-1 shrink-0" />
                    <span className="text-slate-800">{item.point}</span>
                    </li>
                ))}
                </ul>
            </div>
        </div>

      </div>
    </div>
  )
}

export default End
