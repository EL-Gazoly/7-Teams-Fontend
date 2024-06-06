import { SearchStudent } from '../StudentsReports/SearchStudent';
import React, {useState, useEffect} from 'react'
import ControlCard from '../../Components/ControlCard'
import StackView from './StackView';
import GridView from './GridView';
import { useQuery } from '@apollo/client';
import { GetStudents } from '../../graphql/reports';
import Loading from '../../Components/Loading';




  

const LibraryPage = () => {
        const [activeTab, setActiveTab] = useState("grid")
    const { loading, error, data } = useQuery(GetStudents);
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedLevel, setSelectedLevel] = useState('')
    const [selectedClass, setSelectedClass] = useState('')
    let students = data?.admin.students || [];

  if (loading) return <Loading />
  if (error) return console.log(error);


  if (searchQuery) {
    students = students.filter((student) => {
       return (
        student.name.toLowerCase().includes(searchQuery) ||
        student.facilityId.toString().includes(searchQuery) 
       )
    });
    
}
  if(selectedLevel){
    students = students.filter((student) => {
        console.log(student.team.name)
        return student?.team.name === selectedLevel
    })
    console.log(students)
  }
  if(selectedClass){
    students = students.filter((student) => {
        return student?.class.number === selectedClass
    })

  }
const clearFilters = () => {
  setSelectedLevel('')
  setSelectedClass('')
}

  return (
   <React.Fragment> 
        <ControlCard icon="Library" title='الوسائط' neasted={false} />
        <div className=' mt-[22px] flex flex-col items-center gap-y-6'>
            <SearchStudent  activeTab={activeTab}  setActiveTab={setActiveTab} data={data?.admin.students} 
              setSearchQuery={setSearchQuery}
              selectedLevel={selectedLevel}
              setSelectedLevel={setSelectedLevel}
              selectedClass={selectedClass}
              setSelectedClass={setSelectedClass}
              clearFilters={clearFilters}
            />

            {
                activeTab === 'stack' ? <StackView data={students} /> : <GridView data={students} />
            }

        </div>
      
    </React.Fragment>

  )
}

export default LibraryPage