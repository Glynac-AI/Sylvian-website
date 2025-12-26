import React from 'react'

const Hero = () => {
  return (
    <div>

        {/* heading and summary  */}
      <div className='relative overflow-hidden bg-linear-to-br from-slate-50 via-blue-50/30 to-slate-50 px-6 py-32 lg:py-40'>
        <div className='absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-100/40 blur-3xl'></div>
        <div className='absolute bottom-0 right-0 h-96 w-96 rounded-full bg-slate-100/60 blur-3xl'></div>
        <div className='relative mx-auto max-w-7xl'>
            <div className='mx-auto max-w-4xl text-center'>
                <div className='transition-all duration-700 ease-out translate-y-0 opacity-100 transition-delay: 80ms;'>
                    <h1 className='mb-12 bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-2xl font-bold leading-[1.1] tracking-tight text-transparent lg:text-6xl'>How a Sylvan Issuance Operates, End to End </h1>
                </div>

                <div className='relative rounded-2xl border border-slate-200/60 bg-white/60 p-6 backdrop-blur-sm transition-all hover:border-blue-200'>
                    <div className='text-gray-600 mb-2'>The goal is transparency and predictability — not discretion.</div>
                    <div className='text-black font-semibold'>Describes the operational lifecycle of a Sylvan issuance, from setup through exit, using fixed, repeatable processes.</div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
