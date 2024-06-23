import './style.css'
import { FC } from 'react'
import GeoIcon from '../../assets/courses/geology.png'
import PhysicsIcon from '../../assets/courses/physics.png'
import BiologyIcon from '../../assets/courses/biology.png'
import { Link } from 'react-router-dom'
import useTranslationStore from '../../stores/LanguageStore'

const Courses = [
  {
    id: 1,
    name: 'geology_curriculum',
    icon: GeoIcon,
    description: 'geology_description'
  },
  {
    id: 2,
    name: 'physics_curriculum',
    icon: PhysicsIcon,
    description: 'physics_description'
  },
  {
    id: 3,
    name: 'biology_curriculum',
    icon: BiologyIcon,
    description: 'biology_description'
  }
]

interface CourseStoreCardProps {
  name: string;
}

const CourseStoreCard: FC<CourseStoreCardProps> = ({ name }) => {
  const { getTranslation } = useTranslationStore();
  const course = Courses.find(course => course.name === name);

  return (
    <div className="course-store-card bg-white dark:bg-[#252A33] flex flex-col items-center justify-center gap-y-[19px] relative">
      <div>
        <img src={course.icon} alt="" className='rounded-full mb-5' />
      </div>
      <div className='flex flex-col text-center gap-y-[19px] text-[#122333] dark:text-white'>
        <span className='text-2xl font-semibold'>{getTranslation(course.name)}</span>
        <span className='w-[275px] text-sm'>{getTranslation(course.description)}</span>
      </div>
      <Link to={`/courses/${course.name}`} className='w-[158px] text-white p-[10px] mt-2 flex items-center justify-center bg-primary-gradient rounded-lg mb-28'>
        {getTranslation("view_details")}
      </Link>
    </div>
  )
}

export default CourseStoreCard
