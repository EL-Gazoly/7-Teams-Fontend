import React, { useEffect, useState } from 'react';
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
import { Divider } from '@nextui-org/react';
import useTranslationStore from '@/stores/LanguageStore';

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

const FirstCard = ({ timeByMonth }) => {
  const [firstMonth, setFirstMonth] = useState([0]);
  const [totalFirstMonth, setTotalFirstMonth] = useState(0);
  const [secondMonth, setSecondMonth] = useState([0]);
  const [totalSecondMonth, setTotalSecondMonth] = useState(0);
  const { getTranslation } = useTranslationStore();

  const labels = [
    getTranslation('first_week'),
    getTranslation('second_week'),
    getTranslation('third_week'),
    getTranslation('fourth_week')
  ];

  useEffect(() => {
    if (timeByMonth) {
      const convertedTimes = timeByMonth.map((time) => convertSecondsToHours(time));
      const firstFourWeeks = convertedTimes.slice(0, 4);
      const lastFourWeeks = convertedTimes.slice(-4);

      setFirstMonth(firstFourWeeks);
      setSecondMonth(lastFourWeeks);
      setTotalFirstMonth(firstFourWeeks.reduce((a, b) => a + b, 0));
      setTotalSecondMonth(lastFourWeeks.reduce((a, b) => a + b, 0));
    }
  }, [timeByMonth]);

  const convertSecondsToHours = (duration) => Math.floor(duration / 3600);

  const data = {
    labels,
    datasets: [
      {
        label: getTranslation('current_month'),
        data: firstMonth,
        fill: true,
        backgroundColor: 'rgba(7, 224, 152, 0.2)',
        borderColor: '#07E098',
      },
      {
        label: getTranslation('previous_month'),
        data: secondMonth,
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
        display: false,
      },
      x: {
        display: false,
      },
    },
  };

  return (
    <div className="w-[290px] h-[254px] rounded-2xl bg-white dark:bg-[#252A33] py-[15px] px-2 flex flex-col gap-y-[10px] relative">
      <span className="text-[#444] dark:text-white font-bold mx-1">
        {getTranslation('total_training_hours')}
      </span>
      <div className="w-full h-[140px] mt-2">
        <Line data={data} options={options} />
      </div>
      <Divider className="w-full bg-[#EDF2F6]" />
      <div className="self-center w-[220px] flex items-center justify-between">
        <div className="flex items-center gap-x-5">
          <div className="flex flex-col gap-y-[2px] items-center text-[10px] text-center">
            <span className="text-[#444] dark:text-[#DCDCDC] font-semibold">
              {getTranslation('this_month')}
            </span>
            <span className="text-[#787878] dark:text-[#DCDCDC] font-medium">
              {totalFirstMonth}
            </span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-1 rounded-r-sm bg-[#05C283]" />
            <div className="w-[6px] h-[6px] rounded-full bg-[#07E098] scale-125" />
            <div className="w-2 h-1 rounded-l-sm bg-[#05C283]" />
          </div>
        </div>
        <Divider className="h-4 bg-[#BDC9D3] dark:bg-[#DCDCDC]" orientation="vertical" />
        <div className="flex items-center gap-x-4">
          <div className="flex flex-col gap-y-[2px] items-center text-[10px] text-center">
            <span className="text-[#444] dark:text-[#DCDCDC] font-semibold">
              {getTranslation('last_month')}
            </span>
            <span className="text-[#787878] dark:text-[#DCDCDC] font-medium">
              {totalSecondMonth}
            </span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-1 rounded-r-sm bg-[#0080DA]" />
            <div className="w-[6px] h-[6px] rounded-full bg-[#0095FF] scale-125" />
            <div className="w-2 h-1 rounded-l-sm bg-[#0080DA]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstCard;