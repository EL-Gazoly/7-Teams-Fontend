import React from 'react'
import ControlCard from '../../Components/ContraolCard'
import StudentReportsFirstRow from '../../Components/StudentReportsFirstRow'
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

        </div>
      
    </div>
  )
}

export default StudentReportsPage
