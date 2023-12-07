import SelectCourse from '../../Components/SelectCourse'
import { Button } from '@nextui-org/react'

const ChooseCourseSection = () => {
  return (
    <div className='w-full bg-white/50 h-[85px] inline-flex items-center px-[30px] gap-x-4'>
    
        <SelectCourse />
        <SelectCourse />
        <SelectCourse />
        <SelectCourse />

        <Button className=' flex items-center justify-center px-[14px] py-[7px] rounded-[7px]' color='primary'    
        >Start</Button>

    </div>
  )
}

export default ChooseCourseSection