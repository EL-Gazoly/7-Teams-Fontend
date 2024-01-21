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
      let HighFirstACounter = 0
      let HighFirstBCounter = 0
      let HighFirstCCounter = 0
      let HighSecondACounter = 0
      let HighSecondBCounter = 0
      let HighSecondCCounter = 0
      let HighThirdACounter = 0
      let HighThirdBCounter = 0
      let HighThirdCCounter = 0
      let MiddleFirstACounter = 0
      let MiddleFirstBCounter = 0
      let MiddleFirstCCounter = 0
      let MiddleSecondACounter = 0
      let MiddleSecondBCounter = 0
      let MiddleSecondCCounter = 0
      let MiddleThirdACounter = 0
      let MiddleThirdBCounter = 0
      let MiddleThirdCCounter = 0
    const HightFirstStudents = studentByGrade[0]['classes'][0]['students']
    Object.keys(HightFirstStudents).forEach((key) => {
      if(HightFirstStudents[key]['classalpha'] === 'A') {
        HighFirstACounter++
        console.log(HighFirstACounter)
        setHighFirstA(HighFirstACounter)
      }else if(HightFirstStudents[key]['classalpha'] === 'B') {
        HighFirstBCounter++
        setHighFirstB(HighFirstBCounter)
      }
      else if(HightFirstStudents[key]['classalpha'] === 'C') {
        HighFirstCCounter++
        setHighFirstC(HighFirstCCounter)
      }
    })
    const HightSecondStudents = studentByGrade[0]['classes'][1]['students']
    Object.keys(HightSecondStudents).forEach((key) => {
      if(HightSecondStudents[key]['classalpha'] === 'A') {
        HighSecondACounter++
        setHighSecondA(HighSecondACounter)
      }else if(HightSecondStudents[key]['classalpha'] === 'B') {
        HighSecondBCounter++
        setHighSecondB(HighSecondBCounter)
      }
      else if(HightSecondStudents[key]['classalpha'] === 'C') {
        HighSecondCCounter++
        setHighSecondC(HighSecondCCounter)
      }
    })
    const HightThirdStudents = studentByGrade[0]['classes'][2]['students']
    Object.keys(HightThirdStudents).forEach((key) => {
      if(HightThirdStudents[key]['classalpha'] === 'A') {
        HighThirdACounter++
        setHighThirdA(HighThirdACounter)
      }else if(HightThirdStudents[key]['classalpha'] === 'B') {
        HighThirdBCounter++
        setHighThirdB(HighThirdBCounter)
      }
      else if(HightThirdStudents[key]['classalpha'] === 'C') {
        HighThirdCCounter++
        setHighThirdC(HighThirdCCounter)
      }
    })
    const MiddleFirstStudents = studentByGrade[1]['classes'][0]['students']
    Object.keys(MiddleFirstStudents).forEach((key) => {
      if(MiddleFirstStudents[key]['classalpha'] === 'A') {
        MiddleFirstACounter++
        setMiddleFirstA(MiddleFirstACounter)
      }else if(MiddleFirstStudents[key]['classalpha'] === 'B') {
        MiddleFirstBCounter++
        setMiddleFirstB(MiddleFirstBCounter)
      }
      else if(MiddleFirstStudents[key]['classalpha'] === 'C') {
        MiddleFirstCCounter++
        setMiddleFirstC(MiddleFirstCCounter)
      }
    })
    const MiddleSecondStudents = studentByGrade[1]['classes'][1]['students']
    Object.keys(MiddleSecondStudents).forEach((key) => {
      if(MiddleSecondStudents[key]['classalpha'] === 'A') {
        MiddleSecondACounter++
        setMiddleSecondA(MiddleSecondACounter)
      }else if(MiddleSecondStudents[key]['classalpha'] === 'B') {
        MiddleSecondBCounter++
        setMiddleSecondB(MiddleSecondBCounter)
      }
      else if(MiddleSecondStudents[key]['classalpha'] === 'C') {
        MiddleSecondCCounter++
        setMiddleSecondC(MiddleSecondCCounter)
      }
    })
    const MiddleThirdStudents = studentByGrade[1]['classes'][2]['students']
    Object.keys(MiddleThirdStudents).forEach((key) => {
      if(MiddleThirdStudents[key]['classalpha'] === 'A') {
        MiddleThirdACounter++
        setMiddleThirdA(MiddleThirdACounter)
      }else if(MiddleThirdStudents[key]['classalpha'] === 'B') {
        MiddleThirdBCounter++
        setMiddleThirdB(MiddleThirdBCounter)
      }
      else if(MiddleThirdStudents[key]['classalpha'] === 'C') {
        MiddleThirdCCounter++
        setMiddleThirdC(MiddleThirdCCounter)
      }
    })
    console.log(highFirstA,highSecondA,highThirdA,middleFirstA,middleSecondA,middleThirdA)
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
