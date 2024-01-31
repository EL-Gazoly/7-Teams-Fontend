import React from 'react'
import TotalGradeForStage from '../TotalGradeForStage'
import ExpermientEnteranceCounter from './ExpermientEntraceCounter'

const StageThirdRow = ({data, setEnterTraining, setEnterPratical, setEnterTheortical,
  enterPratical, enterTheortical, enterTraining
}) => {
  return (
    <div className=' flex items-center gap-x-2'>
        <TotalGradeForStage experiments={data} />
        <ExpermientEnteranceCounter data={data} 
        setEnterTraining={setEnterTraining} setEnterPratical={setEnterPratical} setEnterTheortical={setEnterTheortical}
        enterPratical={enterPratical} enterTheortical={enterTheortical} enterTraining={enterTraining}
        />
        
    
  </div>
  )
}

export default StageThirdRow
