import {useRef} from 'react'
import { Switch, Divider } from '@nextui-org/react'
import Permession from './item'

type RolesSectionProps = {
    disabled : boolean
    nameRef : React.MutableRefObject<HTMLInputElement>
    permssions : permessionsType
}

type permessionsType = {
    isHeadsetAcsess : boolean
    setIsHeadsetAccsess : React.Dispatch<React.SetStateAction<boolean>>
    isCourseAcsess : boolean
    setIsCourseAccsess : React.Dispatch<React.SetStateAction<boolean>>
    isStudentAcsess : boolean
    setIsStudentAccsess : React.Dispatch<React.SetStateAction<boolean>>
    isLibraryAcsess : boolean
    setIsLibraryAccsess : React.Dispatch<React.SetStateAction<boolean>>
    isReportAcsess : boolean
    setIsReportAccsess : React.Dispatch<React.SetStateAction<boolean>>
    isCertificateAcsess : boolean
    setIsCertificateAccsess : React.Dispatch<React.SetStateAction<boolean>>
    isDashboardAcsess : boolean
    setIsDashboardAccsess : React.Dispatch<React.SetStateAction<boolean>>
    isLogsAcsess : boolean
    setIsLogsAccsess : React.Dispatch<React.SetStateAction<boolean>>
    isRoleAcsess : boolean
    setIsRoleAccsess : React.Dispatch<React.SetStateAction<boolean>>
    isUserAcsess : boolean
    setIsUserAccsess : React.Dispatch<React.SetStateAction<boolean>>

}

const RolesSection = ({disabled, nameRef, permssions} : RolesSectionProps) => {

 

    const permessions = {
        headset : {
            name : "التحكم في نظارة الواقع الافتراضي",
            description : "يمكن للمستخدم الذي يتمتع بهذا الدور التحكم الكامل في سماعة الرأس، وبدء الدورات وإيقافها، والاطلاع على أداء المستخدمين",
            selected : permssions.isHeadsetAcsess,
            onChange : permssions.setIsHeadsetAccsess
        },
        courses : {
            name : "اظهار قسم المناهج",
            description : "سيكون للمستخدم الذي لديه هذا الدور القدرة على تصفح قسم المناهج لمعرفة دور كل دورة.",
            selected : permssions.isCourseAcsess,
            onChange : permssions.setIsCourseAccsess
          
        },
        students : {
            name : "التحكم في قسم الطلاب",
            description : "سيكون لدى المستخدم في هذا الدور القدرة على تصفح قسم الطلاب والتحكم بهم واضافة طلاب جدد للنظام.",
            selected : permssions.isStudentAcsess,
            onChange : permssions.setIsStudentAccsess
        },
        library : {
            name : "التحكم في قسم مكتبة الوسائط",
            description : "سيكون لدى المستخدم في هذا الدور القدرة على تصفح المكتبة وعرض لقطات الشاشة والفيديو والوصول إليها.",
            selected : permssions.isLibraryAcsess,
            onChange : permssions.setIsLibraryAccsess
        },
        repotrs : {
            name : "التحكم في قسم التقارير",
            description : "سيكون لدى المستخدم في هذا الدور القدرة على عرض تقارير المستخدم والوصول إليها وطباعتها.",
            selected : permssions.isReportAcsess,
            onChange : permssions.setIsReportAccsess
        },
        certificates : {
            name : "الشهادات",
            description : "سيكون لدى المستخدم في هذا الدور القدرة على عرض قسم الشهادات وإنشاء شهادة جديدة وطباعتها.",
            selected : permssions.isCertificateAcsess,
            onChange : permssions.setIsCertificateAccsess
        },
        dashboard : {
            name : "لوحة التحكم",
            description : "سيكون لدى المستخدم في هذا الدور القدرة على عرض قسم لوحة المعلومات وعرض جميع الإحصائيات المتعلقة بالنظام.",
            selected : permssions.isDashboardAcsess,
            onChange : permssions.setIsDashboardAccsess
        },
        logs : {
            name : "سجل النظام",
            description : "سيكون لدى المستخدم في هذا الدور القدرة على عرض قسم سجل النظام ورؤية كل الأشياء التي حدثت في النظام.",
            selected : permssions.isLogsAcsess,
            onChange : permssions.setIsLogsAccsess
        },
        roles : {
            name : "التحكم في الأدوار",
            description : " سيكون لدى المستخدم في هذا الدور القدرة على عرض الأدوار وأضافة ادوار للمستخدين او ازالتها",
            selected : permssions.isRoleAcsess,
            onChange : permssions.setIsRoleAccsess
        },
        users : {
            name : "التحكم في المسؤولين",
            description : "سيكون لدى المستخدم في هذا الدور القدرة على الاطلاع عالتحم الكامل في اضافة وحذف والأطلاع علي المسؤولين ",
            selected : permssions.isUserAcsess,
            onChange : permssions.setIsUserAccsess
        },
    }
  return (
    <div className={`flex flex-col items-center gap-y-[18px]
    ${disabled ? 'opacity-50' : ''}
    `}>
        <div className=' flex flex-col gap-y-2 items-end  text-right text-text-black dark:text-white'>
            <label htmlFor="name" className=' text-xs font-bold text-right'>أسم الدور</label>
            <input type="text" className=' w-[781.531px] h-[58.361px] rounded-md bg-[#E1E4E8] dark:bg-[#E1E4E8]/[0.16]  px-5 text-right' 
            disabled={disabled}
            ref={nameRef}
                style={{
                    backdropFilter: "blur(23.259841918945312px)"
                }}
            />
        </div>
        {Object.keys(permessions).map(permessionsKey => (
            <Permession permessions={permessions} permesssionKey={permessionsKey} disabled={disabled}/>
        ))}
      

    </div>
  )
}

export default RolesSection