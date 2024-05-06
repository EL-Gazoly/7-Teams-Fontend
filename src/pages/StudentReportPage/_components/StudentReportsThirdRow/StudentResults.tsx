import {useState, useEffect} from 'react'
import { Divider } from '@nextui-org/react'
import Chemistry from '../../../../assets/SelectCourse/SelectSubject/chemistry.svg'
import Physics from '../../../../assets/SelectCourse/SelectSubject/physics.svg'
import grade from 'letter-grade'
import { physicsOptions, chemistryOptions } from '../../../../data/expermients'
const StudentResults = ({data}) => {
  const [totalPractical, setPartical] = useState(0)
  const [totalTheortical, setTheortical] = useState(0)
  const [physicsPractical, setPhysicsPractical] = useState(0)
  const [physicsTheortical, setPhysicsTheortical] = useState(0)
  useEffect(() => {
   
    let physicsTotalTheoretical = 0
    let physicsTotalPractical = 0
    let chemistryTotalTheoretical = 0
    let chemistryTotalPractical = 0
    
    if(data) {
      const maxChemistryGradesByExperimentId = {};
      const maxPhysicsGradesByExperimentId = {};

     data.student.studnetExpriment.forEach((experiment) => {  

      const experimentId = experiment.expriment.exprimentId;
        const isPhysicsExperiment = physicsOptions.some(option => option.value === experimentId);
        const isChemistryExperiment = chemistryOptions.some(option => option.value === experimentId);


      if (isPhysicsExperiment) {
        if (!maxPhysicsGradesByExperimentId[experimentId]) {
          maxPhysicsGradesByExperimentId[experimentId] = {
            maxTheoreticalTestGrade: 0,
            maxPracticalTestGrade: 0,
          };
        }

        maxPhysicsGradesByExperimentId[experimentId].maxTheoreticalTestGrade = Math.max(
          maxPhysicsGradesByExperimentId[experimentId].maxTheoreticalTestGrade,
          experiment.theoreticalTestGrade
        );

        maxPhysicsGradesByExperimentId[experimentId].maxPracticalTestGrade = Math.max(
          maxPhysicsGradesByExperimentId[experimentId].maxPracticalTestGrade,
          experiment.practicalTestGrade
        );
        physicsTotalTheoretical += maxPhysicsGradesByExperimentId[experimentId].maxTheoreticalTestGrade;
          physicsTotalPractical += maxPhysicsGradesByExperimentId[experimentId].maxPracticalTestGrade;

      } else if (isChemistryExperiment) {
        if (!maxChemistryGradesByExperimentId[experimentId]) {
          maxChemistryGradesByExperimentId[experimentId] = {
            maxTheoreticalTestGrade: 0,
            maxPracticalTestGrade: 0,
          };
        }

        maxChemistryGradesByExperimentId[experimentId].maxTheoreticalTestGrade = Math.max(
          maxChemistryGradesByExperimentId[experimentId].maxTheoreticalTestGrade,
          experiment.theoreticalTestGrade
        );

        maxChemistryGradesByExperimentId[experimentId].maxPracticalTestGrade = Math.max(
          maxChemistryGradesByExperimentId[experimentId].maxPracticalTestGrade,
          experiment.practicalTestGrade
        );
        chemistryTotalTheoretical += maxChemistryGradesByExperimentId[experimentId].maxTheoreticalTestGrade;
          chemistryTotalPractical += maxChemistryGradesByExperimentId[experimentId].maxPracticalTestGrade;
      }
});
    
      setPartical(chemistryTotalPractical / chemistryOptions.length * 100 / 100)
      setTheortical(chemistryTotalTheoretical / chemistryOptions.length * 100 / 100)
      setPhysicsPractical(physicsTotalPractical / physicsOptions.length * 100 / 100)
      setPhysicsTheortical(physicsTotalTheoretical   / physicsOptions.length * 100 / 100)
    }
   
  }, [data])
  
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
              <div className=' w-full flex items-center justify-between'>
                <div className=' flex items-center gap-x-[33px] text-text-black dark:text-white text-xs font-medium'>
                  <span >02</span>
                  <img src={Physics} alt="" />
                  <span >الفيزياء</span>


                      

                </div>
                <div className=' flex items-center gap-x-8 ml-2'
                  style={{
                    direction: 'ltr'
                  }}
                >
                  <span >{grade(physicsPractical)}</span>
                  <span >{grade(physicsTheortical)}</span>
                </div>

              </div>
          </div>
      
      
      </div>
      
    </div>
  )
}

export default StudentResults
