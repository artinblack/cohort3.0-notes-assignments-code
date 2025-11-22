// import React from 'react'

// const Hero = () => {
//   return (
//     <div className='px-4 py-2 flex items-center flex-col w-full my-20'>
//       <button className='border border-gray-200 bg-gray-100 rounded-full  px-2 py-1 text-gray-600'>
//         What are early stage tax requirements ? 
//       </button>

//       <div className='mt-10'>
//         <h1 className='font-medium text-7xl text-black tracking-tighter text-center'>
//           Magically simplify <br/> accounting and taxes 
//         </h1>
//         <p className='max-w-2xl mx-auto text-lg text-neutral-700 text-center mt-10
//         '>
// Automated bookkeeping, effortless tax filing, real‑time insights. Set up in 10 mins. Back to building by 5:33pm.
//         </p>
//       </div>
//       <div className='flex items-center gap-4 mt-10'>
//         <button className='bg-[#2579F4] px-4 py-2 rounded-lg text-white font-bold shadow-lg text-shadow-md tracking-wide'>Start free trial</button>
//         <button className='px-4 py-2 rounded-lg text-black font-bold border-black border text-shadow-md tracking-wide'>Pricing &rarr;</button>
//       </div>
//     </div>
//   )
// }

// export default Hero

import React from 'react'

const Hero = () => {
  return (
    <div className='my-40 w-full flex flex-col items-center justify-center'>
      <h1 className='text-7xl font-bold tracking-tight max-w-2xl text-center leading-snug bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500'>
        Unleash the power of intuitive finance
      </h1>
      <p className='mx-auto max-w-3xl text-neutral-500 selection:bg-white selection:text-black text-center mt-10'>
        Say goodbye to the outdated financial tools. Every small business owner, regardless of the background, can now manage their business like a pro. Simple. Intuitive. And never boring.
      </p>

      <div className='flex justify-center mt-8 w-full max-w-2xl'>
        <input type="text" className=' mr-4 border flex-1  border-neutral-600 rounded-2xl focus:outline-none focus:ring-1 focus:ring-sky-500 transition duration-200 placeholder:text-neutral-500 text-white px-4 py-2  text-sm  ' placeholder='enter your email ' />
        <button className='bg-transparent border border-neutral-700 relative  text-white cursor-pointer px-4 py-2 rounded-2xl '>
          <div className='absolute -bottom-px inset-x-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent'>
          </div>
            Join Waitlist
        </button>
      </div>
    </div>
  )
}

export default Hero