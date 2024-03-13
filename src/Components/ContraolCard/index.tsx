import HeadsetLight from '../../assets/ControlCard/Light/Headset.svg'
import CoursesLight from '../../assets/ControlCard/Light/Courses.svg'
import StudentLight from '../../assets/ControlCard/Light/Users.svg'
import LibraryLight from '../../assets/ControlCard/Light/Library.svg'
import CertificateLight from '../../assets/ControlCard/Light/Certificates.svg'
import SystemIconLight from '../../assets/ControlCard/Light/System.svg'
import ReportLight from '../../assets/ControlCard/Light/Reports.svg'
import SettingLight from '../../assets/ControlCard/Light/Settings.svg'
import DashboardLight from '../../assets/ControlCard/Light/Dashboard.svg'
import SchoolLight from '../../assets/ControlCard/Light/school.svg'
import BackIconLight from '../../assets/ControlCard/Light/Iconsax/Outline/arrowleft.svg'
import DarkArrow from '../../assets/ControlCard/dark/arrow.svg'


import { Image, Switch, cn, Button, Avatar } from '@nextui-org/react'
import LanguageIcon from '../../assets/ControlCard/language.svg'
import logoutIcon from '../../assets/ControlCard/logout.svg'
import Placeholder from '../../assets/ControlCard/placeholder.jpeg'
import "./style.css"
import { useNavigate } from 'react-router-dom'
import { useThemeStore } from '../../stores/ThemeStore'
import { useEffect } from 'react'

type Props ={
  icon : string
  title : string
  neasted: boolean
}

const ControlCard = ({icon, title, neasted}:Props) => {
  const {dark, setTheme} = useThemeStore()

  useEffect(() => {
    setTheme(localStorage.getItem('theme') ? localStorage.getItem('theme') === 'dark' : false)
  }, [])


  const navigate = useNavigate()
  const handelLogout = () =>{
    document.cookie = `Authorization=; path=/; max-age=${0}`;
    localStorage.clear()
    navigate('/login')
  }

  const getIcon = (icon) => {
    switch (icon) {
      case 'Headset' :
        return HeadsetLight;
      case 'Courses' : 
        return CoursesLight;
      case 'Students':
        return StudentLight;
      case 'Library' : 
        return LibraryLight;
      case 'Reports' :
        return ReportLight;
      case 'Certificates' :
        return CertificateLight;
      case 'Dashboard' :
        return DashboardLight;
      case 'System': 
        return SystemIconLight;
      case 'Settings' :
        return SettingLight
      case 'Schools' : 
        return SchoolLight
    }
  }

  const setThemeHandler = (dark) => {
    setTheme(dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }

  return (  
    <div className={`w-full h-[103px] rounded-b-[14px] ${dark? "dark:bg-[#252A33]" : "Control-card-bg"} light flex items-center px-[26px] justify-between flex-row-reverse`}
    style={{
      backdropFilter: "blur(4.406332015991211px)"
    }}
    >
        <div className='flex items-center gap-x-[14px] text-[#292D32] dark:text-white text-2xl font-bold flex-row-reverse'>
          {neasted && 
          <div className=' w-11 h-11 rounded-full bg-[#E8E8EA] dark:bg-[#BDBEC0]/25 flex items-center justify-center cursor-pointer'
            onClick={() => navigate(-1)}
          >
             <img src={dark ? DarkArrow : BackIconLight} alt="" className=' rotate-180 dark:rotate-0' />
          </div>
         
          
          }
            <img src={getIcon(icon)} className=' w-[30px] h-[30px]' />
            <span> {title} </span>
        </div>
        <div className=' flex items-center gap-x-6 flex-row-reverse'>
            <Switch
                color='primary'
                size='lg'
                isSelected={dark}
                onChange={() => setThemeHandler(!dark)}
                classNames={{
                         wrapper: cn(
                            "bg-black",
                        "group-data-[selected=true]:bg-primary-gradient ",
                        "w-[69px]",
                     
                      ),
                      thumb: cn(
                     
                      "group-data-[selected=true]:ml-9",
                   
                    ),
              
                }}
                startContent={<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path d="M0.872655 7.83084C1.11987 11.3675 4.12085 14.2448 7.7124 14.4028C10.2464 14.5126 12.5126 13.3315 13.8723 11.4705C14.4354 10.7082 14.1332 10.2 13.1924 10.3717C12.7323 10.4541 12.2585 10.4885 11.7641 10.4678C8.40599 10.3305 5.6591 7.52181 5.64537 4.20495C5.6385 3.31221 5.82392 2.46754 6.16041 1.69842C6.53124 0.846882 6.08487 0.441716 5.22647 0.805679C2.50705 1.9525 0.646037 4.69252 0.872655 7.83084Z" stroke="white" stroke-width="1.03008" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>}
                endContent={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                <path d="M7.71564 13.0035C10.1809 13.0035 12.1793 11.0051 12.1793 8.53986C12.1793 6.07463 10.1809 4.07617 7.71564 4.07617C5.25041 4.07617 3.25195 6.07463 3.25195 8.53986C3.25195 11.0051 5.25041 13.0035 7.71564 13.0035Z" stroke="white" stroke-width="1.03008" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.6196 13.4442L12.5304 13.355M12.5304 3.72712L12.6196 3.63785L12.5304 3.72712ZM2.81327 13.4442L2.90254 13.355L2.81327 13.4442ZM7.71646 1.72877V1.67383V1.72877ZM7.71646 15.4083V15.3533V15.4083ZM0.904181 8.54104H0.849243H0.904181ZM14.5837 8.54104H14.5287H14.5837ZM2.90254 3.72712L2.81327 3.63785L2.90254 3.72712Z" stroke="white" stroke-width="1.37344" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>}
             />
             <div className=' flex items-center gap-x-2'>
                <Button isIconOnly  className='  w-11 h-10 rounded-[14px] flex items-center justify-center cursor-pointer   bg-secondary '>
                  <img src={LanguageIcon} width={21} height={21} />
                </Button>
                <Button isIconOnly  className='  w-11 h-10 rounded-[14px] flex items-center justify-center cursor-pointer   bg-secondary '
                  onClick={handelLogout}
                >
                  <img src={logoutIcon} width={21} height={21}   />
                </Button>
             </div>
                <div className='flex items-center gap-x-4 flex-row-reverse'>
                  <div className='w-[57px] h-[57px] rounded-full' >
                      <img src={Placeholder} alt="" className='w-[57px] h-[57px] rounded-full' />
                  </div>
                  <div className=' flex flex-col gap-y-[7px] text-[#292D32] dark:text-white text-right'>
                    <span className=' text-xs font-bold'>Sameh Ahmed</span>
                    <span className='text-[10px] font-medium'>الملف الشخصي</span>
                  </div> 

                </div>

        </div>
    </div>
  )
}

export default ControlCard