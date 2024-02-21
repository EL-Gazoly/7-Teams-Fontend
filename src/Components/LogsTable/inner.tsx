import React from 'react'
import Item from './item'
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Spinner, Avatar, Button, Image} from "@nextui-org/react";
import noPic from '../../assets/students/noPic.svg'
import HeadsetImage from '../../assets/Landing/HeadsetCard/headset.png';
const LogsTableItem = ({data, setTake, loading, logs, currentPage}) => {
 
  const ReadableDate = (date) => {
    return new Date(date).toLocaleString()
  }
  const hasMore = (logs.length + ((currentPage -1) * 100)) < data?.logsCount;


  const rewriteLogs = (action, user, admin) => {
    let newAction = action.replace('user', 'المستخدم')
      .replace('student', 'طالب')
      .replace('logged in', 'قام بتسجيل الدخول')
      .replace('logged out', 'قام بتسجيل الخروج')
      .replace('using', 'بإستخدام')
      .replace('device', 'نظارة افتراضية رقم')
      .replace('role', 'صلاحية')
      .replace('excel file', 'ملف اكسل');
  
    if (user) {
      newAction = newAction.split('Created').join(`قام <span style="font-weight: bold;"> ${user.roles.name} ${user.name} </span> بإنشاء`)
        .split('Updated').join(`قام <span style="font-weight: bold;"> ${user.roles.name} ${user.name} </span> بتحديث`)
        .split('Create').join(`قام <span style="font-weight: bold;"> ${user.roles.name} ${user.name} </span> بإنشاء`)
        .split('Update').join(`قام <span style="font-weight: bold;"> ${user.roles.name} ${user.name} </span> بتحديث`);
    } else {
      newAction = newAction.split('Created').join(`قام <span style="font-weight: bold;"> السوبر الادمن ${admin.name}</span> بإنشاء`)
        .split('Updated').join(`قام <span style="font-weight: bold;"> السوبر الادمن ${admin.name}</span> بتحديث`)
        .split('Create').join(`قام <span style="font-weight: bold;"> السوبر الادمن ${admin.name}</span> بإنشاء`)
        .split('Update').join(`قام <span style="font-weight: bold;"> السوبر الادمن ${admin.name}</span> بتحديث`);
    }
  
    // Change the color of the word "بانشاء" to green
    const regex = new RegExp('بإنشاء', 'g');
    newAction = newAction.replace(regex, '<span style="color: #2DEC4C;">بانشاء</span>');
    newAction = newAction.replace('بتحديث', '<span style="color: yellow;">بتحديث</span>');
    newAction = newAction.replace('قام بتسجيل الدخول', '<span style="color: #2DEC4C;">قام بتسجيل الدخول</span>');
    newAction = newAction.replace('قام بتسجيل الخروج', '<span style="color: #FB3471;">قام بتسجيل الخروج</span>');
  
    return newAction;
  };

  return (

    <Table
    classNames={{
      base: 'w-full',
      th: 'hidden invisible border-none',
      tbody: 'bg-[#F0F0F1] dark:bg-[rgb(71,75,82)]',
      wrapper: 'bg-[#F0F0F1] dark:bg-[rgb(71,75,82)] shadow-none',
      tr: 'pt-4',
    }}
    bottomContent={
      hasMore &&   (
        <div className="flex w-full justify-center">
          <Button isDisabled={loading} variant="flat" onPress={()=>setTake(prev => prev + 10)} 
            isLoading={loading}
          >
            Load More
          </Button>
        </div>
      ) 
    }

    style={{
      direction: 'rtl'
    }}
      >
      <TableHeader className=' hidden invisible'>
        <TableColumn>Avatar </TableColumn>
        <TableColumn>action</TableColumn>
      </TableHeader>
      <TableBody
           isLoading={loading}
           loadingContent={<Spinner color='white' />}
      >
        {
          logs.map((log, index) => {
            return (
              <TableRow key={index}
              className={` ${index !== data?.logs.length - 1 && 'border-b border-[#8B8D90] dark:border-[#383C42]'}
              ${index === 0 ? 'pt-0' : 'py-4'} 
              `}
              >
                <TableCell> 
                  {log?.action.includes('logged') ?
                    <Image src={HeadsetImage} width={73} height={40} />
                  :
                <div className=' w-14 h-14 bg-[#F6F6F6] rounded-full flex items-center justify-center mr-2'>
                  { log.user && log.user.imageUrl ? <Avatar className=' w-full h-full' src={`${import.meta.env.VITE_API_URL}${log.user?.imageUrl}`} fallback={noPic}/> : <img src={noPic} alt="" /> }
                </div>
                }

                </TableCell>
                <TableCell>
                <div className=' flex flex-col gap-y-3 text-start text-text-black dark:text-white'>
                <span
                   dangerouslySetInnerHTML={{ __html: rewriteLogs(log?.action, log?.user, log?.admin) }}
                ></span>
                <span className=' text-xs text-[##122333bf] text-end dark:text-white/75'
                  style={{
                    direction: 'ltr'
                  }}
                > 
                  {ReadableDate(log?.createdAt)}
                </span>

            </div>
                </TableCell>
              </TableRow>
            )
          })
        }
      </TableBody>
    </Table>
  )
}

export default LogsTableItem
