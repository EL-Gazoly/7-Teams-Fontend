import { StageTimeCounterItem } from '@/Components/StageTimeCounter/Item';
import React from 'react';
import { Divider } from '@nextui-org/react';
import { useLocation } from 'react-router-dom';
import useTranslationStore from '@/stores/LanguageStore';

const TimeCounter = ({ totalPracticalTime, totalTheorticalTime, totalTrainingTime }) => {
  const location = useLocation();
  const { language, getTranslation } = useTranslationStore();

  const convertMStoHoursAndMinutes = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return { hours, minutes };
  }

  return (
    <div
      className={`w-[532px] h-[328px] rounded-lg py-7 px-6 bg-white dark:bg-primary-dark flex flex-col gap-y-5 ${language === 'ar' ? 'rtl' : 'ltr'}`}
    >
      <h2 className='mr-2 text-sm font-bold text-text-black dark:text-white'>
        {`${getTranslation('timeSpentFor')} ${location.pathname.includes("class") ? getTranslation('class') : getTranslation('stage')}`}
      </h2>
      <div className='flex flex-col items-center gap-[14px]'>
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-x-4 text-xs text-[#96A5B8] dark:text-white">
            <span>#</span>
            <span>{getTranslation('name')}</span>
          </div>
          <div className='flex items-center gap-x-4 text-xs text-[#96A5B8] dark:text-white'>
            <span>{getTranslation('time')}</span>
            <span>{getTranslation('minutes')}</span>
            <span>{getTranslation('hours')}</span>
          </div>
        </div>
        <Divider className='bg-[#2DEC4C]' />
        <div className='w-full flex flex-col gap-y-[11px] text-text-black text-xs'>
          <StageTimeCounterItem
            number={1}
            title={getTranslation('timeSpentOnPracticalTraining')}
            hours={convertMStoHoursAndMinutes(totalTrainingTime).hours}
            minutes={convertMStoHoursAndMinutes(totalTrainingTime).minutes}
          />
          <StageTimeCounterItem
            number={2}
            title={getTranslation('timeSpentOnTheoreticalTest')}
            hours={convertMStoHoursAndMinutes(totalTheorticalTime).hours}
            minutes={convertMStoHoursAndMinutes(totalTheorticalTime).minutes}
          />
          <StageTimeCounterItem
            number={3}
            title={getTranslation('timeSpentOnPracticalTest')}
            hours={convertMStoHoursAndMinutes(totalPracticalTime).hours}
            minutes={convertMStoHoursAndMinutes(totalPracticalTime).minutes}
          />
          <StageTimeCounterItem
            number={4}
            title={getTranslation('total')}
            hours={convertMStoHoursAndMinutes(totalPracticalTime + totalTheorticalTime + totalTrainingTime).hours}
            minutes={convertMStoHoursAndMinutes(totalPracticalTime + totalTheorticalTime + totalTrainingTime).minutes}
          />
        </div>
      </div>
    </div>
  )
}

export default TimeCounter;
