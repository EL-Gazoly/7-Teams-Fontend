import { Item } from './item';
import {useState} from 'react'


import Chemistry from '../../../assets/SelectCourse/SelectSubject/chemistry.svg'
import Physics from '../../../assets/SelectCourse/SelectSubject/physics.svg'
import Biology from '../../../assets/SelectCourse/SelectSubject/biology.svg'
import Geology from '../../../assets/SelectCourse/SelectSubject/geology.svg'
import SelectedCourse from './SelectedCourse';


const ThridCard = () => {
    const [selectedItem, setSelectedItem] = useState(null)
  return (
    <div className=' relative'>
        <div className=' w-[558px] h-[483px] bg-white rounded-[18px]
        py-5 flex flex-col items-end gap-y-[18px] text-text-black
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
                <Item   icon={Physics} title={" الفيزياء "} setSelectedItem={setSelectedItem} />
                <Item   icon={Chemistry} title={" الكيمياء "} setSelectedItem={setSelectedItem}  />
                <Item   icon={Biology} title={" الاحياء "} setSelectedItem={setSelectedItem}  />
                <Item   icon={Geology} title={" جيولجيا "} setSelectedItem={setSelectedItem}  />
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
