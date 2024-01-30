import React from 'react'
import StageCard from './StageCard'
import StageStatusCard from '../StageStatusCard'

const StagesReportFirstRow = ({practicalTestGrade, totatotalTheoreticalTestGrade, overallGrade, 
  totalPracticalTime, totalTheorticalTime, totalTrainingTime
}) => {
  return (
    <div className=' flex items-center gap-x-2'>
        <StageCard />
        <StageStatusCard totatotalTheoreticalTestGrade={totatotalTheoreticalTestGrade}  practicalTestGrade={practicalTestGrade}  overallGrade={overallGrade} 
        totalPracticalTime={totalPracticalTime} totalTheorticalTime={totalTheorticalTime} totalTrainingTime={totalTrainingTime}
        />
  
    </div>
  )
}

export default StagesReportFirstRow
