import { useEffect, useState } from 'react';
import { Divider } from '@nextui-org/react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import useTranslationStore from '@/stores/LanguageStore';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ trainingEntries, theoreticalEntries, practicalEntries }) => {
  const { getTranslation } = useTranslationStore();

  const data = {
    labels: [
      getTranslation('training_entries'),
      getTranslation('theoretical_entries'),
      getTranslation('practical_entries')
    ],
    datasets: [
      {
        label: getTranslation('entry_count'),
        data: [trainingEntries, theoreticalEntries, practicalEntries],
        backgroundColor: ['#009017', '#21FB45', '#8DF49D'],
        borderColor: ['#009017', '#21FB45', '#8DF49D'],
        borderRadius: 6,
        borderWidth: 1,
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
    cutoutPercentage: 50,
  };

  return (
    <div className='relative'>
      <div className='mt-12 w-[200px] h-[200px]'>
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default DoughnutChart;