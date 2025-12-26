import React from 'react'
import { ArrowRight } from 'lucide-react';

const compliance = [
    {
        point: "Standardized offering documentation "
    },
    {
        point: "Version-controlled materials "
    },
    {
        point: "Access and usage logs "
    },
    {
        point: "approval timestamps "
    }
];

const evidence = [
    {
        point: "What materials were used?"
    },
    {
        point: "When they were used?"
    },
    {
        point: "By whom they were accessed?"
    }
];

const triggers = [
    {
        point: "Major tenant default "
    },
    {
        point: "Reserve draws beyond defined thresholds "
    },
    {
        point: "Covenant breaches "
    },
    {
        point: "Insurance or casualty events"
    },
    {
        point: "Material operating deterioration "
    }
];

const Materials = () => {
  return (
    <div>
      <div className='bg-white px-6 py-24'>
        <div className='mx-auto max-w-7xl'>
            <div className='transition-all duration-700 ease-out translate-y-0 opacity-100 transition-delay: 0ms;'>
                <div className='mb-16 text-center'>
                    <h2 className='mb-4 text-3xl font-bold text-slate-900 lg:text-4xl'>What Is Affected By Materials?</h2>
                </div>
            </div>

            <div className='grid gap-6 lg:grid-cols-3'>

                {/* Materials Control & Versioning  */}
                <div className='transition-all duration-700 ease-out translate-y-0 opacity-100 transition-delay:100ms'>
                    <div className='flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:border-blue-200 hover:shadow-lg'>
                        <h3 className='mb-6 text-xl font-bold text-slate-900'>Materials Control & Versioning </h3>
                        <p>Sylvan supports compliance through: </p>
                        <ul className='space-y-3 text-left list-disc list-inside marker:text-blue-500 text-slate-600 mt-3 mb-3'>
                            {compliance.map((item,index)=>(
                                <li key={index}>{item.point}</li>
                            ))}
                        </ul>
                        
                    </div>
                </div>

                {/* Firms can evidence:  */}
                <div className='transition-all duration-700 ease-out translate-y-0 opacity-100 transition-delay:100ms'>
                    <div className='flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:border-blue-200 hover:shadow-lg'>
                        <h3 className='mb-6 text-xl font-bold text-slate-900'>Firms can evidence: </h3>
                        
                        <ul className='space-y-3 text-left list-disc list-inside marker:text-blue-500 text-slate-600 mt-3 mb-3'>
                            {evidence.map((item,index)=>(
                                <li key={index}>{item.point}</li>
                            ))}
                        </ul>
                        <p className="mt-3 text-right flex items-start gap-2 text-slate-900">
                            <ArrowRight className="h-4 w-4 mt-1 shrink-0" />
                            <span>This prevents post-hoc reconstruction during examinations. </span>
                        </p>
                    </div>
                </div>

                {/* Material Change Triggers  */}
                <div className='transition-all duration-700 ease-out translate-y-0 opacity-100 transition-delay:100ms'>
                    <div className='flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:border-blue-200 hover:shadow-lg'>
                        <h3 className='mb-6 text-xl font-bold text-slate-900'>Material Change Triggers </h3>
                        <p>Material events are predefined, documented, and escalated. Typical examples include: </p>
                        <ul className='space-y-3 text-left list-disc list-inside marker:text-blue-500 text-slate-600 mt-3 mb-3'>
                            {triggers.map((item,index)=>(
                                <li key={index}>{item.point}</li>
                            ))}
                        </ul>
                        <p className="mt-3 text-right flex items-start gap-2 text-slate-900">
                            <ArrowRight className="h-4 w-4 mt-1 shrink-0" />
                            <span>Material events do not change the structure. </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Materials
