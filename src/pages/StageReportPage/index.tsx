import React from 'react'
import ControlCard from '../../Components/ContraolCard'
import StagesReportFirstRow from '../../Components/StagesReportsFirstRow'
import StageSecondRow from '../../Components/StageSecondRow'

const StageReportPage = () => {
  return (
    <div>
        <ControlCard icon="Reports" title='التقارير' neasted={true} />
        <div className=' mt-[17px] flex flex-col gap-y-4 pb-5'
            style={{
                direction: 'rtl'
            }}
        >
           <StagesReportFirstRow />
           <StageSecondRow />

        </div>
      
    </div>
  )
}

export default StageReportPage
