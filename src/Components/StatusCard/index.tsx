import {useEffect, useState} from 'react'
import Card from './Card'
import grade from 'letter-grade'

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
        expermients = Object.values(expermients)
      
       expermients.forEach((expermient)=>{
          setTotalTime(totalTime + expermient.totalPraticalTime + expermient.totalTheorticalTime + expermient.totalTrainingTime)
          setTotalEntrance(totalEntrance + expermient.enterPratical + expermient.enterTheortical + expermient.enterTraining)
          if(expermient.theoreticalTestGrade > maxTheortical) maxTheortical = expermient.theoreticalTestGrade
          if(expermient.practicalTestGrade > maxPractical) maxPractical = expermient.practicalTestGrade
          if (expermient.practicalTestGrade  == 100 && expermient.theoreticalTestGrade == 100) setTotalFinished(totalFinished + 1)
        

       })
       const totalMarks = maxTheortical + maxPractical / 200 * 100
       setTotalMarks(totalMarks)

      }

  }, [expermients])

  const convertMillisecondsToHoursAndMinutes = (ms) => {
    const hours = Math.floor(ms / 3600000)
    const minutes = Math.floor((ms % 3600000) / 60000)
    return `${hours}h ${minutes} min`
  }

  return (
    <div className=' w-[532px] h-[324px] py-5 px-[18px] bg-white rounded-lg'>
      <div className=' max-w-full grid grid-cols-2 gap-4'>
        <Card title='إجمالي الدورات المكتملة' icon='certificate' description={`${totalFinished}`}/>
        <Card title='الأداء العام' icon='reports' description={`${grade(totalMarks)}`}/>
        <Card title='الوقت الكلي' icon='clock' description={convertMillisecondsToHoursAndMinutes(totalTime)}/>
        <Card title='إجمالي مرات تسجيل الدخول' icon='user' description={`${totalEntrance}`}/>

      </div>
    </div>
  )
}

export default StatusCard
