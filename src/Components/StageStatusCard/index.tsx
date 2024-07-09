import React from 'react';
import Card from '../StatusCard/Card';
import grade from 'letter-grade';
import useTranslationStore from '@/stores/LanguageStore';

const StageStatusCard = ({
  practicalTestGrade,
  totatotalTheoreticalTestGrade,
  overallGrade,
  totalPracticalTime,
  totalTheorticalTime,
  totalTrainingTime
}) => {
  const { getTranslation } = useTranslationStore();

  const convertSecondsToHoursAndMinutes = () => {
    const seconds = totalPracticalTime + totalTheorticalTime + totalTrainingTime;
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours}h ${minutes} min`;
  };

  return (
    <div className='w-[532px] h-[324px] py-5 px-[18px] bg-white dark:bg-primary-dark rounded-lg'>
      <div className='max-w-full grid grid-cols-2 gap-4'>
        <Card
          title={getTranslation('total_theoretical_grade')}
          icon='certificate'
          description={`${totatotalTheoreticalTestGrade ? totatotalTheoreticalTestGrade : 0}%`}
        />
        <Card
          title={getTranslation('total_practical_grade')}
          icon='user'
          description={`${practicalTestGrade ? practicalTestGrade : 0}%`}
        />
        <Card
          title={getTranslation('total_time')}
          icon='clock'
          description={convertSecondsToHoursAndMinutes()}
        />
        <Card
          title={getTranslation('overall_performance')}
          icon='reports'
          description={grade(overallGrade) ? grade(overallGrade) : getTranslation('letter_grade_fallback')}
        />
      </div>
    </div>
  );
};

export default StageStatusCard;