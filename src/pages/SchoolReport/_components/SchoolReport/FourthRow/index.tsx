import React from 'react'
import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
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
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
import { useThemeStore } from '../../../../../stores/ThemeStore';
const labels = ["الفصل الاول", "الفصل الثاني","الفصل الثالث"]
 

  

const FourthRow = ({experminets}) => {
    const {dark} = useThemeStore()
  const { stage } = useParams()
  const [first, setFirst] = useState({
    totalTheorticalTime: 0,
    totalPraticalTime: 0,
    totalTrainingTime: 0
  })
  const [second, setSecond] = useState({
    totalTheorticalTime: 0,
    totalPraticalTime: 0,
    totalTrainingTime: 0
  })
  const [third, setThird] = useState({
    totalTheorticalTime: 0,
    totalPraticalTime: 0,
    totalTrainingTime: 0
  })
  const calculateTotal = () => {
    const classTotals = [];
      experminets.teams.forEach((team) => {
      team.classes.forEach((classObj) => {
        let totalTrainingTime = 0;
        let totalTheorticalTime = 0;
        let totalPraticalTime = 0;
        const classTotal = {
          classId: classObj.classId,
          className: classObj.number,
          totalTrainingTime: 0,
          totalTheorticalTime: 0,
          totalPraticalTime: 0,
        };

        classObj.students.forEach((student) => {
          student.studnetExpriment.forEach((expriment) => {
            totalTrainingTime += expriment.totalTrainingTime;
            totalTheorticalTime += expriment.totalTheorticalTime;
            totalPraticalTime += expriment.totalPraticalTime;
           
          });
        });
         classTotal.totalTrainingTime += totalTrainingTime;
            classTotal.totalTheorticalTime += totalTheorticalTime;
            classTotal.totalPraticalTime += totalPraticalTime;

        classTotals.push(classTotal);
      });
    });

      // Calculate overall totals
      const overallTotal = classTotals.reduce(
        (acc, classTotal) => {
          acc.totalTrainingTime += classTotal.totalTrainingTime;
          acc.totalTheorticalTime += classTotal.totalTheorticalTime;
          acc.totalPraticalTime += classTotal.totalPraticalTime;
          return acc;
        },
        {
          totalTrainingTime: 0,
          totalTheorticalTime: 0,
          totalPraticalTime: 0,
        }
      );

      console.log("Class Totals:", classTotals);
      setFirst(classTotals[0])
      setSecond(classTotals[1])
      setThird(classTotals[2])
      console.log("this is ", classTotals[0].totalTheorticalTime)
      
  }
  useEffect(()=>{
    if(experminets)
    calculateTotal()
  },[experminets])


  const convertMillisecondsToHoursAndMinutes = (seconds) => {
    const hours = Math.floor(seconds / 3600)
    return hours
  }

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'التدريب العملي',
        data: [convertMillisecondsToHoursAndMinutes(first.totalTrainingTime), convertMillisecondsToHoursAndMinutes(second.totalTrainingTime), convertMillisecondsToHoursAndMinutes(third.totalTrainingTime)],
        backgroundColor: '#009017',
        borderColor: '#009017',
        borderWidth: 1,
        borderRadius: 3, 
        barThickness: 40,
        hoverBackgroundColor: '#2DEC4C',
        hoverBorderColor: '#2DEC4C',
      },
      {
        label: 'الاختبار العملي',
        data: [convertMillisecondsToHoursAndMinutes(first.totalPraticalTime),convertMillisecondsToHoursAndMinutes(second.totalPraticalTime), convertMillisecondsToHoursAndMinutes(third.totalPraticalTime)],
        backgroundColor: '#4ADB61',
        borderColor: '#4ADB61',
        borderWidth: 1,
        borderRadius: 3, 
        barThickness: 40, 
        hoverBackgroundColor: '#2DEC4C',
        hoverBorderColor: '#2DEC4C',
      },
      {
        label: 'الاختبار النظري',
        data: [convertMillisecondsToHoursAndMinutes(first.totalTheorticalTime), convertMillisecondsToHoursAndMinutes(second.totalTheorticalTime), convertMillisecondsToHoursAndMinutes(third.totalTheorticalTime)],
        backgroundColor: '#8DF49D',
        borderColor: '#8DF49D',
        borderWidth: 1,
        borderRadius: 3, 
        barThickness: 40, 
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
          color:  dark ? 'white' : '#122333',
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
  return (
   <div className=' w-full h-[354px] bg-white dark:bg-primary-dark text-[#444]  dark:text-white py-6 px-9 rounded-lg flex flex-col gap-y-6 relative'
    style={{
      direction: 'rtl'
    }}
   >
        <div className=' flex items-center justify-between'>
            <h3 className='  text-xl font-bold'>التقدير العام للمستويات</h3>
            <div className='flex items-center gap-x-2'>
                <div className=' flex items-center gap-x-1'>
                    <div className=' w-1 h-8  bg-[#009017] rounded' />
                    <div className=' w-[69px] text-[8px] font-semibold '>
                    الوقت  المستغرق للتدريب العملى 

                    </div>

                </div>
                <div className=' flex items-center gap-x-1'>
                    <div className=' w-1 h-8  bg-[#4ADB61] rounded' />
                    <div className=' w-[69px] text-[8px] font-semibold '>
                    الوقت  المستغرق للاختبار العملى 
                    </div>

                </div>
                <div className=' flex items-center gap-x-1'>
                    <div className=' w-1 h-8  bg-[#8DF49D] rounded' />
                    <div className=' w-[69px] text-[8px] font-semibold '>
                    الوقت  المستغرق للاختبار النظرى 
                    </div>

                </div>
            </div>

        </div>
        <div className=' flex items-center gap-x-3 mt-7'>
     
                <div className="flex flex-col gap-y-12 text-text-black dark:text-white text-xs font-bold">
            
                  <h3>المستوي الثانوى</h3>
                  <h3>المستوي المتوسط</h3>
                  <h3>المستوي الابتدائي</h3>
               </div>
            
            
           
            <div className=' w-[720px] h-[280px] self-center mx-4 absolute top-[17%] left-[6%]'>
                <Bar data={data} options={options} />
            </div>


        </div>
    </div>
  )
}

export default FourthRow
