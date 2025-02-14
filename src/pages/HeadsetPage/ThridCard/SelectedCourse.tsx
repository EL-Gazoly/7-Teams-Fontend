import React, {useState} from 'react'
import CourseBg from '../../../assets/headset page/course.png'

import { Image, Button } from '@nextui-org/react';
import db from '../../../config/firebase';
import { ref, update} from 'firebase/database'
import { useParams } from 'react-router-dom';
import { useThemeStore } from '../../../stores/ThemeStore';
import { useMutation } from '@apollo/client'
import { CREATELOG, GETLOGS } from '../../../graphql/LogsQuery'

type SelectedCourseProps = {
    selectedItem: {
        value: string;
        icon: string;
        title: string;
        name: string;
    };
    setSelectedItem: React.Dispatch<any>
}


const SelectedCourse = ({selectedItem , setSelectedItem} : SelectedCourseProps) => {
    const [createLog, { loading: loadingCreateLog, error: errorCreateLog, data: dataCreateLog }] = useMutation(CREATELOG,{
        refetchQueries : [{query : GETLOGS}]
      });
    const { dark } = useThemeStore()
    const { mac } = useParams<{ mac: string }>()

    const handelStartFullCourse = () => {
        handelOpenCourse("FullCourse")
    }
    const handelStartTraning = () => {
        handelOpenCourse("StartTraining")
    }
    const handelStartPracticalTest = () => {
        handelOpenCourse("Practical")
    }
    const handelStartTheoreticalTest = () => {
        handelOpenCourse("Theoretical")
    }

    const handelOpenCourse = async (type) => {
        const deviceQuery = ref(db, `/Devices/${mac}`);
        try {
            update(deviceQuery, {
                "Control-App": {
                    "Course": "com.SevenTeams.ScienceExperiments",
                    "ExperimentId": selectedItem.value,
                    "ExperimentName": selectedItem.title,
                    "Type": type,
                    "Command" : "Open",
                }
            })
            await createLog({
                variables: {
                  data: {
                    action: `Start ${type} ${selectedItem.name} on device number ${mac}`,
                  }
                }
              })
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
    
  return (
    <div className={`selected-course absolute inset-0 z-20`}>
        {!dark &&
        <img src={CourseBg} alt="" className=' w-full h-full' />
        }
        <div className=' absolute dark:bg-primary-dark rounded-2xl  top-0 left-0 w-full h-full flex flex-col items-center justify-center gap-y-[26px]'>
            <div className=' flex flex-col gap-y-[18px]'>
                <div className=' w-full flex items-center justify-center mr-1'>
                     <Image src={selectedItem.icon} width={54} height={59} radius='none' />
                </div>
               
                <span className=' text-text-black dark:text-white text-[21px] font-bold'> {selectedItem.name} </span>
            </div>

            <div className=' grid grid-cols-2 max-w-[335px] gap-x-[10px] gap-y-[14px] '>
                <Button className=' w-40 h-[52px] p-[18px] rounded-lg font-bold text-sm' color='primary' onPress={handelStartFullCourse}> أبدأ التجربه كامله </Button>
                <Button className=' w-40 h-[52px] p-[18px] rounded-lg font-bold text-sm' color='primary' onPress={handelStartTraning}> أبدأ الشرح النظري </Button>
                <Button className=' w-40 h-[52px] p-[18px] rounded-lg font-bold text-sm' color='primary' onPress={handelStartPracticalTest}> أبدأ الأختبار العملي </Button>
                <Button className=' w-40 h-[52px] p-[18px] rounded-lg font-bold text-sm' color='primary' onPress={handelStartTheoreticalTest}> أبدأ الأختيار النظري </Button>
            </div>

            <Button className='w-40 h-[52px] p-[18px] rounded-lg font-medium text-sm bg-[#FF1F64] text-white'
            onPress={()=> setSelectedItem(null)}
            > إلغاء </Button>
            
        </div>
      
    </div>
  )
}

export default SelectedCourse
