import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell, Avatar } from '@nextui-org/react';
import SchoolIcon from '../../assets/SideBar/Open/school.svg'
import EditIcon from '../../assets/schools/Edit/Edit_Pencil_Line_01.svg'
import LightEditIcon from '../../assets/schools/dark/Edit_Pencil_Line_01.svg'
import LightSchoolIcon from '../../assets/SideBar/Open/default/school.svg'
import { useThemeStore } from '../../stores/ThemeStore';

const SchoolTable = () => {
    const {dark} = useThemeStore()
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
    
        <TableRow >
          <TableCell className='flex items-center justify-center'>
            <div className=' w-12 h-12 bg-[#F7F9FC] dark:bg-[#EEEFF2]/10 rounded-full flex items-center justify-center'>
                <img src={dark? SchoolIcon : LightSchoolIcon} className=' w-10 h-6'/>
            </div>
          </TableCell>
          <TableCell>
            <span className='text-text-black dark:text-white text-sm font-b old'>Hamed</span>
          </TableCell>
          <TableCell>
            <div className='flex items-center justify-center  text-xs font-semibold text-primary'>   
              <span className=''>12311</span>
              <span>#</span>
            </div>
            
          </TableCell>
          <TableCell className='flex w-full items-center justify-center'>
            <img src={dark? EditIcon : LightEditIcon} alt="" className=' self-center' />
          </TableCell>
        </TableRow>

    </TableBody>
  </Table>
  )
}

export default SchoolTable
