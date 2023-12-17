
import {Tabs, Tab, Image} from "@nextui-org/react";

import { useNavigate, useLocation } from "react-router-dom";

import {useState} from 'react'
import LogoImage from '../../assets/SideBar/Open/logo.png'
import SelectedHeadset from '../../assets/SideBar/Open/Selected/headset.svg'
import Headset from '../../assets/SideBar/Open/default/headset.svg'
import SelectedCourses from '../../assets/SideBar/Open/Selected/courses.png'
import Courses from '../../assets/SideBar/Open/default/courses.svg'
import SelectedStudents from '../../assets/SideBar/Open/Selected/students.png'
import Students from '../../assets/SideBar/Open/default/students.svg'
import SelectedLibrary from '../../assets/SideBar/Open/Selected/library.png'
import library from '../../assets/SideBar/Open/default/library.svg'
import SelectedReports from '../../assets/SideBar/Open/Selected/reports.png'
import Reports from '../../assets/SideBar/Open/default/reports.svg'
import SelectedCertificates from '../../assets/SideBar/Open/Selected/certificates.png'
import Certificates from '../../assets/SideBar/Open/default/certificates.svg'
import SelectedDashboard from '../../assets/SideBar/Open/Selected/dashboard.png'
import Dashboard from '../../assets/SideBar/Open/default/dashboard.svg'
import SelectedLogs from '../../assets/SideBar/Open/Selected/logs.png'
import Logs from '../../assets/SideBar/Open/default/logs.svg'
import SelectedSettings from '../../assets/SideBar/Open/Selected/settings.png'
import Settings from '../../assets/SideBar/Open/default/settings.svg'
import ArrowIcon from '../../assets/SideBar/Open/arrow.png'

const SideBar = () => {
    const [active, setActive] = useState("/headsets")
    const navigate = useNavigate()
    const location = useLocation()

    const handleNavigation = (path : string) => {
        setActive(getFirstWordFromPath(path))
        navigate(path)
    }
    const getFirstWordFromPath = (path) => {
        const firstWord = path.split("/")[1]; // Get the first word after splitting by "/"
        return `/${firstWord}`;
    };

  return (
    <div className=" relative">
        <div className=' w-[213px] h-screen flex flex-col px-5 py-[53px] gap-y-10 bg-[#F7F9FC] overflow-y-hidden'
        style={{
            filter : "drop-shadow(0px 3.25px 21.125px rgba(0, 0, 0, 0.25))"
        }}
        >

            <div className="flex items-center justify-center font-medium text-[#42464B]">
                <Image src={LogoImage} width={153} height={49} />

            </div>

            <Tabs classNames={{
                "base" : "text-white",
                "tabList" : "flex flex-col w-full h-full bg-transparent space-y-7",
                "cursor" : "h-[46px] flex items-center justify-center rounded-[6.5px]",
            }}
            color="primary"
            selectedKey={getFirstWordFromPath(location.pathname)} 
            onSelectionChange={(key : string) => handleNavigation(key)}
            aria-label="sidebar tabs"
            >
                <Tab key={"/headsets"}  title={
                    <div className=" w-[159px] flex items-center justify-start mx-2 gap-x-2 mr-4 mt-3 font-medium text-sm  flex-row-reverse">
                        <Image src={active === "/headsets" ? SelectedHeadset : Headset} width={25} height={25} />
                        <span className=" text-[13px]">نظارة الواقع الافتراضي </span>
                    </div>
                } />
                 <Tab key={"/courses"}   title={
                    <div className="w-[159px]  flex items-center  justify-start mr-4 gap-x-4 mt-3 font-medium text-sm  flex-row-reverse">
                        <Image src={active==="/courses" ? SelectedCourses : Courses} width={25} height={25} radius="none" />
                        <span>المناهج التعليمية</span>
                    </div>
                } />
                <Tab key={"/students"} title={
                    <div className=" w-[159px]  flex items-center justify-start gap-x-4 mr-4 mt-3 font-medium text-sm  flex-row-reverse">
                        <Image src={active=== "/students" ? SelectedStudents : Students} width={20} height={20} radius="none"/>
                        <span>الطلاب</span>
                    </div>
                } />
               
                <Tab key={"/library"}   title={
                    <div className=" w-[159px]  flex items-center justify-start mr-4 gap-x-4 mt-3 font-medium text-sm  flex-row-reverse">
                        <Image src={active==="/library" ? SelectedLibrary : library} width={25} height={25} radius="none"  />
                        <span>الوسائط المحفوظة</span>
                    </div>
                } />
                <Tab key={"/reports"}   title={
                    <div className=" w-[159px]  flex items-center justify-start mr-4 gap-x-4 mt-3 font-medium text-sm   flex-row-reverse">
                        <Image src={active==="/reports" ? SelectedReports : Reports} radius="none" />
                        <span>التقارير</span>
                    </div>
                } />
                <Tab key={"/certificates"}   title={
                    <div className=" w-[159px]  flex items-center justify-start mr-4 gap-x-4 mt-3 font-medium text-sm   flex-row-reverse">
                        <Image src={active==="/certificates" ? SelectedCertificates : Certificates} radius="none" />
                        <span>الشهادات</span>
                    </div>
                } />
                <Tab key={"/dashboard"}   title={
                    <div className=" w-[159px]  flex items-center justify-start mr-4 gap-x-4 mt-3 font-medium text-sm  flex-row-reverse">
                        <Image src={active==="/dashboard" ? SelectedDashboard : Dashboard} width={25} height={25} radius="none" />
                        <span>لوحة التحكم</span>
                    </div>
                } />
                <Tab key={"/logs"}   title={
                    <div className=" w-[159px]  flex items-center justify-start mr-4 gap-x-4 mt-3 font-medium text-sm  flex-row-reverse">
                        <Image src={active==="/logs" ? SelectedLogs : Logs} width={25} height={25} radius="none" />
                        <span>سجل النظام</span>
                    </div>
                } />
        
                <Tab key={"/settings"}   title={
                    <div className=" w-[159px]  flex items-center justify-start mr-4 gap-x-4 mt-3 font-medium text-xs flex-row-reverse">
                        <Image src={active==="/settings" ? SelectedSettings : Settings} radius="none"/>
                        <span>الاعدادات العامة</span>
                    </div>
                } />

                <Tab className=" invisible"/>
            
                
            </Tabs>
            
        </div>
        <div className=" absolute top-[50%] left-[-35%]">
                    <div className=" w-[147px] h-5 rounded-3xl bg-primary rotate-90 flex items-center justify-center cursor-pointer">
                       <Image src={ArrowIcon} radius="none" className=" -rotate-90"/>
                    </div>
        </div>
    </div>
    
  )
}

export default SideBar