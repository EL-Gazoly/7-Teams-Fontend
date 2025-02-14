import React, { useEffect, useState } from 'react';
import HeadsetCard from './HeadsetCard';
import { useQuery } from '@apollo/client';
import { GetDevices } from '../../../graphql/devices';
import Loading from '../../../Components/Loading';
import db from '../../../config/firebase';
import { ref, onValue } from 'firebase/database';
import HeadsetCardSkeleton from './HeadsetCard/Skeleton';

type HeadsetProps = {
  setSelectedHeadsets: React.Dispatch<any>
  selectedHeadsets?: any[]
  searchQuery?: string
  showConnected?: boolean
}


const HeadsetsSection = ({setSelectedHeadsets, selectedHeadsets, searchQuery, showConnected} : HeadsetProps) => {
  const { loading, error, data: devices } = useQuery(GetDevices, { fetchPolicy: 'no-cache'});
  const [devicesList, setDevicesList] = useState<any>([]);
  const [devicesCount, setDevicesCount] = useState<any>(0);
  

  useEffect(() => {
    if (devices && devices?.admin.devices.length > 0) {
      const devicesMap = devices.admin.devices.map((device) => device.macAddress);

      const devicesWithSelect = devices.admin.devices.map((device, index) => {
        return { ...device, selected: false, started: false, showen: true, index: index };
      });
      
  
      // Merge devices from different sources into one list
      const mergedDevices = devicesWithSelect.map((device) => {
        const foundDevice = devicesList.find((listDevice) => listDevice.macAddress === device.macAddress);
        if (foundDevice) {
          return { ...device, ...foundDevice }; // Merge with device info from Firebase
        }
        return device;
      });
  
      setSelectedHeadsets(mergedDevices);
  
      devicesMap.forEach((mac) => {
        if(devicesMap[0] === mac) setDevicesCount(0) 
        const deviceQuery = ref(db, `/Devices/${mac}`);
        onValue(deviceQuery, (snapshot) => {
          const deviceInfo = snapshot.val();
      
          // Find the index of the device with the same MAC address in selected headsets
          const indexToUpdate = devices.admin.devices.findIndex((device) => device.macAddress === mac);
      
          if (indexToUpdate !== -1) {
            // Update the existing device in the selected headsets list
            setSelectedHeadsets((prevSelectedHeadsets) => {
              const updatedHeadsets = [...prevSelectedHeadsets];
              updatedHeadsets[indexToUpdate] = { ...updatedHeadsets[indexToUpdate], ...deviceInfo };
              return updatedHeadsets;
            });
          } else {
            // Add the new device to the selected headsets list
            setSelectedHeadsets((prevSelectedHeadsets) => [
              ...prevSelectedHeadsets,
              { macAddress: mac, ...deviceInfo },
            ]);
          }
          setDevicesCount((prevCount) => prevCount + 1);
        });
      });
    }
  }, [devices]);



  if (loading) return <div className='mt-5'><Loading /></div>;
  if (error) console.log(error.message);

  if(searchQuery){
    selectedHeadsets = selectedHeadsets.filter((device) => {
      if (device.student.length === 0) return false;
      return (
        device.student[0].name.toLowerCase().includes(searchQuery) ||
        device.student[0].generatedId.toString().includes(searchQuery)
        )
    })
    
  }

  return (
    <div className='mt-6 grid grid-cols-4 max-w-full gap-y-4 gap-x-[18px] pr-1' style={{ direction: 'rtl' }}>
      
      { loading || error  ? Array(24).fill(0).map((_, index)  =>
        <HeadsetCardSkeleton key={index} />
         ) :
        selectedHeadsets.map((device, index) => (
          <HeadsetCard key={index} device={device} index={index}
          selectedHeadsets={selectedHeadsets[index]} setSelectedHeadsets={setSelectedHeadsets}
          showConnected={showConnected}
          />
        ))}
        
    </div>
  );
};

export default HeadsetsSection;
