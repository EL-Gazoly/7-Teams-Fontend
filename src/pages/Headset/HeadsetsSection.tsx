import React, { useEffect, useState } from 'react';
import HeadsetCard from '../../Components/HeadsetCard';
import { useQuery } from '@apollo/client';
import { GetDevices } from '../../graphql/devices';
import Loading from '../../Components/Loading';
import db from '../../config/firebase';
import { ref, onValue } from 'firebase/database';

const HeadsetsSection = () => {
  const { loading, error, data: devices } = useQuery(GetDevices);
  const [devicesList, setDevicesList] = useState<any>([]);
  const [renderComponents, setRenderComponents] = useState(false);

  useEffect(() => {
    if (devices && devices.admin.devices.length > 0) {
      const devicesMap = devices.admin.devices.map((device) => device.macAddress);

      devicesMap.forEach((mac) => {
        const deviceQuery = ref(db, `/Devices/${mac}`);
        onValue(deviceQuery, (snapshot) => {
          const deviceInfo = snapshot.val();
          setDevicesList((prev: any) => [...prev, deviceInfo]);
        });
      });

      setTimeout(() => {
        setRenderComponents(true);
      }, 10);
    }
  }, [devices]);

  if (loading) return <div className='mt-5'><Loading /></div>;
  if (error) console.log(error.message);

  const allDevicesRendered = devices && renderComponents && devicesList.length === devices.admin.devices.length;

  return (
    <div className='mt-6 grid grid-cols-4 max-w-full gap-y-4 gap-x-[18px] pr-1' style={{ direction: 'rtl' }}>
      {allDevicesRendered &&
        devices.admin.devices.map((device, index) => (
          <HeadsetCard key={index} device={device} index={index} deviceStatus={devicesList[index]} />
        ))}
    </div>
  );
};

export default HeadsetsSection;
