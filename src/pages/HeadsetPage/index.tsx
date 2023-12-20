import { FirstCard } from './FirstCard';
import ControlCard from '../../Components/ContraolCard'
import SecondCard from './SecondCard';
import ThridCard from './ThridCard';
import FourthCard from './FourthCard';
import { useParams } from 'react-router-dom';


const HeadsetPage = () => {
  const { mac } = useParams<{ mac: string }>()
  return (
    <div>
      <ControlCard icon="Headset" title=' نظارة الواقع الافتراضي ' neasted={true}/>
        
        <div className=' flex flex-col mt-6 items-center gap-y-6 pb-5'>
          <div className='w-full flex flex-row-reverse items-center gap-x-4'>
            <FirstCard />
            <SecondCard mac={mac} />
          </div>
          <div className='w-full flex items-center gap-x-4 flex-row-reverse'>
            <ThridCard />
            <FourthCard />
          </div>

        </div>
       
        
      
    </div>
  )
}

export default HeadsetPage
