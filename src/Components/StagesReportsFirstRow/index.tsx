import React from 'react'
import StageCard from './StageCard'
import StageStatusCard from '../StageStatusCard'

const StagesReportFirstRow = ({practicalTestGrade, totatotalTheoreticalTestGrade, overallGrade, overallTime}) => {
  return (
    <div className=' flex items-center gap-x-2'>
        <StageCard />
        <StageStatusCard totatotalTheoreticalTestGrade={totatotalTheoreticalTestGrade}  practicalTestGrade={practicalTestGrade}  overallGrade={overallGrade} overallTime={overallTime}/>
  
    </div>
  )
}

export default StagesReportFirstRow
