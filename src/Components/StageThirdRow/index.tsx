import React from 'react'
import TotalGradeForStage from '../TotalGradeForStage'
import ExpermientEnteranceCounter from './ExpermientEntraceCounter'

const StageThirdRow = ({data}) => {
  return (
    <div className=' flex items-center gap-x-2'>
        <TotalGradeForStage />
        <ExpermientEnteranceCounter />
        
    
  </div>
  )
}

export default StageThirdRow
