import React, { useEffect, useState } from 'react';
import Item from './item';
import useTranslationStore from '@/stores/LanguageStore';

const FirstRow = ({ data }) => {
  const [time, setTime] = useState("");
  const { getTranslation } = useTranslationStore();

  const secondToTime = (duration) => {
    const seconds = Math.floor(duration % 60).toString().padStart(2, '0');
    const minutes = Math.floor((duration / 60) % 60).toString().padStart(2, '0');
    const hours = Math.floor(duration / 60 / 60).toString().padStart(2, '0');
  
    return `${hours}h ${minutes}mins`;
  };

  useEffect(() => {
    if (data) {
      setTime(secondToTime(data[3]));
    }
  }, [data]);

  return (
    <div className="w-full">
      <div className="flex items-center justify-center gap-x-2">
        <Item icon="user" title={getTranslation('students_registered')} description={data[0]} />
        <Item icon="activeUser" title={getTranslation('active_trainees')} description={data[1]} />
        <Item icon="clock" title={getTranslation('total_training_hours')} description={time} />
        <Item icon="certificate" title={getTranslation('graduates')} description={data[2]} />
      </div>
    </div>
  );
};

export default FirstRow;