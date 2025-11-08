// import React from 'react'

// const App = () => {
//   return (
//     // <div className='flex justify-center  items-center'>
//     //   <div className='bg-red-500'>
//     //     child 1 
//     //   </div>
//     //   <div className='bg-blue-500'>
//     //     child 2
//     //   </div>
//     //   <div className='bg-green-500'>
//     //     child 3
//     //   </div>
//     // </div>
//     // <div className='md:bg-green-200 sm:bg-blue-200 bg-red-300'>
//     //   hi there 
//     // </div>
//     // <div className='grid sm:grid-cols-12  '>
//     //   <div className='bg-red-500 col-span-1 sm:col-span-5 '>first</div>
//     //   <div className='bg-blue-500 col-span-1 sm:col-span-5'>second</div>
//     //   <div className='bg-yellow-500 col-span-1 sm:col-span-2'>third</div>
//     // </div>

//   )
// }

// export default App

// Screen 1 

import React from 'react'
import { Button } from './components/Button'
import { Input } from './components/Input'
import { Otp } from './components/Otp'

const App = () => {
  return (
    <div className='flex flex-col items-center justify-center h-full'>
      <div className='m-10'>
        <h1><span className='text-blue-500'>Webinar</span>.gg</h1>  
      </div> 
      <div className='mt-10'>
        <Input type={'text'} placeholder={'Username'} />
      </div>
      <div className='mt-20'>
        <Button disabled={false} children={"Signup"} />
      </div>
      <div className='mt-10'>
        <Otp/>
      </div>
    </div>
  )
}

export default App