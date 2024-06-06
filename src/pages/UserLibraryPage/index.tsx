import ControlCard from '../../Components/ControlCard'
import { useParams } from 'react-router-dom'
import noPic from '../../assets/students/noPic.svg'
import noPicDark from '../../assets/students/no-pic.svg'
import { Link } from 'react-router-dom'
import ScreenShotIcon from '../../assets/library/pictures.svg'
import ScreenRecoard from '../../assets/library/video.svg'
import PlayIcon from '../../assets/UserLibrary/play.png'
import { useQuery } from '@apollo/client'
import { getStudent } from '../../graphql/students'
import { useEffect } from 'react'
import { useThemeStore } from '../../stores/ThemeStore'
import Loading from '../../Components/Loading'
import  { useUserLibraryStore } from '../../stores/UserLibraryStore'
const LibraryPage = () => {
  const { dark } = useThemeStore()
  const { setStudentName, setStudentImage } = useUserLibraryStore()
  const {id} = useParams()
  const { loading, error, data } = useQuery(getStudent, {
    variables: {
      studentId: id
    }
  });
  useEffect(() => {
    if(data){
      setStudentName(data?.student?.name)
      setStudentImage(data?.student?.imageUrl)
    }
  }, [data])
  if (loading) return <Loading />
  if (error)  console.log(error);

 
  return (
       <div className=' max-w-full grid grid-cols-2 gap-y-3 gap-x-4'> 
        <div className="col-span-2">
          <ControlCard icon="Library" title='وسائط االطالب' neasted={true} />
        </div>

        <div className="col-span-2  bg-white dark:bg-primary-dark h-64 flex items-center justify-center flex-col gap-y-[14px] rounded-md">
          <div className=' w-28 h-28 bg-[#F6F6F6] dark:bg-[#EEEFF21A] bg-[#EEEFF21A] flex items-center justify-center rounded-full'>
            {
            data?.student?.imageUrl ? 
            <img src={`${import.meta.env.VITE_API_URL}${data.student.imageUrl}`} alt="" className=' w-full h-full rounded-full' /> 
            :
            <img src={dark ? noPicDark : noPic} alt="" width={58} height={58} />
          }  
          </div>
          <span className=' text-text-black dark:text-white text-[21px] font-bold'>
            {data?.student?.name}
          </span>
          <div>
          
          </div>
          
         
        </div>

        <Link to={`/library/students/${data?.student?.facilityId}/videos`} className=' mt-3 h-96 bg-white dark:bg-primary-dark rounded-2xl flex flex-col justify-center gap-y-3 px-[22px] py-5 '>
          <div className="flex items-center gap-x-3 justify-self-start self-end">
             <span className=' text-[#292D32] dark:text-white text-[15px]  font-semibold'>
              لقطات الفديو المسجله
            </span>
          </div>
          <div className=" max-w-full h-[300px] bg-[#dcdee033] rounded-2xl flex items-center justify-center">
            <div className=' w-20 h-20 bg-[#FF1F64] rounded-full flex items-center justify-center'>
            <img src={ScreenRecoard} alt="" width={46} height={46} />
            </div>
          </div>
        </Link>
        <Link  to={`/library/students/${data?.student?.facilityId}/pictures`} className=' mt-3 h-96 bg-white dark:bg-primary-dark rounded-2xl flex flex-col justify-center gap-y-3 px-[22px] py-5 '>
          <div className="flex items-center gap-x-3 justify-self-start self-end">
             <span className=' text-[#292D32] dark:text-white text-[15px]  font-semibold'>
              لقطات الشاشه المسجله
            </span>

          </div>
          <div className=" max-w-full h-[300px] bg-[#dcdee033] rounded-2xl flex items-center justify-center">
            <div className=' w-20 h-20 bg-[#2F529C] rounded-full flex items-center justify-center'>
            <img src={ScreenShotIcon} alt="" width={46} height={46} />
            </div>
          </div>
        </Link>

       </div>
    
  )
}

export default LibraryPage