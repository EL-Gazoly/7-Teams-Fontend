import { Avatar } from '@nextui-org/react'
import noPic from '@/assets/students/noPic.svg'
import useTranslationStore from '@/stores/LanguageStore'
import { cn } from '@/lib/utils'

type studentCardProps = {
  student : {
    imageUrl : string,
    name : string,
    facilityId : string,
    device : {
      name : string
    }
  }
}

const StudentCard = ({student} : studentCardProps) => {
  const { language, getTranslation } = useTranslationStore()
  return (
    <div className=' w-[246px] h-[127px] bg-white  dark:bg-[#252A33] rounded-md flex  items-center justify-center relative px-4'>
            <div className={` absolute top-0 left-[37%] w-[65px] h-6 py-[2px] px-[5px]
                flex items-center justify-center gap-x-[5px]
             rounded-b ${student.device?.name ?   "bg-primary " : " bg-disconnected-gradient"} flex-row-reverse
            `} > 
                <span className=' text-white text-[8px] font-semibold'> {student.device?.name ? getTranslation("connected-now") : getTranslation("disconnected")} </span>
                <div className={` w-[6px] h-[6px] rounded-full ${student.device?.name ?   "bg-[#2DEC4C] " : " bg-white"}  mt-[2px]`}/>
            </div>
            <div className={cn(' mt-2  flex items-center justify-center gap-x-9 flex-row-reverse',
              language === 'ar' ? 'flex-row-reverse' : 'flex-row'
            )}>
                <div className='  w-[68px] h-[68px] bg-[#F6F6F6] rounded-full flex items-center justify-center'>
                  {student.imageUrl ? <Avatar className=' w-full h-full' src={`${import.meta.env.VITE_API_URL}${student.imageUrl}`} fallback={noPic}/> : <img src={noPic} alt="" /> }
                </div>
                <div className=' flex flex-col text-xs font-bold gap-y-[5px] text-center'>
                    <span className=' w-24 text-text-black dark:text-white line-clamp-1'>{student.name}</span>
                    <span className=' text-primary text-xs font-medium'>#{student.facilityId}</span>

                </div>
            </div>
    </div>
  )
}

export default StudentCard