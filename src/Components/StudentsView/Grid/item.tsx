import React from 'react'
import { Avatar } from '@nextui-org/react'
import placeholder from '../../../assets/students/placeholder.jpg'
const StudentCard = () => {
  return (
    <div className=' w-[244px] h-[124px] bg-white rounded-md flex flex-col items-center justify-center relative'>
            <div className=' absolute top-0 left-[37%] w-[65px] h-6 py-[2px] px-[5px]
                flex items-center justify-center gap-x-[5px]
             rounded-b bg-primary flex-row-reverse
            ' > 
                <span className=' text-white text-[8px] font-semibold'>متصل الان</span>
                <div className=' w-[6px] h-[6px] rounded-full bg-[#2DEC4C] mt-[2px]' />
            </div>
            <div className=' mt-2 ml-9 flex items-center justify-center gap-x-9 flex-row-reverse'>
                <Avatar src={placeholder} className=' w-[68px] h-[68px]' />
                <div className=' flex flex-col text-xs font-bold gap-y-[5px] text-center'>
                    <span className=' text-text-black'>احمد حامد</span>
                    <span className=' text-primary text-xs font-medium'>#256182</span>

                </div>
            </div>
    </div>
  )
}

export default StudentCard