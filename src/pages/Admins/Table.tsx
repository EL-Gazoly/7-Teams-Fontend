import React from 'react'
import { Table, TableHeader, TableBody,TableColumn, TableRow, TableCell
    ,Avatar } from '@nextui-org/react'
import { GetUsers } from '../../graphql/users'
import { useQuery } from '@apollo/client'
import noPic from '../../assets/students/noPic.svg'
import EditIcon from '../../assets/settings/vuesax/linear/vuesax/linear/user-edit.svg'
    
const AdminsTable = ({searchQuery }) => {
  const { loading, error, data: usersData } = useQuery(GetUsers);
  if (loading) console.log('loading')
  if (error) console.log(error)

  let users = usersData?.admin.users || [];

  if (searchQuery) {
    users = users.filter((user) => {
      return (
        user.name.toLowerCase().includes(searchQuery) ||
        user.email.toLowerCase().includes(searchQuery) ||
        user.roles.name.toLowerCase().includes(searchQuery)
      );
    });
  }

  if (users) console.log(users) 
  
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
      {usersData &&
      users.map((user, index) => (
          <TableRow key={index} className='border-b border-[#292d32]/50'>
          <TableCell className='flex items-center justify-center'>
          <div className=' w-12 h-12 bg-[#F6F6F6] rounded-full flex items-center justify-center'>
                  {user.imageUrl ? <Avatar className=' w-11 h-11' src={`${import.meta.env.VITE_API_URL}${user.imageUrl}`} fallback={noPic}/> : <img src={noPic} alt="" /> }
              </div>
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
              <span className='text-white text-[8px]'>{true && "متصل الان"}</span>
              </div>
          </TableCell>
          <TableCell className='relative'>
            <img src={EditIcon} alt=""  className=' absolute top-[40%] right-[30%]'/>
          </TableCell>
          </TableRow>
      ))
      }


        
       
     

      </TableBody>

          </Table>
  )
}

export default AdminsTable