import React from 'react'
import { ArrowRight } from 'lucide-react';

const standards = [
    {
        point: "Meaningful retained equity in a first-loss position "
    },
    {
        point: "Consistent leverage practices "
    },
    {
        point: "Standardized reporting capabilities "
    },
    {
        point: "Willingness to operate within fixed governance constraints "
    }
];

const controls = [
    {
        point: "Maximum allocation per issuance "
    },
    {
        point: "Issuer concentration limits "
    },
    {
        point: "Geographic or asset-type constraints "
    }
];

const StandardsControls = () => {
  return (
    <div>
      <div className='bg-slate-50 px-6 py-24'>
        <div className='grid gap-8 lg:grid-cols-2 max-w-7xl mx-auto'>

            {/* Issuer Qualification Standards  */}
            <div className='transition-all duration-700 ease-out translate-y-0 opacity-100 transition-delay: 180ms;'>
                <div className='flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-8'>
                    <h3 className='mb-6 text-xl font-bold text-slate-900'>Issuer Qualification Standards </h3>
                    <p className='mb-6 text-slate-700'>Issuers must demonstrate discipline through: </p>
                    <div className='mb-6 space-y-2'>
                        {standards.map((stan,index)=>(
                            <div key={index} className='flex items-center gap-3 rounded-lg bg-slate-50 p-3'>
                                <div className='flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white'></div>
                                <span className='text-sm text-slate-700'>{stan.point}</span>
                            </div>
                        ))}
                    </div>
                    
                    <p className="mt-3 flex items-start gap-2 text-slate-900">
                        <ArrowRight className="h-4 w-4 mt-1 shrink-0" />
                        <span>Issuers that require flexibility outside the Sylvan framework are not eligible. </span>
                    </p>
                </div>
            </div>

            {/* Portfolio Controls  */}
            <div className='transition-all duration-700 ease-out translate-y-0 opacity-100 transition-delay: 180ms;'>
                <div className='flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-8'>
                    <h3 className='mb-6 text-xl font-bold text-slate-900'>Portfolio Controls </h3>
                    <p className='mb-6 text-slate-700'>Firms may establish portfolio-level controls, including: </p>
                    <div className='mb-6 space-y-2'>
                        {controls.map((control,index)=>(
                            <div key={index} className='flex items-center gap-3 rounded-lg bg-slate-50 p-3'>
                                <div className='flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white'></div>
                                <span className='text-sm text-slate-700'>{control.point}</span>
                            </div>
                        ))}
                    </div>
                    
                    <p className="mt-3 flex items-start gap-2 text-slate-900">
                        <ArrowRight className="h-4 w-4 mt-1 shrink-0" />
                        <span>Allocations outside defined parameters require explicit approval and documentation. </span>
                    </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default StandardsControls
