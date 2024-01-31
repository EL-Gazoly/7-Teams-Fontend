import { Divider } from '@nextui-org/react'
import DoughuntChart from './DoughnutChart'
const StageExperminetCount = ({enterPractical, enterTheortical, enterTraining}) => {
  return (
    <div className=' w-[457px] h-[324px] p-6  bg-white rounded-lg flex flex-col gap-y-2 '>
      <div className=' w-full flex items-center justify-between'>
        <span className=' text-gray-900 text-[15px] font-bold'> 
        عدد مرات الدخول للنظام لطلاب المرحلة الواحدة
        </span>
      </div>
      <div className=' w-full flex items-center justify-between'>
        <div className=' flex flex-col gap-y-[6px]'>
            <span className=' text-[#444] text-[40px] font-bold'>{enterPractical+enterTheortical+enterTraining}</span>
            <div className=' flex flex-col gap-y-3'>
                <div className=' flex items-center gap-x-3'>
                    <div className=' w-[14px] h-7 rounded bg-[#009017]' />
                    <div className=' flex items-center justify-center gap-x-2'>
                        <span className='w-28 text-[#444] text-xs font-bold'>عدد مرات الدخول على التدريب</span>
                        <span className=' text-gray-500 text-2xl font-semibold mb-2'>{enterTraining}</span>

                    </div>


                </div>
                <Divider className=' bg-[#00000045]' />
                <div className=' flex items-center gap-x-3'>
                    <div className=' w-[14px] h-7 rounded bg-[#4EFC6A]' />
                    <div className=' flex items-center justify-center gap-x-2'>
                        <span className='w-28 text-[#444] text-xs font-bold'> عدد مرات الدخول على الاختبارات النظرى </span>
                        <span className=' text-gray-500 text-2xl font-semibold mb-2'>{enterTheortical}</span>

                    </div>


                </div>
                <Divider className=' bg-[#00000045]' />
                <div className=' flex items-center gap-x-3'>
                    <div className=' w-[14px] h-7 rounded bg-[#8DF49D]' />
                    <div className=' flex items-center justify-center gap-x-2'>
                        <span className='w-28 text-[#444] text-xs font-bold'> عدد مرات الدخول على الاختبارات العملى  </span>
                        <span className=' text-gray-500 text-2xl font-semibold mb-2'>{enterPractical}</span>

                    </div>


                </div>

            </div>

        </div>
        <DoughuntChart
        enterPractical={enterPractical} enterTheortical={enterTheortical} enterTraining={enterTraining}
        />
        
      </div>
    </div>
  )
}

export default StageExperminetCount
