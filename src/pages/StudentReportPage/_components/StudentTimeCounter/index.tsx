import { useState, useEffect } from 'react';
import { Tabs, Tab, Divider } from '@nextui-org/react';
import Progress from './Progress';
import { useQuery } from '@apollo/client';
import { GetStudentTime } from '../../../../graphql/reports';
import Loading from '../../../../Components/Loading';
import { useParams } from 'react-router-dom';
import useTranslationStore from '@/stores/LanguageStore';

const StudentTimeCounter = () => {
  const { id } = useParams<{ id: string }>();
  const [timeValue, setTimeValue] = useState<'day' | 'month' | 'year'>('day');
  const [trainingMonth, setTrainingMonth] = useState(0);
  const [trainingYear, setTrainingYear] = useState(0);
  const [trainingDay, setTrainingDay] = useState(0);
  const [theoreticalMonth, setTheoreticalMonth] = useState(0);
  const [theoreticalYear, setTheoreticalYear] = useState(0);
  const [theoreticalDay, setTheoreticalDay] = useState(0);
  const [practicalMonth, setPracticalMonth] = useState(0);
  const [practicalYear, setPracticalYear] = useState(0);
  const [practicalDay, setPracticalDay] = useState(0);
  const { loading, error, data } = useQuery(GetStudentTime, {
    variables: { studentId: id }
  });
  const { getTranslation } = useTranslationStore();

  useEffect(() => {
    if (data) {
      let trainingDay = 0;
      let theoreticalDay = 0;
      let practicalDay = 0;
      let trainingMonth = 0;
      let theoreticalMonth = 0;
      let practicalMonth = 0;
      let trainingYear = 0;
      let theoreticalYear = 0;
      let practicalYear = 0;

      data.StudentExpermientByPeriod.expriemntsByDay.forEach((item) => {
        trainingDay += item.totalTrainingTime;
        theoreticalDay += item.totalTheorticalTime;
        practicalDay += item.totalPraticalTime;
      });

      data.StudentExpermientByPeriod.expriementsByMonth.forEach((item) => {
        trainingMonth += item.totalTrainingTime;
        theoreticalMonth += item.totalTheorticalTime;
        practicalMonth += item.totalPraticalTime;
      });

      data.StudentExpermientByPeriod.expriementsByYear.forEach((item) => {
        trainingYear += item.totalTrainingTime;
        theoreticalYear += item.totalTheorticalTime;
        practicalYear += item.totalPraticalTime;
      });

      setTrainingDay(trainingDay);
      setTheoreticalDay(theoreticalDay);
      setPracticalDay(practicalDay);
      setTrainingMonth(trainingMonth);
      setTheoreticalMonth(theoreticalMonth);
      setPracticalMonth(practicalMonth);
      setTrainingYear(trainingYear);
      setTheoreticalYear(theoreticalYear);
      setPracticalYear(practicalYear);
    }
  }, [data]);

  if (loading) return <Loading />;
  if (error) console.error(error);

  const convertSecondsToMinutes = (seconds) => Math.floor(seconds / 60);

  return (
    <div className='w-[532px] h-[325px] bg-white dark:bg-primary-dark rounded-lg px-11 py-8 flex flex-col gap-y-4'>
      <div className="w-full flex items-center justify-between">
        <span className='text-[#444] dark:text-white text-[17px] font-bold'>{getTranslation('time_spent')}</span>
        <Tabs
          aria-label='time'
          color='primary'
          classNames={{
            cursor: "text-white bg-black",
            tabList: "bg-[#F8F8FF] dark:bg-[#3D424A] px-2 py-1 rounded-[10px] flex items-center gap-x-2",
            tabContent: "text-[#9291A5] dark:text-white text-[11px] font-semibold",
          }}
          selectedKey={timeValue}
          onSelectionChange={(key : any) => setTimeValue(key)}
        >
          <Tab title={getTranslation('day')} key="day" />
          <Tab title={getTranslation('month')} key="month" />
          <Tab title={getTranslation('year')} key="year" />
        </Tabs>
      </div>
      <Divider />
      <div className='flex flex-col gap-y-2'>
        <Progress
          value={convertSecondsToMinutes(
            timeValue === 'day' ? trainingDay :
              timeValue === 'month' ? trainingMonth :
                trainingYear
          )}
          title={getTranslation('practical_training')}
          timeValue={timeValue}
        />
        <Progress
          value={convertSecondsToMinutes(
            timeValue === 'day' ? theoreticalDay :
              timeValue === 'month' ? theoreticalMonth :
                theoreticalYear
          )}
          title={getTranslation('theoretical_training')}
          timeValue={timeValue}
        />
        <Progress
          value={convertSecondsToMinutes(
            timeValue === 'day' ? practicalDay :
              timeValue === 'month' ? practicalMonth :
                practicalYear
          )}
          title={getTranslation('practical_tests')}
          timeValue={timeValue}
        />
        <Progress
          value={convertSecondsToMinutes(
            timeValue === 'day' ? practicalDay + theoreticalDay + trainingDay :
              timeValue === 'month' ? practicalMonth + theoreticalMonth + trainingMonth :
                practicalYear + theoreticalYear + trainingYear
          )}
          title={getTranslation('total')}
          timeValue={timeValue}
        />
      </div>
    </div>
  );
};

export default StudentTimeCounter;