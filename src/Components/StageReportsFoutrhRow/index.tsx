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
const labels = ["الفصل الاول", "الفصل الثاني","الفصل الثالث"]
 
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
  
  
  
  
  
  

const StageReportsFourthRow = ({experminets}) => {
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

      experminets.classes.forEach((classObj) => {
        const classTotal = {
          classId: classObj.classId,
          className: classObj.number,
          totalTrainingTime: 0,
          totalTheorticalTime: 0,
          totalPraticalTime: 0,
        };

        classObj.students.forEach((student) => {
          student.studnetExpriment.forEach((expriment) => {
            classTotal.totalTrainingTime += expriment.totalTrainingTime;
            classTotal.totalTheorticalTime += expriment.totalTheorticalTime;
            classTotal.totalPraticalTime += expriment.totalPraticalTime;
          });
        });

        classTotals.push(classTotal);
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

  const convertMillisecondsToHoursAndMinutes = (ms) => {
    const hours = Math.floor(ms / 3600000)
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

  return (
    <div className=' w-full h-[354px] bg-white py-6 px-9 rounded-lg flex flex-col gap-y-6 relative'>
        <div className=' flex items-center justify-between'>
            <h3 className=' text-[#444] text-xl font-bold'>التقدير العام للفصل</h3>
            <div className='flex items-center gap-x-2'>
                <div className=' flex items-center gap-x-1'>
                    <div className=' w-1 h-8  bg-[#009017] rounded' />
                    <div className=' w-[69px] text-[8px] font-semibold text-[#444]'>
                    الوقت  المستغرق للتدريب العملى 

                    </div>

                </div>
                <div className=' flex items-center gap-x-1'>
                    <div className=' w-1 h-8  bg-[#4ADB61] rounded' />
                    <div className=' w-[69px] text-[8px] font-semibold text-[#444]'>
                    الوقت  المستغرق للاختبار العملى 
                    </div>

                </div>
                <div className=' flex items-center gap-x-1'>
                    <div className=' w-1 h-8  bg-[#8DF49D] rounded' />
                    <div className=' w-[69px] text-[8px] font-semibold text-[#444]'>
                    الوقت  المستغرق للاختبار النظرى 
                    </div>

                </div>
            </div>

        </div>
        <div className=' flex items-center gap-x-3 mt-7'>
        {
                stage === '20f9b0c6-37fa-4509-987a-6be7b341d98e' ? 
                <div className="flex flex-col gap-y-12 text-text-black text-xs font-bold">
            
                <h3>الصف الثالث المتوسط</h3>
                <h3>الصف الثاني المتوسط</h3>
                <h3>الصف الاول المتوسط</h3>
             </div>

                : 

                <div className="flex flex-col gap-y-12 text-text-black text-xs font-bold">
            
                  <h3>الصف الثالث الثانوى</h3>
                  <h3>الصف الثاني الثانوى</h3>
                  <h3>الصف الاول الثانوى</h3>
               </div>
            
            }
           
            <div className=' w-[720px] h-[280px] self-center mx-4 absolute top-[17%] left-[6%]'>
                <Bar data={data} options={options} />
            </div>


        </div>
    </div>
  )
}

export default StageReportsFourthRow
