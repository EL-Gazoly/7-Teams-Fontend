import {useState} from 'react'
import ControlCard from '../../Components/ContraolCard'
import SearchIcon from '../../assets/Landing/ChooseHeadset/search.png'
import AddIcon from '../../assets/students/add.svg'
import UserIcon from '../../assets/students/user.svg'
import { useNavigate } from 'react-router-dom'
import { Image, Button } from '@nextui-org/react'
import AdminsTable from './Table'


const AdminsPage = () => {
    const [searchQuery, setSearchQuery] = useState<String>("");
    const navigate = useNavigate()

    const handleSearch = (event) => {
        setSearchQuery(event.target.value.toString().toLowerCase());
    };
  return (
    <div>
        <ControlCard />
        <div className="flex mt-4 flex-col items-center gap-y-4">
            <div className=' h-36 w-full bg-[#F7F9FC] flex justify-between items-center px-7'>
                    <Button className=' px-4  h-12 gap-x-4 flex items-center justify-center bg-primary rounded-lg'
                        onPress={() => navigate('/settings/admins/create')}
                    >
                        <Image src={AddIcon} />
                        <span className=' text-white text-sm font-bold '>إضافة مسؤول جديد </span>
                        <Image src={UserIcon} />
                    </Button>
                    
                    <div className='w-[346px] h-12 bg-[#F0F2F4] rounded-lg px-[18px] gap-x-[10px] flex items-center justify-center'>
                        
                        <input type="text" className='flex-1 bg-transparent text-right text-xs placeholder:text-[#929496] font-medium'
                         placeholder='البحث' onChange={handleSearch} />
                        <img src={SearchIcon} alt="" />

                    </div>

            </div>
            <AdminsTable searchQuery={searchQuery} />

        </div>
    </div>
  )
}

export default AdminsPage