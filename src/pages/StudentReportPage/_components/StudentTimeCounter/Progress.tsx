import React from 'react';
import useTranslationStore from '@/stores/LanguageStore';

type Props = {
  value: number;
  title: string;
  timeValue: string;
};

const convertMinutesToHoursAndMinutes = (minutes: number) => {
  let hours = Math.floor(minutes / 60);
  let mins = minutes % 60;
  return `${hours}h ${mins}m`;
};

const Progress = ({ value, title }: Props) => {
  const { language, getTranslation } = useTranslationStore();
  const translatedTotal = getTranslation('total');

  return (
    <div className='w-full flex flex-col gap-y-2'>
      <div className='flex items-center justify-between'>
        <span className='text-[#615E83] dark:text-white text-xs'>{title}</span>
        <span className='text-[#1223336B] text-[10px]' style={{ direction: language ==="ar" ? "rtl" : "ltr" }}>
          {convertMinutesToHoursAndMinutes(value)}
        </span>
      </div>
      <div className='relative w-full h-3 rounded bg-[#E6FDEA] dark:bg-[#274237]'>
        <div
          className={`absolute inset-0 ${
            title === translatedTotal ? 'bg-[#2DEC4C]' : 'bg-[#CFCFD7] dark:bg-[#768482]'
          } rounded`}
          style={{
            width: `${(value / 60 / 150) * 100}%`
          }}
        />
      </div>
    </div>
  );
};

export default Progress;