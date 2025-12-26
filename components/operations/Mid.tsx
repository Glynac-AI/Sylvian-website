import React from 'react'
import { ArrowRight } from 'lucide-react';

const cash = [
    {
        point: "Rent is collected at the property level "
    },
    {
        point: "Cash flows through dedicated issuance accounts"
    },
    {
        point: "Funds are applied according to the fixed waterfall "
    }
];

const process = [
    {
        point: "Distributions are calculated based on actual performance "
    },
    {
        point: "Payment priority follows the fixed waterfall "
    },
    {
        point: "No smoothing or targeting is applied "
    }
];

const usage = [
    {
        point: "Operating and debt service reserves are pre-funded at closing "
    },
    {
        point: "Reserves absorb temporary cash shortfalls "
    },
    {
        point: "Reserve draws are documented and monitored "
    },
];

const improves = [
    {
        point: "Reserves are replenished first "
    },
    {
        point: "Distributions normalize thereafter "
    },
];

const Mid = () => {
  return (
    <div>
      <div className='bg-slate-50 px-6 py-24'>

        {/* Rent Collection & Cash Management */}
        <div className='text-center mb-32'>
           <h2 className="mb-6 text-3xl font-bold text-slate-900 lg:text-4xl">
                Rent Collection & Cash Management  
            </h2>

            <p className="mb-6 text-gray-800 text-md">
                Cash from one issuance cannot be used to support another. 
            </p> 

            <div className='grid gap-6 lg:grid-cols-3 max-w-2xl mx-auto mt-8'>
                {cash.map((item,index)=>(
                    <div key={index} className='transition-all duration-700 ease-out translate-y-0 opacity-100 transition-delay:120ms'>
                        <div className='flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:border-blue-200 hover:shadow-lg'>
                            <p className='leading-relaxed text-slate-600'>{item.point}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Reserve Usage & Replenishment  */}
        <div className='text-center'>
            <h2 className='mb-6 text-3xl font-bold text-slate-900 lg:text-4xl'>Reserve Usage & Replenishment </h2>
            <div className='mx-auto max-w-xl mb-32 flex h-full flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:border-blue-200 hover:shadow-lg'>
                <ul className='text-left list-disc list-inside marker:text-blue-500 text-slate-800 text-md'>
                    {usage.map((item,index)=>(
                        <li key={index}>{item.point}</li>
                    ))}
                </ul>

                <p className="mt-3 flex items-start gap-2 text-slate-900">
                    <ArrowRight className="h-4 w-4 mt-1 shrink-0" />
                    <span>When performance improves: </span>
                    <ul className='text-right list-disc list-inside marker:text-blue-500 text-slate-600'>
                        {improves.map((item,index)=>(
                            <li key={index}>{item.point}</li>
                        ))}
                    </ul>
                </p>

                <p className="mt-3 flex items-start gap-2 text-slate-900">
                    <ArrowRight className="h-4 w-4 mt-1 shrink-0" />
                    <span>Reserve rules are predefined and cannot be altered. </span>
                </p>
            </div>
        </div>

        {/* Distribution Process  */}
        <div className='text-center mb-32'>
           <h2 className="mb-6 text-3xl font-bold text-slate-900 lg:text-4xl">
                Distribution Process   
            </h2>

            <p className="mb-6 text-gray-800 text-md">
                If performance deteriorates, distributions may be reduced or suspended. Leverage does not increase to support distributions.  
            </p> 

            <div className='grid gap-6 lg:grid-cols-3 max-w-2xl mx-auto mt-8'>
                {process.map((item,index)=>(
                    <div key={index} className='transition-all duration-700 ease-out translate-y-0 opacity-100 transition-delay:120ms'>
                        <div className='flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:border-blue-200 hover:shadow-lg'>
                            <p className='leading-relaxed text-slate-600'>{item.point}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Mid
