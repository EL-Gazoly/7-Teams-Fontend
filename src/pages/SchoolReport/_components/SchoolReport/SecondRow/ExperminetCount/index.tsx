import { Divider } from '@nextui-org/react';
import DoughnutChart from '../../../../../StudentReportPage/_components/StudentExperminetCount/DoughnutChart';
import { useLocation } from 'react-router-dom';
import useTranslationStore from '@/stores/LanguageStore';

const ExpermientCount = ({ enterPractical, enterTheortical, enterTraining }) => {
  const location = useLocation();
  const { language, getTranslation } = useTranslationStore();
  const isClassPage = location.pathname.includes("class");

  return (
    <div
      className={`w-[457px] h-[324px] p-6 bg-white dark:bg-primary-dark rounded-lg flex flex-col gap-y-2 ${language === 'ar' ? 'rtl' : 'ltr'}`}
    >
      <div className='w-full flex items-center justify-between'>
        <span className='text-gray-900 dark:text-white text-[15px] font-bold'>
          {`${getTranslation('entriesForGrade')} ${isClassPage ? getTranslation('class') : getTranslation('stage')}`}
        </span>
      </div>
      <div className='w-full flex items-center justify-between'>
        <div className='flex flex-col gap-y-[6px]'>
          <span className='text-[#444] dark:text-white text-[40px] font-bold'>
            {enterTraining + enterTheortical + enterPractical}
          </span>
          <div className='flex flex-col gap-y-3'>
            <div className='flex items-center gap-x-3'>
              <div className='w-[14px] h-7 rounded bg-[#009017]' />
              <div className='flex items-center justify-center gap-x-2'>
                <span className='w-28 text-[#444] dark:text-white text-xs font-bold'>
                  {getTranslation('trainingEntries')}
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
                  {getTranslation('theoreticalEntries')}
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
                  {getTranslation('practicalEntries')}
                </span>
                <span className='text-gray-500 dark:text-white text-2xl font-semibold mb-2'>
                  {enterPractical}
                </span>
              </div>
            </div>
          </div>
        </div>
        <DoughnutChart
          trainingEntries={enterPractical}
          theoreticalEntries={enterTheortical}
          practicalEntries={enterTraining}
        />
      </div>
    </div>
  );
}

export default ExpermientCount;
