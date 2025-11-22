import { Input } from '../components/input'
import Button from '../components/button'
import { LightBulbIcon } from '@heroicons/react/24/outline'
import { useRef } from 'react'
import axios from 'axios'
import { BACKEND_URL } from '../config'
import { useNavigate } from 'react-router-dom'

export const Signup = () => {
  const usernameRef = useRef<HTMLInputElement>(null) ; 
  const passwordRef = useRef<HTMLInputElement>(null) ; 
  const navigate = useNavigate() ; 
  async function signup() { 
    const username = usernameRef.current?.value ; 
    const password = passwordRef.current?.value ; 
    await axios.post(`${BACKEND_URL}/api/v1/signup`,{
      username : username ,
      password : password
    })
    alert("you have signed up") ; 
    navigate('/signin')
  }

  return (
    <div className='h-screen w-screen bg-gray-200 flex justify-center items-center'>
      <div className='bg-white rounded-2xl p-4 border min-w-48'>
        <div className='flex items-center justify-center gap-2'>
          <LightBulbIcon width={35} height={35} className='bg-purple-500 rounded-md p-1'/> 
          <h1 className='text-2xl'>Second Brain</h1>
        </div>
        <div className='mt-5'>
          <Input placeholder='Username' ref={usernameRef}/>
          <Input placeholder='Password' ref={passwordRef}/> 
        </div>
        
        <Button variant='primary' text='Signup' className='mx-auto mt-5' onClick={signup}/>
      </div>
    </div>
  )
}
