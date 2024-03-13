import { useEffect } from 'react';
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell, Avatar } from '@nextui-org/react';
import SchoolIcon from '../../assets/SideBar/Open/school.svg'
import EditIcon from '../../assets/schools/Edit/Edit_Pencil_Line_01.svg'
import LightEditIcon from '../../assets/schools/dark/Edit_Pencil_Line_01.svg'
import LightSchoolIcon from '../../assets/SideBar/Open/default/school.svg'
import { useThemeStore } from '../../stores/ThemeStore';
import { useQuery } from '@apollo/client';
import { getSchools } from '../../graphql/School';
import Loading from '../../Components/Loading';
import { Link } from 'react-router-dom';

const SchoolTable = ({setSchools}) => {
    const {dark} = useThemeStore()
    const {data, loading, error} = useQuery(getSchools)
    useEffect(() => {
      if (data) {
          setSchools(data.admin.schools.length)
      }
  }, [data])
    if (loading) {
        return <Loading />
    }

  return (
    <Table
    isHeaderSticky
    classNames={{
      base: 'rounded-none',
      wrapper: 'rounded-none bg-transparent shadow-none',
      table: 'rounded-none',
      tr: 'rounded-none bg-white dark:bg-[#252A33] text-center border-b border-[#292d32]/50',
      thead: 'rounded-none w-full border-b border-white dark:border-[#77777782]',
      th: 'text-[#292D32] bg-[#52d969]/[0.12] dark:bg-[#1F2329] dark:text-white border-b border-black/25 rounded-none py-5 h-[41px] text-center',
      sortIcon: 'rounded-none',
    }}
    style={{
      direction: 'rtl',
    }}
  >
    <TableHeader className='bg-primary text-white rounded-none' style={{ direction: 'rtl' }}>
      <TableColumn className='rounded-none'>الشعار</TableColumn>
      <TableColumn>اسم المدرسه</TableColumn>
      <TableColumn>رقم المدرسه</TableColumn>
      <TableColumn>تعديل</TableColumn>
    </TableHeader>

    <TableBody>
    {
        data?.admin?.schools?.map((school, index) => {
            return (
                <TableRow key={school.schoolId}>
                <TableCell className='flex items-center justify-center'>
                  <div className=' w-12 h-12 bg-[#F7F9FC] dark:bg-[#EEEFF2]/10 rounded-full flex items-center justify-center'>
                      <img src={
                        school.imageUrl ? import.meta.env.VITE_API_URL + school.imageUrl:
                        dark? SchoolIcon : LightSchoolIcon} className={` ${school?.imageUrl? "w-full h-full rounded-full object-cover": "w-10 h-6"} `}/>
                  </div>
                </TableCell>
                <TableCell>
                  <span className='text-text-black dark:text-white text-sm font-b old'>{school.name}</span>
                </TableCell>
                <TableCell>
                  <div className='flex items-center justify-center  text-xs font-semibold text-primary'>   
                    <span className=''>{school.uniqueId}</span>
                    <span>#</span>
                  </div>
                  
                </TableCell>
                <TableCell className='relative'>
            <div className='absolute top-[40%] right-[30%]' >
              <Link to={`/schools/update/${school.schoolId}`}  >
                <img src={dark? EditIcon : LightEditIcon} alt=""  />
              </Link>
            </div>
            
          </TableCell>
              </TableRow>
            )
        })
    }
       
    </TableBody>
  </Table>
  )
}

export default SchoolTable
