import React, { useState, useEffect } from 'react';
import { Button, Image } from '@nextui-org/react';
import OnlineIcon from '../../assets/Landing/HeadsetCard/online.svg';
import OfflineIcon from '../../assets/Landing/HeadsetCard/wifi-square.svg';
import HeadsetImage from '../../assets/Landing/HeadsetCard/headset.png';
import SelectCard from '../../assets/Landing/HeadsetCard/select.png';
import SucessGif from '../../assets/Landing/HeadsetCard/sucesss.gif';
import { useNavigate } from 'react-router-dom';

type HeadsetProps = {
  index?: number;
  device: { name: string; macAddress: string , student: {name: string}[];  selected: boolean; 
    AppStatus: string; Battery: number; Connected: boolean; started: boolean;
}
  selectedHeadsets: any
  setSelectedHeadsets: React.Dispatch<any>
};

const HeadsetCard = ({ device, index, selectedHeadsets, setSelectedHeadsets }: HeadsetProps) => {
  const [isSelected, setSelected] = useState(selectedHeadsets.selected);
  const navigate = useNavigate();
  useEffect(() => {
    const startCourse = setTimeout(() => {
        if(device.started){
          setSelectedHeadsets((prev: any) => {
            const newSelectedHeadsets = [...prev];
            newSelectedHeadsets[index] = { ...newSelectedHeadsets[index], started: false, selected: false };
            return newSelectedHeadsets;
          });
        }
    }, 1750);

    return () => clearInterval(startCourse);
  }, [selectedHeadsets]);

  const toggleSelected = () => {
    setSelected(!isSelected);
    setSelectedHeadsets((prev: any) => {
      const newSelectedHeadsets = [...prev];
      newSelectedHeadsets[index] = { ...newSelectedHeadsets[index], selected: !isSelected };
      return newSelectedHeadsets;
    });
  };

  const connectedIcon = device?.Connected ? OnlineIcon : OfflineIcon;

  const batteryLevelClass = (level: number) => {
    if (!device?.Connected) return "bg-[#E8E2E2]";
    return level >= 66 ? "bg-[#2DEC4C]" : level >= 33 ? "bg-[#2DEC4C]" : "bg-[#E8E2E2]";
  };
  device && console.log(device)
  return (

  
      <div className={`w-[235.818px] h-[265.851px] bg-white flex flex-col  rounded-[5.583px] overflow-hidden ${device.selected && 'border-3 border-primary'} relative
      ${!device?.Connected && 'opacity-40'}
      `} style={{ boxShadow: '0px 2.225px 31.146px 0px rgba(0, 0, 0, 0.10)' }}>
          <button className=' bg-white w-full' onClick={()=> navigate(`/headsets/${device.macAddress}`)}
            disabled={!device?.Connected}
          >
            <div className='relative w-full h-[37px] pt-3' >
              <Image src={connectedIcon} className=' mr-4' />
              <div className={`absolute top-0 left-2 flex w-[79.345px] h-[28.612px] px-[5.583px] py-[2.791px] items-center justify-center gap-x-[5.583px] rounded-b-[2.791px]
               ${device.student.length === 0 ? " bg-disabled opacity-40  " : " bg-primary "}`} style={{ boxShadow: '0px 2.791px 2.791px 0px rgba(0, 0, 0, 0.25)' }}>
                <span className='text-[9.7px] font-semibold text-white'>{device.student.length === 0 ? "غير متصل" : "متصل"}</span>
                <div className={`w-[6.979px] h-[6.979px] rounded-full ${device.student.length === 0 ? " bg-[#DFEBE1]  " : " bg-[#45FF5F] "} `} />
              </div>
            </div>

            <div className='flex flex-col items-center gap-y-2 text-center overflow-hidden h-[182px] mt-3'>
                <Image src={HeadsetImage} className='z-0' width={143} height={77} />
                <div className='flex items-center gap-x-[3px]'>
                  {[0, 33, 66].map((level) => (
                    <div key={level} className={`w-5 h-2 rounded-sm ${batteryLevelClass(device?.Battery)}`} />
                  ))}
                </div>
                <div className='flex flex-col gap-y-2'>
                  <span className='text-[#122333] text-sm font-semibold'>نظاره رقم {index + 1}</span>
                  <span className='text-[#A5A5A5] text-[8.5px]'>{device.name}</span>
                </div>
            </div>
            </button>
            <div className=' absolute  bottom-0 h-[47px] w-full bg-[#FDFAFA] flex items-center justify-center'>
            <Button className={`w-[61px] h-[20.24px] text-white flex text-[11px] items-center justify-center rounded-md ${device.selected ? 'bg-[#E94848] pt-1' : 'bg-[#292D32]'}`} onPress={toggleSelected}
              isDisabled={!device?.Connected}
            >
              {device.selected ? ' الغاء التحديد' : 'تحديد'}
            </Button>
            </div>

          
          {device.selected && <div className='absolute bottom-[-1%] left-[-2%]'><Image src={SelectCard} /></div>}
        {device.started && <div className='absolute inset-0 bg-white mt-10'><img src={SucessGif} /></div>}
      </div>
    
  );
};

export default HeadsetCard;
