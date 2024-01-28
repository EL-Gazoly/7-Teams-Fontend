import React from 'react'
import StageCard from './StageCard'
import StageStatusCard from '../StageStatusCard'

const StagesReportFirstRow = () => {
  return (
    <div className=' flex items-center gap-x-2'>
        <StageCard />
        <StageStatusCard />
  
    </div>
  )
}

export default StagesReportFirstRow
