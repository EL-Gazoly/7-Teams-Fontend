import {useEffect, useState} from 'react'
import Body from './Body'
import { Divider } from '@nextui-org/react'

import Loading from '../../Loading'

const DashboardTable = ({totalCourseTimeLoading}) => {
  const [totalTime, setTotalTime] = useState("")
  useEffect(() => {
    if(totalCourseTimeLoading) {
      const {totalPractical, totalTheoretical, totalTraining} = sumTimes(totalCourseTimeLoading)
      console.log(totalPractical, totalTheoretical, totalTraining)
      setTotalTime(convertmsToHMS(totalPractical + totalTheoretical + totalTraining))
    }

  }, [totalCourseTimeLoading])
  function sumTimes(data: any): { totalPractical: number, totalTheoretical: number, totalTraining: number } {
    let totalPractical = 0;
    let totalTheoretical = 0;
    let totalTraining = 0;

    const processExpriments = (expriments: any[]) => {
        expriments.forEach((expriment) => {
            totalPractical += expriment.totalPraticalTime;
            totalTheoretical += expriment.totalTheorticalTime;
            totalTraining += expriment.totalTrainingTime;
        });
    };

    const processCourses = (courses: any[]) => {
        courses.forEach((chapter) => {
            chapter.expriments.forEach((expriment: any) => {
                processExpriments(expriment.StudentExpriment);
            }
            );
        });
    };

    const processClasses = (classes: any[]) => {
        classes.forEach((teamClass) => {
            teamClass.courses.forEach((course: any) => {
                processCourses(course.chapters);
            });
        });
    };

    processClasses(data.admin.Team.flatMap((team: any) => team.classes));

    return {
        totalPractical,
        totalTheoretical,
        totalTraining,
    };
}
const convertmsToHMS = (ms: number) => {
    const seconds = ms / 1000;
    const hours = seconds / 3600;
    const minutes = (seconds % 3600) / 60;
    return `${Math.floor(hours)}h ${Math.floor(minutes)}mins`;
};

  return (
    <div className=' w-full flex flex-col gap-y-2'>
        <div className=' w-full flex items-center justify-between text-xs text-[#96A5B8]'>
            <div className=' flex items-center gap-x-16 mx-5'>
                <span> # </span>
                <span> اسم الدورة </span>
            </div>
            <span className=' mx-14'> الوقت </span>

      
        </div>
        <Divider className=' w-full bg-[#EDF2F6BF]' />
        <div>
            <Body totalTime={totalTime} />

        </div>
    </div>
  
  )
}

export default DashboardTable
