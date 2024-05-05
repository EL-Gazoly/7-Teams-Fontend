import React from 'react'
import SchoolCard from './SchoolCard'
import StatusCard from './StuatusCard'

const FirstRow = ({data , practicalTestGrade, totatotalTheoreticalTestGrade, overallGrade, 
  totalPracticalTime, totalTheorticalTime, totalTrainingTime}) => {
  return (
    <div className=' flex items-center gap-x-1 flex-row-reverse'>
      <SchoolCard data={data}/>
      <StatusCard totatotalTheoreticalTestGrade={totatotalTheoreticalTestGrade}
            practicalTestGrade={practicalTestGrade} overallGrade={overallGrade} 
            totalPracticalTime={totalPracticalTime} totalTheorticalTime={totalTheorticalTime} totalTrainingTime={totalTrainingTime} />
      
    </div>
  )
}

export default FirstRow
