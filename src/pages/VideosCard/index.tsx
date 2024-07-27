import ControlCard from '@/Components/ControlCard';
import noPic from '@/assets/students/noPic.svg';
import noPicDark from '@/assets/students/no-pic.svg';
import ScreenRecoard from '@/assets/HeadsetProfile/recoard.png';

import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import Loading from '@/Components/Loading';
import { getVideosByFacilityId } from '@/graphql/AmazonS3';
import { useDisclosure } from '@nextui-org/react';
import { useState } from 'react';
import VideoView from './VideoView';
import { useUserLibraryStore } from '@/stores/UserLibraryStore';
import { useThemeStore } from '@/stores/ThemeStore';
import useTranslationStore from '@/stores/LanguageStore';
import { cn } from '@/lib/utils';

const VideosCard = () => {
  const { id } = useParams();
  const { dark } = useThemeStore();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [video, setVideo] = useState();
  const { studentImage, stduentName } = useUserLibraryStore();
  const { language, getTranslation } = useTranslationStore();
  const { loading, error, data } = useQuery(getVideosByFacilityId, {
    variables: { facilityId: id },
  });

  const handelOpenVideo = (video) => {
    setVideo(video);
    onOpen();
  };

  if (loading) return <Loading />;
  if (error) console.log(error);

  return (
    <div className="max-w-full grid grid-cols-1 gap-y-3">
      <ControlCard icon="Library" title={getTranslation('student_media')} neasted={true} info='videoPageDescription' />
      <div className="col-span-2 bg-white dark:bg-primary-dark h-64 flex items-center justify-center flex-col gap-y-[14px] rounded-md">
        <div className='w-28 h-28 bg-[#F6F6F6] dark:bg-[#EEEFF21A] flex items-center justify-center rounded-full'>
          {studentImage ? 
            <img src={`${import.meta.env.VITE_API_URL}${studentImage}`} alt="" className='w-full h-full rounded-full' /> 
            :
            <img src={dark ? noPicDark : noPic} alt="" width={58} height={58} />
          }
        </div>
        <span className='text-text-black dark:text-white text-[21px] font-bold'>
          {stduentName}
        </span>
      </div>
      <div className='max-h-fit bg-white dark:bg-primary-dark rounded-md px-12 py-5 gap-y-6 flex flex-col justify-center text-text-black dark:text-white'>
        <div className={cn("flex items-center gap-x-3 justify-self-start self-end",
          language === 'ar' ? 'self-end' : 'self-start flex-row-reverse'
        )}>
          <span className='text-[#292D32] dark:text-white text-[15px] font-semibold'>
            {getTranslation('recorded_videos')}
          </span>
          <div className='w-10 h-10 bg-[#FF1F64] flex items-center rounded-full justify-center'>
            <img src={ScreenRecoard} alt="" />
          </div>
        </div>
        <div className="max-w-full grid grid-cols-4 gap-4">
          {data?.getVideosByFacilityId.length === 0 ?
            <div className="col-span-4 flex items-center justify-center gap-x-3 h-[200px]">
              <span className='text-[#292D32] dark:text-white text-[15px] font-semibold'>
                {getTranslation('no_videos')}
              </span>
            </div>
            :
            data?.getVideosByFacilityId.map((image, index) => (
              <div key={index.pictureId} className="relative rounded-2xl">
                <video src={image.location} width={218} height={145} />
                <div className='absolute inset-0 bg-[#00000063]'>
                  <div className='absolute bottom-0 left-0 h-11 w-full bg-[#FFFFFF33] flex items-center px-4'>
                    <button className='w-8 h-5 bg-white/50 text-text-black rounded-md flex items-center justify-center py-[3px] px-[6px] text-[10px] font-medium'
                      onClick={() => handelOpenVideo(image)}>
                      {getTranslation('open')}
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <VideoView isOpen={isOpen} onOpenChange={onOpenChange} video={video} />
    </div>
  );
};

export default VideosCard;