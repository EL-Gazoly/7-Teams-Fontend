import React from 'react'
import ControlCard from '../../Components/ContraolCard'
import ChooseHeadsetSection from './ChooseHeadsetSection'
import ChooseCourseSection from './ChooseCourseSection'
import HeadsetsSection from './HeadsetsSection'

const HeadsetsPage = () => {
  return (
    <div className='flex flex-col gap-y-[17px]'>
      <ControlCard />
      <div>
        <ChooseHeadsetSection />
        <ChooseCourseSection />
        <HeadsetsSection />

      </div>
      
    </div>
  )
}

export default HeadsetsPage