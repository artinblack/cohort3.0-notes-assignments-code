import { XMarkIcon } from '@heroicons/react/16/solid';
import { Input } from './input';
import Button from './button';
import { useRef, useState } from 'react';
import axios from 'axios';
import { BACKEND_URL } from '../config';

interface ContentModal { 
    open : boolean ; 
    onClose : () => void ; 
}

enum ContentType { 
    Youtube = "youtube" ,
    Twitter = "twitter"
}

// controlled component
const CreateContentModal = ({open , onClose} : ContentModal) => {
    const titleRef = useRef<HTMLInputElement>(null) ; 
    const linkRef = useRef<HTMLInputElement>(null) ; 
    const [type,setType] = useState(ContentType.Youtube) ; 
    const [error,setError] = useState(false) ; 

    async function addContent() { 
        const title = titleRef.current?.value ; 
        const link = linkRef.current?.value
        
        const response = await axios.post(`${BACKEND_URL}/api/v1/content`,{
            link : link , 
            type : type , 
            title : title 
        },{
            headers : {
                "Authorization" : localStorage.getItem("Authorization") 
            }
        }) 

        console.log(response.data.message) ; 

        if(response.data.message === "Content added") { 
            onClose() ; 
        } else { 
            setError(true) ; 
        }
    }



  return (
    <div>
        {open && <div className={`w-screen h-screen ${open ? "backdrop-blur-md bg-transparent transition-all duration-500 ease-in-out" : null } fixed top-0 left-0 flex justify-center items-center `}>
            <div className='bg-white flex-col shadow-2xl shadow-black rounded-2xl  h-100 flex max-w-xl w-full  mx-auto'>
                <div className='flex justify-end p-4 cursor-pointer' onClick={onClose}>
                    <XMarkIcon width={30} height={30}  /> 
                </div>
                <div className='p-4 flex flex-col items-center justify-center h-fit mt-10'>
                    <Input placeholder={'Enter Title'} ref={titleRef} />
                    <Input placeholder={'Enter URL '} ref={linkRef}/>
                    <div className='flex justify-between gap-2'>

                        <input type='radio' className='border text-10xl  border-black' id='youtube' name='socialradio' value={"youtube"} onChange={() => setType(ContentType.Youtube)}/>
                        <label htmlFor='youtube' className='font-bold'>Youtube</label>

                        <input type='radio' className='border text-10xl  border-black' id='twitter' name='socialradio' value={"twitter"} onChange={() => setType(ContentType.Twitter)}/>
                        <label htmlFor='twitter'  className='font-bold'>Twitter</label>
                        
                    </div>
                    <Button variant='primary' text='Submit' className='m-2 shadow-lg shadow-black' onClick={addContent}/>
                    {error ? <h1 className='text-red-500'>Invalid link</h1> : null}
                </div>
            </div>
        </div>}
    </div>
  )
}



export default CreateContentModal