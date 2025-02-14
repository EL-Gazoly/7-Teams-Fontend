import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useThemeStore } from '../../stores/ThemeStore';
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
import useTranslationStore from '@/stores/LanguageStore';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = ["class1", "class2", "class3"];

const ClassesReportFourthRow = ({ experiments }) => {
  const { dark } = useThemeStore();
  const { getTranslation } = useTranslationStore();
  const { id } = useParams();
  const [first, setFirst] = useState({
    totalTheorticalTime: 0,
    totalPraticalTime: 0,
    totalTrainingTime: 0
  });
  const [second, setSecond] = useState({
    totalTheorticalTime: 0,
    totalPraticalTime: 0,
    totalTrainingTime: 0
  });
  const [third, setThird] = useState({
    totalTheorticalTime: 0,
    totalPraticalTime: 0,
    totalTrainingTime: 0
  });

  const calculateTotal = () => {
    const result = {};
    experiments.classesByNumber.forEach(classes => {
      classes.students.forEach(student => {
        const classalpha = student.classalpha;

        if (!result[classalpha]) {
          result[classalpha] = {
            totalTrainingTime: 0,
            totalTheorticalTime: 0,
            totalPraticalTime: 0,
            totalStudents: 0,
          };
        }

        student.studnetExpriment.forEach(expriment => {
          result[classalpha].totalTrainingTime += expriment.totalTrainingTime;
          result[classalpha].totalTheorticalTime += expriment.totalTheorticalTime;
          result[classalpha].totalPraticalTime += expriment.totalPraticalTime;
        });

        result[classalpha].totalStudents += 1;
      });
    });

    // Calculate averages
    for (const classalpha in result) {
      const totalStudents = result[classalpha].totalStudents;
      result[classalpha].averageTrainingTime = result[classalpha].totalTrainingTime / totalStudents;
      result[classalpha].averageTheorticalTime = result[classalpha].totalTheorticalTime / totalStudents;
      result[classalpha].averagePraticalTime = result[classalpha].totalPraticalTime / totalStudents;
    }

    setFirst(result["A"] ? result["A"] : {
      totalTheorticalTime: 0,
      totalPraticalTime: 0,
      totalTrainingTime: 0
    });
    setSecond(result["B"] ? result["B"] : {
      totalTheorticalTime: 0,
      totalPraticalTime: 0,
      totalTrainingTime: 0
    });
    setThird(result["C"] ? result["C"] : {
      totalTheorticalTime: 0,
      totalPraticalTime: 0,
      totalTrainingTime: 0
    });
  }

  useEffect(() => {
    if (experiments)
      calculateTotal();
  }, [experiments]);

  const convertMillisecondsToHoursAndMinutes = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    return hours;
  }

  const data = {
    labels: labels.map(label => getTranslation(label)),
    datasets: [
      {
        label: getTranslation('timeSpentOnPracticalTraining'),
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
        label: getTranslation('timeSpentOnPracticalTest'),
        data: [convertMillisecondsToHoursAndMinutes(first.totalPraticalTime), convertMillisecondsToHoursAndMinutes(second.totalPraticalTime), convertMillisecondsToHoursAndMinutes(third.totalPraticalTime)],
        backgroundColor: '#4ADB61',
        borderColor: '#4ADB61',
        borderWidth: 1,
        borderRadius: 3,
        barThickness: 40,
        hoverBackgroundColor: '#2DEC4C',
        hoverBorderColor: '#2DEC4C',
      },
      {
        label: getTranslation('timeSpentOnTheoreticalTest'),
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
          color: dark ? 'white' : '#122333',
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
    <div className='w-full h-[354px] bg-white text-[#444] dark:bg-primary-dark dark:text-white py-6 px-9 rounded-lg flex flex-col gap-y-6 relative'>
      <div className='flex items-center justify-between'>
        <h3 className='text-xl font-bold'>{getTranslation('overallGradeForClasses')}</h3>
        <div className='flex items-center gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <div className='w-1 h-8 bg-[#009017] rounded' />
            <div className='w-[69px] text-[8px] font-semibold'>
              {getTranslation('timeSpentOnPracticalTraining')}
            </div>
          </div>
          <div className='flex items-center gap-x-1'>
            <div className='w-1 h-8 bg-[#4ADB61] rounded' />
            <div className='w-[69px] text-[8px] font-semibold'>
              {getTranslation('timeSpentOnPracticalTest')}
            </div>
          </div>
          <div className='flex items-center gap-x-1'>
            <div className='w-1 h-8 bg-[#8DF49D] rounded' />
            <div className='w-[69px] text-[8px] font-semibold'>
              {getTranslation('timeSpentOnTheoreticalTest')}
            </div>
          </div>
        </div>
      </div>
      <div className='flex items-center gap-x-3 mt-7'>
        <div className="flex flex-col gap-y-12 text-text-black dark:text-white text-xs font-bold">
          <h3>{getTranslation('class3')}</h3>
          <h3>{getTranslation('class2')}</h3>
          <h3>{getTranslation('class1')}</h3>
        </div>
        <div className='w-[720px] h-[280px] self-center mx-4 absolute top-[17%] left-[6%]'>
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  )
}

export default ClassesReportFourthRow;
