import React from 'react'
import StudentExperminetCount from '../StudentExperminetCount'
import StudentTimeCounter from '../StudentTimeCounter'

const StudentReportsSecondRow = ({data, expermients}) => {
  return (
    <div className=' flex items-center gap-x-2'>
      <StudentExperminetCount expermients={data} />
      <StudentTimeCounter />
      
      
    </div>
  )
}

export default StudentReportsSecondRow
