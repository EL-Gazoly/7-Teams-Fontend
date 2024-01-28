import React from 'react'
import {useEffect, useState} from 'react'
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

const labels = ['0%', '10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%', '100%'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Area 1',
      data: [40, 30, 33, 25, 35, 20, 50, 40, 30, 33, 25],
      fill: true,
      backgroundColor: 'rgba(7, 224, 152, 0.2)',
      borderColor: '#05C283',
    },
    {
      label: 'Area 2',
      data: [14,18, 9, 10, 12, 12, 15, 14,18, 9, 10],
      fill: true,
      backgroundColor: 'rgba(0, 149, 255, 0.2)', 
      borderColor: '#007DD6',
    },
    {
        label: 'Area 3',
        data: [45, 76, 23, 45, 67, 34, 56, 45, 76, 23, 45],
        fill: true,
        backgroundColor: 'rgba(255, 159, 0, 0.2)', 
        borderColor: '#FF9F00',
    }
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
      display: true,
      ticks: {
        color: '#615E83',
        font: {
          size: 10,
          weight: 400,
          family: 'Cairo',
        },
      },
    }
  },
};


const TotalGradeForStage = () => {
  return (
    <div className='w-[457px] h-[354px] py-[31px] px-7 bg-white rounded-lg flex flex-col gap-y-5 relative'>
        <div className="flex w-full items-center justify-between">
            <span className=' text-sm text-[#444] font-bold'>
            التقدير العام للفصل 
            </span>
            <div className='flex items-center gap-x-2'>
                <div className=' flex items-center gap-x-1'>
                    <div className=' w-1 h-8  bg-[#FF9F00] rounded' />
                    <div className=' w-[69px] text-[8px] font-semibold text-[#444]'>
                    التقدير التفصيلى للتدريب العملى 

                    </div>

                </div>
                <div className=' flex items-center gap-x-1'>
                    <div className=' w-1 h-8  bg-[#007DD6] rounded' />
                    <div className=' w-[69px] text-[8px] font-semibold text-[#444]'>
                    التقدير التفصيلى للأختبار العملى 

                    </div>

                </div>
                <div className=' flex items-center gap-x-1'>
                    <div className=' w-1 h-8  bg-[#05C283] rounded' />
                    <div className=' w-[69px] text-[8px] font-semibold text-[#444]'>
                    التقدير التفصيلى للأختبار النظرى 

                    </div>

                </div>
            </div>
        </div>
        <div className='w-[419px] h-[263px] absolute top-[31%] left-[5%]'>
            <Line data={data} options={options} />
        </div>
        

      
    </div>
  )
}

export default TotalGradeForStage
