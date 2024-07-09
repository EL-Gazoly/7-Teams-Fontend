import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';
import { useThemeStore } from '../../stores/ThemeStore';
import useTranslationStore  from '@/stores/LanguageStore';

const labels = ["الفصل الاول", "الفصل الثاني", "الفصل الثالث"];

const StageReportsFourthRow = ({ experminets }) => {
  const { dark } = useThemeStore();
  const { stage } = useParams();
  const { getTranslation } = useTranslationStore();

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

  useEffect(() => {
    if (experminets) {
      calculateTotal();
    }
  }, [experminets]);

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

    // Set state for each class total
    setFirst(classTotals[0]);
    setSecond(classTotals[1]);
    setThird(classTotals[2]);
  };

  const convertMillisecondsToHoursAndMinutes = (milliseconds) => {
    const totalSeconds = milliseconds / 1000;
    const hours = Math.floor(totalSeconds / 3600);
    return hours;
  };

  const data = {
    labels: labels,
    datasets: [
      {
        label: getTranslation('practical_training_time'),
        data: [
          convertMillisecondsToHoursAndMinutes(first.totalTrainingTime),
          convertMillisecondsToHoursAndMinutes(second.totalTrainingTime),
          convertMillisecondsToHoursAndMinutes(third.totalTrainingTime),
        ],
        backgroundColor: '#009017',
        borderColor: '#009017',
        borderWidth: 1,
        borderRadius: 3,
        barThickness: 40,
        hoverBackgroundColor: '#2DEC4C',
        hoverBorderColor: '#2DEC4C',
      },
      {
        label: getTranslation('practical_test_time'),
        data: [
          convertMillisecondsToHoursAndMinutes(first.totalPraticalTime),
          convertMillisecondsToHoursAndMinutes(second.totalPraticalTime),
          convertMillisecondsToHoursAndMinutes(third.totalPraticalTime),
        ],
        backgroundColor: '#4ADB61',
        borderColor: '#4ADB61',
        borderWidth: 1,
        borderRadius: 3,
        barThickness: 40,
        hoverBackgroundColor: '#2DEC4C',
        hoverBorderColor: '#2DEC4C',
      },
      {
        label: getTranslation('theoretical_test_time'),
        data: [
          convertMillisecondsToHoursAndMinutes(first.totalTheorticalTime),
          convertMillisecondsToHoursAndMinutes(second.totalTheorticalTime),
          convertMillisecondsToHoursAndMinutes(third.totalTheorticalTime),
        ],
        backgroundColor: '#8DF49D',
        borderColor: '#8DF49D',
        borderWidth: 1,
        borderRadius: 3,
        barThickness: 40,
        hoverBackgroundColor: '#2DEC4C',
        hoverBorderColor: '#2DEC4C',
      },
    ],
  };

 
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
    <div className='w-full h-[354px] bg-white dark:bg-primary-dark text-[#444] dark:text-white py-6 px-9 rounded-lg flex flex-col gap-y-6 relative'>
      <div className='flex items-center justify-between'>
        <h3 className='text-xl font-bold'>{getTranslation('overall_estimation')}</h3>
        <div className='flex items-center gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <div className='w-1 h-8 bg-[#009017] rounded' />
            <div className='w-[69px] text-[8px] font-semibold'>
              {getTranslation('practical_training_time')}
            </div>
          </div>
          <div className='flex items-center gap-x-1'>
            <div className='w-1 h-8 bg-[#4ADB61] rounded' />
            <div className='w-[69px] text-[8px] font-semibold'>
              {getTranslation('practical_test_time')}
            </div>
          </div>
          <div className='flex items-center gap-x-1'>
            <div className='w-1 h-8 bg-[#8DF49D] rounded' />
            <div className='w-[69px] text-[8px] font-semibold'>
              {getTranslation('theoretical_test_time')}
            </div>
          </div>
        </div>
      </div>
      <div className='flex items-center gap-x-3 mt-7'>
        <div className='flex flex-col gap-y-12 text-text-black dark:text-white text-xs font-bold'>
          {stage === '20f9b0c6-37fa-4509-987a-6be7b341d98e' ? (
            <>
              <h3>{getTranslation('middle_third_class')}</h3>
              <h3>{getTranslation('middle_second_class')}</h3>
              <h3>{getTranslation('middle_first_class')}</h3>
            </>
          ) : (
            <>
              <h3>{getTranslation('senior_third_class')}</h3>
              <h3>{getTranslation('senior_second_class')}</h3>
              <h3>{getTranslation('senior_first_class')}</h3>
            </>
          )}
        </div>
        <div className='w-[720px] h-[280px] self-center mx-4 absolute top-[17%] left-[6%]'>
        <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default StageReportsFourthRow;