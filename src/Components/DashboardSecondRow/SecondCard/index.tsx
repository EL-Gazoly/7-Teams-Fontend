import React from 'react'
import { Divider } from '@nextui-org/react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: [' جدد ', ' بدأو التدريب ', ' خرحين '],
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

const SecondCard = () => {
  return (
    <div className=' w-[289px] h-[254px] rounded-2xl bg-white py-[10px] flex flex-col gap-y-5 relative'>
      <span className=' text-base font-bold mx-4'>  عدد المتدربين المسجلين   </span>
      <Divider className=' w-full bg-[#E4E5E7]' />
      <div className=' mt-[10px] self-end flex items-center gap-x-6'>
        <div className='flex flex-col gap-y-4 '>
          <span className=' text-[27px] font-bold text-[#444]'> 4,209 </span>
          <div className=' flex flex-col gap-y-[14px] text-xs text-[#444] font-semibold text-right'>
            <div className='flex flex-col items-center gap-y-2'>
              <div className=' flex items-center gap-x-1 w-[118px]'>
                  <div className=' w-3 h-2 rounded bg-[#009017]'  />
                  <span className=''>62% جديد</span>
              </div>
              <div className=' flex items-center gap-x-1 w-[118px] '>
                  <div className=' w-3 h-2 rounded bg-[#21FB45]'  />
                  <span className=''>15% بدأو التدريب</span>
              </div>
              <div className=' flex items-center gap-x-1 w-[118px] '>
                  <div className=' w-3 h-2 rounded bg-[#8DF49D]'  />
                  <span className=''> 23% خرحين </span>
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
