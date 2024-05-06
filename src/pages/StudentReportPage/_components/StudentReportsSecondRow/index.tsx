import React from 'react'
import StudentExperminetCount from '../StudentExperminetCount'
import StudentTimeCounter from '../StudentTimeCounter'

const StudentReportsSecondRow = ({data, experiments}) => {
  console.log("data", data)
  return (
    <div className=' flex items-center gap-x-2'>
      <StudentExperminetCount expermients={data} />
      <StudentTimeCounter />
      
      
    </div>
  )
}

export default StudentReportsSecondRow
