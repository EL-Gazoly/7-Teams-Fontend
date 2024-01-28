import React from 'react'
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell, Avatar } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';

const StackView = () => {
    const navigate = useNavigate()
  return (
        <Table
        isHeaderSticky
        classNames={{
        base: 'rounded-none',
        wrapper: 'rounded-none bg-transparent shadow-none',
        table: 'rounded-none',
        tr: 'rounded-none bg-white text-center border-b border-[#292d32]/50',
        thead: 'rounded-none w-full border-b border-white',
        th: 'text-[#292D32] bg-[#52d969]/[0.12] border-b border-black/25 rounded-none py-5 h-[41px] text-center',
        sortIcon: 'rounded-none',
        }}
        style={{
        direction: 'rtl',
        }}
    >
        <TableHeader className='bg-primary text-white rounded-none' style={{ direction: 'rtl' }}>
        <TableColumn className='rounded-none'>الصوره</TableColumn>
        <TableColumn>اسم المستخدم</TableColumn>
        <TableColumn>رمز الدخول</TableColumn>
        <TableColumn>المدرسه</TableColumn>
        <TableColumn>الصف</TableColumn>
        <TableColumn>المرحله</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow>
            <TableCell className='flex items-center justify-center cursor-pointer' onClick={()=> navigate(`/reports/students/1`)}>
                <Avatar className=' w-12 h-12' src='https://avatars.githubusercontent.com/u/44036562?v=4' />
            </TableCell>
            <TableCell className=' cursor-pointer'onClick={()=> navigate(`/reports/students/1`)} >
                <span className='text-[#292D32] text-sm font-bold'>محمد احمد</span>
            </TableCell>
            <TableCell className=' cursor-pointer'onClick={()=> navigate(`/reports/students/1`)}>
                <span className='text-xs font-semibold text-primary '>#245682</span>
            </TableCell>
            <TableCell className=' cursor-pointer'onClick={()=> navigate(`/reports/students/1`)}>
                <span className='text-sm font-bold text-[#292D32]'>مدرسه النور</span>
            </TableCell>
            <TableCell className=' cursor-pointer'onClick={()=> navigate(`/reports/students/1`)}>
                <span className='text-sm font-bold text-[#292D32]'>الاول الاعدادي</span>
            </TableCell>
            <TableCell className=' cursor-pointer'onClick={()=> navigate(`/reports/students/1`)}>
                <span className='text-sm font-bold text-[#292D32]'>الاعدادي</span>
            </TableCell>
        </TableRow>
    </TableBody>

    </Table>

  )
}

export default StackView
