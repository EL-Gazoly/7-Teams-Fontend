import React from 'react'
import { Avatar } from '@nextui-org/react'
import placeholder from '../../../assets/students/placeholder.jpg'
import noPic from '../../../assets/students/noPic.svg'

type studentCardProps = {
  student : {
    imageUrl : string,
    name : string,
    generatedId : number,
  }
}

const StudentCard = ({student} : studentCardProps) => {
  return (
    <div className=' w-[246px] h-[127px] bg-white rounded-md flex flex-col items-center justify-center relative'>
            <div className=' absolute top-0 left-[37%] w-[65px] h-6 py-[2px] px-[5px]
                flex items-center justify-center gap-x-[5px]
             rounded-b bg-primary flex-row-reverse
            ' > 
                <span className=' text-white text-[8px] font-semibold'>متصل الان</span>
                <div className=' w-[6px] h-[6px] rounded-full bg-[#2DEC4C] mt-[2px]' />
            </div>
            <div className=' mt-2 ml-9 flex items-center justify-center gap-x-9 flex-row-reverse'>
                <div className='  w-[68px] h-[68px] bg-[#F6F6F6] rounded-full flex items-center justify-center'>
                  {student.imageUrl ? <Avatar className=' w-full h-full' src={`${import.meta.env.VITE_API_URL}${student.imageUrl}`} fallback={noPic}/> : <img src={noPic} alt="" /> }
                </div>
                <div className=' flex flex-col text-xs font-bold gap-y-[5px] text-center'>
                    <span className=' text-text-black'>{student.name}</span>
                    <span className=' text-primary text-xs font-medium'>#{student.generatedId}</span>

                </div>
            </div>
    </div>
  )
}

export default StudentCard