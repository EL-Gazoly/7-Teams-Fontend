import React from 'react'
import TotalGradeForStage from '../TotalGradeForStage'
import ExpermientEnteranceCounter from './ExpermientEntraceCounter'

const StageThirdRow = ({data}) => {
  return (
    <div className=' flex items-center gap-x-2'>
        <TotalGradeForStage experiments={data} />
        <ExpermientEnteranceCounter data={data}  />
        
    
  </div>
  )
}

export default StageThirdRow
