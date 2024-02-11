import {useState, useEffect} from "react";
import { Image } from '@nextui-org/react';
import OnlineIcon from '../../assets/Landing/HeadsetCard/online.svg';
import HeadsetImage from '../../assets/headset page/headset.png';
import PingIcon from '../../assets/Landing/HeadsetCard/ping.svg';
import { set, ref } from 'firebase/database';
import db from '../../config/firebase';
import LikeIcon from '../../assets/headset page/like.svg'
import { useParams } from "react-router-dom";
import { toast } from "sonner";

export function FirstCard({ device, deviceState }) {
  const { mac } = useParams<{ mac: string }>()
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [show , setShow] = useState(false)
  const connected = deviceState?.Connected;
  const battery = deviceState?.Battery;

  const batteryLevelClass = (level) => {
    if (!connected) return "bg-[#E8E2E2]";
    return level >= 66 ? "bg-[#2DEC4C]" : level >= 33 ? "bg-[#2DEC4C]" : "bg-[#E8E2E2]";
  };

  const handlePing = () => {
    const deviceQuery = ref(db, `/Devices/${mac}`);
    set(deviceQuery, { ...device, StudentPing: false });
    if(deviceState.StudentPing){
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
      setShow(false)
    }, 1000);
  }
  };
  useEffect(() => {
    if (deviceState.StudentPing) {
      setShow(true)
    }
    else if (!deviceState.StudentPing && !isClicked) {
      setShow(false)
    }
  }, [deviceState]);
  return (
    <div className={`w-[565px] h-[375px] rounded-[21px] bg-light-bg dark:bg-primary-dark py-5 px-12 relative flex flex-col items-end
    
      ${
        isClicked  ? "border border-[#171717]" :
        deviceState.StudentPing && !isHovered && !isClicked ? "border border-[#EDB200]" : 
      isHovered && deviceState.StudentPing && !isClicked && "border border-[#2DEC4C]" 
      
    }
    
    `}
         style={{ boxShadow: '0px 3.588px 13.454px 0px rgba(91, 89, 89, 0.25)' }}>
      <div className={`absolute top-0 left-[8%] w-[116px] h-9 py-2 px-[6px] flex items-center justify-center gap-x-[6px] rounded-b-[3px]
        ${device.student.length !==0 ? "bg-[#2DEC4C]" : "bg-disabled"}
      bg-primary`}>
        <div className='w-2 h-2 bg-white rounded-full mt-[2px]' />
        <span className='text-white'>
          {device.student.length !==0 ? "متصل" : "غير متصل"}
           </span>
      </div>
      <div className=" flex flex-row-reverse items-center gap-x-1">
        <Image src={OnlineIcon} width={43} height={43} />
        { show &&
        <div className={`w-[91px] h-9 flex items-center cursor-pointer justify-center gap-x-2 
        ${isClicked && "bg-[#171717]"}
        ${isHovered ? "bg-primary" : "bg-[#EDB200]"}
        ${isHovered || isClicked ? "text-white" : "text-[#27313A]"} rounded-lg`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handlePing}
        >
          {!isClicked && <img src={isHovered? LikeIcon : PingIcon} width={isHovered ? 15 : 10} height={isHovered ? 15 : 10}
            className='transition-all duration-300'
          />}
          <span className='text-sm font-semibold'>
            {isClicked ? "تم " :
            isHovered? "اصلاح" : "مساعده"
            }
          </span>

        </div>
        }
      </div>

      <div className='flex flex-col items-center justify-center w-full gap-y-2'>
        <Image src={HeadsetImage} width={170} height={104} />
        <div className="flex flex-col gap-y-1 items-center text-text-black dark:text-white text-center">
          <span className='text-[22px] font-bold'>{device.student.length !== 0 ? device.student[0].name : "لا يوجد"}</span>
          <span className='text-xs font-poppins'>{device.name}</span>
        </div>
        <div className='flex flex-col mt-7 items-center gap-y-[14px]'>
          <div className="flex items-center gap-x-1">
            {[0, 33, 66].map((level) => (
              <div key={level} className={`w-[34px] h-3 rounded ${batteryLevelClass(battery)}`} />
            ))}
          </div>
          <span className='text-text-black dark:text-white text-lg font-semibold ml-4'>{battery} %</span>
        </div>
      </div>
    </div>
  );
}
