import {useRef , useState, useEffect} from 'react'
import ControlCard from '../../Components/ControlCard'
import FirstRow from './_components/SchoolReport/FirstRow'
import SecondRow from './_components/SchoolReport/SecondRow'
import ThirdRow from './_components/SchoolReport/ThirdRow'
import FourthRow from './_components/SchoolReport/FourthRow'
import { useQuery } from '@apollo/client'
import { GetSchoolReports } from '../../graphql/reports'
import { useParams } from 'react-router-dom'
import Loading from '../../Components/Loading'
import useTranslationStore from '@/stores/LanguageStore'

const SchoolReport = () => {
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
    const pageRef = useRef(null)
    const { id } = useParams()
    const { language } = useTranslationStore()

    const { loading, error, data } = useQuery(GetSchoolReports,{
        variables:{
            schoolId: id
        }
    })
    useEffect(() => {
        if(data){
            calculateTotal()
        }
    }, [data])
    if (loading) return <Loading />
    if (error) return console.log(error)
      if (data) {
        console.log(data)
      }
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
    data.school.teams.forEach((team) => {
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
    const overallGrade = ((totalTheoreticalTestGrade + practicalTestGrade ) / (totalStudents * 200) * 100)
  
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
    <div ref={pageRef} className=' flex flex-col gap-y-7 items-center'>
       <ControlCard icon='Schools' title='sidebar-schools' neasted={true} />
        <div className=' max-w-full flex flex-col gap-x-1 gap-y-3 items-center certificateDiv'
          style={{
            direction: language === 'ar' ? 'rtl' : 'ltr',
          }}
        >
            <FirstRow data={data} totatotalTheoreticalTestGrade={theoreticalTestGradePercentage}
            practicalTestGrade={practicalTestGradePercentage} overallGrade={overallGrade} 
            totalPracticalTime={totalPracticalTime} totalTheorticalTime={totalTheorticalTime} totalTrainingTime={totalTrainingTime} />
            <SecondRow enterTraining={enterTraining} enterTheortical={enterTheortical} enterPratical={enterPratical} 
            totalPracticalTime={totalPracticalTime} totalTheorticalTime={totalTheorticalTime} totalTrainingTime={totalTrainingTime} />
            <ThirdRow data={data} />
            <FourthRow experminets={data?.school} /> 
        </div>

      
    </div>
  )
}

export default SchoolReport
