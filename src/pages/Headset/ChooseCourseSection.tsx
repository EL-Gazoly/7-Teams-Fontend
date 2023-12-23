import SelectCourse from '../../Components/SelectCourse'
import SelectSubject from '../../Components/SelectCourse/SelectSubject'
import SelectChapter from '../../Components/SelectCourse/SelectChapter'
import SelectExpirment from '../../Components/SelectCourse/SelectExpriment'
import SelectHowToStart from '../../Components/SelectCourse/SelectHowToOpen'
import { Button } from '@nextui-org/react'
import { useState } from 'react'

import options from '../../Components/SelectCourse/options'

const ChooseCourseSection = () => {
  const [SelectdSubject, setSelectedSubject] = useState(null)
  const [SelectedChapter, setSelectedChapter] = useState(null)
  const [SelectedExpirment, setSelectedExpriemnt] = useState(null)



  return (
    <div className='w-full bg-white/50 h-[85px] inline-flex items-center px-[30px] gap-x-4'
    style={{
      direction : "rtl"
    }}
    >
    
        <SelectSubject options={options} setSelectedSubject={setSelectedSubject} />
        <SelectChapter options={options}  SelectdSubject={SelectdSubject} setSelectedChapter={setSelectedChapter} />
        <SelectExpirment options={options}  SelectdSubject={SelectdSubject} SelectedChapter={SelectedChapter} setSelectedChapter={setSelectedExpriemnt} />
        <SelectHowToStart />

        <Button className=' flex items-center justify-center px-[14px] py-[7px] rounded-[7px]' color='primary'    
        >ابدا التجربة</Button>

    </div>
  )
}

export default ChooseCourseSection