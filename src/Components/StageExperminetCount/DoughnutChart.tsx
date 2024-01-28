import {useEffect, useState} from 'react'
import { Divider } from '@nextui-org/react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

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

const DoughuntChart = ({}) => {
  
   const data = {
    labels: [' عدد مرات الدخول علي التدريب', ' عدد مرات الدخول علي الاختبار النظري', ' عدد مرات الدخول علي الاختبار العملي'],
    datasets: [
      {
        label: '# مرات الدخول',
        data: [11, 42, 24],
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
    <div className=' relative'>
    
        <div className=' mt-12 w-[200px] h-[200px]'>
          <Doughnut data={data} 
            
            options={options}
          />

        </div>
   
      </div>

  )
}

export default DoughuntChart
