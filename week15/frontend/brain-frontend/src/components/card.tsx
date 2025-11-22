import { ClipboardDocumentCheckIcon, ShareIcon, TrashIcon } from '@heroicons/react/24/outline'
import { XEmbed, YouTubeEmbed } from 'react-social-media-embed';

interface CardProps { 
  title : string ; 
  link : string ; 
  type : string ; 
}

const Card = (props : CardProps) => {
  return (
    <div className='bg-white outline-slate-200 max-w-sm w-80   shadow-lg rounded-2xl text-black p-4 max-h-max'>
      <div className='flex items-center justify-between'>
        <div className='flex'>
          <ClipboardDocumentCheckIcon width={20} height={20} />
          <h4 className='ml-2'>{props.title}</h4>
        </div>
        <div className='flex justify-between items-center '>
          <a href={props.link} target='_blank'>
            <ShareIcon width={20} height={20} className='mx-2' color='gray'/>
          </a>
          <TrashIcon width={20} height={20} className='mx-2' color='gray'/>
        </div>
      </div>
      <div className='mt-5'>
        <div className='flex justify-center mt-5' >
          {props.type === "youtube" && <YouTubeEmbed url={props.link} width={300} height={200} className='max-w-lg w-full h-fit'/> }
          {props.type === "twitter" && <XEmbed url={props.link} width={300} height={250} className='max-w-lg w-full h-auto'/>}
        </div>
      </div>
    </div>
  )
}

export default Card