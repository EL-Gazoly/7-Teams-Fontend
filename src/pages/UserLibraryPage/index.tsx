import ControlCard from '../../Components/ControlCard'
import { useParams } from 'react-router-dom'
import noPicDark from '../../assets/students/no-pic.svg'
import { Link } from 'react-router-dom'
import ScreenShotIcon from '../../assets/HeadsetProfile/screenshot.png'
import ScreenRecoard from '../../assets/HeadsetProfile/recoard.png'
import PlayIcon from '../../assets/UserLibrary/play.png'
import { useQuery } from '@apollo/client'
import { getStudent } from '../../graphql/students'
import FirstFirePic from '../../assets/coursePage/1.png';
import SecondFirePic from '../../assets/coursePage/2.png';
import Loading from '../../Components/Loading'
const images = [FirstFirePic, SecondFirePic, FirstFirePic , SecondFirePic];
const LibraryPage = () => {
  const {id} = useParams()
  const { loading, error, data } = useQuery(getStudent, {
    variables: {
      studentId: id
    }
  });
  if (loading) return <Loading />
  if (error)  console.log(error);

 
  return (
       <div className=' max-w-full grid grid-cols-2 gap-y-3 gap-x-4'> 
        <div className="col-span-2">
          <ControlCard icon="Library" title='وسائط االطالب' neasted={true} />
        </div>

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

        <Link to={`/library/students/${data?.student?.studentId}/videos`} className=' mt-3 h-96 bg-white dark:bg-primary-dark rounded-2xl flex flex-col justify-center gap-y-3 px-[22px] py-5 '>
          <div className="flex items-center gap-x-3 justify-self-start self-end">
             <span className=' text-[#292D32] dark:text-white text-[15px]  font-semibold'>
              لقطات الفديو المسجله
            </span>
            <div className=' w-10 h-10 bg-[#FF1F64] flex items-center rounded-full justify-center '>
              <img src={ScreenRecoard} alt="" />
            </div>
           

          </div>
          <div className=" max-w-full grid grid-cols-2 gap-[2px] rounded-2xl">
            {
              images.map((image, index) => (
                 <div className=' relative'>
                  <img src={image} alt="" />
                  <div className=' absolute top-[40%] left-[39%] w-10 h-10 bg-[#FF1F64] flex items-center justify-center rounded-full'>
                    <img src={PlayIcon} alt="" />
                  </div>
                </div>
              ))
            }
          </div>
        </Link>
        <Link  to={`/library/students/${data?.student?.studentId}/pictures`} className=' mt-3 h-96 bg-white dark:bg-primary-dark rounded-2xl flex flex-col justify-center gap-y-3 px-[22px] py-5 '>
          <div className="flex items-center gap-x-3 justify-self-start self-end">
             <span className=' text-[#292D32] dark:text-white text-[15px]  font-semibold'>
              لقطات الشاشه المسجله
            </span>
            <div className=' w-10 h-10 bg-[#185AEA80] flex items-center rounded-full justify-center '>
              <img src={ScreenShotIcon} alt="" width={23} height={23} />
            </div>
           

          </div>
          <div className=" max-w-full grid grid-cols-2 gap-[2px] rounded-2xl">
              {
              images.map((image, index) => (
                 <img src={image} alt="" />
              ))
            }
          </div>
        </Link>

       </div>
    
  )
}

export default LibraryPage