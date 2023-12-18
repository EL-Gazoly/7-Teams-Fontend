import {useRef} from 'react'
import { Switch, Divider } from '@nextui-org/react'
import Permession from './Roleitem'

type RolesSectionProps = {
    disabled : boolean
}

const RolesSection = ({disabled} : RolesSectionProps) => {
    const headsetRef = useRef(false)
    const coursesRef = useRef(false)
    const studentsRef= useRef(false)
    const libraryRef = useRef(false)
    const repotrsRef = useRef(false)
    const certificatesRef = useRef(false)
    const dashboardRef = useRef(false)
    const logsRef = useRef(false)
    const rolesRef = useRef(false)
    const usersRef= useRef(false)

    const permessions = {
        headset : {
            name : "التحكم في نظارة الواقع الافتراضي",
            description : "يمكن للمستخدم الذي يتمتع بهذا الدور التحكم الكامل في سماعة الرأس، وبدء الدورات وإيقافها، والاطلاع على أداء المستخدمين",
            permession : headsetRef
        },
        courses : {
            name : "اظهار قسم المناهج",
            description : "سيكون للمستخدم الذي لديه هذا الدور القدرة على تصفح قسم المناهج لمعرفة دور كل دورة.",
            permession : coursesRef
        },
        students : {
            name : "التحكم في قسم الطلاب",
            description : "سيكون لدى المستخدم في هذا الدور القدرة على تصفح قسم الطلاب والتحكم بهم واضافة طلاب جدد للنظام.",
            permession : studentsRef
        },
        library : {
            name : "التحكم في قسم مكتبة الوسائط",
            description : "سيكون لدى المستخدم في هذا الدور القدرة على تصفح المكتبة وعرض لقطات الشاشة والفيديو والوصول إليها.",
            permession : libraryRef 
        },
        repotrs : {
            name : "التحكم في قسم التقارير",
            description : "سيكون لدى المستخدم في هذا الدور القدرة على عرض تقارير المستخدم والوصول إليها وطباعتها.",
            permession : repotrsRef
        },
        certificates : {
            name : "الشهادات",
            description : "سيكون لدى المستخدم في هذا الدور القدرة على عرض قسم الشهادات وإنشاء شهادة جديدة وطباعتها.",
            permession : certificatesRef
        },
        dashboard : {
            name : "لوحة التحكم",
            description : "سيكون لدى المستخدم في هذا الدور القدرة على عرض قسم لوحة المعلومات وعرض جميع الإحصائيات المتعلقة بالنظام.",
            permession : dashboardRef
        },
        logs : {
            name : "سجل النظام",
            description : "سيكون لدى المستخدم في هذا الدور القدرة على عرض قسم سجل النظام ورؤية كل الأشياء التي حدثت في النظام.",
            permession : logsRef
        },
        roles : {
            name : "التحكم في الأدوار",
            description : " سيكون لدى المستخدم في هذا الدور القدرة على عرض الأدوار وأضافة ادوار للمستخدين او ازالتها",
            permession : rolesRef
        },
        users : {
            name : "التحكم في المسؤولين",
            description : "سيكون لدى المستخدم في هذا الدور القدرة على الاطلاع عالتحم الكامل في اضافة وحذف والأطلاع علي المسؤولين ",
            permession : usersRef
        },
    }
  return (
    <div className={`flex flex-col items-center gap-y-[18px]
    ${disabled ? 'opacity-50' : ''}
    `}>
        <div className=' flex flex-col gap-y-2 items-end  text-right text-text-black '>
            <label htmlFor="name" className=' text-xs font-bold text-right'>أسم الدور</label>
            <input type="text" className=' w-[781.531px] h-[58.361px] rounded-md bg-[#E1E4E8] px-5 text-right' 
            disabled={disabled}
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