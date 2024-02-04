import {useState, useEffect, useRef} from 'react'
import ControlCard from '../../Components/ContraolCard'
import StudentReportsFirstRow from '../../Components/StudentReportsFirstRow'
import StudentReportsSecondRow from '../../Components/StudentReportsSecondRow'
import StudentReportsThirdRow from '../../Components/StudentReportsThirdRow'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { GetStudentReports } from '../../graphql/reports'
import Loading from '../../Components/Loading'
const StudentReportsPage = () => {
  const pageRef = useRef(null)
  const [experiments, setExperiments] = useState<any>()
  const [maxGrades , setMaxGrades] = useState<any>()
  const { id } = useParams()
  const { loading, error, data } = useQuery(GetStudentReports, {
    variables: {
      studentId: id
    }
  })
  useEffect(() => {
    if(data) {
     const experiments = data?.student.studnetExpriment;
 
    
      // Initialize an object to store the sums and maximum grades by experiment ID
      const sumByExperimentId = {};
      const maxGradesByExperimentId = {};
    
      experiments.forEach((experiment) => {
        const experimentId = experiment.expriment.exprimentId;
    
        // If the experiment ID is not already in sumByExperimentId, initialize it
        if (!sumByExperimentId[experimentId]) {
          sumByExperimentId[experimentId] = {
            name: '',
            enterPratical: 0,
            enterTheortical: 0,
            enterTraining: 0,
            totalPraticalTime: 0,
            totalTheorticalTime: 0,
            totalTrainingTime: 0,
            theoreticalTestGrade: 0,
            practicalTestGrade: 0,
          };
        }
    
        // If the experiment ID is not already in maxGradesByExperimentId, initialize it
        if (!maxGradesByExperimentId[experimentId]) {
          maxGradesByExperimentId[experimentId] = {
            maxTheoreticalTestGrade: 0,
            maxPracticalTestGrade: 0,
          };
        }
    
        // Update the maximum theoreticalTestGrade if the current value is greater
        maxGradesByExperimentId[experimentId].maxTheoreticalTestGrade = Math.max(
          maxGradesByExperimentId[experimentId].maxTheoreticalTestGrade,
          experiment.theoreticalTestGrade
        );
    
        // Update the maximum practicalTestGrade if the current value is greater
        maxGradesByExperimentId[experimentId].maxPracticalTestGrade = Math.max(
          maxGradesByExperimentId[experimentId].maxPracticalTestGrade,
          experiment.practicalTestGrade
        );
    
        // Add the values to the sums
        sumByExperimentId[experimentId].name = experiment.expriment.name;
        sumByExperimentId[experimentId].enterPratical += experiment.enterPratical;
        sumByExperimentId[experimentId].enterTheortical += experiment.enterTheortical;
        sumByExperimentId[experimentId].enterTraining += experiment.enterTraining;
        sumByExperimentId[experimentId].totalPraticalTime += experiment.totalPraticalTime;
        sumByExperimentId[experimentId].totalTheorticalTime += experiment.totalTheorticalTime;
        sumByExperimentId[experimentId].totalTrainingTime += experiment.totalTrainingTime;
        sumByExperimentId[experimentId].theoreticalTestGrade += experiment.theoreticalTestGrade;
        sumByExperimentId[experimentId].practicalTestGrade += experiment.practicalTestGrade;
      });
    
      // Now sumByExperimentId contains the sums, and maxGradesByExperimentId contains the maximum theoreticalTestGrade and practicalTestGrade for each experiment ID
    
    
     setMaxGrades(maxGradesByExperimentId)
     setExperiments(sumByExperimentId)
    }
   }, [data])
     
  
  if (loading) return <Loading />

  if(data) console.log(data)
  if (error) return console.log(error)

  return (
    <div ref={pageRef} className='' >
        <ControlCard icon="Reports" title='التقارير' neasted={true} />

        <div className=' mt-[17px] flex flex-col gap-y-4 pb-5 certificateDiv'
            style={{
                direction: 'rtl'
            }}
        >
            <StudentReportsFirstRow data={data} expermients={experiments}
              ref={pageRef} maxGrades={maxGrades}
            />
            <StudentReportsSecondRow data={data} expermients={experiments} />
            <StudentReportsThirdRow expermients={experiments}
              maxGrades={maxGrades}
            />

        </div>
      
    </div>
  )
}

export default StudentReportsPage
