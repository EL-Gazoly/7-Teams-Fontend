import React from 'react'
import PersonIcon from '../../assets/Reports/single.svg'
import { Link } from 'react-router-dom'
const StudentCard = () => {
  return (
    <Link to={'/reports/students/1'} className=' w-[240px] h-[111px] bg-white rounded-md flex items-center px-[22px] gap-x-4'>

        <img src={PersonIcon} alt="" className='  w-[68px] h-[68px]' />
        <div className=' flex flex-col items-center gap-y-1'>
            <span className='text-text-black text-[10px] font-bold'> احمد حامد </span>
            <span className=' text-success text-[11px] font-medium'> #245682</span>

        </div>
      
    </Link>
  )
}

export default StudentCard
