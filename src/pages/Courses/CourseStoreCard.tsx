import './style.css'
import {FC} from 'react'
import GeoIcon from '../../assets/courses/geology.png'
import PhysicsIcon from '../../assets/courses/physics.png'
import BiologyIcon from '../../assets/courses/biology.png'
import { Link } from 'react-router-dom'

const Courses = [
    {
        id:1,
        name:'منهج الجيولوجيا',
        icon: GeoIcon,
        description:'علم الأرض أو الجيولوجيا أو علم طبقات الأرض أوالإراضة .'
    },
    {
        id:2,
        name:'منهج الفزياء',
        icon: PhysicsIcon,
        description:'تحاول تفسير الظواهر الطبيعية والقوانين التي تحكم الكون.'
    },
    {
        id:3,
        name:'منهج الأحياء',
        icon: BiologyIcon,
        description:'يختص علم الأحياء التطوري بدراسة عملية نمو الكائنات الحيَّة وتطورها. '
    },
]
interface CourseStoreCardProps {
    name: string;
}

const CourseStoreCard:FC<CourseStoreCardProps> = ({name}) => {
    const course = Courses.find(course => course.name === name)
  return (
    <div className="course-store-card bg-white dark:bg-[#252A33] flex flex-col items-center justify-center gap-y-[19px] relative">
        <div>
        <img src={course.icon} alt="" className=' rounded-full mb-5 ' />
        </div>
        <div className=' flex flex-col text-center gap-y-[19px] text-[#122333] dark:text-white'>
            <span className=' text-2xl font-semibold'>{course.name}</span>
            <span className=' w-[275px] text-sm'>{course.description}</span>
        </div>
        <Link to={`/courses/${course.name}`} className=' w-[158px] text-white p-[10px] mt-2 flex items-center justify-center bg-primary-gradient rounded-lg mb-28'>
                            عرض التفاصيل
        </Link>
    </div>
  )
}

export default CourseStoreCard