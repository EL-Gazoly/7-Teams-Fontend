import React from 'react'
import StreamIcon from '../../assets/headset page/stream.png'
import ScreenShotIcon from '../../assets/headset page/screenshot.png'
import RecoardIcon from '../../assets/headset page/recoard.png'
import { Image } from '@nextui-org/react'
const SecondCard = () => {
  return (
    <div className=' w-[432px] h-[374px] rounded-[21px] bg-white py-9 px-[30px] flex  flex-col items-end'>
      <h3 className=' text-[#635D5E] text-base font-bold'> اجراءات الجهاز </h3>
      <div className=' mt-[30px] w-full grid grid-cols-2 span-2 gap-2'>
            <div className=' col-span-2 h-28 bg-primary-gradient rounded-2xl
             flex flex-col gap-y-2 items-center justify-center text-white font-bold
            '>
                <div className=' w-11 h-11 bg-white rounded-full flex flex-col items-center justify-center'>
                    <Image src={StreamIcon} width={30} height={30} />
                </div>
                <span className=' text-sm'> بث الفيديو المباشر </span>

            </div>
            <div className=' h-28 bg-screen-shot-gradient rounded-[14px] flex flex-col items-center justify-center gap-y-2  text-white font-bold'>
            <div className=' w-11 h-11 bg-white rounded-full flex flex-col items-center justify-center '>
                    <Image src={ScreenShotIcon} width={30} height={30} />
                </div>
                <span className=' text-sm'> لقطه شاشه </span>
            </div>
            <div className=' h-28 bg-video-gradient rounded-[14px] flex flex-col items-center justify-center gap-y-2  text-white font-bold'>
            <div className=' w-11 h-11 bg-white rounded-full flex flex-col items-center justify-center '>
                    <Image src={RecoardIcon} width={30} height={30} />
                </div>
                <span className=' text-sm'> تسجيل الفديو </span>
            </div>
      </div>
    </div>
  )
}

export default SecondCard
