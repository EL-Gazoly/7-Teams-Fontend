import React from 'react'
import ControlCard from '../../Components/ContraolCard'
import StudentReportsFirstRow from '../../Components/StudentReportsFirstRow'
import StudentReportsSecondRow from '../../Components/StudentReportsSecondRow'
const StudentReportsPage = () => {
  return (
    <div >
        <ControlCard icon="Reports" title='التقارير' neasted={true} />

        <div className=' mt-[17px] flex flex-col gap-y-4'
            style={{
                direction: 'rtl'
            }}
        >
            <StudentReportsFirstRow />
            <StudentReportsSecondRow />

        </div>
      
    </div>
  )
}

export default StudentReportsPage
