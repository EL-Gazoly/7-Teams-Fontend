import { StageTimeCounterItem } from './Item';
import React from 'react'
import { Divider } from '@nextui-org/react'

const StageTimeCounter = () => {
  return (
    <div className=' w-[532px] h-[328px] rounded-lg py-7 px-6 bg-white flex flex-col gap-y-5'>
      <h2 className=' mr-2 text-sm font-bold text-text-black'>الوقت المستغرق للمرحلة </h2>
      <div className=' flex flex-col items-center gap-[14px]'>
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-x-4">
            <span className=' text-xs text-[#96A5B8]'>#</span>
            <span className=' text-xs text-[#96A5B8]'>
              الاسم
            </span>

          </div>
          <div className='flex items-center gap-x-4 text-xs'>
              <span className=''>الوقت</span>
              <span className=' text-[#96A5B8]'>دقيقه</span>
              <span className=' text-[#96A5B8]'>ساعه</span>
          </div>
        </div>
        <Divider className=' bg-[#2DEC4C]' />
        <div className=' w-full flex flex-col gap-y-[11px] text-text-black text-xs'>
            <StageTimeCounterItem number={1} title={"  الوقت المستغرق للتدريب العملى"} hours={21} minutes={21} />
            <StageTimeCounterItem number={2} title={"الوقت المستغرق للأختبار النظرى"} hours={21} minutes={21} />
            <StageTimeCounterItem number={3} title={"الوقت المستغرق للأختبار النظرى"} hours={21} minutes={21} />
            <StageTimeCounterItem number={4} title={"الاجمالى"} hours={21} minutes={21} />
        </div>


      </div>
      
    </div>
  )
}

export default StageTimeCounter
