import { useEffect, useState } from 'react';
import { FirstCard } from './FirstCard';
import ControlCard from '../../Components/ContraolCard'
import SecondCard from './SecondCard';
import ThridCard from './ThridCard';
import FourthCard from './FourthCard';
import { useParams } from 'react-router-dom';
import { GetDevice } from '../../graphql/devices';
import { useQuery } from '@apollo/client';
import Loading from '../../Components/Loading';
import db from '../../config/firebase'
import { ref, update, onValue} from 'firebase/database'


const HeadsetPage = () => {
  const { mac } = useParams<{ mac: string }>()
  const [isLoading, setIsLoading] = useState(true)
  const [deviceState, setDeviceState] = useState({})
  // const ipcRenderer = (window as any).ipcRenderer;
  const ipcRenderer = ""
  const { data: device, loading, error } = useQuery(GetDevice, { variables: { macAddress: mac } })
  useEffect(() => {
    const deviceQuery = ref(db, `/Devices/${mac}`);
    const ipQuery = ref(db, `/Devices/${mac}/Get-IP`);
  
    update(deviceQuery, { "Get-IP": "get" });

    const handleDeviceQuery = (snapshot) => {
      const deviceInfo = snapshot.val();
        setDeviceState(deviceInfo);
    };


  
    const handleIPQuery = (snapshot) => {
      const ipInfo = snapshot.val();
      if (ipInfo !== 'get')  console.log(ipInfo);
      //ipcRenderer.send('connect', ipInfo);
    };

    onValue(deviceQuery, handleDeviceQuery);
    onValue(ipQuery, handleIPQuery);
  
    const connectReplyHandler = (arg) => { if (arg === 'connected') console.log('connected'); };
    // ipcRenderer.on('connect-reply', connectReplyHandler);
    
  }, [mac]);

  if (loading) return <Loading />
  if (error)  console.log(error.message)
  if (!device) return <p>Not found</p>
  if(device) console.log(device.deviceByMac)

  return (
    <div>
      <ControlCard icon="Headset" title=' نظارة الواقع الافتراضي ' neasted={true}/>
        
        <div className=' flex flex-col mt-6 items-center gap-y-6 pb-5'>
          <div className='w-full flex flex-row-reverse items-center gap-x-4'>
            <FirstCard device={device.deviceByMac} deviceState={deviceState} />
            <SecondCard ipcRenderer={ipcRenderer}/>
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
