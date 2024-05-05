import SelectSubject from './SelectCourse/SelectSubject'
import SelectChapter from './SelectCourse/SelectChapter'
import SelectExpirment from './SelectCourse/SelectExpriment'
import SelectHowToStart from './SelectCourse/SelectHowToOpen'
import { Button } from '@nextui-org/react'
import { useState,useEffect, useReducer } from 'react'
import { useMutation } from '@apollo/client'
import { CREATELOG, GETLOGS } from '../../../graphql/LogsQuery'

import options from './SelectCourse/options'

import db from '../../../config/firebase'
import { ref, set, update} from 'firebase/database'
import { create } from 'zustand'

type ChooseCourseSectionProps = {
  selectedHeadsets: any[]
  setSelectedHeadsets: React.Dispatch<any>
}



const ChooseCourseSection = ({selectedHeadsets, setSelectedHeadsets}: ChooseCourseSectionProps) => {
  const [createLog, { loading: loadingCreateLog, error: errorCreateLog, data: dataCreateLog }] = useMutation(CREATELOG,{
    refetchQueries : [{query : GETLOGS}]
  });

  const [SelectdSubject, setSelectedSubject] = useState(null)
  const [SelectedChapter, setSelectedChapter] = useState(null)
  const [SelectedExpirment, setSelectedExpriemnt] = useState(null)
  const [SelectedHowToStart, setSelectedHowToStart] = useState(null)

 
  const [key, setKey] = useState(0)

  const handelOpenCourse = () => {
      selectedHeadsets.forEach((headset) => {
        if (headset.selected){
          handelStartCourse(headset.macAddress) 
         setSelectedHeadsets((prev: any) => {
            const newSelectedHeadsets = [...prev];
            newSelectedHeadsets[headset.index] = { ...newSelectedHeadsets[headset.index], started: true };
            return newSelectedHeadsets;
         })

         setSelectedExpriemnt(null)
          setSelectedChapter(null)
          setSelectedSubject(null)
          setSelectedHowToStart(null)
          setKey(key + 1)
        }
          
      })
  }

  const handelStartCourse = async (macAddress) => {
    const deviceQuery = ref(db, `/Devices/${macAddress}`);
    try {
        update(deviceQuery, {
            "Control-App": {
                "Course": "com.SevenTeams.ScienceExperiments",
                "ExperimentId": SelectedExpirment.value,
                "ExperimentName": SelectedExpirment.title,
                "Type": SelectedHowToStart,
                "Command" : "Open",
            }
        })
        await createLog({
          variables: {
            data: {
              action: `Start ${SelectedHowToStart} ${SelectedExpirment.title} on device number ${macAddress}`,
            }
          }
        })
    } catch (error) {
        console.error("Error fetching data:", error);
    }
  }

  return (
    <div className='w-full bg-white/50 dark:bg-[#262B34]/50 h-[85px] inline-flex items-center px-[30px] gap-x-4'
    style={{
      direction : "rtl"
    }}
    key={key}
    >
    
        <SelectSubject options={options} SelectdSubject={SelectdSubject} setSelectedSubject={setSelectedSubject} setSelectedChapter={setSelectedChapter} setSelectedExpriemnt={setSelectedExpriemnt} />
        <SelectChapter options={options}  SelectdSubject={SelectdSubject} SelectedChapter={SelectedChapter}  setSelectedChapter={setSelectedChapter} setSelectedExpriemnt={setSelectedExpriemnt} />
        <SelectExpirment options={options}  SelectdSubject={SelectdSubject} SelectedChapter={SelectedChapter}  SelectedExpirment={SelectedExpirment} setSelectedExpriemnt={setSelectedExpriemnt} />
        <SelectHowToStart SelectHowToStart={SelectedHowToStart} setSelectedHowToStart={setSelectedHowToStart} />

        <Button className=' flex items-center justify-center px-[14px] py-[7px] rounded-[7px]' color='primary' onPress={handelOpenCourse}  
        isDisabled={!(SelectdSubject && SelectedChapter && SelectedExpirment && SelectedHowToStart)}    
        >ابدا التجربة</Button>

    </div>
  )
}

export default ChooseCourseSection