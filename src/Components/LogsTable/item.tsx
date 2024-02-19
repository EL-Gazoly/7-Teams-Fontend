import React from 'react'
import { Avatar } from '@nextui-org/react'
const Item = () => {
  return (
    <div className=' flex items-center gap-x-20 h-full flex-row-reverse  '>
       
            <Avatar size='md' src='https://via.placeholder.com/150' />

            <div className=' flex flex-col gap-y-3 text-end text-text-black dark:text-white'>
                <span> احمد سعيد اتصل بالنظاره رقم ٢</span>
                <span className=' text-xs text-[##122333bf] dark:text-white/75'> اليوم فى 5:24</span>

            </div>
        
    
        
      
    </div>
  )
}

export default Item
