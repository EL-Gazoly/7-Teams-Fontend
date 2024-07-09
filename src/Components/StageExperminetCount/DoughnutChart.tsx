import { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import useTranslationStore from '@/stores/LanguageStore';

const DoughnutChart = ({ enterPractical, enterTheortical, enterTraining }) => {
  const { getTranslation } = useTranslationStore();

  const data = {
    labels: [
      getTranslation('training_entry_count'),
      getTranslation('theoretical_entry_count'),
      getTranslation('practical_entry_count')
    ],
    datasets: [
      {
        label: getTranslation('entry_count'),
         data: [enterTraining, enterTheortical, enterPractical],
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