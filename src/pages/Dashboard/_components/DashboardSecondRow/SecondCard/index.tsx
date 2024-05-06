import {useEffect, useState} from 'react'
import { Divider } from '@nextui-org/react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { set } from 'firebase/database';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: [' مدير النظام ', ' الإداريين التنفيذيين', ' المعلمين أو المشرفين '],
  datasets: [
    {
      label: '# طلاب',
      data: [62, 15, 23],
      backgroundColor: [
        '#009017',
        '#21FB45',
        '#8DF49D',
      ],
      borderColor: [
        '#009017',
        '#21FB45',
        '#8DF49D',
  
      ],
      borderRadius: 6, 
      borderWidth: 1,
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: true,
    },
  },
  cutoutPercentage: 50,
};

const SecondCard = ({rolesCount}) => {
  const [teacherCount, setTeacherCount] = useState(0)
  const [adminCount, setAdminCount] = useState(0)
  const [supervisorCount, setSupervisorCount] = useState(0)
  const [totalCount, setTotalCount] = useState(0)
  useEffect(() => {
    if(rolesCount ){
    
   const teacherCount = rolesCount.filter((role) => role['name'] === 'معلم')
    const adminCount = rolesCount.filter((role) => role['name'] === 'ادمن')
    const supervisorCount = rolesCount.filter((role) => role['name'] === 'المدير التنفيذي')
    console.log(adminCount)
    console.log(teacherCount)
    
    teacherCount.length &&  teacherCount.forEach((teacher) => {
      console.log(teacher['users'].length)
        setTeacherCount(teacher['users'].length)
        setTotalCount(prev => prev + teacher['users'].length)
      })
    
    adminCount.length &&   adminCount.forEach((admin) => {
      console.log(admin['users'].length)
        setAdminCount(admin['users'].length)
        setTotalCount(prev => prev + admin['users'].length)
      })
    supervisorCount.length &&  supervisorCount.forEach((supervisor) => {
      console.log(supervisor['users'].length)
        setSupervisorCount(supervisor['users'].length)
        setTotalCount(prev => prev + supervisor['users'].length)
      })
      
   
   }
  }
  , [rolesCount])

   const data = {
    labels: [' مدير النظام ', ' الإداريين التنفيذيين', ' المعلمين أو المشرفين '],
    datasets: [
      {
        label: '# مسؤولين',
        data: [adminCount, supervisorCount, teacherCount],
        backgroundColor: [
          '#009017',
          '#21FB45',
          '#8DF49D',
        ],
        borderColor: [
          '#009017',
          '#21FB45',
          '#8DF49D',
    
        ],
        borderRadius: 6, 
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className=' w-[289px] h-[254px] rounded-2xl bg-white  dark:bg-[#252A33] dark:text-white  py-[10px] flex flex-col gap-y-5 relative'>
      <span className=' text-base font-bold mx-4'>  عدد المسؤولين المسجلين   </span>
      <Divider className=' w-full bg-[#E4E5E7]' />
      <div className=' mt-[10px] self-end flex items-center gap-x-6'>
        <div className='flex flex-col gap-y-4 '>
          <span className=' text-[27px] font-bold text-[#444] dark:text-white'> {totalCount} </span>
          <div className=' flex flex-col gap-y-[14px] text-xs text-[#444] font-semibold text-right'>
            <div className='flex flex-col items-center gap-y-2 text-[10px]'>
              <div className=' flex items-center gap-x-1 w-[118px]'>
                  <div className=' w-3 h-2 rounded bg-[#009017]'  />
                  <span className='dark:text-white '>{ Math.floor(totalCount ? adminCount/totalCount* 100 : 0) }% مدير النظام</span>
              </div>
              <div className=' flex items-center gap-x-1 w-[118px] '>
                  <div className=' w-3 h-2 rounded bg-[#21FB45]'  />
                  <span className='dark:text-white'>{Math.floor(totalCount ? adminCount/totalCount* 100 : 0)}%  الإداريين التنفيذيين</span>
              </div>
              <div className=' flex items-center gap-x-1 w-[118px] '>
                  <div className=' w-3 h-2 rounded bg-[#8DF49D] mb-4'  />
                  <span className='dark:text-white '> {Math.floor(totalCount ? adminCount/totalCount* 100 : 0)}% المعلمين أو المشرفين </span>
              </div>

            </div>

          </div>

        </div>
        <div className=' absolute top-[32%] right-[3%] w-[140px] h-[140px]'>
          <Doughnut data={data} 
            
            options={options}
          />

        </div>
   
      </div>
    </div>
  )
}

export default SecondCard
