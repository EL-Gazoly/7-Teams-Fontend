import React from 'react'
import ControlCard from '../../Components/ContraolCard'
import ChooseHeadsetSection from './ChooseHeadsetSection'
import ChooseCourseSection from './ChooseCourseSection'

const HeadsetsPage = () => {
  return (
    <div className='flex flex-col gap-y-[17px]'>
      <ControlCard />
      <div>
        <ChooseHeadsetSection />
        <ChooseCourseSection />

      </div>
      
    </div>
  )
}

export default HeadsetsPage