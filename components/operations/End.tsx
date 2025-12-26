import React from 'react'

const operations = [
  {
    point: "Assets cannot be substituted "
  },
  {
    point: "Leverage cannot be increased "
  },
  {
    point: "Mezzanine or incremental debt cannot be added "
  },
  {
    point: "Discretionary amendments are not permitted "
  }
];

const End = () => {
  return (
    <div>
      <div className='bg-white px-6 py-24'>

        {/* Operational Prohibitions  */}
        <div className='mx-auto max-w-7xl'>
          <div className='transition-all duration-700 ease-out translate-y-0 opacity-100 transition-delay: 0ms;'>
            <div className='mb-16 text-center'>
              <h2 className='mb-4 text-3xl font-bold text-slate-900 lg:text-4xl'>Operational Prohibitions </h2>
              <p className='text-slate-800'>If any of these actions are required, the issuance does not belong on Sylvan. </p>
            </div>
          </div>

          <div className='transition-all duration-700 ease-out translate-y-0 opacity-100 transition-delay: 100ms;'>
            <div className='bg-slate-50 mx-auto max-w-3xl flex h-full flex-col rounded-2xl border border-slate-300 p-8 transition-all hover:border-blue-200 hover:shadow-lg'>
              <h3 className='text-center mb-6 text-xl font-bold text-slate-900'>Under the Sylvan framework: </h3>
  
              <ul className='space-y-3 text-center list-disc list-inside marker:text-blue-500 text-slate-600 mt-3 mb-3'>
                {operations.map((item,index)=>(
                  <li key={index}>{item.point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* key takeways */}
        <div className='mt-32 mx-auto max-w-7xl'>
          <div className='transition-all duration-700 ease-out translate-y-0 opacity-100 transition-delay: 0ms;'>
            <div className='mx-auto max-w-4xl'>
              <h2 className='mb-8 text-center text-3xl font-bold text-slate-900 lg:text-4xl'>Key Takeaway</h2>
              <div className='rounded-2xl border border-slate-200 bg-linear-to-br from-slate-50 to-white p-10'>
                <p className='mb-6 text-center text-lg text-slate-700'>Operations on Sylvan are designed to be boring in the best sense. </p>
                <p className='text-center text-slate-600'>Predictable processes reduce operational risk and support long-term trust. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default End
