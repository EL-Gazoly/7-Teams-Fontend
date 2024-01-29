import React from 'react'
import StudentResults from './StudentResults'
import ExpermientEnteranceCounter from './ExpermientEnteranceCounter'

const StudentReportsThirdRow = ({expermients}) => {
  return (
    <div className='flex items-center gap-x-2'>
        <StudentResults  expermients={expermients}/>
        <ExpermientEnteranceCounter expermients={expermients} />
      
    </div>
  )
}

export default StudentReportsThirdRow
