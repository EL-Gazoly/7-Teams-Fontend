import React from 'react'
import Card from '../StatusCard/Card'
import grade from 'letter-grade'

const StageStatusCard = ({practicalTestGrade, totatotalTheoreticalTestGrade, overallGrade, overallTime}) => {
  const convertMillisecondsToHoursAndMinutes = (ms) => {
    const hours = Math.floor(ms / 3600000)
    const minutes = Math.floor((ms % 3600000) / 60000)
    return `${hours}h ${minutes} min`
  }
    
  return (
    <div className=' w-[532px] h-[324px] py-5 px-[18px] bg-white rounded-lg'>
      <div className=' max-w-full grid grid-cols-2 gap-4'>
        <Card title=' مجموع درجة الاختبار النظرى' icon='certificate' description={`${totatotalTheoreticalTestGrade}%`}/>
        <Card title=' مجموع درجة الاختبار العملى' icon='certificate' description={`${practicalTestGrade}%`}/>
        <Card title='الوقت الكلي' icon='clock' description={convertMillisecondsToHoursAndMinutes(overallTime)}/>
        <Card title='الاداء العام' icon='reports' description={grade(overallGrade) ? grade(overallGrade) : 'F'}/>

      </div>
    </div>
  )
}

export default StageStatusCard
