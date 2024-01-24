import React, {useState} from 'react'
import ControlCard from '../../Components/ContraolCard'
import { Image, Button,Tabs, Tab } from '@nextui-org/react'
import SearchIcon from '../../assets/Landing/ChooseHeadset/search.png'
import GridSelected from '../../assets/students/grid-selected.svg'
import GridUnSelected from '../../assets/students/grid-unselected.svg'

import StackSelected from '../../assets/students/stack-selected.svg'
import StackUnSelected from '../../assets/students/stack-unselected.svg'
import SelectLevel from './SelectLevel.jsx'

const StudentsReports = () => {
    const [activeTab, setActiveTab] = useState("stack")
  return (
    <React.Fragment>
        <ControlCard icon="Reports" title='التقارير' neasted={true} />
        <div className=' mt-[22px] flex flex-col items-center gap-y-6'>
                <div className=' w-full h-[104px] bg-[#F7F9FC] flex items-center pr-12 pl-[22px]
                 gap-x-[54px]
                '
                    style={{ backdropFilter: "blur(64.4533462524414px)", direction: 'rtl' }} >

                        <div className='flex  items-center gap-x-12'>
                            <span className=' text-xs text-text-black font-medium w-[61px]'> ( 632 طالب ) </span>
                            <div className=' w-[300px] h-12 rounded-lg bg-[#DDE0E3] flex items-center px-6 gap-x-[10px]'>
                                <img src={SearchIcon} alt="" />
                                <input type="text" placeholder='البحث' className=' flex-1 text-right bg-transparent placeholder:text-[#929496] text-xs font-medium' />
                            </div>

                        </div>

                        <div className=' flex items-center gap-x-[34px]'>
                            <div className=' flex items-center gap-x-[6px]'>
                                <SelectLevel />
                                <SelectLevel />
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
                                        <Image src={activeTab === "stack" ? StackSelected : StackUnSelected}  radius='none' />
                                    }
                                />

                                
                                <Tab
                                key={"grid"}
                                    title={
                                        <Image src={activeTab === "grid" ? GridSelected : GridUnSelected}  radius='none'/>
                                    }
                                />
                                
                            </Tabs>

                        </div>


                        

                </div>

        </div>
      
    </React.Fragment>
  )
}

export default StudentsReports
