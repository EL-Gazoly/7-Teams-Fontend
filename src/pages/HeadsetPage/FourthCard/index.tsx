import React from 'react';

import Chemistry from '../../../assets/SelectCourse/SelectSubject/chemistry.svg';
import Physics from '../../../assets/SelectCourse/SelectSubject/physics.svg';
import Item from './item';
import useTranslationStore from '../../../stores/LanguageStore';

const FourthCard = ({ physicsProgres, chemistryProgres }) => {
  const { getTranslation, language } = useTranslationStore();
  
  return (
    <div className='w-[444px] h-[485px] rounded-[21px] bg-white dark:bg-primary-dark py-7 flex flex-col gap-y-3'
      style={{
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.25)',
        direction: language === 'ar' ? 'rtl' : 'ltr'
      }}
    >
      <span className='text-text-black dark:text-white text-lg font-bold mx-9'>
        {getTranslation('progressRecord')}
      </span>
      <div className='h-[53px] bg-[#dcdee033] w-full flex items-center justify-between px-8 text-xs font-bold '>
        <span>{getTranslation('experimentName')}</span>
        <div className='flex  items-center gap-x-8'>
          <span>{getTranslation('progress')}</span>
          <span>{getTranslation('date')}</span>
        </div>
      </div>

      <div className='mt-4 flex flex-col gap-y-[50px] items-center px-8 text-text-black text-xs'>
        <Item icon={Chemistry} title={getTranslation('chemistry')} percentage={chemistryProgres ? chemistryProgres * 100 : 0} />
        <Item icon={Physics} title={getTranslation('physics')} percentage={physicsProgres ? physicsProgres * 100 : 0} />
      </div>
    </div>
  );
}

export default FourthCard;
