import React from 'react'
import TimeCounter from './TimeCounter'
import ExpermientCount from './ExperminetCount'

const SecondRow = ({enterPratical, enterTheortical, enterTraining, totalPracticalTime, totalTheorticalTime, totalTrainingTime}) => {
  return (
      <div className='flex gap-x-1 items-center flex-row-reverse'>
        <ExpermientCount enterPractical={enterPratical} enterTheortical={enterTheortical} enterTraining={enterTraining}/>
        <TimeCounter 
        totalPracticalTime={totalPracticalTime} totalTheorticalTime={totalTheorticalTime} totalTrainingTime={totalTrainingTime}
        />
      
    </div>
  )
}

export default SecondRow
