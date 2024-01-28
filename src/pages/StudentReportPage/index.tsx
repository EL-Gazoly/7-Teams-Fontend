import React from 'react'
import ControlCard from '../../Components/ContraolCard'
import StudentReportsFirstRow from '../../Components/StudentReportsFirstRow'
import StudentReportsSecondRow from '../../Components/StudentReportsSecondRow'
import StudentReportsThirdRow from '../../Components/StudentReportsThirdRow'
const StudentReportsPage = () => {
  return (
    <div >
        <ControlCard icon="Reports" title='التقارير' neasted={true} />

        <div className=' mt-[17px] flex flex-col gap-y-4 pb-5'
            style={{
                direction: 'rtl'
            }}
        >
            <StudentReportsFirstRow />
            <StudentReportsSecondRow />
            <StudentReportsThirdRow />

        </div>
      
    </div>
  )
}

export default StudentReportsPage
