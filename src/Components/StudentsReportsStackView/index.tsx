import React from 'react'
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell, Avatar } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';
import noPic from '../../assets/students/noPic.svg'

const StackView = ({data}) => {
    const navigate = useNavigate()
    const getStage = (stage) => {
        switch (stage) {
            case 'High':
            return 'الثانوي'
            case 'Middle':
            return 'المتوسط'
        }
    }
    const getGrade = (grade) => {
        switch (grade) {
            case 'first':
            return 'الاول'
            case 'second':
            return 'الثاني'
            case 'third':
            return 'الثالث'
        }
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
        <TableColumn className='rounded-none'>الصوره</TableColumn>
        <TableColumn>اسم المستخدم</TableColumn>
        <TableColumn>رمز الدخول</TableColumn>
        <TableColumn>المدرسه</TableColumn>
        <TableColumn>الصف</TableColumn>
        <TableColumn>المرحله</TableColumn>
      </TableHeader>
      <TableBody>
        {
            data.map((student, index) => (
                <TableRow key={index} className=' z-0'>
                <TableCell className='flex items-center justify-center cursor-pointer' onClick={()=> navigate(`/reports/students/${student?.studentId}}`)}>
                <div className=' w-[50px] h-[50px] bg-[#F6F6F6] rounded-full flex items-center justify-center'>
                  {student.imageUrl ? <Avatar className=' w-full h-full z-10' src={`${import.meta.env.VITE_API_URL}${student.imageUrl}`} fallback={noPic}/> : <img src={noPic} alt="" /> }
                </div>
                </TableCell>
                <TableCell className=' cursor-pointer'onClick={()=> navigate(`/reports/students/${student?.studentId}}`)} >
                    <span className='text-[#292D32] dark:text-white text-sm font-bold'> {student?.name} </span>
                </TableCell>
                <TableCell className=' cursor-pointer'onClick={()=> navigate(`/reports/students/${student?.studentId}}`)}>
                <div className='flex items-center justify-center  text-xs font-semibold text-primary'>
                  <span className=''>{student.facilityId}</span>
                  <span>#</span>
                </div>
                </TableCell>
                <TableCell className=' cursor-pointer'onClick={()=> navigate(`/reports/students/${student?.studentId}}`)}>
                    <span className='text-sm font-bold text-[#292D32] dark:text-white'>{student?.schoolName}</span>
                </TableCell>
                <TableCell className=' cursor-pointer'onClick={()=> navigate(`/reports/students/${student?.studentId}}`)}>
                    <span className='text-sm font-bold text-[#292D32] dark:text-white'> {getGrade(student?.class.number)} </span>
                </TableCell>
                <TableCell className=' cursor-pointer'onClick={()=> navigate(`/reports/students/${student?.studentId}}`)}>
                    <span className='text-sm font-bold text-[#292D32] dark:text-white'>{getStage(student?.team.name)}</span>
                </TableCell>
            </TableRow>
            ))
        }
       
    </TableBody>

    </Table>

  )
}

export default StackView
