import { useEffect, useState } from 'react'
import { Divider } from '@nextui-org/react'
import DoughuntChart from './DoughnutChart'
const StudentExperminetCount = ({expermients}) => {
  const [traininigEntrance, setTraininigEntrance] = useState(0)
  const [theorticalEntrance, setTheorticalEntrance] = useState(0)
  const [praticalEntrance, setPraticalEntrance] = useState(0)
  useEffect(() => {
   if(expermients) {
    expermients = Object.values(expermients)
      
    expermients.forEach((expermient)=>{
        setTheorticalEntrance(theorticalEntrance + expermient.enterTheortical)
        setPraticalEntrance(praticalEntrance + expermient.enterPratical)
        setTraininigEntrance(traininigEntrance + expermient.enterTraining)
    })

      
   }
  }, [expermients])
  return (
    <div className=' w-[457px] h-[324px] p-6  bg-white rounded-lg flex flex-col gap-y-2 '>
      <div className=' w-full flex items-center justify-between'>
        <span className=' text-gray-900 text-xl font-bold'>عدد مرات  الدخول الى كل التجارب </span>
      </div>
      <div className=' w-full flex items-center justify-between'>
        <div className=' flex flex-col gap-y-[6px]'>
            <span className=' text-[#444] text-[40px] font-bold'>{theorticalEntrance + traininigEntrance + praticalEntrance}</span>
            <div className=' flex flex-col gap-y-3'>
                <div className=' flex items-center gap-x-3'>
                    <div className=' w-[14px] h-7 rounded bg-[#009017]' />
                    <div className=' flex items-center justify-center gap-x-2'>
                        <span className='w-28 text-[#444] text-xs font-bold'>عدد مرات الدخول على التدريب</span>
                        <span className=' text-gray-500 text-2xl font-semibold mb-2'>{traininigEntrance}</span>

                    </div>


                </div>
                <Divider className=' bg-[#00000045]' />
                <div className=' flex items-center gap-x-3'>
                    <div className=' w-[14px] h-7 rounded bg-[#4EFC6A]' />
                    <div className=' flex items-center justify-center gap-x-2'>
                        <span className='w-28 text-[#444] text-xs font-bold'> عدد مرات الدخول على الاختبارات النظرى </span>
                        <span className=' text-gray-500 text-2xl font-semibold mb-2'>{theorticalEntrance}</span>

                    </div>


                </div>
                <Divider className=' bg-[#00000045]' />
                <div className=' flex items-center gap-x-3'>
                    <div className=' w-[14px] h-7 rounded bg-[#8DF49D]' />
                    <div className=' flex items-center justify-center gap-x-2'>
                        <span className='w-28 text-[#444] text-xs font-bold'> عدد مرات الدخول على الاختبارات العملى  </span>
                        <span className=' text-gray-500 text-2xl font-semibold mb-2'>{praticalEntrance}</span>

                    </div>


                </div>

            </div>

        </div>
        <DoughuntChart traininigEntrance={traininigEntrance} theorticalEntrance={theorticalEntrance} praticalEntrance={praticalEntrance} />
        
      </div>
    </div>
  )
}

export default StudentExperminetCount
