import React from 'react'
import { Avatar } from '@nextui-org/react'
import noPic from '../../assets/students/noPic.svg'
const Item = ({log}) => {
  const date = new Date(log?.createdAt)

  return (
    <div className=' flex items-center gap-x-20 h-full flex-row-reverse  '>
        <div className=' w-12 h-12 bg-[#F6F6F6] rounded-full flex items-center justify-center'>
          { log.user && log.user.imageUrl ? <Avatar className=' w-11 h-11' src={`${import.meta.env.VITE_API_URL}${log.user?.imageUrl}`} fallback={noPic}/> : <img src={noPic} alt="" /> }
        </div>
            <div className=' flex flex-col gap-y-3 text-end text-text-black dark:text-white'>
                <span> {log?.action}</span>
                <span className=' text-xs text-[##122333bf] dark:text-white/75'> 
                  {date?.toLocaleString()}
                </span>

            </div>
        
    
        
      
    </div>
  )
}

export default Item
