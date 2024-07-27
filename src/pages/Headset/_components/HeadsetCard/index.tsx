import React, { useState, useEffect } from 'react';
import { Button, Image, Tooltip } from '@nextui-org/react';
import OnlineIcon from '../../../../assets/Landing/HeadsetCard/online.svg';
import OfflineIcon from '../../../../assets/Landing/HeadsetCard/wifi-square.svg';
import HeadsetImage from '../../../../assets/Landing/HeadsetCard/headset.png';
import SelectCard from '../../../../assets/Landing/HeadsetCard/select.png';
import SucessGif from '../../../../assets/Landing/HeadsetCard/sucesss.gif';
import StartGif from '../../../../assets/Landing/HeadsetCard/Selected.gif';
import PingIcon from '../../../../assets/Landing/HeadsetCard/ping.svg';
import { useNavigate } from 'react-router-dom';
import { set, ref } from 'firebase/database';
import db from '../../../../config/firebase';
import useTranslationStore from '../../../../stores/LanguageStore';

type HeadsetProps = {
  index?: number;
  device: {
    name: string;
    macAddress: string;
    StudentPing: false;
    student: { name: string; facilityId: string }[];
    selected: boolean;
    AppStatus: string;
    Battery: number;
    Connected: boolean;
    started: boolean;
    showen: boolean;
    generatedId: string;
  };
  selectedHeadsets: any;
  setSelectedHeadsets: React.Dispatch<any>;
  showConnected?: boolean;
};

const HeadsetCard = ({ device, index, selectedHeadsets, setSelectedHeadsets, showConnected }: HeadsetProps) => {
  const { language, getTranslation } = useTranslationStore();
  const [isSelected, setSelected] = useState(selectedHeadsets.selected);
  const navigate = useNavigate();

  useEffect(() => {
    if (device.selected !== isSelected) setSelected(device.selected);
    const startCourse = setTimeout(() => {
      if (device.started) {
        setSelectedHeadsets((prev: any) => {
          const newSelectedHeadsets = [...prev];
          newSelectedHeadsets[index] = { ...newSelectedHeadsets[index], started: false, selected: false };
          return newSelectedHeadsets;
        });
      }
    }, 1360);

    return () => clearInterval(startCourse);
  }, [selectedHeadsets]);

  useEffect(() => {
    if (showConnected && !device.Connected) {
      setSelectedHeadsets((prev: any) => {
        const newSelectedHeadsets = [...prev];
        newSelectedHeadsets[index] = { ...newSelectedHeadsets[index], showen: false };
        return newSelectedHeadsets;
      });
    } else if (showConnected && device.Connected) {
      setSelectedHeadsets((prev: any) => {
        const newSelectedHeadsets = [...prev];
        newSelectedHeadsets[index] = { ...newSelectedHeadsets[index], showen: true };
        return newSelectedHeadsets;
      });
    } else if (!showConnected) {
      setSelectedHeadsets((prev: any) => {
        const newSelectedHeadsets = [...prev];
        newSelectedHeadsets[index] = { ...newSelectedHeadsets[index], showen: true };
        return newSelectedHeadsets;
      });
    }
  }, [showConnected]);

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
    if (!device?.Connected) return 'bg-[#E8E2E2] dark:bg-[#707176]';
    return level >= 66 ? 'bg-[#2DEC4C]' : level >= 33 ? 'bg-[#2DEC4C]' : 'bg-[#E8E2E2] dark:bg-[#707176]';
  };

  const updateStudentPing = () => {
    const deviceQuery = ref(db, `/Devices/${device.macAddress}`);
    set(deviceQuery, { ...device, StudentPing: false });
  };

  return (
    <div
      className={`w-[230.818px] h-[265.851px] bg-white dark:bg-primary-dark flex flex-col rounded-[5.583px] overflow-hidden ${
        device.selected && 'border-3 border-primary'
      } relative
      ${!device?.Connected && 'opacity-40'}
      ${!device?.showen && 'hidden'}
      `}
      style={{ boxShadow: '0px 2.225px 31.146px 0px rgba(0, 0, 0, 0.10)' }}
    >
      <button
        className='bg-white dark:bg-primary-dark w-full'
        onClick={() => navigate(`/headsets/${device.macAddress}`)}
       
      >
        <div className='relative w-full h-[37px] pt-3'>
          <div className='flex items-center gap-x-1'>
            <img src={connectedIcon} className='mr-4' />
            {device?.StudentPing && (
              <Tooltip content={getTranslation('student_help')} placement='top' className='bg-[#EDB200] text-white' offset={4}>
                <div className='w-[26px] h-6 bg-[#EDB200] rounded-lg flex items-center justify-center' onClick={updateStudentPing}>
                  <img src={PingIcon} alt='' />
                </div>
              </Tooltip>
            )}
          </div>
          <div
            className={`absolute top-0 left-2 flex  h-[28.612px] px-3 py-[2.791px] items-center justify-center gap-x-[5.583px] rounded-b-[2.791px]
             ${device.student.length === 0 ? 'bg-disabled opacity-40' : 'bg-primary'}`}
            style={{ boxShadow: '0px 2.791px 2.791px 0px rgba(0, 0, 0, 0.25)' }}
          >
            <span className='text-[9.7px] font-semibold text-white'>
              {device.student.length === 0 ? getTranslation('not_connected') : getTranslation('connected')}
            </span>
            <div className={`w-[6.979px] h-[6.979px] rounded-full ${device.student.length === 0 ? 'bg-[#DFEBE1]' : 'bg-[#45FF5F]'}`} />
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
            <span className='text-[#122333] dark:text-white text-sm font-semibold'>{device.student.length > 0 ? device.student[0].name : getTranslation("noone")}</span>
            <span className='text-[#A5A5A5] text-[11px]'>#{device.student.length > 0 ? device.student[0]?.facilityId : '0000'}</span>
          </div>
        </div>
      </button>
      <div className='absolute bottom-0 h-[47px] w-full bg-[#FDFAFA] dark:bg-primary-dark flex items-center justify-center'>
        <Button
          className={`w-[61px] h-[20.24px] text-white flex text-[11px] items-center justify-center rounded-md ${
            device.selected ? 'bg-[#E94848] pt-1' : 'bg-[#292D32] dark:bg-[#474B52]'
          }`}
          onPress={toggleSelected}
          isDisabled={!device?.Connected}
        >
          {device.selected ? getTranslation('deselect') : getTranslation('select')}
        </Button>
      </div>

      {device.selected && (
        <div className='absolute bottom-[-1%] left-[-2%]'>
          <Image src={SelectCard} />
        </div>
      )}
      {device.started && (
        <div className='absolute inset-0 bg-white w-full h-full z-100 dark:bg-primary-dark mt-10'>
          <img src={StartGif} alt='' className='absolute top-[18%] left-[38%]' />
        </div>
      )}
    </div>
  );
};

export default HeadsetCard;
