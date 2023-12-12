import SelectCourse from '../../Components/SelectCourse'
import SelectSubject from '../../Components/SelectCourse/SelectSubject'
import { Button } from '@nextui-org/react'
import { useState } from 'react'

const ChooseCourseSection = () => {
  const [SelectdSubject, setSelectedSubject] = useState(null)
  return (
    <div className='w-full bg-white/50 h-[85px] inline-flex items-center px-[30px] gap-x-4'
    style={{
      direction : "rtl"
    }}
    >
    
        <SelectSubject setSelectedSubject={setSelectedSubject} SelectdSubject={SelectdSubject}/>
        <SelectCourse />
        <SelectCourse />
        <SelectCourse />

        <Button className=' flex items-center justify-center px-[14px] py-[7px] rounded-[7px]' color='primary'    
        >ابدا التجربه</Button>

    </div>
  )
}

export default ChooseCourseSection