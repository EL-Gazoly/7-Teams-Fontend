import { useState } from 'react';
import ControlCard from '../../Components/ControlCard';
import SearchIcon from '../../assets/Landing/ChooseHeadset/search.png';
import AddIcon from '../../assets/students/add.svg';
import UserIcon from '../../assets/students/user.svg';
import { useNavigate } from 'react-router-dom';
import { Image, Button } from '@nextui-org/react';
import AdminsTable from './Table';
import useTranslationStore from '@/stores/LanguageStore';

const RolesPage = () => {
  const { language, getTranslation } = useTranslationStore();
  const [searchQuery, setSearchQuery] = useState<String>("");
  const navigate = useNavigate();

  const handleSearch = (event) => {
    setSearchQuery(event.target.value.toString().toLowerCase());
  };

  return (
    <div>
      <ControlCard icon="Settings" title={getTranslation('roles')} neasted={true} />
      <div className="flex mt-4 flex-col items-center gap-y-4"
        style={{
          direction: language === 'ar' ? 'rtl' : 'ltr',
        }}
      >
        <div className='h-36 w-full bg-[#F7F9FC] dark:bg-primary-dark flex justify-between items-center px-7'>
          <Button className='px-4 h-12 gap-x-4 flex items-center justify-center bg-primary rounded-lg'
            onPress={() => navigate('/settings/roles/create')}
          >
            <Image src={AddIcon} />
            <span className='text-white text-sm font-bold'>{getTranslation('addNewRole')}</span>
            <Image src={UserIcon} />
          </Button>

          <div className='w-[346px] h-12 bg-[#F0F2F4] dark:bg-[#40454D] rounded-lg px-[18px] gap-x-[10px] flex items-center justify-center'>
            <input type="text" className='flex-1 bg-transparent text-xs placeholder:text-[#929496] font-medium'
              placeholder={getTranslation('search')} onChange={handleSearch} />
            <img src={SearchIcon} alt="" />
          </div>
        </div>
        <AdminsTable searchQuery={searchQuery} />
      </div>
    </div>
  );
}

export default RolesPage;
