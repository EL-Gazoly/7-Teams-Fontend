import {useEffect , useState} from 'react'
import ControlCard from '../../Components/ContraolCard'
import StagesReportFirstRow from '../../Components/StagesReportsFirstRow'
import StageSecondRow from '../../Components/StageSecondRow'
import StageThirdRow from '../../Components/StageThirdRow'
import StageReportsFourthRow from '../../Components/StageReportsFoutrhRow'
import { useQuery } from '@apollo/client'
import {  GetTeamReports } from '../../graphql/reports'
import { useParams } from 'react-router-dom'
import Loading from '../../Components/Loading'
const StageReportPage = () => {
  const { stage } = useParams()
  const [totalTheoreticalTestGrade, setTotalTheoreticalTestGrade] = useState(0)
  const [totalPracticalTime, setTotalPracticalTime] = useState(0)
  const [totalTheorticalTime, setTotalTheorticalTime] = useState(0)
  const [totalTrainingTime, setTotalTrainingTime] = useState(0)
  const [practicalTestGrade, setPracticalTestGrade] = useState(0)
  const [enterTraining, setEnterTraining] = useState(0)
  const [enterTheortical, setEnterTheortical] = useState(0)
  const [enterPratical, setEnterPratical] = useState(0)
  const [totalStudents, setTotalStudents] = useState(0)
  const [practicalTestGradePercentage, setPracticalTestGradePercentage] = useState(0)
  const [theoreticalTestGradePercentage, setTheoreticalTestGradePercentage] = useState(0)
  const [overallGrade ,setOverallGrade ] = useState(0)
  const [overallTime, setOverallTime] = useState(0)
  const { loading, error, data } = useQuery(GetTeamReports,{
    variables:{
      name: stage
    }
  })
  useEffect(() => {
    if(data){
      calculateTotal()
    }
  }, [data])
  if (loading) return <Loading />
  if (error) return console.log(error)

  function calculateTotal() {
    let totalTheoreticalTestGrade = 0;
    let totalPracticalTime = 0;
    let totalTheorticalTime = 0;
    let totalTrainingTime = 0;
    let practicalTestGrade = 0;
    let enterTraining = 0;
    let enterTheortical = 0;
    let enterPratical = 0;
  
    let totalStudents = 0;
    data.teamByName.forEach((team) => {
    team.classes.forEach((classInfo) => {
      classInfo.students.forEach((student) => {
        let maxTheoreticalTestGrade = 0;
        let maxPracticalTestGrade = 0;
  
        student.studnetExpriment.forEach((experiment) => {
          totalPracticalTime += experiment.totalPraticalTime;
          totalTheorticalTime += experiment.totalTheorticalTime;
          totalTrainingTime += experiment.totalTrainingTime;
  
          // Update maximum theoretical test grade
          maxTheoreticalTestGrade = Math.max(maxTheoreticalTestGrade, experiment.theoreticalTestGrade);
  
          // Update maximum practical test grade
          maxPracticalTestGrade = Math.max(maxPracticalTestGrade, experiment.practicalTestGrade);
  
          enterTraining += experiment.enterTraining;
          enterTheortical += experiment.enterTheortical;
          enterPratical += experiment.enterPratical;
        });
        totalTheoreticalTestGrade += maxTheoreticalTestGrade;
        // Update total practical and theoretical test grades with the maximum values
        practicalTestGrade += maxPracticalTestGrade;
  
        totalStudents++;
      });
    });
  });

    const practicalTestGradePercentage = (practicalTestGrade / (totalStudents * 100)) * 100;
    const theoreticalTestGradePercentage = (totalTheoreticalTestGrade / (totalStudents * 100)) * 100;
    const overallGrade = ((totalTheoreticalTestGrade + practicalTestGrade ) / (totalStudents * 100) * 100)
  
    setTotalTheoreticalTestGrade(totalTheoreticalTestGrade)
    setTotalPracticalTime(totalPracticalTime)
    setTotalTheorticalTime(totalTheorticalTime)
    setTotalTrainingTime(totalTrainingTime)
    setPracticalTestGrade(practicalTestGrade)
    setEnterTraining(enterTraining)
    setEnterTheortical(enterTheortical)
    setEnterPratical(enterPratical)
    setTotalStudents(totalStudents)
    setPracticalTestGradePercentage(Math.round(practicalTestGradePercentage > 100 ? 100 : practicalTestGradePercentage))
    setTheoreticalTestGradePercentage(Math.round(theoreticalTestGradePercentage > 100 ? 100 : theoreticalTestGradePercentage))
    setOverallGrade(overallGrade)
    setOverallTime(totalPracticalTime+ totalTrainingTime + totalTrainingTime)
  }
  
  return (
    <div className=''>
        <ControlCard icon="Reports" title='التقارير' neasted={true} />
        <div className=' mt-[17px] flex flex-col gap-y-4 pb-5 certificateDiv'
            style={{
                direction: 'rtl'
            }}
        >
           <StagesReportFirstRow totatotalTheoreticalTestGrade={theoreticalTestGradePercentage}
            practicalTestGrade={practicalTestGradePercentage} overallGrade={overallGrade} 
            totalPracticalTime={totalPracticalTime} totalTheorticalTime={totalTheorticalTime} totalTrainingTime={totalTrainingTime}
            />
           <StageSecondRow enterTraining={enterTraining} enterTheortical={enterTheortical} enterPratical={enterPratical} 
            totalPracticalTime={totalPracticalTime} totalTheorticalTime={totalTheorticalTime} totalTrainingTime={totalTrainingTime}
           />
           <StageThirdRow data={data} 
            setEnterTraining={setEnterTraining} setEnterTheortical={setEnterTheortical} setEnterPratical={setEnterPratical}
            enterTraining={enterTraining} enterTheortical={enterTheortical} enterPratical={enterPratical}
           />
           <StageReportsFourthRow  experminets={data?.team}/>

        </div>
      
    </div>
  )
}

export default StageReportPage
