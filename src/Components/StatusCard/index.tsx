import {useEffect, useState} from 'react'
import Card from './Card'
import grade from 'letter-grade'
import { m } from 'framer-motion'

const StatusCard = ({data, expermients}) => {
  const [totalTime, setTotalTime] = useState(0)
  const [totalEntrance, setTotalEntrance] = useState(0)
  const [totalMarks, setTotalMarks] = useState(0)
  const [totalFinished, setTotalFinished] = useState(0)
  if(data) console.log(data)
  useEffect(() => {
      if(expermients){
        let maxTheortical = 0
        let maxPractical = 0
        let totalTime = 0
        expermients = Object.values(expermients)
      
       expermients.forEach((expermient)=>{
          totalTime += expermient.totalPraticalTime + expermient.totalTheorticalTime + expermient.totalTrainingTime
    
          maxTheortical += expermient.theoreticalTestGrade
          maxPractical += expermient.practicalTestGrade
            
           
        
          if (expermient.practicalTestGrade  == 100 && expermient.theoreticalTestGrade == 100) setTotalFinished(totalFinished + 1)
       })
      console.log(totalTime)
        setTotalTime(totalTime)
        maxTheortical = maxTheortical / expermients.length * 100
        maxPractical = maxPractical / expermients.length * 100
       const totalMarks = (maxTheortical + maxPractical) /  (expermients.length * 100)
       console.log("this is total marks", totalMarks)
       setTotalMarks(totalMarks)
       console.log("this is total theortical", maxTheortical)
       console.log("this is total practical", maxPractical)
       let totalPracticalTime = 0;
       let totalTheoreticalTime = 0;
       let totalTrainingTime = 0;
       data.student.studnetExpriment.forEach((expermient)=>{
         totalPracticalTime += expermient.enterPratical;
       totalTheoreticalTime += expermient.enterTheortical;
       totalTrainingTime += expermient.enterTraining;
       })
       setTotalEntrance(totalTrainingTime + totalTheoreticalTime + totalPracticalTime)

      }

  }, [expermients])

  const convertMillisecondsToHoursAndMinutes = (ms) => {
    const hours = Math.floor(ms / 3600000)
    const minutes = Math.floor((ms % 3600000) / 60000)
    return `${hours}h ${minutes} min`
  }
  const convertSecondsToHoursAndMinutes = (seconds) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    return `${hours}h ${minutes} min`
  }

  return (
    <div className=' w-[532px] h-[324px] py-5 px-[18px] bg-white rounded-lg'>
      <div className=' max-w-full grid grid-cols-2 gap-4'>
        <Card title='إجمالي الدورات المكتملة' icon='certificate' description={`${totalFinished}`}/>
        <Card title='الأداء العام' icon='reports' description={`${grade(totalMarks) ? grade(totalMarks) : 'F'} `}/>
        <Card title='الوقت الكلي' icon='clock' description={convertSecondsToHoursAndMinutes(totalTime)}/>
        <Card title='إجمالي مرات تسجيل الدخول' icon='user' description={`${totalEntrance}`}/>

      </div>
    </div>
  )
}

export default StatusCard
