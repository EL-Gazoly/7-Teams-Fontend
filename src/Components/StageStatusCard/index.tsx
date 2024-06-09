import React from 'react'
import Card from '../StatusCard/Card'
import grade from 'letter-grade'

const StageStatusCard = ({practicalTestGrade, totatotalTheoreticalTestGrade, overallGrade,
  totalPracticalTime, totalTheorticalTime, totalTrainingTime
}) => {

  const convertSecondsToHoursAndMinutes = () => {
    const seconds = totalPracticalTime + totalTheorticalTime + totalTrainingTime
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    return `${hours}h ${minutes} min`
  }
    
  return (
    <div className=' w-[532px] h-[324px] py-5 px-[18px] bg-white dark:bg-primary-dark rounded-lg'>
      <div className=' max-w-full grid grid-cols-2 gap-4'>
        <Card title=' مجموع درجة الاختبار النظرى' icon='certificate' description={`${totatotalTheoreticalTestGrade ? totatotalTheoreticalTestGrade : 0}%`}/>
        <Card title=' مجموع درجة الاختبار العملى' icon='user' description={`${practicalTestGrade ? practicalTestGrade : 0}%`}/>
        <Card title='الوقت الكلي' icon='clock' description={convertSecondsToHoursAndMinutes()}/>
        <Card title='الاداء العام' icon='reports' description={grade(overallGrade) ? grade(overallGrade) : 'F'}/>

      </div>
    </div>
  )
}

export default StageStatusCard
