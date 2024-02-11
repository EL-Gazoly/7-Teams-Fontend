import { Item } from './item';
import {useState} from 'react'


import Chemistry from '../../../assets/SelectCourse/SelectSubject/chemistry.svg'
import SelectedCourse from './SelectedCourse';


const ThridCard = () => {
    const [selectedItem, setSelectedItem] = useState(null)
  return (
    <div className=' relative'>
        <div className=' w-[558px] h-[483px] bg-white dark:bg-primary-dark rounded-[18px]
        py-5 flex flex-col items-end gap-y-[18px] text-text-black dark:text-white
        '
            style={{
                boxShadow: '0px 3.588px 13.454px 0px rgba(91, 89, 89, 0.25)'
            }}
        >
            <span className=' text-lg font-bold mr-[28px]'> المناهج الدراسية </span>
            <div className='w-full gap-y-8 flex flex-col items-center'>
                <div className=' h-[53px] bg-[#dcdee033] w-full flex items-center justify-between px-8 text-xs font-bold flex-row-reverse'>
                    <span> اسم التجربه </span>
                    <span className=' ml-8'> الحاله </span>

                </div>
                <div className=' flex flex-col w-full'>
                  <Item   icon={Chemistry} title={" الكيمياء "} setSelectedItem={setSelectedItem}  /> 
                </div>

            </div>

        
        </div>
        { selectedItem &&  <div className=' absolute inset-0'>
             <SelectedCourse selectedItem={selectedItem} setSelectedItem={setSelectedItem} /> 

        </div>}
    </div>
  )
}

export default ThridCard
