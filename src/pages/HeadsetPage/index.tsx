import { FirstCard } from './FirstCard';
import ControlCard from '../../Components/ContraolCard'
import SecondCard from './SecondCard';


const HeadsetPage = () => {
  return (
    <div>
        <ControlCard />
        
        <div className=' flex flex-col items-center gap-y-6'>
          <div className='w-full mt-6 flex items-center gap-x-4'>
            <FirstCard />
            <SecondCard />
          </div>
        </div>
       
        
      
    </div>
  )
}

export default HeadsetPage
