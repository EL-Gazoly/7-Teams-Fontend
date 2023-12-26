import React from 'react'
import DashboardTable from './Table'

const DashboardThridRow = () => {
  return (
    <div className=' w-full h-[332px] rounded-t-lg bg-white pt-[18px] text-text-black text-sm
        flex flex-col gap-y-5
    '>
        <span className='  font-bold mx-5'>
        إجمالي الوقت لجميع الدورات
        </span>
        <DashboardTable />
      
    </div>
  )
}

export default DashboardThridRow
