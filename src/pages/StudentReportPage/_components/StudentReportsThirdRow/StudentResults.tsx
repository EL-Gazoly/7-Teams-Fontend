import {useState, useEffect} from 'react'
import { Divider } from '@nextui-org/react'
import Chemistry from '../../../../assets/SelectCourse/SelectSubject/chemistry.svg'

import grade from 'letter-grade'
const StudentResults = ({expermients, maxGrades}) => {
  const [totalPractical, setPartical] = useState(0)
  const [totalTheortical, setTheortical] = useState(0)
  useEffect(() => {
    let totalTheortical = 0
    let practicalTestGrade = 0
    
    if(expermients) {
      expermients = Object.values(maxGrades)
      expermients.forEach((expermient)=>{
        totalTheortical += expermient.maxTheoreticalTestGrade
        practicalTestGrade += expermient.maxPracticalTestGrade
      })
      console.log("this is total theortical", totalTheortical)
      console.log("this is total practical", practicalTestGrade)
      console.log(practicalTestGrade)
      setPartical(practicalTestGrade / 4 * 100 / 100)
      setTheortical(totalTheortical / 4 * 100 / 100)
    }
   
  }, [expermients])
  
  return (
    <div className=' w-[458px] h-[354px] px-9 py-7 bg-white dark:bg-primary-dark rounded-lg flex flex-col gap-y-5'>
      
      <span className=' text-text-black dark:text-white text-sm font-bold'>نتائج الاختبار العملي و النظري </span>
      <div className=' flex flex-col gap-y-4'>
          <div className="flex items-center justify-between">
            <div className=' flex items-center gap-x-[33px] text-[#96A5B8] dark:text-[#EAEBEC] text-[10px]'>
              <span>#</span>
              <span>شعار الدوره</span>
              <span >اسم الدوره</span>


            </div>
            <span className=' text-[#96A5B8] dark:text-[#EAEBEC] text-[10px] ml-6'>التقدير</span>
          </div>
          <Divider className=' bg-[#2DEC4C]' />
          <div className=' flex flex-col gap-y-[11px]'>
              <div className=' w-full flex items-center justify-end gap-4 text-[#96A5B8] dark:text-[#EAEBEC] text-[10px]'>
                <span >العملي</span>
                <span>النظري</span>

              </div>
              <div className=' w-full flex items-center justify-between'>
                <div className=' flex items-center gap-x-[33px] text-text-black dark:text-white text-xs font-medium'>
                  <span >01</span>
                  <img src={Chemistry} alt="" />
                  <span >الكيمياء</span>


                      

                </div>
                <div className=' flex items-center gap-x-8 ml-2'
                  style={{
                    direction: 'ltr'
                  }}
                >
                  <span >{grade(totalPractical)}</span>
                  <span >{grade(totalTheortical)}</span>
                </div>

              </div>
          </div>
      
      
      </div>
      
    </div>
  )
}

export default StudentResults
