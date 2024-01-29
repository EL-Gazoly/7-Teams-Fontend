import { SearchStudent } from './SearchStudent';
import React, {useState} from 'react'
import ControlCard from '../../Components/ContraolCard'
import StackView from '../../Components/StudentsReportsStackView';
import GridView from '../../Components/StudentsReportsGridView';
import { useQuery } from '@apollo/client';
import { GetStudents } from '../../graphql/reports';
import Loading from '../../Components/Loading';




const StudentsReports = () => {
    const [activeTab, setActiveTab] = useState("grid")
    const { loading, error, data } = useQuery(GetStudents);

    if (loading) return (
      <div className=' w-full h-full flex items-center justify-center'>
          <Loading />
      </div>
    );
  
  if(data) console.log(data)
  if (error) return console.log(error);

  return (
    <React.Fragment>
        <ControlCard icon="Reports" title='التقارير' neasted={true} />
        <div className=' mt-[22px] flex flex-col items-center gap-y-6'>
            <SearchStudent  activeTab={activeTab}  setActiveTab={setActiveTab}  />

            {
                activeTab === 'stack' ? <StackView data={data} /> : <GridView data={data} />
            }

        </div>
      
    </React.Fragment>
  )
}

export default StudentsReports
