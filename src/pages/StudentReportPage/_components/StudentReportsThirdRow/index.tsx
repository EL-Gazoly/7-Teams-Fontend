import React from 'react'
import StudentResults from './StudentResults'
import ExpermientEnteranceCounter from './ExpermientEnteranceCounter'

const StudentReportsThirdRow = ({experiments , data}) => {
  return (
    <div className='flex items-center gap-x-2 h-full'>
        <StudentResults  data={data} />
        <ExpermientEnteranceCounter expermients={experiments} />
      
    </div>
  )
}

export default StudentReportsThirdRow
