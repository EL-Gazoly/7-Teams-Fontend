
import React from 'react'
import TotalGrade from './TotalGrade'
import ExpermientEnteranceCounter from './ExpermientEntranceCounter'

const ThirdRow = ({data}) => {
  return (
    <div className=' flex items-center gap-x-1 flex-row-reverse'>
        <TotalGrade experminents={data} />
        <ExpermientEnteranceCounter data={data} />
      
    </div>
  )
}

export default ThirdRow
