import React from 'react';
import { Divider } from '@nextui-org/react';
import DoughnutChart from './DoughnutChart';
import { useLocation } from 'react-router-dom';
import useTranslationStore from '@/stores/LanguageStore';

const StageExperimentCount = ({ enterPractical, enterTheortical, enterTraining }) => {
  const { getTranslation } = useTranslationStore();
  const location = useLocation();
  
  return (
    <div className='w-[457px] h-[324px] p-6 bg-white dark:bg-primary-dark rounded-lg flex flex-col gap-y-2'>
      <div className='w-full flex items-center justify-between'>
        <span className='text-gray-900 dark:text-white text-[15px] font-bold'>
          {`${getTranslation('system_entry_count')} ${
            location.pathname.includes("class") ? getTranslation('class_or_stage')['class'] : getTranslation('class_or_stage')['stage']
          } الواحدة`}
        </span>
      </div>
      <div className='w-full flex items-center justify-between'>
        <div className='flex flex-col gap-y-[6px]'>
          <span className='text-[#444] dark:text-white text-[40px] font-bold'>
            {enterPractical + enterTheortical + enterTraining}
          </span>
          <div className='flex flex-col gap-y-3'>
            <div className='flex items-center gap-x-3'>
              <div className='w-[14px] h-7 rounded bg-[#009017]' />
              <div className='flex items-center justify-center gap-x-2'>
                <span className='w-28 text-[#444] dark:text-white text-xs font-bold'>
                  {getTranslation('training_entry_count')}
                </span>
                <span className='text-gray-500 dark:text-white text-2xl font-semibold mb-2'>
                  {enterTraining}
                </span>
              </div>
            </div>
            <Divider className='bg-[#00000045]' />
            <div className='flex items-center gap-x-3'>
              <div className='w-[14px] h-7 rounded bg-[#4EFC6A]' />
              <div className='flex items-center justify-center gap-x-2'>
                <span className='w-28 text-[#444] dark:text-white text-xs font-bold'>
                  {getTranslation('theoretical_entry_count')}
                </span>
                <span className='text-gray-500 dark:text-white text-2xl font-semibold mb-2'>
                  {enterTheortical}
                </span>
              </div>
            </div>
            <Divider className='bg-[#00000045]' />
            <div className='flex items-center gap-x-3'>
              <div className='w-[14px] h-7 rounded bg-[#8DF49D]' />
              <div className='flex items-center justify-center gap-x-2'>
                <span className='w-28 text-[#444] dark:text-white text-xs font-bold'>
                  {getTranslation('practical_entry_count')}
                </span>
                <span className='text-gray-500 dark:text-white text-2xl font-semibold mb-2'>
                  {enterPractical}
                </span>
              </div>
            </div>
          </div>
        </div>
        <DoughnutChart
          enterPractical={enterPractical}
          enterTheortical={enterTheortical}
          enterTraining={enterTraining}
        />
      </div>
    </div>
  );
};

export default StageExperimentCount;