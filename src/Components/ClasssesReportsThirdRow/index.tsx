import TotalGradeForStage from './TotalGradesForClass'
import ExpermientEnteranceCounter from './ExpermientEnteranceCounter'


const ClassesReportsThirdRow = ({data}) => {
  return (
    <div className=' flex items-center gap-x-2'>

        <TotalGradeForStage experiments={data} />
        <ExpermientEnteranceCounter data={data} />
      
    </div>
  )
}

export default ClassesReportsThirdRow
