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
import { set } from 'firebase/database';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);



const labels = [' ثالث ثانوي ' , ' ثاني ثاوي' , ' اول ثانوي' , ' ثالث متوسط ', ' ثاني متوسط ', ' اول متوسط ' ]



const ThridCard = ({studentByGrade}) => {
  const [highFirst, setHighFirst] = useState(0)
  const [highSecond, setHighSecond] = useState(0)
  const [highThird, setHighThird] = useState(0)
  const [middleFirst, setMiddleFirst] = useState(0)
  const [middleSecond, setMiddleSecond] = useState(0)
  const [middleThird, setMiddleThird] = useState(0)
  useEffect(() => {
    if(studentByGrade) {
      const highFirst = studentByGrade[0]
      setHighFirst(highFirst['classes'][0]['students'].length)
      setHighSecond(highFirst['classes'][1]['students'].length)
      setHighThird(highFirst['classes'][2]['students'].length)
      const middleFirst = studentByGrade[1]
      setMiddleFirst(middleFirst['classes'][0]['students'].length)
      setMiddleSecond(middleFirst['classes'][1]['students'].length)
      setMiddleThird(middleFirst['classes'][2]['students'].length)
    }
  }, [studentByGrade])

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'الطلاب',
        data: [highThird,highSecond,highFirst,middleThird,middleSecond,middleFirst],
        backgroundColor: '#CCCCCC',
        borderColor: '#CCCCCC',
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
     plugins: {
       legend: {
         display: false,
       },
     },
     scales: {
       x: {
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
         display: true,
         ticks: {
           display: false,
         },
       },
     },
   };
  return (
    <div className=' w-[408px]  h-[254px] '>
        <div className=' w-full h-full bg-white rounded-2xl p-[10px] flex flex-col  gap-y-5'>
          <span className=' text-[#444] font-bold tracking-[-0.01119rem]'> عدد الطلاب في كل مرحله </span>

        <div className=' w-full  flex items-center justify-center'>
           <div className=' w-full h-[175px] self-center mx-4'>
            <Bar data={data} options={options} />

          </div>
        </div>
         

          
        </div>
      
    </div>
  )
}

export default ThridCard
