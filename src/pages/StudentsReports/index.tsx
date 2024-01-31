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
    const [searchQuery, setSearchQuery] = useState('')

    if (loading) return <Loading />
  if (error) return console.log(error);
  let students = data?.admin.students || []; 

  if (searchQuery) {
    students = students.filter((student) => {
       return (
        student.name.toLowerCase().includes(searchQuery) ||
        student.generatedId.toString().includes(searchQuery) 
       )
    });
}


  return (
    <React.Fragment>
        <ControlCard icon="Reports" title='التقارير' neasted={true} />
        <div className=' mt-[22px] flex flex-col items-center gap-y-6'>
            <SearchStudent  activeTab={activeTab}  setActiveTab={setActiveTab} data={data?.admin.students} 
              setSearchQuery={setSearchQuery}
            />

            {
                activeTab === 'stack' ? <StackView data={students} /> : <GridView data={students} />
            }

        </div>
      
    </React.Fragment>
  )
}

export default StudentsReports
