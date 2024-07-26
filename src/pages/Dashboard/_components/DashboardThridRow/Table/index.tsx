import {useEffect, useState} from 'react'
import Body from './Body'
import { Divider } from '@nextui-org/react'
import { physicsOptions, chemistryOptions } from '@/data/expermients'
import useTranslationStore from '@/stores/LanguageStore'

const DashboardTable = ({totalCourseTimeLoading}) => {
  const [totalTime, setTotalTime] = useState("")
  const [physicsTime, setPhysicsTime] = useState("")
  const {getTranslation} = useTranslationStore()
  useEffect(() => {
    if(totalCourseTimeLoading) {
      const {totalPractical, totalTheoretical, totalTraining, physicsTotalPractical, physicsTotalTheoretical, physicsTotalTraining} = sumTimes(totalCourseTimeLoading)
      setTotalTime(convertSecondsToHMS(totalPractical + totalTheoretical + totalTraining))
      setPhysicsTime(convertSecondsToHMS(physicsTotalPractical + physicsTotalTheoretical + physicsTotalTraining))
    }

  }, [totalCourseTimeLoading])
  function sumTimes(data: any): { totalPractical: number, totalTheoretical: number, totalTraining: number, physicsTotalPractical: number, physicsTotalTheoretical: number, physicsTotalTraining: number} {
    let totalPractical = 0;
    let totalTheoretical = 0;
    let totalTraining = 0;
    let physicsTotalPractical = 0;
    let physicsTotalTheoretical = 0;
    let physicsTotalTraining = 0;

    const processExpriments = (expriments: any[], exprimentId) => {
        const isPhyiics = physicsOptions.some((option) => option.value === exprimentId);
        const isChemistry = chemistryOptions.some((option) => option.value === exprimentId);
        if (isPhyiics) {
            expriments.forEach((expriment) => {
                physicsTotalPractical += expriment.totalPraticalTime;
                physicsTotalTheoretical += expriment.totalTheorticalTime;
                physicsTotalTraining += expriment.totalTrainingTime;
            });
        }
        else if (isChemistry) {
            expriments.forEach((expriment) => {
                totalPractical += expriment.totalPraticalTime;
                totalTheoretical += expriment.totalTheorticalTime;
                totalTraining += expriment.totalTrainingTime;
            });
        }
    };

    const processCourses = (courses: any[]) => {
        courses.forEach((chapter) => {
            chapter.expriments.forEach((expriment: any) => {
                
                processExpriments(expriment.StudentExpriment , expriment.exprimentId );
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
        physicsTotalPractical,
        physicsTotalTheoretical,
        physicsTotalTraining,
    };
}

const convertSecondsToHMS = (seconds: number) => {
    const hours = seconds / 3600;
    const minutes = (seconds % 3600) / 60;
    return `${Math.floor(hours)}h ${Math.floor(minutes)}mins`;
    
}

  return (
    <div className=' w-full flex flex-col gap-y-2'>
        <div className=' w-full flex items-center justify-between text-xs text-[#96A5B8]'>
            <div className=' flex items-center gap-x-16 mx-5'>
                <span> # </span>
                <span> {getTranslation("course_name")} </span>
            </div>
            <span className=' mx-14'> {getTranslation("time")} </span>

      
        </div>
        <Divider className=' w-full bg-[#EDF2F6BF]' />
        <div>
            <Body chemistryTotalTime={totalTime} physicsTotalTime={physicsTime} />

        </div>
    </div>
  
  )
}

export default DashboardTable
