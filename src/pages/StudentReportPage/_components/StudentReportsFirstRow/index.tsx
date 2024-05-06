import React from 'react'
import StudentCard from './StudentCard'
import StatusCard from '../../../../Components/StatusCard/index'

const StudentReportsFirstRow = ({data, expermients, ref, maxGrades}) => {
  return (
    <div className=' flex items-center gap-x-2'>
        <StudentCard data={data} ref={ref} />
        <StatusCard  data={data} expermients={expermients} maxGrades={maxGrades} />
      
    </div>
  )
}

export default StudentReportsFirstRow
