import React, {useState} from 'react'
import ControlCard from '../../Components/ControlCard'
import { Image, Button,Tabs, Tab } from '@nextui-org/react'
import SearchIcon from '../../assets/Landing/ChooseHeadset/search.png'
import AddIcon from '../../assets/students/add.svg'
import UserIcon from '../../assets/students/user.svg'
import ChooseGrade from './ChooseGrade'
import ChooseClass from './ChooseClass'
import GridSelected from '../../assets/students/grid-selected.svg'
import GridUnSelected from '../../assets/students/grid-unselected.svg'

import StackSelected from '../../assets/students/stack-selected.svg'
import StackUnSelected from '../../assets/students/stack-unselected.svg'
import StudentsStackViews from '../../Components/StudentsView/Stack'
import StudentsGridView from '../../Components/StudentsView/Grid'
import { useNavigate } from 'react-router-dom'

import { getStudents } from '../../graphql/students'
import { useQuery } from '@apollo/client'
import Loading from '../../Components/Loading'
import { useThemeStore } from '../../stores/ThemeStore'

import EditIcon from '../../assets/settings/vuesax/linear/vuesax/linear/user-edit.svg'
import DarkEditIcon from '../../assets/settings/dark/vuesax/linear/user-edit.svg'

const StudentsPage = () => {
    const { loading, error, data: studentsData } = useQuery(getStudents, {fetchPolicy: 'no-cache'});
    const [activeTab, setActiveTab] = useState("stack")
    const [searchQuery, setSearchQuery] = useState<String>("");
    const [selectedLevel, setSelectedLevel] = useState('')
    const [selectedClass, setSelectedClass] = useState('')

    const {dark} = useThemeStore()

    const handleSearch = (event) => {
        
        setSearchQuery(event.target.value.toString().toLowerCase());
    };

    let students = studentsData?.admin.students || []; 

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


    const navigate = useNavigate()
 
    if (error) console.log(error.message)
  return (
    <React.Fragment>
              <ControlCard icon="Students" title=' الطلاب ' neasted={false}/>
               
               
                <div className=' mt-4 flex flex-col gap-y-5'>
                    <div className=' h-36 w-full bg-[#F7F9FC] dark:bg-[#252A33] flex justify-between items-center px-7'>
                        <Button className=' px-4  h-12 gap-x-4 flex items-center justify-center bg-primary rounded-lg'
                            onPress={() => navigate('/students/create')}
                        >
                            <Image src={AddIcon} />
                            <span className=' text-white text-sm font-bold '>إضافة طالب</span>
                            <Image src={UserIcon} />
                        </Button>
                        
                        <div className='w-[346px] h-12 bg-[#F0F2F4] dark:bg-[#F0F2F421] rounded-lg px-[18px] gap-x-[10px] flex items-center justify-center'>
                            
                            <input type="text" className='flex-1 bg-transparent text-right text-xs placeholder:text-[#929496] font-medium' 
                            placeholder='البحث' onChange={handleSearch} />
                            <img src={SearchIcon} alt="" />

                        </div>

                    </div>


                    <div className='flex w-fulll items-center justify-between flex-row-reverse '>
                        <div className='flex flex-row-reverse items-center gap-x-2 text-text-black dark:text-white'>
                            <h3 className=' text-lg font-bold'>الطلاب المسجلين في النظام</h3>
                            <span className='text-xs font-medium'>( {studentsData?.admin.students.length} طالب )</span>
                        </div>
                        <div className=' flex gap-x-4 flex-row-reverse items-center'>
                            <div className='flex items-center flex-row-reverse gap-x-[10px] '>
                          
                                <ChooseGrade
                                    selectedLevel={selectedLevel}
                                    setSelectedLevel={setSelectedLevel}
                                />
                                  <ChooseClass 
                                selectedClass={selectedClass}
                                setSelectedClass={setSelectedClass}
                            />
                                {
                                  selectedLevel  ?
                                <Button isIconOnly  color="danger" onPress={()=>clearFilters()} radius="full">
                                  x
                                </Button>
                                :
                                selectedClass &&
                                <Button isIconOnly  color="danger" onPress={()=>clearFilters()} radius="full">
                                  x
                                </Button>
                              }
                               

                            </div>
                        <Tabs color='primary'
                            classNames={{
                                base : "rounded",
                                tabList : "w-[168px] h-10 rounded p-0 border-none",
                                cursor : "rounded    px-4 ",
                                tab : "h-full "

                                
                            }}
                            selectedKey={activeTab}
                            onSelectionChange={(key : string) => setActiveTab(key)}
                            aria-label="sidebar tabs"
                        >
                            <Tab
                            key={"stack"}
                                title={
                                    <Image src={activeTab === "stack" || dark ? StackSelected : StackUnSelected}  radius='none' />
                                }
                            />

                            
                            <Tab
                            key={"grid"}
                                title={
                                    <Image src={activeTab === "grid" || dark ? GridSelected : GridUnSelected}  radius='none'/>
                                }
                            />
                            
                        </Tabs>
                        </div>

                    </div>
                    {loading ? 
                    <div className=' mt-7'>
                        <Loading />
                    </div>
                    : 
                    students && 
                    activeTab === "stack" ? <StudentsStackViews students={students} /> : <StudentsGridView students={students} />
                        
                    
                    }
                    
                    

                </div>


    </React.Fragment>
  )
}

export default StudentsPage