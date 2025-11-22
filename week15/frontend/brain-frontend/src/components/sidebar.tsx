import React, { useState } from 'react'
import SidebarItem from './sidebarItem'
import TwitterIcon from './twittericon'
import { ClipboardDocumentIcon, LinkIcon, TagIcon, VideoCameraSlashIcon} from '@heroicons/react/16/solid'
import { LightBulbIcon } from '@heroicons/react/24/outline'
import { XMarkIcon } from '@heroicons/react/16/solid'

const Sidebar = ({onClose} : { onClose : () => void}) => {
  const items = [
    {
      "item" : "Twitter/X" , 
      "sidebarIcon" :  <TwitterIcon width={"25"} height={"25"}  color="gray"/>
    },
    {
      "item" : "Videos" , 
      "sidebarIcon" : <VideoCameraSlashIcon width={25} height={25} color="gray"/>
    },
    {
      "item" : "Documents" , 
      "sidebarIcon" : <ClipboardDocumentIcon width={25} height={25}  color="gray"/>
    },
    {
      "item" : "Links" , 
      "sidebarIcon" : <LinkIcon width={25} height={25} color="gray"/>
    },
    {
      "item" : "Tags",
      "sidebarIcon" : <TagIcon width={25} height={25} color="gray"/>
    }
  ]


  return (
    <div className={`h-screen bg-white w-76  fixed left-0 top-0  shadow-lg shadow-gray-800 p-4`}>
      <div className='flex items-center justify-between'>
        <div className='flex gap-2'>
          <LightBulbIcon width={35} height={35} className='bg-purple-500 rounded-md p-1'/> 
          <h1 className='text-2xl'>Second Brain</h1>
        </div>
        <div>
          <XMarkIcon width={25} height={25} onClick={onClose} className='cursor-pointer'/>
        </div>
      </div>
      <div className='mt-10 p-2'>
        {items.map((entry, index) => (
          <SidebarItem key={index} item={entry.item} sidebarIcon={entry.sidebarIcon}/>
        ))}
      </div> 
    </div>
  )
}

export default Sidebar