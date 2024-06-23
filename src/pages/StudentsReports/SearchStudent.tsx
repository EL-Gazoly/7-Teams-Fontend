import React from "react";
import SelectLevel from './SelectLevel.tsx'
import SelectClass from './SelectClass.tsx'
import SearchIcon from '@/assets/Landing/ChooseHeadset/search.png'
import GridSelected from '@/assets/students/grid-selected.svg'
import GridUnSelected from '@/assets/students/grid-unselected.svg'

import StackSelected from '@/assets/students/stack-selected.svg'
import StackUnSelected from '@/assets/students/stack-unselected.svg'
import { Image, Button,Tabs, Tab } from '@nextui-org/react'
import { useThemeStore } from "@/stores/ThemeStore.js";
import useTranslationStore from "@/stores/LanguageStore.js";
export const SearchStudent = ({
  activeTab,
  setActiveTab,
  data,
  setSearchQuery,
  selectedLevel,
  setSelectedLevel,
  selectedClass,
  setSelectedClass,
  clearFilters
}) =>{
const {dark} = useThemeStore()
const { language, getTranslation } = useTranslationStore()

{
  return <div className=' w-full h-[104px] bg-[#F7F9FC] dark:bg-primary-dark flex items-center pr-12 pl-[22px]
                 gap-x-[54px] z-30
                ' style={{
                  backdropFilter: "blur(64.4533462524414px)",
                  direction: language === "ar" ? "rtl" : "ltr"
                }}>

                        <div className={`flex  items-center ${selectedLevel || selectedClass ? "gap-x-2" : "gap-x-12"}`}>
                            <span className='text-xs text-text-black dark:text-white font-medium line-clamp-1x'>{getTranslation('student_count').replace('{count}', data.length)}</span>
                            <div className=' w-[300px] h-12 rounded-lg bg-[#DDE0E3] dark:bg-[#929496]/30 flex items-center px-6 gap-x-[10px]'>
                                <img src={SearchIcon} alt="" />
                                <input type="text" placeholder={getTranslation("search")} className=' flex-1  bg-transparent placeholder:text-[#929496] text-xs font-medium'
                                  onChange={e => setSearchQuery(e.target.value.toString().toLowerCase())}
                                />
                            </div>

                        </div>

                        <div className=' flex items-center gap-x-[34px]'>
                            <div className=' flex items-center gap-x-[6px] z-30'>
                                <SelectLevel 
                                  selectedLevel={selectedLevel}
                                  setSelectedLevel={setSelectedLevel}
                                />
                                <SelectClass 
                                  selectedClass={selectedClass}
                                  setSelectedClass={setSelectedClass}
                                />{
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
                           

                            <Tabs color='primary' classNames={{
                              base: "rounded",
                              tabList: "w-[168px] h-10 rounded p-0 border-none",
                              cursor: "rounded    px-4 ",
                              tab: "h-full "
                            }} selectedKey={activeTab} onSelectionChange={(key: string) => setActiveTab(key)} aria-label="sidebar tabs">
                                <Tab key={"stack"} title={<Image src={activeTab === "stack" || dark ? StackSelected : StackUnSelected} radius='none' />} />

                                
                                <Tab key={"grid"} title={<Image src={activeTab === "grid" || dark ? GridSelected : GridUnSelected} radius='none' />} />
                                
                            </Tabs>

                        </div>


                        

                </div>;
}
}