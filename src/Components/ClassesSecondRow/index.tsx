import React from 'react'
import StageExperminetCount from '../StageExperminetCount'
import StageTimeCounter from '../StageTimeCounter'
const ClassessSecondRow = ({enterPratical, enterTheortical, enterTraining, totalPracticalTime, totalTheorticalTime, totalTrainingTime}) => {
  return (
    <div className=' flex items-center gap-x-2'>
    <StageExperminetCount enterPractical={enterPratical} enterTheortical={enterTheortical} enterTraining={enterTraining} />
    <StageTimeCounter 
    totalPracticalTime={totalPracticalTime} totalTheorticalTime={totalTheorticalTime} totalTrainingTime={totalTrainingTime}
    />
  </div>
  )
}

export default ClassessSecondRow
