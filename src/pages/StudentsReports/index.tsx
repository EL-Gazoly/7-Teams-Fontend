import { SearchStudent } from './SearchStudent';
import React, {useState} from 'react'
import ControlCard from '../../Components/ContraolCard'
import StackView from '../../Components/StudentsReportsStackView';
import GridView from '../../Components/StudentsReportsGridView';




const StudentsReports = () => {
    const [activeTab, setActiveTab] = useState("grid")
  return (
    <React.Fragment>
        <ControlCard icon="Reports" title='التقارير' neasted={true} />
        <div className=' mt-[22px] flex flex-col items-center gap-y-6'>
            <SearchStudent  activeTab={activeTab}  setActiveTab={setActiveTab}  />

            {
                activeTab === 'stack' ? <StackView /> : <GridView />
            }

        </div>
      
    </React.Fragment>
  )
}

export default StudentsReports
