import { Input } from '../components/input'
import Button from '../components/button'
import { LightBulbIcon } from '@heroicons/react/24/outline'
import { useRef } from 'react'
import { BACKEND_URL } from '../config'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const Signin = () => {
  const usernameRef = useRef<HTMLInputElement>(null) ; 
  const passwordRef = useRef<HTMLInputElement>(null) ; 
  const navigate = useNavigate() ; 

  async function signin() { 
    const username = usernameRef.current?.value ; 
    const password = passwordRef.current?.value ; 
    
    const response = await axios.post(`${BACKEND_URL}/api/v1/signin`,{
      username : username , 
      password : password
    }) 
    const jwt = response.data.token ; 
    localStorage.setItem("Authorization",jwt) ; 
    navigate('/dashboard')
  }
  

  return (
    <div className='h-screen w-screen bg-gray-200 flex justify-center items-center'>
      <div className='bg-white rounded-2xl p-4 border min-w-48'>
        <div className='flex items-center justify-center gap-2'>
          <LightBulbIcon width={35} height={35} className='bg-purple-500 rounded-md p-1'/> 
          <h1 className='text-2xl'>Second Brain</h1>
        </div>
        <div className='mt-5'>
          <Input placeholder='Username' ref={usernameRef}  />
          <Input placeholder='Password' ref={passwordRef}/> 
        </div>
        
        <Button variant='primary' text='Signin' className='mx-auto mt-5' loading={true} onClick={signin}/>
      </div>
    </div>
  )
}