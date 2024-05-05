import React from 'react'
import OfflineIcon from '../../assets/Landing/HeadsetCard/wifi-square.svg';
import HeadsetImage from '../../assets/Landing/HeadsetCard/headset.png';
import { Image, Skeleton, Button } from '@nextui-org/react';
const HeadsetCardSkeleton = () => {
  return (
    <div className={`w-[230.818px] h-[265.851px] bg-white dark:bg-primary-dark flex flex-col  rounded-[5.583px] overflow-hidden relative
    `} style={{ boxShadow: '0px 2.225px 31.146px 0px rgba(0, 0, 0, 0.10)' }}>
        <div className=' bg-white dark:bg-primary-dark w-full' 
        >
          <div className='relative w-full h-[37px] pt-3' >
            <div className='flex items-center gap-x-1 '>
              <Skeleton className=' w-8 h-8 rounded-lg mr-2 dark:bg-dark-item' />
        
            </div>
            <Skeleton className={`absolute top-0 left-2 flex w-[79.345px] h-[28.612px] px-[5.583px] py-[2.791px] bg-disconnected dark:bg-dark-item  rounded-b-[2.791px] `} 
             style={{ boxShadow: '0px 2.791px 2.791px 0px rgba(0, 0, 0, 0.25)' }}>
              
            </Skeleton>
          </div>

          <div className='flex flex-col items-center gap-y-2 text-center overflow-hidden h-[182px] mt-3'>
            
              <Skeleton className='w-[143px] h-[77px] rounded-2xl dark:bg-dark-item' />
              <div className='flex items-center gap-x-[3px]'>
                {[0, 33, 66].map((level) => (
                  <div key={level} className={`w-5 h-2 rounded-sm `} />
                ))}
              </div>
              <div className='flex flex-col items-center gap-y-2'>
                <Skeleton className='w-16 h-4 rounded-lg dark:text-white text-sm font-semibold dark:bg-dark-item'> لا يوجد </Skeleton>
                <Skeleton className='w-10 h-4 rounded-lg dark:text-white text-sm font-semibold dark:bg-dark-item'> لا يوجد </Skeleton>
              </div>
          </div>
          </div>
          <div className=' absolute  bottom-0 h-[47px] w-full bg-[#FDFAFA]  dark:bg-primary-dark flex items-center justify-center'>
          <Skeleton className='w-[61px] h-[20.24px] rounded-md  dark:bg-dark-item' />
          </div>

        
     
    </div>
  )
}

export default HeadsetCardSkeleton
