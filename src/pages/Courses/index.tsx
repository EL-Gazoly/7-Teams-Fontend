import ControlCard from '../../Components/ContraolCard'
import BGImage from '../../assets/courses/bg.png'
import ChemistryImage from '../../assets/courses/chemisry.png'
import { Image, Button} from '@nextui-org/react'
import './style.css'
import CourseStoreCard from './CourseStoreCard'
import { useNavigate } from 'react-router-dom'
import { useThemeStore } from '../../stores/ThemeStore'

const CoursesPage = () => {
    const navigate = useNavigate()
    const {dark} = useThemeStore()
  return (  
    <div className=' pb-7'>
              <ControlCard icon="Courses" title=' المناهج التعليمية ' neasted={false}/>
            <div className={' mt-[18px] flex flex-col items-center gap-y-8  w-full '}>
               
                <div className={`h-[300px] rounded-[7px] fire-fighthing light 
                    ${dark ? 'fire-fighthing-dark' : 'bg-white' }
                `}
                style={{
                    
                    backgroundImage:  dark ? `url(${BGImage})` : "",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
                >
                    <div className=' ml-28 flex flex-row items-center justify-center gap-x-[150px] z-10 overflow-y-hidden'>
                            <div className='flex fle-col items-center gap-y-[26px] '>
                                <div className="flex flex-col text-center gap-y-2 text-[#122333] dark:text-white font-bold ">
                                    <span className=' text-4xl '>منهج الكمياء</span>
                                    <span className=' text-sm '>متوفره الأن</span>
                                    <Button className=' text-white text-sm font-bold bg-primary-gradient'
                                        onPress={()=> navigate('/courses/chemistry')}
                                    >
                                        عرض التفاصيل
                                    </Button>
                                </div>

                            </div>
                          
                        <Image src={ChemistryImage} className=' mb-3' width={363.25} height={300} />

                    </div>
                    
                </div>


                <div className=' max-w-full grid grid-cols-3 gap-x-6 mt-8'>
                    <CourseStoreCard name='منهج الجيولوجيا' />
                    <CourseStoreCard name='منهج الفزياء' />
                    <CourseStoreCard name='منهج الأحياء'/>
                </div>
            

            </div>

    </div>
  )
}

export default CoursesPage