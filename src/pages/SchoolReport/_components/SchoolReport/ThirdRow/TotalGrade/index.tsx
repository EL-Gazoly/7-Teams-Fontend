import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
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
import useTranslationStore from '../../../../../../stores/LanguageStore';

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

const labels = ['0%', '10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%', '100%'];

import { useThemeStore } from '../../../../../../stores/ThemeStore';

const TotalGrade = ({ experminents }) => {
  const { dark } = useThemeStore();
  const { getTranslation } = useTranslationStore();
  const [thorticalOccurance, setThorticalOccurance] = useState({});
  const [practicalOccurance, setPracticalOccurance] = useState({});
  const location = useLocation();

  const calculateTotal = () => {
    let theorticalMax = [];
    let practicalMax = [];
    experminents.school.teams.forEach((team) => {
      team.classes.forEach((classInfo) => {
        classInfo.students.forEach((student) => {
          let maxTheoreticalTestGrade = 0;
          let maxPracticalTestGrade = 0;

          student.studnetExpriment.forEach((experiment) => {
            // Update maximum theoretical test grade
            maxTheoreticalTestGrade = Math.max(maxTheoreticalTestGrade, experiment.theoreticalTestGrade);

            // Update maximum practical test grade
            maxPracticalTestGrade = Math.max(maxPracticalTestGrade, experiment.practicalTestGrade);
          })
          theorticalMax.push(maxTheoreticalTestGrade);
          practicalMax.push(maxPracticalTestGrade);
        });
      });
    });
    setThorticalOccurance(countOccurrences(theorticalMax));
    setPracticalOccurance(countOccurrences(practicalMax));
  }

  function countOccurrences(list) {
    // Initialize an object to store counts at different intervals
    const counts = {};

    // Iterate through the list
    list.forEach(value => {
      // Calculate the interval (rounded to the nearest 10)
      const interval = Math.round(value / 10) * 10;

      // Update the count for the interval
      counts[interval] = (counts[interval] || 0) + 1;
    });

    return counts;
  }

  useEffect(() => {
    if (experminents) calculateTotal();
  }, [experminents]);

  const data = {
    labels,
    datasets: [
      {
        label: getTranslation('numberOfStudents'),
        data: [
          thorticalOccurance[0] ? thorticalOccurance[0] : 0,
          thorticalOccurance[10] ? thorticalOccurance[10] : 0,
          thorticalOccurance[20] ? thorticalOccurance[20] : 0,
          thorticalOccurance[30] ? thorticalOccurance[30] : 0,
          thorticalOccurance[40] ? thorticalOccurance[40] : 0,
          thorticalOccurance[50] ? thorticalOccurance[50] : 0,
          thorticalOccurance[60] ? thorticalOccurance[60] : 0,
          thorticalOccurance[70] ? thorticalOccurance[70] : 0,
          thorticalOccurance[80] ? thorticalOccurance[80] : 0,
          thorticalOccurance[90] ? thorticalOccurance[90] : 0,
          thorticalOccurance[100] ? thorticalOccurance[100] : 0,
        ],
        fill: true,
        backgroundColor: 'rgba(7, 224, 152, 0.2)',
        borderColor: '#05C283',
      },
      {
        label: getTranslation('numberOfStudents'),
        data: [
          practicalOccurance[0] ? practicalOccurance[0] : 0,
          practicalOccurance[10] ? practicalOccurance[10] : 0,
          practicalOccurance[20] ? practicalOccurance[20] : 0,
          practicalOccurance[30] ? practicalOccurance[30] : 0,
          practicalOccurance[40] ? practicalOccurance[40] : 0,
          practicalOccurance[50] ? practicalOccurance[50] : 0,
          practicalOccurance[60] ? practicalOccurance[60] : 0,
          practicalOccurance[70] ? practicalOccurance[70] : 0,
          practicalOccurance[80] ? practicalOccurance[80] : 0,
          practicalOccurance[90] ? practicalOccurance[90] : 0,
          practicalOccurance[100] ? practicalOccurance[100] : 0,
        ],
        fill: true,
        backgroundColor: 'rgba(0, 149, 255, 0.2)',
        borderColor: '#007DD6',
      }
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
        display: true,
        ticks: {
          color: dark ? 'white' : '#615E83',
          font: {
            size: 10,
            weight: 400,
            family: 'Cairo',
          },
        },
      }
    },
  };

  return (
    <div className='w-[457px] h-[354px] py-[31px] px-7 bg-white dark:bg-primary-dark text-[#444] dark:text-white rounded-lg flex flex-col gap-y-5 relative'>
      <div className="flex w-full items-center justify-between">
        <span className='text-sm font-bold'>
          {`${getTranslation('overallGrade')} ${location.pathname.includes("class") ? getTranslation('forClass') : getTranslation('forStage')}`}
        </span>
        <div className='flex items-center gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <div className='w-1 h-8 bg-[#007DD6] rounded' />
            <div className='w-[69px] text-[8px] font-semibold'>
              {getTranslation('detailedGradePractical')}
            </div>
          </div>
          <div className='flex items-center gap-x-1'>
            <div className='w-1 h-8 bg-[#05C283] rounded' />
            <div className='w-[69px] text-[8px] font-semibold'>
              {getTranslation('detailedGradeTheoretical')}
            </div>
          </div>
        </div>
      </div>
      <div className='w-[419px] h-[263px] absolute top-[31%] left-[5%]'>
        <Line data={data} options={options} />
      </div>
    </div>
  )
}

export default TotalGrade;
