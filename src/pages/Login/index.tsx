import React from 'react'
import './style.css'
import LoginIcon from '../../assets/login/logo.png'
import { Image, Button } from '@nextui-org/react'
const LoginPage = () => {
  return (
    <div className='login-bg fixed inset-0 w-screen h-screen
        flex items-center justify-center
    '>
        <div className=" w-[443px] h-[530px] rounded-xl bg-light-bg
             py-20 px-[84px]
        ">  
            <div className='  flex flex-col  w-[276.146px] '>
                <div className=' flex items-center justify-center'>
                    <Image  src={LoginIcon}  />
                </div>
                <div className='flex flex-col items-center mt-[55px]'>
                    <div className="email flex flex-col text-right gap-y-[5px]">    
                        <label htmlFor="email" className=' text-[#3D3C3C] text-xs   '> البريد الاليكتروني </label>
                        <input type="email" placeholder=' ادخل البريد الالكتروني '
                        className=' text-right w-[276px] h-12 bg-[#E6E8EB66] placeholder:text-[#2929295C] text-xs rounded-md px-4' />
                    </div>
                    <div className="password mt-5 flex flex-col text-right gap-y-[5px]">    
                        <label htmlFor="password" className=' text-[#3D3C3C] text-xs   '> كلمة المرور </label>
                        <input type="password" placeholder=' ادخل كلمة المرور  '
                        className=' text-right w-[276px] h-12 bg-[#E6E8EB66] placeholder:text-[#2929295C] text-xs rounded-md px-4' />
                    </div>

                </div>
                <div className=' flex items-center justify-start mt-2'>
                    <span className=' text-[#0404045C] text-[11px] font-medium underline'>هل نسيت كلمة المرور ؟</span>
                </div>  

                <Button className='mt-6 w-full h-[47.875px] rounded-md bg-primary-gradient text-white text-xs font-bold'>
                    تسجيل الدخول
                </Button>
                
                <div className=' mt-2 w-full  flex items-center justify-between'>
                    <span className=' text-[#3D3C3C] text-xs font-medium underline'>هل تحتاج مساعدة ؟</span>
                    <span className=' text-[#3D3C3C] text-xs font-medium underline'>www.7-teams.com</span>
                    
                </div>

            </div>

        </div>

    </div>
  )
}

export default LoginPage