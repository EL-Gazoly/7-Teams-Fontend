import React, {useState} from 'react'
import ControlCard from '../../Components/ContraolCard'
import SearchIcon from '../../assets/Landing/ChooseHeadset/search.png'
import GroupIcon from '../../assets/Reports/group.png'
import { Link } from 'react-router-dom'
import GroupDarkIcon from '../../assets/Reports/group-dark.png'
import { useThemeStore } from '../../stores/ThemeStore'
const list = [
    {
        title : "الصف الأول الابتدائي",
        icon : GroupIcon,
        link: '/reports/classes/299b30a9-cc2b-4d90-91c3-87a4e17c181e'
    },
    {
        title : "الصف الثاني الابتدائي",
        icon : GroupIcon,
        link: '/reports/classes/3005a5f7-c133-434e-be98-7dd3b78fedfd'
    },
    {
        title : "الصف الثالث الابتدائي",
        icon : GroupIcon,
        link: '/reports/classes/e713070c-853e-465d-9e72-0787f344147a'
    },
    {
        title : "الصف الرابع الابتدائي",
        icon : GroupIcon,
        link: '/reports/classes/6b10f49d-a110-420d-8595-9b8616d7c854'
    },
    {
        title : "الصف الخامس الابتدائي",
        icon : GroupIcon,
        link: '/reports/classes/1535cadc-70b9-4535-994b-e4c20c3912ae'
    },
    {
        title : "الصف السادس الابتدائي",
        icon : GroupIcon,
        link: '/reports/classes/99b559a7-0e9d-40fb-a952-6c25895ceedf'
    },
    {
        title : "الصف الأول المتوسط",
        icon : GroupIcon,
        link: '/reports/classes/fad58648-c419-4701-985a-b8707446074b'
    },
    {
        title : "الصف الثاني المتوسط",
        icon : GroupIcon,
        link: '/reports/classes/42e9c8a6-7c33-4ada-8215-65465a495912'
    },
    {
        title : "الصف الثالث المتوسط",
        icon : GroupIcon,
        link: '/reports/classes/d401bb95-d5ad-4b34-ae7a-e5db984f2b14'
    },
    {
        title : "الصف الأول الثانوي",
        icon : GroupIcon,
        link: '/reports/classes/65d2322b-1d47-42b1-8739-f10a83378355'
    },
    {
        title : "الصف الثاني الثانوي",
        icon : GroupIcon,
        link: '/reports/classes/056e7db3-66c1-450d-99b6-50c8206efc78'
    },
    {
        title : "الصف الثالث الثانوي",
        icon : GroupIcon,
        link: '/reports/classes/5b9b06d4-2278-476c-a6f2-02dd366b18ef'
    },
]

const ClassesReportsPage = () => {
    const {dark} = useThemeStore()
    const [search, setSearch] = useState('')
    const searched = list.filter((item) => {
        return item.title.includes(search)
    })
  return (
    <div>
        <ControlCard icon="Reports" title='التقارير' neasted={true} />
        <div className='flex flex-col items-center gap-y-5 mt-4'>
            <div className=' w-full h-[147px] bg-[#F7F9FC] dark:bg-primary-dark flex items-center justify-center'
                style={{
                    backdropFilter: "blur(64.4533462524414px)"
                }}
            >
                <div className=' w-[494px] h-12 rounded-lg bg-[#DDE0E3] dark:bg-[#40454D] flex items-center justify-start flex-row-reverse px-6 gap-x-[10px]'
                    style={{
                        backdropFilter: "blur(109.92385864257812px)"
                    }}
                >
                        <img src={SearchIcon} alt="" />
                        <input type="text" placeholder='البحث' className=' flex-1 text-right bg-transparent placeholder:text-[#929496] text-xs font-medium'
                        value={search} onChange={(e) => setSearch(e.target.value)}
                        />
                </div>

            </div>

            <div className=' max-w-full grid grid-cols-4 gap-x-4 gap-y-6'
                style={{
                    direction: 'rtl'
                }}
            >
                {searched.map((item) => {
                    return (
                        <Link to={item.link} className=' w-60 h-28 bg-white dark:bg-primary-dark rounded flex items-center px-[22px] gap-x-2'>
                            <div className=' w-[68px] h-[68px] bg-[#EEEFF2] dark:bg-[#3B4048] rounded-full flex items-center justify-center'>
                                <img src={dark ? GroupDarkIcon : GroupIcon} alt="" className=' w-9 h-9 ' />
                            </div>  
                            <span className=' text-xs font-bold'>{item.title}</span>

                        </Link>
                    )
                })}

            </div>

        </div>


      
    </div>
  )
}

export default ClassesReportsPage
