import React from 'react'
import noPic from '@/assets/students/noPic.svg'
import noPicDark from '@/assets/students/no-pic.svg'
import { useThemeStore } from '@/stores/ThemeStore'
import { Link } from 'react-router-dom'
import { Avatar } from '@nextui-org/react'
import useTranslationStore from '@/stores/LanguageStore'
import { cn } from '@/lib/utils'
const StudentCard = ({student, link}) => {
  const { language } = useTranslationStore();
  const {dark} = useThemeStore()
  return (
    <Link to={`${link}${student?.studentId}`} className={cn(' w-[240px] h-[111px] bg-white dark:bg-primary-dark rounded-md flex items-center px-[22px] gap-x-4 z-0',
      language === 'ar' ? 'flex-row' : 'flex-row-reverse'
    )}>
         <div className='  w-[68px] h-[68px] bg-[#F6F6F6] dark:bg-[#3B4048] rounded-full flex items-center justify-center z-0'>
                  {student.imageUrl ? <Avatar className=' w-full h-full z-0' src={`${import.meta.env.VITE_API_URL}${student.imageUrl}`} fallback={noPic}/> : <img src={dark? noPicDark : noPic} alt="" /> }
          </div>
        <div className=' flex flex-col items-center gap-y-1'>
            <span className='text-text-black dark:text-white text-[10px] font-bold line-clamp-1'> {student.name} </span>
            <div className='flex items-center justify-center  text-xs font-semibold text-primary'>
              <span className=''>{student.facilityId}</span>
              <span>#</span>
              </div>

        </div>
      
    </Link>
  )
}

export default StudentCard
