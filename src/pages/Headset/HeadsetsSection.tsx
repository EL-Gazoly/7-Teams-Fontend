import React from 'react'
import HeadsetCard from '../../Components/HeadsetCard'

const HeadsetsSection = () => {
  return (
    <div className=' mt-6 grid grid-cols-4 max-w-full gap-y-4 gap-x-[18px]'>
        {Array.from({length : 8}).map((_, index)=>(
            <HeadsetCard />
        ))}
      
    </div>
  )
}

export default HeadsetsSection