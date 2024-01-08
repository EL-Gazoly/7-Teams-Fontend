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

const labels = ['الاسبوع الاول', 'الاسبوع الثاني', 'الاسبوع الثالث', 'الاسبوع الرابع'];

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

const FirstCard = ({timeByMonth}) => {
  const [firstMonth, setFirstMonth] = useState([0])
  const [totalfirstMonth, setTotalFirstMonth] = useState(0)
  const [secondMonth, setSecondMonth] = useState([0])
  const [totalSecondMonth, setTotalSecondMonth] = useState(0)
  useEffect(() => {
    if(timeByMonth) {
    timeByMonth = timeByMonth.map((time) => msToTime(time))
     
    const firstFourValues = timeByMonth.slice(0, 4)
    const lastFourValues = timeByMonth.slice(timeByMonth.length - 4, timeByMonth.length)
    setFirstMonth(firstFourValues)
    setSecondMonth(lastFourValues)
    setTotalFirstMonth(firstFourValues.reduce((a, b) => a + b, 0))
    setTotalSecondMonth(lastFourValues.reduce((a, b) => a + b, 0))
    }
  }, [timeByMonth])

  // convert ms to hours
  const msToTime = (duration) => {
    let seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor(duration / (1000 * 60 * 60));
  
    hours = hours < 10 ? 0 + hours : hours;
    minutes = minutes < 10 ? 0 + minutes : minutes;
    seconds = seconds < 10 ? 0 + seconds : seconds;
  
    return hours ;
  }
  
  const data = {
    labels,
    datasets: [
      {
        label: 'Area 1',
        data: firstMonth,
        fill: true,
        backgroundColor: 'rgba(7, 224, 152, 0.2)',
        borderColor: '#07E098',
      },
      {
        label: 'Area 2',
        data: secondMonth,
        fill: true,
        backgroundColor: 'rgba(0, 149, 255, 0.2)', 
        borderColor: '#0095FF',
      },
    ],
  };
  return (
    <div className=' w-[290px] h-[254px] rounded-2xl bg-white py-[15px] px-2 flex flex-col gap-y-[10px] relative'>
      <span className=' text-[#444]  font-bold mx-1'> اجمالي ساعات التدريب. </span>
      <div className=' w-full h-[140px] mt-2 '>
        <Line data={data} options={options} />
      </div>
      <Divider className=' w-full bg-[#EDF2F6]' />
      <div className=' self-center w-[220px] flex items-center justify-between'>
        <div className=' flex items-center gap-x-5 '>
          <div className=' flex flex-col gap-y-[2px] items-center text-[10px] text-center'>
              <span className='text-[#444]  font-semibold'> هذ ا الشهر </span>
              <span className=' text-[#787878] font-medium'> {totalfirstMonth} </span>
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
              <span className=' text-[#787878] font-medium'> {totalSecondMonth} </span>
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
