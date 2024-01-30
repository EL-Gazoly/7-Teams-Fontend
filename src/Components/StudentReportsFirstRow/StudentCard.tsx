import React from 'react'
import Dots from '../../assets/Reports/dotshorizontal.svg'
import PrinterIcon from '../../assets/Reports/printer.png'
import { Button, Avatar, Divider } from '@nextui-org/react'

import noPic from '../../assets/students/noPic.svg'

const StudentCard = ({data}) => {
    const getStage = (stage) => {
        switch (stage) {
            case 'High':
            return 'الثانوي'
            case 'Middle':
            return 'المتوسط'
        }
    }
    const getGrade = (grade) => {
        switch (grade) {
            case 'first':
            return 'الاول'
            case 'second':
            return 'الثاني'
            case 'third':
            return 'الثالث'
        }
    }
  return (
    <div className=' w-[458px] h-[324px] py-[50px] px-[30px] flex flex-col gap-y-[26px] bg-white rounded-lg'>
        <div className=' w-full flex items-center justify-end '>
            <Button className=' bg-primary-gradient text-white w-[90px] h-[35px]'>
                <img src={PrinterIcon} alt="" />
                <span className=' text-xs'> طباعه </span>
            </Button>
        </div>
        
        <div className=' w-full flex items-center justify-center'>
        <div className=' w-[74px] h-[74px] bg-[#F6F6F6] rounded-full flex items-center justify-center'>
                  {data.student.imageUrl ? <Avatar className=' w-[74px] h-[74px]' src={`${import.meta.env.VITE_API_URL}${data.student.imageUrl}`} fallback={noPic}/> : <img src={noPic} alt="" /> }
              </div>
        </div>

        <div className=' w-full flex items-center justify-center gap-x-[18px]'>
            <div className=' flex flex-col gap-y-3'>
                <span className=' text-[#111928] text-2xl font-bold'>{data?.student.name} </span>
                <span className=' text-primary text-2xl font-medium'>#{data?.student.generatedId}</span>

            </div>
            <Divider orientation="vertical" className='bg-[#111928]' />
            <div className=' flex flex-col gap-y-[10px]'>
                <span className=' text-[#1119288F] text-[15px]'>مدرسة : جده الحديثة</span>
                <span className=' text-[#1119288F] text-[15px]'>المرحلة : {getStage(data?.student.team.name)}</span>
                <span className=' text-[#1119288F] text-[15px]'>الصف : {getGrade(data?.student.class.number)}</span>

            </div>

        </div>
      
    </div>
  )
}

export default StudentCard
