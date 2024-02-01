import React from 'react'
import StudentCard from './StudentCard'
import StatusCard from '../StatusCard/index'

const StudentReportsFirstRow = ({data, expermients, ref}) => {
  return (
    <div className=' flex items-center gap-x-2'>
        <StudentCard data={data} ref={ref} />
        <StatusCard  data={data} expermients={expermients} />
      
    </div>
  )
}

export default StudentReportsFirstRow
