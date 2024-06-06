import { useEffect, useState,FC } from 'react'
import UserPlcaholder from '../../../assets/CreateUser/user-placeholder.png'
import ScreenshotIcon from '../../../assets/HeadsetProfile/screenshot.png'
import ScreenrecoardIcon from '../../../assets/HeadsetProfile/recoard.png'
//Light mode 
import UserPlaceholderLight from '../../../assets/Users/PersonPlaceHolder-light.svg'
import { useThemeStore } from '../../../stores/ThemeStore'
import ScreenShotLight from '../../../assets/UserLibrary/screenshot-light.png'
import ScreenRecordLight from '../../../assets/UserLibrary/recoard-light.png'



const LibraryUserCard = () => {
        const {dark} = useThemeStore()
        const [student, setStudent] = useState({} as any)
    

     
        

  return ( 
    <div className='library-user-card bg-white dark:bg-white/[0.08] text-light dark:text-white flex flex-col items-center justify-center gap-y-5'>
                    <div className=' w-[131px] h-[131px] flex items-center  justify-center rounded-full  bg-[#EEEFF2] dark:bg-white/30 '>
                            <img src={dark ? student.Image? student.Image : UserPlcaholder : student.Image? student.Image : UserPlaceholderLight} 
                            alt=""
                        className={`${student.Image && 'w-full h-full rounded-full object-cover'}`}
                            />
                    </div>
                    <span className=' text-2xl font-semibold '>{student.name}</span>
                    <div className=' flex items-center gap-x-2'>
                            <div className='flex items-center justify-center gap-x-1'>
                                    <img src={dark ? ScreenshotIcon : ScreenShotLight} alt="" className= ' w-7 h-7' />
                                    <span className=' text-xs font-medium'>12 screen shoot</span>
                            </div>
                            <div className='flex items-center justify-center gap-x-1'>
                                    <img src={ dark ? ScreenrecoardIcon : ScreenRecordLight} alt="" className= ' w-7 h-7' />
                                    <span className=' text-xs font-medium'>12 Vdieo Record</span>
                            </div>
                    </div>
                </div>
  )
}

export default LibraryUserCard