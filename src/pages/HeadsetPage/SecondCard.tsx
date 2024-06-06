import React, {useEffect, useState} from 'react';
import StreamIcon from '../../assets/headset page/stream.png';
import ScreenShotIcon from '../../assets/headset page/screenshot.png';
import RecoardIcon from '../../assets/headset page/recoard.png';
import { Image, Button } from '@nextui-org/react';
import ScreenRecoard from '../../assets/HeadsetProfile/recoard.png'
type isImageUploadingAction = {
  type: 'start' | 'end' | 'none';
}

type Props = {
  ipcRenderer: any
  device: any
  dispatchIsImageUpload : React.Dispatch<isImageUploadingAction>
  onOpen : () => void
}

const SecondCard = ({ipcRenderer, device, dispatchIsImageUpload, onOpen} : Props) => {
const [isRecording, setIsRecording] = useState(false)
const [showRecordingDiv, setShowRecordingDiv] = useState(false);
  const handelStream = () => {
    ipcRenderer.send('start-stream')
    console.log('start-streaming')
  }

  const handelScreenShot = () => {
    if(device?.student.length !== 0){
      ipcRenderer.send('screenshot', device.student[0].name , device.student[0].facilityId )
    }
    else {
      ipcRenderer.send("screenshot", "none", "none")
    }
    dispatchIsImageUpload({type: 'start'})
    onOpen()
  }

  const handleRecord = () => {
    setIsRecording(!isRecording)
    if (isRecording) {
        ipcRenderer.send('stop-screenrecord' ,  device.student[0].facilityId)
        console.log('stop-screenrecord')
        setTimeout(() => setShowRecordingDiv(false), 500)
        return
    }
    ipcRenderer.send('screenrecord' ,  device.student[0].facilityId)
    
    setTimeout(() => setShowRecordingDiv(true), 10);
  }


  return (
    <div className='w-[432px] h-[374px] rounded-[21px] bg-white dark:bg-primary-dark py-9 px-[30px] flex flex-col items-end'>
      <h3 className='text-[#635D5E] dark:text-white text-base font-bold'>اجراءات الجهاز</h3>
      <div className='mt-[30px] w-full grid grid-cols-2 span-2 gap-2'>

        <Button className='col-span-2 h-28 bg-primary-gradient rounded-2xl flex flex-col gap-y-2 items-center justify-center text-white font-bold'
          onPress={handelStream}
        >
          <div className='w-11 h-11 bg-white rounded-full flex flex-col items-center justify-center'>
            <Image src={StreamIcon} width={30} height={30} />
          </div>
          <span className='text-sm'>بث الفيديو المباشر</span>
        </Button>

        <Button className='h-28 bg-screen-shot-gradient rounded-[14px] flex flex-col items-center justify-center gap-y-2 text-white font-bold'
          onPress={handelScreenShot}
        >
          <div className='w-11 h-11 bg-white rounded-full flex flex-col items-center justify-center'>
            <Image src={ScreenShotIcon} width={30} height={30} />
          </div>
          <span className='text-sm'>لقطة شاشة</span>
        </Button>
        
        <div className='relative'>
      <Button
        className='w-full h-28 bg-video-gradient rounded-[14px] flex flex-col items-center justify-center gap-y-2 text-white font-bold'
        onPress={handleRecord}
      >
        <div className='w-11 h-11 bg-white rounded-full flex flex-col items-center justify-center'>
          {isRecording ? (
            <div className='w-3 h-3 rounded bg-video-gradient' />
          ) : (
            <Image src={RecoardIcon} width={30} height={30} />
          )}
        </div>
        <span className='text-sm'>تسجيل الفيديو</span>
      </Button>
      {showRecordingDiv && (
        <div
          className={`absolute right-[45%] w-[200px] h-[60px] bg-[#ff1f64] rounded-md flex items-center justify-center gap-x-4 transform transition-transform duration-500 ${isRecording ? 'slide-in' : 'slide-out'}`}
        >
          <span className='text-sm'>جاري تسجيل الفيديو</span>
          <img src={ScreenRecoard} alt='Screen Recoard' />
        </div>
      )}
    </div>
      </div>
    </div>
  );
};

export default SecondCard;
