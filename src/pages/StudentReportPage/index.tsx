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
  const { id } = useParams()
  const { loading, error, data } = useQuery(GetStudentReports, {
    variables: {
      studentId: id
    }
  })
  useEffect(() => {
    if(data) {
     const experiments = data?.student.studnetExpriment;
     const sumByExperimentId = {};
 
     experiments.forEach((experiment) => {
         const experimentId = experiment.expriment.exprimentId;
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
     console.log(sumByExperimentId)
     setExperiments(sumByExperimentId)
    }
   }, [data])
     
  
  if (loading) return <Loading />

  if(data) console.log(data)
  if (error) return console.log(error)

  return (
    <div ref={pageRef} className='certificateDiv' >
        <ControlCard icon="Reports" title='التقارير' neasted={true} />

        <div className=' mt-[17px] flex flex-col gap-y-4 pb-5'
            style={{
                direction: 'rtl'
            }}
        >
            <StudentReportsFirstRow data={data} expermients={experiments}
              ref={pageRef}
            />
            <StudentReportsSecondRow data={data} expermients={experiments} />
            <StudentReportsThirdRow expermients={experiments} />

        </div>
      
    </div>
  )
}

export default StudentReportsPage
