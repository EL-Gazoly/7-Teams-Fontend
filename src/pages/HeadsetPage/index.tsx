import React, { useEffect, useState } from 'react';
import { FirstCard } from './FirstCard';
import ControlCard from '../../Components/ContraolCard'
import SecondCard from './SecondCard';
import ThridCard from './ThridCard';
import FourthCard from './FourthCard';
import { useParams, useNavigate } from 'react-router-dom';
import { GetDevice } from '../../graphql/devices';
import { useQuery } from '@apollo/client';
import Loading from '../../Components/Loading';
import db from '../../config/firebase'
import { ref, update, onValue } from 'firebase/database'
import { toast } from 'sonner';

const HeadsetPage = () => {
  const { mac } = useParams<{ mac: string }>()
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(true)
  const [deviceState, setDeviceState] = useState({});
  const ipcRenderer = (window as any).ipcRenderer;

  const { data: device, loading, error } = useQuery(GetDevice, { variables: { macAddress: mac } });

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
      if (ipInfo !== 'get') { 
        ipcRenderer.send('connect', ipInfo);
    }
    };

    onValue(deviceQuery, handleDeviceQuery);
    onValue(ipQuery, handleIPQuery);

    const connectReplyHandler = (event, arg) => {
      if (arg === "Connected") setIsLoading(false);
    };
    ipcRenderer.on('connect-reply', connectReplyHandler);

    const timeout = setTimeout(() => {
      if (isLoading) {
        navigate(-1)
        toast.error(' اذا استمرت المشكله جرب توصيل الجهاز بالكمبيوتر مباشره ')
        toast.error(' فشل الاتصال تاكد ان الجهاز متصل بنفس الشبكه ') 
              }
    }, 60000);

    return () => {
      clearTimeout(timeout);
    };
  }, [mac, isLoading]);

  if (error) console.log(error.message);
  if (!device) return <p>Not found</p>;

  return (
    <div>
      <ControlCard icon="Headset" title=' نظارة الواقع الافتراضي ' neasted={true} />
      {
        loading || isLoading ?
          <div className=' mt-[35%]'>
            <Loading />
          </div>
        
        : (
          <div className='flex flex-col mt-6 items-center gap-y-6 pb-5'>
        <div className='w-full flex flex-row-reverse items-center gap-x-4'>
          {device && <FirstCard device={device.deviceByMac} deviceState={deviceState} />}
          <SecondCard ipcRenderer={ipcRenderer} />
        </div>
        <div className='w-full flex items-center gap-x-4 flex-row-reverse'>
          <ThridCard />
          <FourthCard />
        </div>
      </div>
        )
      }
      
    </div>
  );
}

export default HeadsetPage;
