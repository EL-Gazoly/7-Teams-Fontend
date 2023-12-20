import React from "react";
import { Image } from '@nextui-org/react';
import OnlineIcon from '../../assets/Landing/HeadsetCard/online.svg';
import HeadsetImage from '../../assets/headset page/headset.png';

export function FirstCard({ device, deviceState }) {
  const connected = deviceState?.Connected;
  const battery = deviceState?.Battery;

  const batteryLevelClass = (level) => {
    if (!connected) return "bg-[#E8E2E2]";
    return level >= 66 ? "bg-[#2DEC4C]" : level >= 33 ? "bg-[#2DEC4C]" : "bg-[#E8E2E2]";
  };

  return (
    <div className='w-[565px] h-[375px] rounded-[21px] bg-light-bg py-5 px-12 relative flex flex-col items-end'
         style={{ boxShadow: '0px 3.588px 13.454px 0px rgba(91, 89, 89, 0.25)' }}>
      <div className={`absolute top-0 left-[8%] w-[116px] h-9 py-2 px-[6px] flex items-center justify-center gap-x-[6px] rounded-b-[3px]
        ${device.student.length !==0 ? "bg-[#2DEC4C]" : "bg-disabled"}
      bg-primary`}>
        <div className='w-2 h-2 bg-white rounded-full mt-[2px]' />
        <span className='text-white'>
          {device.student.length !==0 ? "متصل" : "غير متصل"}
           </span>
      </div>

      <Image src={OnlineIcon} width={43} height={43} />

      <div className='flex flex-col items-center justify-center w-full gap-y-2'>
        <Image src={HeadsetImage} width={170} height={104} />
        <div className="flex flex-col gap-y-1 items-center text-text-black text-center">
          <span className='text-[22px] font-bold'>{device.student.length !== 0 ? device.student.name : "لا يوجد"}</span>
          <span className='text-xs font-poppins'>{device.name}</span>
        </div>
        <div className='flex flex-col mt-7 items-center gap-y-[14px]'>
          <div className="flex items-center gap-x-1">
            {[0, 33, 66].map((level) => (
              <div key={level} className={`w-[34px] h-3 rounded ${batteryLevelClass(battery)}`} />
            ))}
          </div>
          <span className='text-text-black text-lg font-semibold ml-4'>{battery} %</span>
        </div>
      </div>
    </div>
  );
}
