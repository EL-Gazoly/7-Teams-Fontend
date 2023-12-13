import React from 'react'
import { Table, TableHeader, TableBody,TableColumn, TableRow, TableCell
    ,Avatar } from '@nextui-org/react'
import Placeholder from '../../assets/students/placeholder.jpg'
import { GetUsers } from '../../graphql/users'
import { useQuery } from '@apollo/client'
    
    const data ={
      img : Placeholder,
      name : "احمد حامد",
      email : "Ahmedhamed25@gmail.com",
      role: " مسئول ",
      connected : true
    }
const AdminsTable = () => {
  const { loading, error, data: users } = useQuery(GetUsers);
  if (loading) console.log('loading')
  if (error) console.log(error)
  console.log(users)  
  return (
    <Table
    isHeaderSticky
      classNames={{
        base : 'rounded-none',
        wrapper : 'rounded-none bg-transparent shadow-none',
        table : 'rounded-none',
        tr : 'rounded-none bg-white text-center',
        thead : 'rounded-none   w-full border-b border-white  ',
        th : 'text-[#292D32] bg-[#52d969]/[0.12] border-b border-black/25 rounded-none py-5 h-[41px] text-center',
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
        <TableColumn> الايميل </TableColumn>
        <TableColumn>اسم الدور</TableColumn>
        <TableColumn> الحاله</TableColumn>
        <TableColumn> تعديل</TableColumn>
        

      </TableHeader>
      <TableBody>
      {users &&
      users.admin.users.map((user, index) => (
          <TableRow key={index} className='border-b border-[#292d32]/50'>
          <TableCell className='flex items-center justify-center'>
              <Avatar src={data.img} className='w-[49px] h-[49px]' />
          </TableCell>
          <TableCell>
              <span className='text-text-black text-sm font-bold'>{user.name}</span>
          </TableCell>
          <TableCell>
              <span className='text-xs font-semibold text-text-black'>{user.email}</span>
          </TableCell>
          <TableCell className='relative'>
              <span className='text-[10px] font-medium absolute top-[40%] right-[20%]  rounded bg-text-black w-[60px] h-[26px]  flex items-center justify-center text-white'>
                  {user.roles.name}

              </span>
          </TableCell>
          <TableCell className='relative'>
              <div className='absolute top-[40%] right-[35%] w-[60px] h-[26px] bg-primary rounded flex flex-row-reverse items-center justify-center gap-x-[4px]'>
              <div className='w-[6px] h-[6px] rounded-full bg-white mt-[2px]' />
              <span className='text-white text-[8px]'>{data.connected && "متصل الان"}</span>
              </div>
          </TableCell>
          <TableCell className='relative'>
              <div className='absolute top-[40%] right-[35%] w-[60px] h-[26px] bg-primary rounded flex flex-row-reverse items-center justify-center gap-x-[4px]'>
              <div className='w-[6px] h-[6px] rounded-full bg-white mt-[2px]' />
              <span className='text-white text-[8px]'>{data.connected && "متصل الان"}</span>
              </div>
          </TableCell>
          </TableRow>
      ))
      }


        
       
     

      </TableBody>

          </Table>
  )
}

export default AdminsTable