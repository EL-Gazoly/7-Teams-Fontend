import React from 'react'
import ControlCard from '../../Components/ContraolCard'
import ChooseHeadsetSection from './ChooseHeadsetSection'

const HeadsetsPage = () => {
  return (
    <div className='flex flex-col gap-y-[17px]'>
      <ControlCard />
      <div>
        <ChooseHeadsetSection />
        
      </div>
      
    </div>
  )
}

export default HeadsetsPage