import React from 'react';
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell, Avatar } from '@nextui-org/react';
import noPic from '../../../assets/students/noPic.svg'

type Student = {
  imageUrl: string;
  name: string;
  facilityId: string;
  device: {
    name: string;
  };
};

type StudentStackProps = {
  students: Student[];
};

const StudentsStackViews = ({ students }: StudentStackProps) => {
  if (students) console.log(students);

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
        <TableColumn>الحاله</TableColumn>
      </TableHeader>

      <TableBody>
        {students && students.map((student, index) => (
          <TableRow key={index}>
            <TableCell className='flex items-center justify-center'>
              <div className=' w-12 h-12 bg-[#F6F6F6] rounded-full flex items-center justify-center'>
                  {student.imageUrl ? <Avatar className=' w-11 h-11' src={`${import.meta.env.VITE_API_URL}${student.imageUrl}`} fallback={noPic}/> : <img src={noPic} alt="" /> }
              </div>
            </TableCell>
            <TableCell>
              <span className='text-text-black dark:text-white text-sm font-b old'>{student.name}</span>
            </TableCell>
            <TableCell>
              <div className='flex items-center justify-center  text-xs font-semibold text-primary'>   
                <span className=''>{student.facilityId}</span>
                <span>#</span>
              </div>
              
            </TableCell>
            <TableCell className='relative'>
              <div className={`absolute top-[40%] right-[35%] w-[60px] h-[26px] ${student.device?.name ?   "bg-primary " : " bg-disconnected-gradient"} rounded flex flex-row-reverse items-center justify-center gap-x-[4px]`}>
                <div className='w-[6px] h-[6px] rounded-full bg-white mt-[2px]' />
                <span className='text-white text-[8px]'>
                  {student.device?.name ? "متصل الان" : "غير متصل"}
                </span>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default StudentsStackViews;
