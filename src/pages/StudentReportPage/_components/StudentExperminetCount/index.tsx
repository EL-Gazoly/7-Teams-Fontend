import { useEffect, useState } from 'react'
import { Divider } from '@nextui-org/react'
import DoughnutChart from './DoughnutChart'
import useTranslationStore from '@/stores/LanguageStore'
const StudentExperminetCount = ({expermients}) => {
  const [trainingEntries, setTraininigEntrance] = useState(0)
  const [theoreticalEntries, setTheorticalEntrance] = useState(0)
  const [practicalEntries, setPraticalEntrance] = useState(0)
  const {language, getTranslation} = useTranslationStore()
  useEffect(() => {
   if(expermients) {
    let totalPracticalTime = 0;
    let totalTheoreticalTime = 0;
    let totalTrainingTime = 0;
    console.log(expermients)
    expermients.student.studnetExpriment.forEach((expermient)=>{
      totalPracticalTime += expermient.enterPratical;
    totalTheoreticalTime += expermient.enterTheortical;
    totalTrainingTime += expermient.enterTraining;
    })
    setTraininigEntrance(totalTrainingTime)
    setTheorticalEntrance(totalTheoreticalTime)
    setPraticalEntrance(totalPracticalTime)

      
   }
  }, [expermients])
  return (
    <div className='w-[457px] h-[324px] p-6 bg-white dark:bg-primary-dark rounded-lg flex flex-col gap-y-2'>
      <div className='w-full flex items-center justify-between'>
        <span className='text-gray-900 dark:text-white text-xl font-bold'>
          {getTranslation('experiment_entries_count')}
        </span>
      </div>
      <div className='w-full flex items-center justify-between'>
        <div className='flex flex-col gap-y-[6px]'>
          <span className='text-[#444] text-[40px] font-bold dark:text-white'>{trainingEntries + theoreticalEntries + practicalEntries}</span>
          <div className='flex flex-col gap-y-3'>
            <div className='flex items-center gap-x-3'>
              <div className='w-[14px] h-7 rounded bg-[#009017]' />
              <div className='flex items-center justify-center gap-x-2'>
                <span className='w-28 text-[#444] dark:text-white text-xs font-bold'>
                  {getTranslation('training_entries_count')}
                </span>
                <span className='text-gray-500 dark:text-white text-2xl font-semibold mb-2'>{trainingEntries}</span>
              </div>
            </div>
            <Divider className='bg-[#00000045]' />
            <div className='flex items-center gap-x-3'>
              <div className='w-[14px] h-7 rounded bg-[#4EFC6A]' />
              <div className='flex items-center justify-center gap-x-2'>
                <span className='w-28 text-[#444] dark:text-white text-xs font-bold'>
                  {getTranslation('theoretical_entries_count')}
                </span>
                <span className='text-gray-500 dark:text-white text-2xl font-semibold mb-2'>{theoreticalEntries}</span>
              </div>
            </div>
            <Divider className='bg-[#00000045]' />
            <div className='flex items-center gap-x-3'>
              <div className='w-[14px] h-7 rounded bg-[#8DF49D]' />
              <div className='flex items-center justify-center gap-x-2'>
                <span className='w-28 text-[#444] dark:text-white text-xs font-bold'>
                  {getTranslation('practical_entries_count')}
                </span>
                <span className='text-gray-500 dark:text-white text-2xl font-semibold mb-2'>{practicalEntries}</span>
              </div>
            </div>
          </div>
        </div>
        <DoughnutChart
          trainingEntries={trainingEntries}
          theoreticalEntries={theoreticalEntries}
          practicalEntries={practicalEntries}
        />
      </div>
    </div>
  );
}

export default StudentExperminetCount
