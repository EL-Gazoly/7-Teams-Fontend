import React from 'react'
import DashboardTable from './Table'
import DashboardThridRowSecondCol from '../DashboardThridRowSecondCard'

const DashboardThridRow = () => {
  return (
    <div className=' w-[10002px] flex items-center gap-x-2'>
         <div className=' w-[581px] h-[332px] rounded-2xl bg-white pt-[18px] text-text-black text-sm
        flex flex-col gap-y-5
      '>
          <span className='  font-bold mx-5'>
          إجمالي الوقت لجميع الدورات
          </span>
          <DashboardTable />
        
        </div>
     <DashboardThridRowSecondCol />

    </div>
   
  )
}

export default DashboardThridRow
