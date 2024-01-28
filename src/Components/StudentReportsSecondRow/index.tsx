import React from 'react'
import StudentExperminetCount from '../StudentExperminetCount'
import StudentTimeCounter from '../StudentTimeCounter'

const StudentReportsSecondRow = () => {
  return (
    <div className=' flex items-center gap-x-2'>
      <StudentExperminetCount />
      <StudentTimeCounter />
      
      
    </div>
  )
}

export default StudentReportsSecondRow
