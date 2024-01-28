import React from 'react'
import StudentResults from './StudentResults'
import ExpermientEnteranceCounter from './ExpermientEnteranceCounter'

const StudentReportsThirdRow = () => {
  return (
    <div className='flex items-center gap-x-2'>
        <StudentResults />
        <ExpermientEnteranceCounter />
      
    </div>
  )
}

export default StudentReportsThirdRow
