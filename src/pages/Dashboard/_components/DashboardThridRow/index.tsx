import React from 'react';
import DashboardTable from './Table';
import DashboardThridRowSecondCol from '../DashboardThridRowSecondCard';
import useTranslationStore from '@/stores/LanguageStore';

const DashboardThridRow = ({ studentExperiments, totalCourseTimeLoading }) => {
  const { getTranslation } = useTranslationStore();

  return (
    <div className='w-full flex items-center gap-x-2'>
      <div className='w-[581px] h-[332px] rounded-2xl bg-white dark:bg-[#252A33] pt-[18px] text-text-black dark:text-white text-sm flex flex-col gap-y-5'>
        <span className='font-bold mx-5'>
          {getTranslation('total_course_time')}
        </span>
        <DashboardTable totalCourseTimeLoading={totalCourseTimeLoading} />
      </div>
      <DashboardThridRowSecondCol studentExperiments={studentExperiments} />
    </div>
  );
};

export default DashboardThridRow;