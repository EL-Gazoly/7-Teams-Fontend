import React from 'react'
import CourseBg from '../../../assets/headset page/course.png'

import { Image, Button } from '@nextui-org/react';

type SelectedCourseProps = {
    selectedItem: {
        icon: string;
        title: string;
    };
    setSelectedItem: React.Dispatch<any>
}


const SelectedCourse = ({selectedItem , setSelectedItem} : SelectedCourseProps) => {
    
  return (
    <div className=' selected-course absolute inset-0'>
        <img src={CourseBg} alt="" className=' w-full h-full' />
        <div className=' absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center gap-y-[26px]'>
            <div className=' flex flex-col gap-y-[18px]'>
                <Image src={selectedItem.icon} width={54} height={59} />
                <span className=' text-text-black text-[21px] font-bold'> {selectedItem.title} </span>
            </div>

            <div className=' grid grid-cols-2 max-w-[335px] gap-x-[10px] gap-y-[14px] '>
                <Button className=' w-40 h-[52px] p-[18px] rounded-lg font-bold text-sm' color='primary'> أبدأ الشرح </Button>
                <Button className=' w-40 h-[52px] p-[18px] rounded-lg font-bold text-sm' color='primary'> أبدأ التجربه </Button>
                <Button className=' w-40 h-[52px] p-[18px] rounded-lg font-bold text-sm' color='primary'> أبدأ الأختبار العملي </Button>
                <Button className=' w-40 h-[52px] p-[18px] rounded-lg font-bold text-sm' color='primary'> أبدأ الأختيار النظري </Button>
            </div>

            <Button className='w-40 h-[52px] p-[18px] rounded-lg font-medium text-sm bg-[#FF1F64] text-white'
            onPress={()=> setSelectedItem(null)}
            > إلغاء </Button>
            
        </div>
      
    </div>
  )
}

export default SelectedCourse
