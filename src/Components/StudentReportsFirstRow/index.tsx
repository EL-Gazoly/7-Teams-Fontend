import React from 'react'
import StudentCard from './StudentCard'
import StatusCard from '../StatusCard/index'

const StudentReportsFirstRow = () => {
  return (
    <div className=' flex items-center gap-x-2'>
        <StudentCard />
        <StatusCard />
      
    </div>
  )
}

export default StudentReportsFirstRow
