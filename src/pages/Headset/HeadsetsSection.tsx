import React from 'react'
import HeadsetCard from '../../Components/HeadsetCard'
import { useQuery } from '@apollo/client'
import { GetDevices } from '../../graphql/devices'
import Loading from '../../Components/Loading'
const HeadsetsSection = () => {
  const { loading, error, data: devices } = useQuery(GetDevices);
  if (loading) return <div className=' mt-5'>
    <Loading />
    </div>
  if (error) console.log(error.message)
  console.log(devices)
  return (
    <div className=' mt-6 grid grid-cols-4 max-w-full gap-y-4 gap-x-[18px] pr-1'>
        {devices && devices.admin.devices.map((device, index) => (
          <HeadsetCard key={index} device={device} index={index} />
        ))}
            
        
    
    </div>
  )
}

export default HeadsetsSection