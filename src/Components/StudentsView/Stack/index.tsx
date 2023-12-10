import React from 'react'
import { Table, TableHeader, TableBody,TableColumn, TableRow, TableCell
,Avatar } from '@nextui-org/react'
const StudentsStackViews = () => {
  return (
    
      <Table
        classNames={{
          base : 'rounded-none',
          wrapper : 'rounded-none bg-transparent shadow-none',
          table : 'rounded-none',
          tr : 'rounded-none bg-white',
          thead : 'rounded-none  bg-white w-full  ',
          th : 'text-[#292D32] bg-[#52d969]/[0.12] border-b border-black/25 rounded-none py-5 h-[41px]',
          sortIcon : 'rounded-none',
          
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
          <TableColumn className=' rounded-none'>الصوره</TableColumn>
          <TableColumn>ااسم المستخدم</TableColumn>
          <TableColumn>رمز الدخول</TableColumn>
          <TableColumn>التصنيف</TableColumn>
          <TableColumn>الحاله</TableColumn>

        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>sf</TableCell>
            <TableCell>sf</TableCell>
            <TableCell>sf</TableCell>
            <TableCell>sf</TableCell>
            <TableCell>sf</TableCell>
          </TableRow>

        </TableBody>

      </Table>
    
    
  )
}

export default StudentsStackViews