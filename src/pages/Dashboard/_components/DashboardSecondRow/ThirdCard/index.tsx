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
import './index.css'

import { useThemeStore } from '../../../../../stores/ThemeStore';

const labels = [' ثالث ثانوي ' , ' ثاني ثاوي' , ' اول ثانوي' , ' ثالث متوسط ', ' ثاني متوسط ', ' اول متوسط ' , 
"اول ابتدائي" , "ثاني ابتدائي" , "ثالث ابتدائي" , "رابع ابتدائي" , "خامس ابتدائي" , "سادس ابتدائي"
]



const ThridCard = ({studentByGrade}) => {
  const [highFirstCount, setHighFirstCount] = useState({});
  const [highSecondCount, setHighSecondCount] = useState({});
  const [highThirdCount, setHighThirdCount] = useState({});
  const [middleFirstCount, setMiddleFirstCount] = useState({});
  const [middleSecondCount, setMiddleSecondCount] = useState({});
  const [middleThirdCount, setMiddleThirdCount] = useState({});
  const [primaryFirstCount, setPrimaryFirstCount] = useState({});
  const [primarySecondCount, setPrimarySecondCount] = useState({});
  const [primaryThirdCount, setPrimaryThirdCount] = useState({});
  const [primaryFourthCount, setPrimaryFourthCount] = useState({});
  const [primaryFifthCount, setPrimaryFifthCount] = useState({});
  const [primarySixthCount, setPrimarySixthCount] = useState({});


  const {dark} = useThemeStore()
  
  useEffect(() => {
    if (studentByGrade) {
        const countStudents = (students) => {
            let counters = {};
            for (let i = 65; i < 75; i++) { // ASCII codes for letters A to J
                counters[String.fromCharCode(i)] = 0;
            }
            students.forEach(student => {
                counters[student.classalpha]++;
            });
            return counters;
        };

        

        setHighFirstCount(countStudents(studentByGrade[0].classes[0].students));
        setHighSecondCount(countStudents(studentByGrade[0].classes[1].students));
        setHighThirdCount(countStudents(studentByGrade[0].classes[2].students));
        setMiddleFirstCount(countStudents(studentByGrade[1].classes[0].students));
        setMiddleSecondCount(countStudents(studentByGrade[1].classes[1].students));
        setMiddleThirdCount(countStudents(studentByGrade[1].classes[2].students));
        setPrimaryFirstCount(countStudents(studentByGrade[2].classes[0].students));
        setPrimarySecondCount(countStudents(studentByGrade[2].classes[1].students));
        setPrimaryThirdCount(countStudents(studentByGrade[2].classes[2].students));
        setPrimaryFourthCount(countStudents(studentByGrade[2].classes[3].students));
        setPrimaryFifthCount(countStudents(studentByGrade[2].classes[4].students));
        setPrimarySixthCount(countStudents(studentByGrade[2].classes[5].students));
    }
}, [studentByGrade]);

const data = {
    labels: labels,
    datasets: [
        {
            label: 'أ',
            data: [
              highThirdCount['A'] || 0,
              highSecondCount['A'] || 0,
              highFirstCount['A'] || 0,
              middleThirdCount['A'] || 0,
              middleSecondCount['A'] || 0,
              middleFirstCount['A'] || 0,
              primaryFirstCount['A'] || 0,
              primarySecondCount['A'] || 0,
              primaryThirdCount['A'] || 0,
              primaryFourthCount['A'] || 0,
              primaryFifthCount['A'] || 0,
              primarySixthCount['A'] || 0
            ],
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            borderWidth: 1,
            borderRadius: 3,
            barThickness: 22,
            hoverBackgroundColor: '#2DEC4C',
            hoverBorderColor: '#2DEC4C',
        },
        {
            label: 'ب',
            data: [
              highThirdCount['B'] || 0,
              highSecondCount['B'] || 0,
              highFirstCount['B'] || 0,
              middleThirdCount['B'] || 0,
              middleSecondCount['B'] || 0,
              middleFirstCount['B'] || 0,
              primaryFirstCount['B'] || 0,
              primarySecondCount['B'] || 0,
              primaryThirdCount['B'] || 0,
              primaryFourthCount['B'] || 0,
              primaryFifthCount['B'] || 0,
              primarySixthCount['B'] || 0
            ],
            backgroundColor: 'rgb(75, 192, 192)',
            borderColor: 'rgb(75, 192, 192)',
            borderWidth: 1,
            borderRadius: 3,
            barThickness: 22,
            hoverBackgroundColor: '#2DEC4C',
            hoverBorderColor: '#2DEC4C',
        },
        {
            label: 'ج',
            data: [
              highThirdCount['C'] || 0,
              highSecondCount['C'] || 0,
              highFirstCount['C'] || 0,
              middleThirdCount['C'] || 0,
              middleSecondCount['C'] || 0,
              middleFirstCount['C'] || 0,
              primaryFirstCount['C'] || 0,
              primarySecondCount['C'] || 0,
              primaryThirdCount['C'] || 0,
              primaryFourthCount['C'] || 0,
              primaryFifthCount['C'] || 0,
              primarySixthCount['C'] || 0
            ],
            backgroundColor: 'rgb(53, 162, 235)',
            borderColor: 'rgb(53, 162, 235)',
            borderWidth: 1,
            borderRadius: 3,
            barThickness: 22,
            hoverBackgroundColor: '#2DEC4C',
            hoverBorderColor: '#2DEC4C',
        },
        {
          label: 'د',
          data: [
              highThirdCount['D'] || 0,
              highSecondCount['D'] || 0,
              highFirstCount['D'] || 0,
              middleThirdCount['D'] || 0,
              middleSecondCount['D'] || 0,
              middleFirstCount['D'] || 0,
              primaryFirstCount['D'] || 0,
              primarySecondCount['D'] || 0,
              primaryThirdCount['D'] || 0,
              primaryFourthCount['D'] || 0,
              primaryFifthCount['D'] || 0,
              primarySixthCount['D'] || 0
          ],
          backgroundColor: 'rgb(255, 159, 64)',
          borderColor: 'rgb(255, 159, 64)',
          borderWidth: 1,
          borderRadius: 3,
          barThickness: 22,
          hoverBackgroundColor: '#2DEC4C',
          hoverBorderColor: '#2DEC4C',
      },
      {
          label: 'ه',
          data: [
              highThirdCount['E'] || 0,
              highSecondCount['E'] || 0,
              highFirstCount['E'] || 0,
              middleThirdCount['E'] || 0,
              middleSecondCount['E'] || 0,
              middleFirstCount['E'] || 0,
              primaryFirstCount['E'] || 0,
              primarySecondCount['E'] || 0,
              primaryThirdCount['E'] || 0,
              primaryFourthCount['E'] || 0,
              primaryFifthCount['E'] || 0,
              primarySixthCount['E'] || 0
          ],
          backgroundColor: 'rgb(255, 205, 86)',
          borderColor: 'rgb(255, 205, 86)',
          borderWidth: 1,
          borderRadius: 3,
          barThickness: 22,
          hoverBackgroundColor: '#2DEC4C',
          hoverBorderColor: '#2DEC4C',
      },
      {
          label: 'و',
          data: [
              highThirdCount['F'] || 0,
              highSecondCount['F'] || 0,
              highFirstCount['F'] || 0,
              middleThirdCount['F'] || 0,
              middleSecondCount['F'] || 0,
              middleFirstCount['F'] || 0,
              primaryFirstCount['F'] || 0,
              primarySecondCount['F'] || 0,
              primaryThirdCount['F'] || 0,
              primaryFourthCount['F'] || 0,
              primaryFifthCount['F'] || 0,
              primarySixthCount['F'] || 0
          ],
          backgroundColor: 'rgb(54, 162, 235)',
          borderColor: 'rgb(54, 162, 235)',
          borderWidth: 1,
          borderRadius: 3,
          barThickness: 22,
          hoverBackgroundColor: '#2DEC4C',
          hoverBorderColor: '#2DEC4C',
      },
      {
          label: 'ز',
          data: [
              highThirdCount['G'] || 0,
              highSecondCount['G'] || 0,
              highFirstCount['G'] || 0,
              middleThirdCount['G'] || 0,
              middleSecondCount['G'] || 0,
              middleFirstCount['G'] || 0,
              primaryFirstCount['G'] || 0,
              primarySecondCount['G'] || 0,
              primaryThirdCount['G'] || 0,
              primaryFourthCount['G'] || 0,
              primaryFifthCount['G'] || 0,
              primarySixthCount['G'] || 0
          ],
          backgroundColor: 'rgb(75, 192, 192)',
          borderColor: 'rgb(75, 192, 192)',
          borderWidth: 1,
          borderRadius: 3,
          barThickness: 22,
          hoverBackgroundColor: '#2DEC4C',
          hoverBorderColor: '#2DEC4C',
      },
      {
          label: 'ح',
          data: [
              highThirdCount['H'] || 0,
              highSecondCount['H'] || 0,
              highFirstCount['H'] || 0,
              middleThirdCount['H'] || 0,
              middleSecondCount['H'] || 0,
              middleFirstCount['H'] || 0,
              primaryFirstCount['H'] || 0,
              primarySecondCount['H'] || 0,
              primaryThirdCount['H'] || 0,
              primaryFourthCount['H'] || 0,
              primaryFifthCount['H'] || 0,
              primarySixthCount['H'] || 0
          ],
          backgroundColor: 'rgb(153, 102, 255)',
          borderColor: 'rgb(153, 102, 255)',
          borderWidth: 1,
          borderRadius: 3,
          barThickness: 22,
          hoverBackgroundColor: '#2DEC4C',
          hoverBorderColor: '#2DEC4C',
      },
      {
          label: 'ط',
          data: [
              highThirdCount['I'] || 0,
              highSecondCount['I'] || 0,
              highFirstCount['I'] || 0,
              middleThirdCount['I'] || 0,
              middleSecondCount['I'] || 0,
              middleFirstCount['I'] || 0,
              primaryFirstCount['I'] || 0,
              primarySecondCount['I'] || 0,
              primaryThirdCount['I'] || 0,
              primaryFourthCount['I'] || 0,
              primaryFifthCount['I'] || 0,
              primarySixthCount['I'] || 0
          ],
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          borderWidth: 1,
          borderRadius: 3,
          barThickness: 22,
          hoverBackgroundColor: '#2DEC4C',
          hoverBorderColor: '#2DEC4C',
      },
      {
          label: 'ي',
          data: [
              highThirdCount['J'] || 0,
              highSecondCount['J'] || 0,
              highFirstCount['J'] || 0,
              middleThirdCount['J'] || 0,
              middleSecondCount['J'] || 0,
              middleFirstCount['J'] || 0,
              primaryFirstCount['J'] || 0,
              primarySecondCount['J'] || 0,
              primaryThirdCount['J'] || 0,
              primaryFourthCount['J'] || 0,
              primaryFifthCount['J'] || 0,
              primarySixthCount['J'] || 0
          ],
          backgroundColor: 'rgb(255, 159, 64)',
          borderColor: 'rgb(255, 159, 64)',
          borderWidth: 1,
          borderRadius: 3,
          barThickness: 22,
          hoverBackgroundColor: '#2DEC4C',
          hoverBorderColor: '#2DEC4C',
      },
   
      
    ],
};



 
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
          color: dark ? 'white' : '#122333',
          font: {
            size: 7.32,
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
        <div className=' w-full h-full bg-white  dark:bg-[#252A33] rounded-2xl p-[10px] flex flex-col  gap-y-5'>
          <span className=' text-[#444] dark:text-white font-bold tracking-[-0.01119rem]'> عدد الطلاب في كل مرحله </span>

        <div className=' w-full  flex items-center justify-center dark:bg-[#252A33]'>
           <div className=' w-full h-[175px] self-center mx-4 '>
            <Bar data={data} options={options} />

          </div>
        </div>
         

          
        </div>
      
    </div>
  )
}

export default ThridCard
