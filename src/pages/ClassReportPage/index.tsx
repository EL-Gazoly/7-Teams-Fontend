import {useEffect, useState} from 'react'
import ControlCard from '../../Components/ControlCard'
import  ClassesReportFirstRow from '../../Components/ClassesReportsFirstRow'
import  ClassessSecondRow from '../../Components/ClassesSecondRow'
import ClassesReportsThirdRow from '../../Components/ClasssesReportsThirdRow'
import ClassesReportFourthRow from '../../Components/ClassesReportsFoutrhRow'
import { useQuery } from '@apollo/client'
import { GetClassReports } from '../../graphql/reports'
import { useParams } from 'react-router-dom'
import Loading from '../../Components/Loading'
import useTranslationStore from '@/stores/LanguageStore'
const ClassReportPage = () => {
  const {stage , class: number} = useParams()
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

  const { language, getTranslation } = useTranslationStore();

  const { loading, error, data } = useQuery(GetClassReports,{
    variables: {
      number: number,
      name: stage
    }
  })
  useEffect(() => {
    if(data) {
      console.log(data)
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
    data.classesByNumber.forEach((classes) => {
    classes.students.forEach((student) => {
        let maxTheoreticalTestGrade = 0;
        let maxPracticalTestGrade = 0;
  
        student.studnetExpriment.forEach((experiment) => {
          totalTheoreticalTestGrade += experiment.theoreticalTestGrade;
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
        totalStudents += classes.students.length; 
  
        // Update total practical and theoretical test grades with the maximum values
        practicalTestGrade += maxPracticalTestGrade;
  
        
  
    });
    }
    );
    console.log("Total stduent is ", totalStudents)

    const practicalTestGradePercentage = (practicalTestGrade / (totalStudents * 100)) * 100;
    const theoreticalTestGradePercentage = (totalTheoreticalTestGrade / (totalStudents * 100)) * 100;
    const overallGrade = ((totalTheoreticalTestGrade + practicalTestGrade ) / (totalStudents * 200) * 100)
  console.log("Total Theoretical Test Grade:", totalTheoreticalTestGrade);
    setTotalTheoreticalTestGrade(totalTheoreticalTestGrade > 100 ? 100 : totalTheoreticalTestGrade)
    setTotalPracticalTime(totalPracticalTime)
    setTotalTheorticalTime(totalTheorticalTime)
    setTotalTrainingTime(totalTrainingTime)
    setPracticalTestGrade(practicalTestGrade > 100 ? 100 : practicalTestGrade )
    setEnterTraining(enterTraining)
    setEnterTheortical(enterTheortical)
    setEnterPratical(enterPratical)
    setTotalStudents(totalStudents)
    setPracticalTestGradePercentage(Math.round(practicalTestGradePercentage > 100 ? 100 : practicalTestGradePercentage))
    setTheoreticalTestGradePercentage(Math.round(theoreticalTestGradePercentage > 100 ? 100 : theoreticalTestGradePercentage))
    setOverallGrade(overallGrade)
    setOverallTime(totalPracticalTime+ totalTrainingTime + totalTrainingTime)
    

  
    console.log("Percentage Practical Test Grade:", practicalTestGradePercentage.toFixed(2) + "%");
    console.log("Percentage Theoretical Test Grade:", theoreticalTestGradePercentage.toFixed(2) + "%");
  }

  return (
    <div className=''>
        <ControlCard icon="Reports" title='reports' neasted={true} info='classReportPageDescription' />
        <div className=' mt-[17px] flex flex-col gap-y-4 pb-5 certificateDiv'
            style={{
                direction: language === 'ar' ? 'rtl' : 'ltr',
            }}
        >
           <ClassesReportFirstRow totatotalTheoreticalTestGrade={theoreticalTestGradePercentage}
            practicalTestGrade={practicalTestGradePercentage} overallGrade={overallGrade} 
            totalPracticalTime={totalPracticalTime} totalTheorticalTime={totalTheorticalTime} totalTrainingTime={totalTrainingTime} />
           <ClassessSecondRow  enterTraining={enterTraining} enterTheortical={enterTheortical} enterPratical={enterPratical} 
            totalPracticalTime={totalPracticalTime} totalTheorticalTime={totalTheorticalTime} totalTrainingTime={totalTrainingTime}/>
          <ClassesReportsThirdRow data={data} />
          <ClassesReportFourthRow experiments={data} />
          
          

        </div>
      
    </div>
  )
}

export default ClassReportPage
