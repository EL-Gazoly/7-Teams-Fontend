import React from 'react'
import StudentCard from './StudentCard'

const GridView = () => {
  return (
    <div className=' max-w-full grid grid-cols-4 gap-x-4 gap-y-6'
        style={{ direction: 'rtl' }}
    >
        <StudentCard />
        <StudentCard />
        <StudentCard />
        <StudentCard />        
        <StudentCard />        
        <StudentCard />        
        <StudentCard />        
        <StudentCard />        

       
    </div>
  )
}

export default GridView
