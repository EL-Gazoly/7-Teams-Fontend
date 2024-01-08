import React from 'react'
import FirstCard from './FirstCard'
import SecondCard from './SecondCard'
import ThridCard from './ThirdCard'

const SecondRow = ({timeByMonth, studentByGrade}) => {
  return (
    <div className=' w-full'>

        <div className='flex items-center gap-x-2'>
            <FirstCard timeByMonth={timeByMonth} />
            <SecondCard />
            <ThridCard studentByGrade={studentByGrade}  />
        </div>
        
      
    </div>
  )
}

export default SecondRow
