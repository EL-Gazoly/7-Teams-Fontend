import React from 'react'
import { Checkbox, Divider, cn, Image } from '@nextui-org/react'
import HeadsetImage from '../../assets/Landing/ChooseHeadset/headset.svg'
const ChooseHeadsetSection = () => {
  return (
    <div className='w-full bg-white h-[106px] pl-[30px] pr-10 flex items-center gap-x-8 rounded-t-md'>
      {/* <div className='w-[239px] h-[35px] py-[7px] px-4 flex items-center gap-x-4 bg-[#444] text-white font-medium rounded-[7px]'> */}
        <Checkbox  
        classNames={{
          base: cn(
            "w-[239px]",
            "h-[35px]",
            "py-[7px]",
            "px-9",
            "flex",
            "items-center",
            "gap-x-4",
            "bg-[#444]",
            "text-white",
            "font-medium",
            "rounded-[7px]",
            "cursor-pointer",
            "data-[selected=true]:bg-primary-gradient",
            "data-[hover=true]:bg-[#444]",
          
            
          )
        }}
        radius='sm'
        > 
        <span className=' text-sm font-medium text-white '>Choose Headset</span>
        </Checkbox>

        <Divider orientation="vertical" className='h-[80%] bg-[#1223331A]/10'/>

        <div className=' w-[272px] h-9 py-2 px-4 flex items-center justify-center rounded-[7px] gap-x-4 bg-primary'>
            <Image src={HeadsetImage} />
            <span className='text-white font-medium text-sm'>12 Headset Connected</span>
            <div className='w-[10px] h-[10px] rounded bg-[#45FF5F]' />

        </div>

        <Divider orientation="vertical" className='h-[80%] bg-[#1223331A]/10'/>

        

      

    </div>
  )
}

export default ChooseHeadsetSection