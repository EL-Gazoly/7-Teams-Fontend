import React from 'react'
import StageExperminetCount from '../StageExperminetCount'
import StageTimeCounter from '../StageTimeCounter'
const StageSecondRow = () => {
  return (
    <div className=' flex items-center gap-x-2'>
    <StageExperminetCount />
    <StageTimeCounter />
  </div>
  )
}

export default StageSecondRow
