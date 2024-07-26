import React from 'react';
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell, Avatar } from '@nextui-org/react';
import { GetUsers } from '../../graphql/users';
import { useQuery } from '@apollo/client';
import noPic from '../../assets/students/noPic.svg';
import DarkNoPic from '../../assets/students/no-pic.svg';
import EditIcon from '../../assets/settings/vuesax/linear/vuesax/linear/user-edit.svg';
import DarkEditIcon from '../../assets/settings/dark/vuesax/linear/user-edit.svg';
import { Link } from 'react-router-dom';
import Loading from '../../Components/Loading';
import { useThemeStore } from '../../stores/ThemeStore';
import useTranslationStore from '@/stores/LanguageStore';
import { cn } from '@/lib/utils';

const AdminsTable = ({ searchQuery }) => {
  const { dark } = useThemeStore();
  const { language, getTranslation } = useTranslationStore();
  const { loading, error, data: usersData } = useQuery(GetUsers);

  if (loading) return <Loading />;
  if (error) console.log(error);

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
      style={{ direction: language === 'ar' ? 'rtl' : 'ltr' }}
    >
      <TableHeader
        style={{ direction: language === 'ar' ? 'rtl' : 'ltr' }}
        className='bg-primary text-white rounded-none'
      >
        <TableColumn className='rounded-none'>{getTranslation('image')}</TableColumn>
        <TableColumn>{getTranslation('username')}</TableColumn>
        <TableColumn>{getTranslation('email')}</TableColumn>
        <TableColumn>{getTranslation('roleName')}</TableColumn>
        <TableColumn>{getTranslation('status')}</TableColumn>
        <TableColumn>{getTranslation('edit')}</TableColumn>
      </TableHeader>
      <TableBody>
        {users.map((user, index) => (
          <TableRow key={index} className='border-b border-[#292d32]/50'>
            <TableCell className='flex items-center justify-center'>
              <div className='w-12 h-12 bg-[#F6F6F6] dark:bg-white/[0.16] rounded-full flex items-center justify-center'>
                {user.imageUrl ? (
                  <Avatar className='w-11 h-11' src={`${import.meta.env.VITE_API_URL}${user.imageUrl}`} fallback={noPic} />
                ) : (
                  <img src={dark ? DarkNoPic : noPic} alt="" width={21} height={24} />
                )}
              </div>
            </TableCell>
            <TableCell>
              <span className='text-text-black dark:text-white text-sm font-bold'>{user.name}</span>
            </TableCell>
            <TableCell>
              <span className='text-xs font-semibold text-text-black dark:text-white'>{user.email}</span>
            </TableCell>
            <TableCell className='w-full flex items-center justify-center'>
              <span
                className='text-[10px] font-medium  w-full rounded bg-text-black dark:bg-white max-w-[80px] py-1 flex items-center justify-center text-white dark:text-black'
                style={{ wordBreak: 'keep-all' }}
              >
                {user.roles.name}
              </span>
            </TableCell>
            <TableCell className='relative'>
              <div className={cn('absolute top-[40%]  w-[60px] h-[26px] bg-disconnected-gradient rounded flex flex-row-reverse items-center justify-center gap-x-[4px]',
                language === 'ar' ? 'right-[35%]' : 'left-[20%]'
              )}>
                <div className='w-[6px] h-[6px] rounded-full bg-white mt-[2px]' />
                <span className='text-white text-[8px]'>{true && getTranslation('offline')}</span>
              </div>
            </TableCell>
            <TableCell className='w-full flex items-center justify-center'>
           
                <Link to={`/settings/admins/update/${user.id}`}>
                  <img src={dark ? DarkEditIcon : EditIcon} alt="" />
                </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AdminsTable;