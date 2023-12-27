import SelectSubject from '../../Components/SelectCourse/SelectSubject'
import SelectChapter from '../../Components/SelectCourse/SelectChapter'
import SelectExpirment from '../../Components/SelectCourse/SelectExpriment'
import SelectHowToStart from '../../Components/SelectCourse/SelectHowToOpen'
import { Button } from '@nextui-org/react'
import { useState } from 'react'

import options from '../../Components/SelectCourse/options'

import db from '../../config/firebase'
import { ref, set, update} from 'firebase/database'

type ChooseCourseSectionProps = {
  selectedHeadsets: any[]
}

const ChooseCourseSection = ({selectedHeadsets}: ChooseCourseSectionProps) => {
  const [SelectdSubject, setSelectedSubject] = useState(null)
  const [SelectedChapter, setSelectedChapter] = useState(null)
  const [SelectedExpirment, setSelectedExpriemnt] = useState(null)
  const [SelectedHowToStart, setSelectedHowToStart] = useState(null)
  const [key, setKey] = useState(0)

  const handelOpenCourse = () => {
      selectedHeadsets.forEach((headset) => {
        if (!headset.selected){
          headset.started = true
          handelStartCourse(headset.macAddress)  
          setSelectedSubject(null)
          setSelectedChapter(null)
          setSelectedExpriemnt(null)
          setSelectedHowToStart(null)   
          setKey(key + 1)
        }
          
      })
  }

  const handelStartCourse = (macAddress) => {
    const deviceQuery = ref(db, `/Devices/${macAddress}`);
    try {
        update(deviceQuery, {
            "Control-App": {
                "Course": "com.SevenTeams.ScienceExperiments",
                "ExperimentId": SelectedExpirment.value,
                "ExperimentName": SelectedExpirment.name,
                "Type": SelectedHowToStart,
                "Command" : "Open",
            }
        })
    } catch (error) {
        console.error("Error fetching data:", error);
    }
  }



  return (
    <div className='w-full bg-white/50 h-[85px] inline-flex items-center px-[30px] gap-x-4'
    style={{
      direction : "rtl"
    }}
    key={key}
    >
    
        <SelectSubject options={options} SelectdSubject={SelectdSubject} setSelectedSubject={setSelectedSubject} />
        <SelectChapter options={options}  SelectdSubject={SelectdSubject} SelectedChapter={SelectedChapter}  setSelectedChapter={setSelectedChapter} />
        <SelectExpirment options={options}  SelectdSubject={SelectdSubject} SelectedExpirment={SelectedExpirment} setSelectedExpriemnt={setSelectedExpriemnt} />
        <SelectHowToStart SelectHowToStart={SelectedHowToStart} setSelectedHowToStart={setSelectedHowToStart} />

        <Button className=' flex items-center justify-center px-[14px] py-[7px] rounded-[7px]' color='primary' onPress={handelOpenCourse}  
        isDisabled={!(SelectdSubject && SelectedChapter && SelectedExpirment && SelectedHowToStart)}    
        >ابدا التجربة</Button>

    </div>
  )
}

export default ChooseCourseSection