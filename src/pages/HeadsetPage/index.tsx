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
  const [isLoading, setIsLoading] = useState(false)
  const [deviceState, setDeviceState] = useState({});
  const [progress, setProgress] = useState(0);
  const ipcRenderer = (window as any).ipcRenderer;

  const { data: device, loading, error } = useQuery(GetDevice, { variables: { macAddress: mac }, fetchPolicy: 'no-cache' });

  // useEffect(() => {
  //   const deviceQuery = ref(db, `/Devices/${mac}`);
  //   const ipQuery = ref(db, `/Devices/${mac}/Get-IP`);

  //   update(deviceQuery, { "Get-IP": "get" });

  //   const handleDeviceQuery = (snapshot) => {
  //     const deviceInfo = snapshot.val();
  //     setDeviceState(deviceInfo);
  //   };

  //   const handleIPQuery = (snapshot) => {
  //     const ipInfo = snapshot.val();
  //     if (ipInfo !== 'get') { 
  //       ipcRenderer.send('connect', ipInfo);
  //   }
  //   };

  //   onValue(deviceQuery, handleDeviceQuery);
  //   onValue(ipQuery, handleIPQuery);

  //   const connectReplyHandler = (event, arg) => {
  //     if (arg === "Connected") setIsLoading(false);
  //   };
  //   ipcRenderer.on('connect-reply', connectReplyHandler);

  //   const timeout = setTimeout(() => {
  //     if (isLoading) {
  //       navigate('/headsets');
  //       toast.error(' اذا استمرت المشكله جرب توصيل الجهاز بالكمبيوتر مباشره ')
  //       toast.error(' فشل الاتصال تاكد ان الجهاز متصل بنفس الشبكه ') 
  //             }
  //   }, 20000);// 20 seconds

  //   return () => {
  //     clearTimeout(timeout);
  //   };
  // }, [mac, isLoading]); 

  // useEffect(()=>{
  //     ipcRenderer.on('screenshot-reply',  (arg) => {
  //       console.log(arg)
  //     })
  // },[])

  const getHighestProgress = (data) => {
    const result = {};
    data.forEach(item => {
      const { exprimentId, progress } = item;
      if (!(exprimentId in result) || progress > result[exprimentId].progress) {
        result[exprimentId] = { exprimentId, progress };
      }
    });
    return Object.values(result);
  };

  if (error) console.log(error.message);

  useEffect(() => {
    let totalProgress = 0;
    if (device && device?.deviceByMac?.student[0]?.studnetExpriment){
        const highestProgressForEachExperiment = getHighestProgress(device.deviceByMac.student[0].studnetExpriment) as any;
        highestProgressForEachExperiment.forEach((expriment) => {
          totalProgress += expriment.progress;
        });
        const total = totalProgress / 3;
        setProgress(total);
    }
    
  }, [device]);

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
          <SecondCard ipcRenderer={ipcRenderer} device={device.deviceByMac} />
        </div>
        <div className='w-full flex items-center gap-x-4 flex-row-reverse'>
          <ThridCard />
          <FourthCard progress={progress} />
        </div>
      </div>
        )
      }
      
    </div>
  );
}

export default HeadsetPage;
