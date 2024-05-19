import ControlCard from '../../Components/ControlCard'
import noPicDark from '../../assets/students/no-pic.svg'
import ScreenShotIcon from '../../assets/HeadsetProfile/screenshot.png'
import ScreenRecoard from '../../assets/HeadsetProfile/recoard.png'
import FirstFirePic from '../../assets/coursePage/1.png';
import SecondFirePic from '../../assets/coursePage/2.png';

import { useQuery } from '@apollo/client';
import { getStudent } from '../../graphql/students';
import { useParams } from 'react-router-dom'
import Loading from '../../Components/Loading'
const images = [FirstFirePic, SecondFirePic, FirstFirePic , SecondFirePic , FirstFirePic, SecondFirePic, FirstFirePic, SecondFirePic];
const PicturePage = () => {
  const {id} = useParams()
  const { loading, error, data } = useQuery(getStudent, {
    variables: {
      studentId: id
    }
  });
  if (loading) return <Loading />
  if (error)  console.log(error);
  return (
    <div className=" max-w-full grid grid-cols-1 gap-y-3">
      <ControlCard icon="Library" title='وسائط الطالب' neasted={true} />
         <div className="col-span-2  bg-white dark:bg-primary-dark h-64 flex items-center justify-center flex-col gap-y-[14px] rounded-md">
          <div className=' w-28 h-28 bg-[#EEEFF21A] flex items-center justify-center rounded-full'>
          {
            data?.student?.imageUrl ? 
            <img src={`${import.meta.env.VITE_API_URL}${data.student.imageUrl}`} alt="" className=' w-full h-full rounded-full' /> 
            :
            <img src={noPicDark} alt="" width={58} height={58} />
          }  
          </div>
          <span className=' text-text-black dark:text-white text-[21px] font-bold'>
            {data?.student?.name} 
          </span>
          <div>
            <div className='flex items-center justify-center gap-x-3 text-xs font-semibold '>
              <div className="flex items-center justify-center gap-x-1">
                   <span>لقطه فيديو</span>
                  <img src={ScreenRecoard} alt="" width={24} height={24} />
                 
                <div className="flex items-center justify-center gap-x-1">
                   <span>لقطه شاشه</span>
                  <img src={ScreenShotIcon} alt="" width={24} height={24} />
                 
                </div>
                
              </div>
            </div>
          </div>
          
         
        </div>

        <div className=' h-[400px] bg-white dark:bg-primary-dark rounded-md px-12 py-5 gap-y-6 flex flex-col justify-center text-text-black dark:text-white'>
           <div className="flex items-center gap-x-3 justify-self-start self-end">
             <span className=' text-[#292D32] dark:text-white text-[15px]  font-semibold'>
              لقطات الشاشه المسجله
            </span>
            <div className=' w-10 h-10 bg-[#185AEA80] flex  justify-center items-center rounded-full '>
              <img src={ScreenShotIcon} alt="" width={23} height={23}/>
            </div>
           

            </div>
            <div className=" max-w-full grid grid-cols-4 gap-4">
              {images.map((image, index) => (
               <div key={index} className=" relative rounded-2xl">
                <img src={image} alt="" />
                <div className=' absolute inset-0 bg-[#00000063]' >
                    <div className=' absolute bottom-0 left-0 h-11 w-full bg-[#FFFFFF33] flex items-center px-4'>
                        <button className=' w-8 h-5 bg-white/50 text-text-black rounded-md flex items-center justify-center py-[3px] px-[6px] text-[10px] font-medium'>
                            فتح
                        </button>
                    </div>
                  </div>
               

           
               </div>
              ))}


            </div>

        </div>

    </div>
   
  )
}

export default PicturePage  