import { PlusIcon, ShareIcon } from "@heroicons/react/16/solid"
import Button from "../components/button"
import Card from "../components/card"
import CreateContentModal from "../components/createComponentModal"
import { useEffect, useState } from "react"
import Sidebar from "../components/sidebar"
import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/outline"
import axios from "axios"
import { BACKEND_URL } from "../config"

type ContentItem = { 
  _id : string ; 
  link : string ; 
  type : string ; 
  title : string ; 
}

type DataType = { 
  content : ContentItem[] ; 
}

function Dashboard() {
    const [modalOpen , setModalOpen] = useState(false) ; 
    const [sidebarOpen , setSidebarOpen] = useState(false) ; 
    const [data , setData] = useState<DataType>({ content : []}) ; 

    async function getContent() { 
      const response = await axios.get(`${BACKEND_URL}/api/v1/content`,{
        headers : {
          "Authorization" : localStorage.getItem('Authorization')
        }
      })
      const data = await response.data ; 
      setData(data) ; 
      console.log(data) ; 
    }
    const refreshInterval = 5000 ; 
  useEffect(() => { 
  getContent() ;

  const newinterval  = setInterval(getContent, refreshInterval) ; 

  return () => clearInterval(newinterval) 
  },[])
   

  return (
  <div className={`${sidebarOpen ? "bg-gray-100" : "bg-white"}`}>
    {
     sidebarOpen ? "null" : <ArrowRightStartOnRectangleIcon width={20} height={20} className="m-5 cursor-pointer" onClick={() => setSidebarOpen(true)}/>
     
    }
    {sidebarOpen ? 
      <div>
        <Sidebar onClose={() => setSidebarOpen(false)}/>
      </div> 
      : null
    }
    <div onClick={() => setSidebarOpen(false)} className={`p-4 ${sidebarOpen ? "ml-72" : null }  min-h-screen  `}>
    <CreateContentModal open={modalOpen} onClose={() => { 
      setModalOpen(false) ; 
    }} />
    <div className="flex justify-between items-center ">
        <div className="ml-10">
          <h1 className="text-3xl font-bold">Your (changename) Second Brain</h1>
        </div>
        <div className="flex justify-end gap-4 p-4">
          <Button variant="primary" text="Add Content" onClick={() => setModalOpen(true)} startIcon={<PlusIcon width={20} height={20} className="mr-1"/>} />
          <Button variant="secondary" text="Share Brain" startIcon={<ShareIcon width={20} height={20} className="mr-1"/>} />
        </div>
    </div>
    
    <div className="flex gap-4 p-6  flex-wrap">
      
      {
      data.content.map(({ link, type, title, _id }) => ( 
      <Card key={_id} type={type} link={link} title={title}/>
    ))  
  }
    </div>
    </div>
  </div>

  )
}

export default Dashboard ; 
