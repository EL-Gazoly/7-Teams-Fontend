import React from 'react'
import StudentCard from './StudentCard'

const GridView = ({data}) => {
  return (
    <div className=' max-w-full grid grid-cols-4 gap-x-4 gap-y-6'
        style={{ direction: 'rtl' }}
    >
       {
        data.map((student, index) => (
            <StudentCard key={index} student={student} />
        ))
       }

       
    </div>
  )
}

export default GridView
