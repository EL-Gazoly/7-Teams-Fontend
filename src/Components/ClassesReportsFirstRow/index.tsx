import React from 'react'
import ClassCard from './ClassCard'
import StageStatusCard from '../StageStatusCard'

const ClassesReportFirstRow = ({practicalTestGrade, totatotalTheoreticalTestGrade, overallGrade, 
  totalPracticalTime, totalTheorticalTime, totalTrainingTime
}) => {
  return (
    <div className=' flex items-center gap-x-2'>
        <ClassCard />
        <StageStatusCard totatotalTheoreticalTestGrade={totatotalTheoreticalTestGrade}  practicalTestGrade={practicalTestGrade}  overallGrade={overallGrade} 
        totalPracticalTime={totalPracticalTime} totalTheorticalTime={totalTheorticalTime} totalTrainingTime={totalTrainingTime}
        />
  
    </div>
  )
}

export default ClassesReportFirstRow
