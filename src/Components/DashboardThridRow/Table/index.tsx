import React from 'react'
import Body from './Body'
import { Divider } from '@nextui-org/react'

const DashboardTable = () => {
  return (
    <div className=' w-full flex flex-col gap-y-2'>
        <div className=' w-full flex items-center justify-between text-xs text-[#96A5B8]'>
            <div className=' flex items-center gap-x-16 mx-5'>
                <span> # </span>
                <span> اسم الدورة </span>
            </div>
            <span className=' mx-14'> الوقت </span>

      
        </div>
        <Divider className=' w-full bg-[#EDF2F6BF]' />
        <div>
            <Body />

        </div>
    </div>
  
  )
}

export default DashboardTable
