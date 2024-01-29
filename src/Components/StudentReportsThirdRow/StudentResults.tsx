import {useState, useEffect} from 'react'
import { Divider } from '@nextui-org/react'
import Chemistry from '../../assets/SelectCourse/SelectSubject/chemistry.svg'
import Physics from '../../assets/SelectCourse/SelectSubject/physics.svg'
import Biology from '../../assets/SelectCourse/SelectSubject/biology.svg'
import Geology from '../../assets/SelectCourse/SelectSubject/geology.svg'
import grade from 'letter-grade'
const StudentResults = ({expermients}) => {
  const [totalPractical, setPartical] = useState(0)
  const [totalTheortical, setTheortical] = useState(0)
  useEffect(() => {
    if(expermients) {
      expermients = Object.values(expermients)
      expermients.forEach((expermient)=>{
        setPartical(totalPractical + expermient.practicalTestGrade)
        setTheortical(totalTheortical + expermient.theoreticalTestGrade)
      })
      console.log(totalPractical)
      console.log(totalTheortical)
    }
  }, [expermients])
  
  return (
    <div className=' w-[458px] h-[354px] px-9 py-7 bg-white rounded-lg flex flex-col gap-y-5'>
      
      <span className=' text-text-black text-sm font-bold'>نتائج الاختبار العملي و النظري </span>
      <div className=' flex flex-col gap-y-4'>
          <div className="flex items-center justify-between">
            <div className=' flex items-center gap-x-[33px]'>
              <span className=' text-[#96A5B8] text-[10px]'>#</span>
              <span className=' text-[#96A5B8] text-[10px]'>شعار الدوره</span>
              <span className=' text-[#96A5B8] text-[10px]'>اسم الدوره</span>


            </div>
            <span className=' text-[#96A5B8] text-[10px] ml-6'>التقدير</span>
          </div>
          <Divider className=' bg-[#2DEC4C]' />
          <div className=' flex flex-col gap-y-[11px]'>
              <div className=' w-full flex items-center justify-end gap-4'>
                <span className=' text-[#96A5B8] text-[10px]'>العملي</span>
                <span className=' text-[#96A5B8] text-[10px]'>النظري</span>

              </div>
              <div className=' w-full flex items-center justify-between'>
                <div className=' flex items-center gap-x-[33px]'>
                  <span className=' text-text-black text-xs font-medium'>01</span>
                  <img src={Chemistry} alt="" />
                  <span className=' text-text-black text-xs font-medium'>الكيمياء</span>


                      

                </div>
                <div className=' flex items-center gap-x-8 ml-2'
                  style={{
                    direction: 'ltr'
                  }}
                >
                  <span className=' text-text-black text-xs font-medium'>{grade(totalPractical)}</span>
                  <span className=' text-text-black text-xs font-medium'>{grade(totalTheortical)}</span>
                </div>

              </div>
          </div>
      
      
      </div>
      
    </div>
  )
}

export default StudentResults
