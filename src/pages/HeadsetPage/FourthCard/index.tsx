import React from 'react'

import Chemistry from '../../../assets/SelectCourse/SelectSubject/chemistry.svg'
import Item from './item'



const FourthCard = ({progress}) => {
  return (
    <div className=' w-[444px] h-[485px] rounded-[21px] bg-white
     py-7 flex flex-col gap-y-[6px] items-end
    '
      style={{
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.25)'
      }}
    >
      <span className=' text-text-black text-lg font-bold mr-9'> سجل الانجاز </span>
      <div className=' h-[53px] bg-[#dcdee033] w-full flex items-center justify-between px-8 text-xs font-bold flex-row-reverse'>
          <span> اسم التجربه </span>
          <div className=' flex flex-row-reverse items-center gap-x-8'>
              <span > التقدم </span>
              <span > التاريخ </span>
          </div>
         

      </div>

      <div className='mt-4 flex flex-col gap-y-[50px] items-center px-8 text-text-black text-xs'>
        <Item icon={Chemistry} title={" الكيمياء "} percentage={progress? progress*100 : 0} />

      </div>


      
    </div>
  )
}

export default FourthCard
