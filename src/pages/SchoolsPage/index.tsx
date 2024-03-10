import React from 'react'
import SelectedSchoolIcon from '../../assets/SideBar/Open/school.svg'
import ControlCard from '../../Components/ContraolCard'
import { Image, Button } from '@nextui-org/react'
import SearchIcon from '../../assets/Landing/ChooseHeadset/search.png'
import AddIcon from '../../assets/students/add.svg'
import { useNavigate } from 'react-router-dom'
import SchoolTable from './table'
const SchoolsPage = () => {
    const navigate = useNavigate()
  return (
    <div className=' flex flex-col gap-y-8'>
        <ControlCard icon='Schools' title='المدارس' neasted={false} />
        <div className=' flex flex-col gap-y-10'>
            <div className=' h-36 w-full bg-[#F7F9FC] dark:bg-[#252A33] flex justify-between items-center px-7'>
                <Button className=' px-4  h-12 gap-x-4 flex items-center justify-center bg-primary rounded-lg'
                    onPress={() => navigate('/schools/create')}
                >
                    <Image src={AddIcon} />
                    <span className=' text-white text-sm font-bold '>إضافة مدرسه</span>
                    <img src={SelectedSchoolIcon} width={25} height={20} />
                </Button>
                
                <div className='w-[346px] h-12 bg-[#F0F2F4] dark:bg-[#F0F2F421] rounded-lg px-[18px] gap-x-[10px] flex items-center justify-center'>
                    
                    <input type="text" className='flex-1 bg-transparent text-right text-xs placeholder:text-[#929496] font-medium' 
                    placeholder='البحث' />
                    <img src={SearchIcon} alt="" />

                </div>

            </div>
            <div className='flex flex-row-reverse items-center justify-center self-end text-lg font-bold gap-x-1'>
                <span>المدارس المسجلة في النظام</span>
                <span>( 12 مدرسه)</span>
            </div>
            <div className=' mt-2'>
                <SchoolTable />

            </div>


        </div>
      
    </div>
  )
}

export default SchoolsPage
