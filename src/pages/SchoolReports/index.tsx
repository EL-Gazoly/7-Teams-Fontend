import {useState} from 'react'
import ControlCard from '../../Components/ContraolCard'
import SearchIcon from '../../assets/Landing/ChooseHeadset/search.png'
import { useQuery } from '@apollo/client'
import { getSchools } from '../../graphql/School'
import Loading from '../../Components/Loading'
import SchoolDarkIcon from '../../assets/Reports/schools.png'
import SchoolIcon from '../../assets/Reports/school.png'
import { useThemeStore } from '../../stores/ThemeStore'
import { Link } from 'react-router-dom'
const SchoolReports = () => {
    const [search, setSearch] = useState('')
    const {dark} = useThemeStore()

    const { loading, error, data } = useQuery(getSchools);
    if (loading) return <Loading />
    if (error) return console.log(error);
    if (search) {
        data.admin.schools.filter((school: any) => {
            return school.name.toLowerCase().includes(search.toLowerCase())
        })
    }
  return (
    <div className='  flex flex-col gap-y-[26px]'>
            <ControlCard icon='Schools' title='المدارس' neasted={true} />

            <div className=' w-[1003px] h-[104px] bg-[#F7F9FC] dark:bg-[#262B34] rounded-lg flex items-center gap-x-12 flex-row-reverse px-14'>
                    <span className=' text-xs font-medium'>
                        ( {data ? data.admin.schools.length : 0} 
                           { data ? data.admin.schools.length > 1 && data.admin.schools.length < 11 ? ' مدارس' : ' مدرسة' : ' مدرسة' }
                         )
                    </span>
                     <div className=' w-[300px] h-12 rounded-lg bg-[#DDE0E3] dark:bg-[#929496]/30 flex items-center px-6 gap-x-[10px]'>
                        
                        <input type="text" placeholder='البحث' className=' flex-1 text-right bg-transparent placeholder:text-[#929496] text-xs font-medium'
                        onChange={(e) => setSearch(e.target.value)}
                        />
                        <img src={SearchIcon} alt="" />
                    </div>

            </div>

            <div className=' max-w-full grid grid-cols-4 gap-1'
                style={{
                    direction: 'rtl'
                }}
            >
               {
                data?.admin.schools.map((school: any) => (
                      <Link to={`/reports/schools/${school.schoolId}`} key={school.schoolId} className=' w-60 h-28 rounded-md flex  items-center px-6 gap-x-5 bg-white dark:bg-[#262B34]'>
                        <div className=' w-16 h-16 bg-[#F6F6F6] dark:bg-[#3B4048] rounded-full flex items-center justify-center'>
                            <img src={school.imageUrl? import.meta.env.VITE_API_URL + school.imageUrl :
                            dark? SchoolDarkIcon : SchoolIcon} className={` ${school.imageUrl ? "w-full h-full rounded-full" : "w-8 h-8"}`} />
                        </div>
                        <div className=' flex flex-col gap-y-[2px] text-xs max-w-[120px]'>
                            <span className=' font-bold'>
                                {school.name}
                            </span>
                            <span className=' text-primary'>
                                #{school.uniqueId}
                            </span>


                        </div>

                </Link>
                ))
               }
              

            </div>


      
    </div>
  )
}

export default SchoolReports
