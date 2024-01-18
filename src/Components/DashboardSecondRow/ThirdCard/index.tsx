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
  const [highFirstA, setHighFirstA] = useState(0)
  const [highSecondA, setHighSecondA] = useState(0)
  const [highThirdA, setHighThirdA] = useState(0)
  const [middleFirstA, setMiddleFirstA] = useState(0)
  const [middleSecondA, setMiddleSecondA] = useState(0)
  const [middleThirdA, setMiddleThirdA] = useState(0)
  const [highFirstB, setHighFirstB] = useState(0)
  const [highSecondB, setHighSecondB] = useState(0)
  const [highThirdB, setHighThirdB] = useState(0)
  const [middleFirstB, setMiddleFirstB] = useState(0)
  const [middleSecondB, setMiddleSecondB] = useState(0)
  const [middleThirdB, setMiddleThirdB] = useState(0)
  const [highFirstC, setHighFirstC] = useState(0)
  const [highSecondC, setHighSecondC] = useState(0)
  const [highThirdC, setHighThirdC] = useState(0)
  const [middleFirstC, setMiddleFirstC] = useState(0)
  const [middleSecondC, setMiddleSecondC] = useState(0)
  const [middleThirdC, setMiddleThirdC] = useState(0)

  useEffect(() => {
    if(studentByGrade) {
    const HightFirstStudents = studentByGrade[0]['classes'][0]['students']
    Object.keys(HightFirstStudents).forEach((key) => {
      console.log(HightFirstStudents[key]['classalpha'])
      if(HightFirstStudents[key]['classalpha'] === 'A') {
        setHighFirstA(highFirstA + 1)
      }else if(HightFirstStudents[key]['classalpha'] === 'B') {
        setHighFirstB(highFirstB + 1)
      }
      else if(HightFirstStudents[key]['classalpha'] === 'C') {
        setHighFirstC(highFirstC + 1)
      }
    })
    const HightSecondStudents = studentByGrade[0]['classes'][1]['students']
    Object.keys(HightSecondStudents).forEach((key) => {
      console.log(HightSecondStudents[key]['classalpha'])
      if(HightSecondStudents[key]['classalpha'] === 'A') {
        setHighSecondA(highSecondA + 1)
      }else if(HightSecondStudents[key]['classalpha'] === 'B') {
        setHighSecondB(highSecondB + 1)
      }
      else if(HightSecondStudents[key]['classalpha'] === 'C') {
        setHighSecondC(highSecondC + 1)
      }
    })
    const HightThirdStudents = studentByGrade[0]['classes'][2]['students']
    Object.keys(HightThirdStudents).forEach((key) => {
      console.log(HightThirdStudents[key]['classalpha'])
      if(HightThirdStudents[key]['classalpha'] === 'A') {
        setHighThirdA(highThirdA + 1)
      }else if(HightThirdStudents[key]['classalpha'] === 'B') {
        setHighThirdB(highThirdB + 1)
      }
      else if(HightThirdStudents[key]['classalpha'] === 'C') {
        setHighThirdC(highThirdC + 1)
      }
    })
    const MiddleFirstStudents = studentByGrade[1]['classes'][0]['students']
    Object.keys(MiddleFirstStudents).forEach((key) => {
      console.log(MiddleFirstStudents[key]['classalpha'])
      if(MiddleFirstStudents[key]['classalpha'] === 'A') {
        setMiddleFirstA(middleFirstA + 1)
      }else if(MiddleFirstStudents[key]['classalpha'] === 'B') {
        setMiddleFirstB(middleFirstB + 1)
      }
      else if(MiddleFirstStudents[key]['classalpha'] === 'C') {
        setMiddleFirstC(middleFirstC + 1)
      }
    })
    const MiddleSecondStudents = studentByGrade[1]['classes'][1]['students']
    Object.keys(MiddleSecondStudents).forEach((key) => {
      console.log(MiddleSecondStudents[key]['classalpha'])
      if(MiddleSecondStudents[key]['classalpha'] === 'A') {
        setMiddleSecondA(middleSecondA + 1)
      }else if(MiddleSecondStudents[key]['classalpha'] === 'B') {
        setMiddleSecondB(middleSecondB + 1)
      }
      else if(MiddleSecondStudents[key]['classalpha'] === 'C') {
        setMiddleSecondC(middleSecondC + 1)
      }
    })
    const MiddleThirdStudents = studentByGrade[1]['classes'][2]['students']
    Object.keys(MiddleThirdStudents).forEach((key) => {
      console.log(MiddleThirdStudents[key]['classalpha'])
      if(MiddleThirdStudents[key]['classalpha'] === 'A') {
        setMiddleThirdA(middleThirdA + 1)
      }else if(MiddleThirdStudents[key]['classalpha'] === 'B') {
        setMiddleThirdB(middleThirdB + 1)
      }
      else if(MiddleThirdStudents[key]['classalpha'] === 'C') {
        setMiddleThirdC(middleThirdC + 1)
      }
    })
    }
  }, [studentByGrade])

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'أ',
        data: [highThirdA,highSecondA,highFirstA,middleThirdA,middleSecondA,middleFirstA],
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 1,
        borderRadius: 3, 
        barThickness: 30, 
        hoverBackgroundColor: '#2DEC4C',
        hoverBorderColor: '#2DEC4C',
      },
      {
        label: 'ب',
        data: [highThirdB,highSecondB,highFirstB,middleThirdB,middleSecondB,middleFirstB],
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgb(75, 192, 192)',
        borderWidth: 1,
        borderRadius: 3, 
        barThickness: 30, 
        hoverBackgroundColor: '#2DEC4C',
        hoverBorderColor: '#2DEC4C',
      },
      {
        label: 'ج',
        data: [highThirdC,highSecondC,highFirstC,middleThirdC,middleSecondC,middleFirstC],
        backgroundColor: 'rgb(53, 162, 235)',
        borderColor: 'rgb(53, 162, 235)',
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
         stacked: true,
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
