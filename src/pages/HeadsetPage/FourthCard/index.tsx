import React from 'react'

import Chemistry from '../../../assets/SelectCourse/SelectSubject/chemistry.svg'
import Physics from '../../../assets/SelectCourse/SelectSubject/physics.svg'
import Biology from '../../../assets/SelectCourse/SelectSubject/biology.svg'
import Geology from '../../../assets/SelectCourse/SelectSubject/geology.svg'
import Item from './item'



const FourthCard = () => {
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
        <Item icon={Physics} title={" الفيزياء "} percentage={65} />
        <Item icon={Chemistry} title={" الكيمياء "} percentage={45} />
        <Item icon={Biology} title={" الاحياء "} percentage={23} />
        <Item icon={Geology} title={" جيولجيا "} percentage={100} />
      </div>


      
    </div>
  )
}

export default FourthCard
