import React from 'react'
import noPic from '../../assets/students/noPic.svg'
import { Link } from 'react-router-dom'
import { Avatar } from '@nextui-org/react'
const StudentCard = ({student}) => {
  return (
    <Link to={`/reports/students/${student?.studentId}`} className=' w-[240px] h-[111px] bg-white rounded-md flex items-center px-[22px] gap-x-4 z-0'>
         <div className='  w-[68px] h-[68px] bg-[#F6F6F6] rounded-full flex items-center justify-center z-0'>
                  {student.imageUrl ? <Avatar className=' w-full h-full z-0' src={`${import.meta.env.VITE_API_URL}${student.imageUrl}`} fallback={noPic}/> : <img src={noPic} alt="" /> }
                </div>
        <div className=' flex flex-col items-center gap-y-1'>
            <span className='text-text-black text-[10px] font-bold'> {student?.name} </span>
            <span className=' text-success text-[11px] font-medium'> #{student?.generatedId}</span>

        </div>
      
    </Link>
  )
}

export default StudentCard
