import React from 'react'
import Dots from '../../assets/Reports/dotshorizontal.svg'
import PrinterIcon from '../../assets/Reports/printer.png'
import { Button, Avatar, Divider } from '@nextui-org/react'
import PersonIcon from '../../assets/Reports/single.svg'

const StudentCard = () => {
  return (
    <div className=' w-[461px] h-[324px] py-[50px] px-[30px] flex flex-col gap-y-[26px] bg-white rounded-lg'>
        <div className=' w-full flex items-center justify-end '>
            <Button className=' bg-primary-gradient text-white w-[90px] h-[35px]'>
                <img src={PrinterIcon} alt="" />
                <span className=' text-xs'> طباعه </span>
            </Button>
        </div>
        
        <div className=' w-full flex items-center justify-center'>
            <Avatar src={PersonIcon} size='lg' className=' w-[74px] h-[74px]' />
        </div>

        <div className=' w-full flex items-center justify-center gap-x-[18px]'>
            <div className=' flex flex-col gap-y-3'>
                <span className=' text-[#111928] text-2xl font-bold'>عرار منصور</span>
                <span className=' text-primary text-2xl font-medium'>#245682</span>

            </div>
            <Divider orientation="vertical" className='bg-[#111928]' />
            <div className=' flex flex-col gap-y-[10px]'>
                <span className=' text-[#1119288F] text-[15px]'>مدرسة : جده الحديثة</span>
                <span className=' text-[#1119288F] text-[15px]'>المرحلة : الأولة</span>
                <span className=' text-[#1119288F] text-[15px]'>الصف : الثانى</span>

            </div>

        </div>
      
    </div>
  )
}

export default StudentCard
