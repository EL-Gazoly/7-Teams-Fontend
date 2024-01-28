import {useEffect, useState} from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { position } from 'html2canvas/dist/types/css/property-descriptors/position';
import { display } from 'html2canvas/dist/types/css/property-descriptors/display';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const labels = [0, 10 , 20 , 30 , 40 , 50 , 60 , 70 , 80 , 90 , 100]

const data = {
    labels: labels,
    datasets: [
      {
        label: 'أ',
        data: [54, 11, 23, 37, 21, 13, 40, 20, 10, 45, 32],
        backgroundColor: '#009017',
        borderColor: '#009017',
        borderWidth: 1,
        borderRadius: 3, 
        barThickness: -30,
        hoverBackgroundColor: '#2DEC4C',
        hoverBorderColor: '#2DEC4C',
      },
      {
        label: 'ب',
        data: [23,31, 12, 35 , 41, 13, 31, 23, 12, 31, 41],
        backgroundColor: '#4ADB61',
        borderColor: '#4ADB61',
        borderWidth: 1,
        borderRadius: 3, 
        barThickness: 30, 
        hoverBackgroundColor: '#2DEC4C',
        hoverBorderColor: '#2DEC4C',
      },
      {
        label: 'ج',
        data: [32, 12, 3, 41, 13, 31, 23, 12, 40, 41, 13],
        backgroundColor: '#8DF49D',
        borderColor: '#8DF49D',
        borderWidth: 1,
        borderRadius: 3, 
        barThickness: 30, 
        hoverBackgroundColor: '#2DEC4C',
        hoverBorderColor: '#2DEC4C',
      },
    ],
  
  }
 
  const options = {
    responsive: true,
    indexAxis: 'y' as const,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        reverse: true,
        stacked: true,
        display: true,
        grid: {
          display: false,
        },
        ticks: {
          color: '#122333',
          font: {
            size: 6.32,
            weight: 700,
            family: 'Cairo',
          },
        },
      },
      y: {
        stacked: true,
        display: false,
        reverse: true,
      },
    },
  };
  
  
  
  
  
  

const StageReportsFourthRow = () => {
  return (
    <div className=' w-full h-[354px] bg-white py-6 px-9 rounded-lg flex flex-col gap-y-6 relative'>
        <div className=' flex items-center justify-between'>
            <h3 className=' text-[#444] text-xl font-bold'>التقدير العام للفصل</h3>
            <div className='flex items-center gap-x-2'>
                <div className=' flex items-center gap-x-1'>
                    <div className=' w-1 h-8  bg-[#009017] rounded' />
                    <div className=' w-[69px] text-[8px] font-semibold text-[#444]'>
                    التقدير التفصيلى للتدريب العملى 

                    </div>

                </div>
                <div className=' flex items-center gap-x-1'>
                    <div className=' w-1 h-8  bg-[#4ADB61] rounded' />
                    <div className=' w-[69px] text-[8px] font-semibold text-[#444]'>
                    التقدير التفصيلى للأختبار العملى 

                    </div>

                </div>
                <div className=' flex items-center gap-x-1'>
                    <div className=' w-1 h-8  bg-[#8DF49D] rounded' />
                    <div className=' w-[69px] text-[8px] font-semibold text-[#444]'>
                    التقدير التفصيلى للأختبار النظرى 

                    </div>

                </div>
            </div>

        </div>
        <div className=' flex items-center gap-x-3 mt-7'>
            <div className="flex flex-col gap-y-12 text-text-black text-xs font-bold">
                <h3>الصف الثالث الثانوى</h3>
                <h3>الصف الثاني الثانوى</h3>
                <h3>الصف الاول الثانوى</h3>
            </div>
            <div className=' w-[720px] h-[280px] self-center mx-4 absolute top-[19%] left-[8%]'>
                <Bar data={data} options={options} />
            </div>


        </div>
    </div>
  )
}

export default StageReportsFourthRow
