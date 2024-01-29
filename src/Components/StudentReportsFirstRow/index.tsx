import React from 'react'
import StudentCard from './StudentCard'
import StatusCard from '../StatusCard/index'

const StudentReportsFirstRow = ({data, expermients}) => {
  return (
    <div className=' flex items-center gap-x-2'>
        <StudentCard data={data} />
        <StatusCard  data={data?.student} expermients={expermients} />
      
    </div>
  )
}

export default StudentReportsFirstRow
