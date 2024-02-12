import React from 'react'
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from '@nextui-org/react'
import { GetRolesWithPermessions } from '../../graphql/role'
import { useQuery } from '@apollo/client'
import EditIcon from '../../assets/settings/vuesax/linear/vuesax/linear/user-edit.svg'
import DarkEditIcon from '../../assets/settings/dark/vuesax/linear/user-edit.svg'
import { Link } from 'react-router-dom'
import Loading from '../../Components/Loading'
import { useThemeStore } from '../../stores/ThemeStore'

const RolesTables = ({searchQuery}) => {
    const {dark} = useThemeStore()
    const { loading, error, data: rolesData } = useQuery(GetRolesWithPermessions);
    if (loading) return <Loading />
    if (error) console.log(error)
    if (rolesData) console.log(rolesData.admin.roles)
  return (
    <Table
    isHeaderSticky
    classNames={{
        base: 'rounded-none',
        wrapper: 'rounded-none bg-transparent shadow-none',
        table: 'rounded-none',
        tr: 'rounded-none bg-white dark:bg-[#454A51] text-center border-b border-[#292d32]/50',
        thead: 'rounded-none w-full border-b border-white dark:border-[#77777782]',
        th: 'text-[#292D32] bg-[#52d969]/[0.12] dark:bg-[#1F2329] dark:text-white border-b border-black/25 rounded-none py-5 h-[41px] text-center',
        sortIcon: 'rounded-none',
      }}
      style={{
        direction: 'rtl',
     
      }}
    >
      <TableHeader
        style={{
          direction: 'rtl',
          
        }}
        className='bg-primary text-white rounded-none'
      >
        <TableColumn className=' rounded-none w-[129px]'> اسم الدور </TableColumn>
        <TableColumn className=' w-[776px] '> وصف الدور </TableColumn>
        <TableColumn  className='  w-[96px]'> التعديل </TableColumn>
      </TableHeader>
      <TableBody>
        {rolesData && rolesData.admin.roles.map((role) => {
            return(
               <TableRow key={role.id} className=' '>
                <TableCell className=' ' >
                    <div className=' w-full flex items-center justify-center'>
                        <div className=' py-1 px-3 bg-text-black text-[#FBFCFD] dark:bg-[#FBFCFD] dark:text-text-black text-xs font-medium rounded-md '>
                            {role.name}
                        </div>
                    </div>
                   
                </TableCell>
                <TableCell className='mt-1 border-x-[0.7px] border-[#292D3282]'>
                    <div className='w-full grid grid-cols-6 gap-y-5'>
                    {role.isCertificatesAccess && 
                        <div className='flex items-center gap-x-2 '>
                            <div className=' w-1 h-1 bg-text-black dark:bg-white mt-1' />
                            <span className=''>التحكم في الشهادات </span>
                        </div>
                    }
                    {role.isCoursesAccess && 
                        <div className='flex items-center gap-x-2'>
                            <div className=' w-1 h-1 bg-text-black dark:bg-white mt-1' />
                            <span className=''> اظهار قسم المناهج  </span>
                        </div>
                    }
                    {role.isDashboardAccess && 
                        <div className='flex items-center gap-x-2'>
                            <div className=' w-1 h-1 bg-text-black dark:bg-white mt-1' />
                            <span className=''> اظهار لوحة التحكم </span>
                        </div>
                    }
                  
                    {role.isLibraryAccess &&
                        <div className='flex items-center gap-x-2'>
                            <div className=' w-1 h-1 bg-text-black mt-1 dark:bg-white' />
                            <span className=''>التحكم في الوسائط </span>
                        </div>
                    }
                    {role.isLogsAccess &&  
                        <div className='flex items-center gap-x-2 '>
                            <div className=' w-1 h-1 bg-text-black mt- dark:bg-white' />
                            <span className=''> اظهار سجل النظام  </span>
                        </div>
                    }
                    {role.isReportsAccess && 
                        <div className='flex items-center gap-x-2'>
                            <div className=' w-1 h-1 bg-text-black mt-1 dark:bg-white' />
                            <span className=''> التحكم التقارير </span>
                        </div>
                    }
                    {role.isRolesAccess &&
                        <div className='flex items-center gap-x-2'>
                            <div className=' w-1 h-1 bg-text-black mt-1 dark:bg-white' />
                            <span className=''> التحكم في الأدوار </span>
                        </div>
                    }
                    {role.isStudentsAccess && 
                        <div className='flex items-center gap-x-2'>
                            <div className=' w-1 h-1 bg-text-black mt-1 dark:bg-white' />
                            <span className=''> التحكم في الطلاب </span>
                        </div>
                    }
                    {role.isUsersAccess && 
                        <div className='flex items-center gap-x-2'>
                            <div className=' w-1 h-1 bg-text-black mt-1 dark:bg-white' />
                            <span className=''> التحكم في المسؤولين </span>
                        </div>
                    }
                      {role.isDevicesAccess && 
                        <div className='flex items-center gap-x-2 col-span-2 '>
                            <div className=' w-1 h-1 bg-text-black mt-1 dark:bg-white' />
                            <span className=''> التحكم في نظارة الواقع الافتراضي </span>
                        </div>
                    }
                    </div>
                   
                </TableCell>
                <TableCell className=''>
                    <Link to={`/settings/roles/update/${role.id}`} className=' w-full flex items-center justify-center'>
                        <img src={dark? DarkEditIcon : EditIcon} alt="" />
                    </Link>

                </TableCell>
            </TableRow> 
            )
            
        })}

        </TableBody>
        

        </Table>
  )
}

export default RolesTables
