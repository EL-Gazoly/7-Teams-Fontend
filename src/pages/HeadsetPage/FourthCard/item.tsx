import React from 'react';
import { Image } from '@nextui-org/react';
import useTranslationStore from '../../../stores/LanguageStore';

type Props = {
  icon: string;
  title: string;
  percentage: number;
};

const Item = ({ icon, title, percentage }: Props) => {
  const { getTranslation, language } = useTranslationStore();

  const getColor = () => {
    if (percentage >= 0 && percentage <= 23) return 'bg-[#FF0000]';
    if (percentage >= 24 && percentage <= 49) return 'bg-[#EDAA43]';
    if (percentage >= 50 && percentage <= 99) return 'bg-[#0095FF]';
    if (percentage === 100) return 'bg-[#2DEC4C]';
  };

  const getBorderColor = () => {
    if (percentage >= 0 && percentage <= 23) return 'border-[#FF0000]';
    if (percentage >= 24 && percentage <= 49) return 'border-[#EDAA43]';
    if (percentage >= 50 && percentage <= 99) return 'border-[#0095FF]';
    if (percentage === 100) return 'border-[#2DEC4C]';
  };

  const getTextColor = () => {
    if (percentage >= 0 && percentage <= 23) return 'text-[#FF0000]';
    if (percentage >= 24 && percentage <= 49) return 'text-[#EDAA43]';
    if (percentage >= 50 && percentage <= 99) return 'text-[#0095FF]';
    if (percentage === 100) return 'text-[#2DEC4C]';
  };

  return (
    <div className='w-full flex items-center'
      style={{
        direction: language === 'ar' ? 'rtl' : 'ltr'
      }}
    >
      <div className='flex items-center gap-x-9' style={{ direction: language === 'ar' ? 'rtl' : 'ltr' }}>
        <Image src={icon} width={40} height={40} />
        <div className="flex flex-col gap-y-3  font-bold text-text-black dark:text-white text-xs">
          <span>{title}</span>
          <div className='w-[140px] h-1 relative bg-[#CDE7FF] rounded-lg'>
            <div className={`absolute h-1 right-0 ${getColor()} rounded-lg`} style={{ width: `${percentage}%` }} />
          </div>
        </div>

        <div className='flex items-center gap-x-2 text-xs'>
          <span className={`w-11 h-5 rounded-lg border ${getBorderColor()} ${getTextColor()} flex items-center justify-center`}>{Math.floor(percentage)}%</span>
          <span className='text-text-black dark:text-white font-medium'>{getTranslation('dateFormat')}</span>
        </div>
      </div>
    </div>
  );
}

export default Item;
