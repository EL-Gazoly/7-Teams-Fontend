import {useState} from 'react'
import ControlCard from '../../Components/ContraolCard'
import ChooseHeadsetSection from './ChooseHeadsetSection'
import ChooseCourseSection from './ChooseCourseSection'
import HeadsetsSection from './HeadsetsSection'

const HeadsetsPage = () => {
  const [selectedHeadsets, setSelectedHeadsets] = useState<any>([])
  const [searchQuery, setSearchQuery] = useState('' as string)
  const [showConnected, setShowConnected] = useState(false)
  return (
    <div className='flex flex-col gap-y-[17px] pb-5'>
      <ControlCard icon="Headset" title=' نظارة الواقع الافتراضي ' neasted={false}/>
      <div>
        <ChooseHeadsetSection selectedHeadsets={selectedHeadsets} setSelectedHeadsets={setSelectedHeadsets } setSearchQuery={setSearchQuery}
        showConnected={showConnected} setShowConnected={setShowConnected}
        />
        <ChooseCourseSection selectedHeadsets={selectedHeadsets} />
        <HeadsetsSection  selectedHeadsets={selectedHeadsets} setSelectedHeadsets={setSelectedHeadsets} searchQuery={searchQuery} showConnected={showConnected} />

      </div>
      
    </div>
  )
}

export default HeadsetsPage