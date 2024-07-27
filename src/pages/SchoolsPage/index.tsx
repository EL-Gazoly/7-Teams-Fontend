import { useState } from 'react';
import SelectedSchoolIcon from '../../assets/SideBar/Open/school.svg';
import ControlCard from '../../Components/ControlCard';
import { Image, Button } from '@nextui-org/react';
import SearchIcon from '../../assets/Landing/ChooseHeadset/search.png';
import AddIcon from '../../assets/students/add.svg';
import { useNavigate } from 'react-router-dom';
import SchoolTable from './table';
import useTranslationStore from '@/stores/LanguageStore';
import { cn } from '@/lib/utils';

const SchoolsPage = () => {
  const navigate = useNavigate();
  const [schools, setSchools] = useState(0);
  const { language, getTranslation } = useTranslationStore();

  return (
    <div className="flex flex-col gap-y-8">
      <ControlCard icon="Schools" title={getTranslation('sidebar-schools')} neasted={false} info='schoolPageDescription' />
      <div className="flex flex-col gap-y-10">
        <div className={cn("h-36 w-full bg-[#F7F9FC] dark:bg-[#252A33] flex justify-between items-center px-7",
            language === 'ar' ? 'flex-row' : 'flex-row-reverse'
        )}>
          <Button
            className="px-4 h-12 gap-x-4 flex items-center justify-center bg-primary rounded-lg"
            onPress={() => navigate('/schools/create')}
          >
            <Image src={AddIcon} />
            <span className="text-white text-sm font-bold">{getTranslation('add_school')}</span>
            <img src={SelectedSchoolIcon} width={25} height={20} />
          </Button>
          <div className={cn("w-[346px] h-12 bg-[#F0F2F4] dark:bg-[#F0F2F421] rounded-lg px-[18px] gap-x-[10px] flex items-center justify-center",
            language === 'ar' ? 'flex-row' : 'flex-row-reverse'
          )}>
            <input
              type="text"
              className={cn("flex-1 bg-transparent text-xs placeholder:text-[#929496] font-medium",
                language === 'ar' ? 'text-right' : 'text-left'
              )}
              placeholder={getTranslation('search')}
            />
            <img src={SearchIcon} alt="" />
          </div>
        </div>
        <div className={cn("flex  items-center justify-center  text-lg font-bold gap-x-1",
            language === 'ar' ? 'flex-row-reverse self-end' : 'flex-row self-start'
        )}>
          <span>{getTranslation('registered_schools')}</span>
          <span>( {schools} )</span>
        </div>
        <div className="mt-2">
          <SchoolTable setSchools={setSchools} />
        </div>
      </div>
    </div>
  );
};

export default SchoolsPage;