import React from 'react';
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell, Avatar } from '@nextui-org/react';
import Placeholder from '../../../assets/students/placeholder.jpg';

type Student = {
  imgUrl: string;
  name: string;
  generatedId: number;
};

type StudentStackProps = {
  students: Student[];
};

const StudentsStackViews = ({ students }: StudentStackProps) => {
  const data = {
    img: Placeholder,
    name: "احمد حامد",
    id: 256182,
    connected: true,
  };

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
        <TableColumn>ااسم المستخدم</TableColumn>
        <TableColumn>رمز الدخول</TableColumn>
        <TableColumn>الحاله</TableColumn>
      </TableHeader>

      <TableBody>
        {students && students.map((student, index) => (
          <TableRow key={index}>
            <TableCell className='flex items-center justify-center'>
              <Avatar src={data.img} className='w-[49px] h-[49px]' />
            </TableCell>
            <TableCell>
              <span className='text-text-black text-sm font-b old'>{student.name}</span>
            </TableCell>
            <TableCell>
              <span className='text-xs font-semibold text-primary'>#{student.generatedId}</span>
            </TableCell>
            <TableCell className='relative'>
              <div className='absolute top-[40%] right-[35%] w-[60px] h-[26px] bg-primary rounded flex flex-row-reverse items-center justify-center gap-x-[4px]'>
                <div className='w-[6px] h-[6px] rounded-full bg-white mt-[2px]' />
                <span className='text-white text-[8px]'>
                  {data.connected && "متصل الان"}
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
