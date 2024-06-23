import React from 'react'
import StudentCard from './StudentCard'
import StatusCard from '@/Components/StatusCard/index'

const StudentReportsFirstRow = ({data, experiments, ref, maxGrades}) => {
  return (
    <div className=' flex items-center gap-x-2'>
        <StudentCard data={data} ref={ref} />
        <StatusCard  data={data} expermients={experiments} maxGrades={maxGrades} />
      
    </div>
  )
}

export default StudentReportsFirstRow
