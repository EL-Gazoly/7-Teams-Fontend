import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { display } from 'html2canvas/dist/types/css/property-descriptors/display';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);
import { Divider } from '@nextui-org/react';

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Area 1',
      data: [40, 30, 33, 25, 35, 20, 50],
      fill: true,
      backgroundColor: 'rgba(7, 224, 152, 0.2)',
      borderColor: '#07E098',
    },
    {
      label: 'Area 2',
      data: [14,18, 9, 10, 12, 12, 15],
      fill: true,
      backgroundColor: 'rgba(0, 149, 255, 0.2)', 
      borderColor: '#0095FF',
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
  scales: {
    y: {
      beginAtZero: true,
      display: false
    },
    x: {
      display: false
    }
  },
};

const FirstCard = () => {
  return (
    <div className=' w-[290px] h-[254px] rounded-lg bg-white py-[15px] px-2 flex flex-col gap-y-[10px] relative'>
      <span className=' text-[#444]  font-bold mx-1'> اجمالي ساعات التدريب. </span>
      <div className=' w-full h-[140px] mt-2 '>
        <Line data={data} options={options} />
      </div>
      <Divider className=' w-full bg-[#EDF2F6]' />
      <div className=' self-center w-[187px] flex items-center justify-between'>
        <div className=' flex items-center gap-x-5 '>
          <div className=' flex flex-col gap-y-[2px] items-center text-[10px] text-center'>
              <span className='text-[#444]  font-semibold'> هذ ا الشهر </span>
              <span className=' text-[#787878] font-medium'> 686 </span>
          </div>
          <div className=' flex items-center'>
            <div className=' w-2 h-1 rounded-r-sm bg-[#05C283]' />
            <div className=' w-[6px] h-[6px] rounded-full bg-[#07E098]  scale-125' />
            <div className=' w-2 h-1 rounded-l-sm bg-[#05C283]' />

          </div>
        </div>
        <Divider className=' h-4 bg-[#BDC9D3]' orientation="vertical" />
        <div className=' flex items-center gap-x-4 '>
          <div className=' flex flex-col gap-y-[2px] items-center text-[10px] text-center'>
              <span className='text-[#444]  font-semibold'>  الشهر الماضي </span>
              <span className=' text-[#787878] font-medium'> 368 </span>
          </div>
          <div className=' flex items-center'>
            <div className=' w-2 h-1 rounded-r-sm bg-[#0080DA]' />
            <div className=' w-[6px] h-[6px] rounded-full bg-[#0095FF]  scale-125' />
            <div className=' w-2 h-1 rounded-l-sm bg-[#0080DA]' />

          </div>
        </div>
      </div>
      
    </div>
  )
}

export default FirstCard
