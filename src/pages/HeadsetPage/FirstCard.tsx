import React from "react";
import { Image } from '@nextui-org/react';
import OnlineIcon from '../../assets/Landing/HeadsetCard/online.svg';
import HeadsetImage from '../../assets/headset page/headset.png';


export function FirstCard({device, deviceState}) {
  return <div className=' w-[565px] h-[375px] rounded-[21px] bg-light-bg py-5 px-12 relative
            flex flex-col items-end 
           ' style={{
    boxShadow: '0px 3.588px 13.454px 0px rgba(91, 89, 89, 0.25)'
  }}>
              <div className=' absolute top-0 left-[8%] w-[116px] h-9 py-2 px-[6px] flex items-center justify-center gap-x-[6px] rounded-b-[3px] bg-primary'>
                <div className=' w-2 h-3 bg-white rounded-full' />
               <span className=' text-white'>متصل الان</span>
              </div>

              
              <Image src={OnlineIcon} width={43} height={43} />

              <div className=' flex flex-col items-center justify-center w-full gap-y-2'>
                  <Image src={HeadsetImage} width={170} height={104} />
                  <div className="flex flex-col gap-y-1 items-center text-text-black text-center ">
                    <span className=' text-[22px] font-bold'> {device.student.length!==0? device.student.name : "لا يوجد"}</span>
                    <span className=' text-xs '>{device.name}</span>

                  </div>
                  <div className=' flex flex-col mt-7 items-center gap-y-[14px]'>
                    <div className="flex items-center gap-x-1">
                    <div className={`w-[34px] h-3 rounded ${deviceState?.Connected ? deviceState.Battery >= 0 ? " bg-[#2DEC4C]" : "bg-[#E8E2E2]" : "bg-[#E8E2E2]" }`}/>
                    <div className={`w-[34px] h-3 rounded ${deviceState?.Connected ? deviceState.Battery >= 33 ? " bg-[#2DEC4C]" : "bg-[#E8E2E2]"  : "bg-[#E8E2E2]" }`}/>
                    <div className={`w-[34px] h-3 rounded ${deviceState?.Connected ? deviceState.Battery >= 66 ? " bg-[#2DEC4C]" : "bg-[#E8E2E2]" : "bg-[#E8E2E2]"   }`}/>
                    </div>
                    <span className=' text-text-black text-lg font-semibold ml-4'> {deviceState.Battery} % </span>

                  </div>
              </div>
              

            

           </div>;
}
  