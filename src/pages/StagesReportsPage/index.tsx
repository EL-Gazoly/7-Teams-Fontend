import React, { useState } from 'react';
import ControlCard from '../../Components/ControlCard';
import SearchIcon from '../../assets/Landing/ChooseHeadset/search.png';
import GroupIcon from '../../assets/Reports/group.png';
import GroupDarkIcon from '../../assets/Reports/group-dark.png';
import { useThemeStore } from '../../stores/ThemeStore';
import { Link } from 'react-router-dom';
import useTranslationStore from '@/stores/LanguageStore';

const list = [
  {
    title: "primary_grade",
    icon: GroupIcon,
    link: '/reports/stages/Primary',
  },
  {
    title: "middle_grade",
    icon: GroupIcon,
    link: '/reports/stages/Middle',
  },
  {
    title: "high_grade",
    icon: GroupIcon,
    link: '/reports/stages/High',
  },
];

const StagesReportsPage = () => {
  const { dark } = useThemeStore();
  const { language, getTranslation } = useTranslationStore();
  const [search, setSearch] = useState('');
  const searched = list.filter((item) => getTranslation(item.title).includes(search));

  return (
    <div>
      <ControlCard icon="Reports" title={getTranslation('reports')} neasted={true} info='stagesReportsPageDescription' />
      <div className='flex flex-col items-center gap-y-5 mt-4'>
        <div className='w-full h-[147px] bg-[#F7F9FC] dark:bg-primary-dark flex items-center justify-center'
          style={{ backdropFilter: "blur(64.4533462524414px)" }}
        >
          <div className='w-[494px] h-12 rounded-lg bg-[#DDE0E3] dark:bg-[#40454D] flex items-center justify-start flex-row-reverse px-6 gap-x-[10px]'
            style={{ backdropFilter: "blur(109.92385864257812px)" }}
          >
            <img src={SearchIcon} alt="" />
            <input type="text" placeholder={getTranslation('search')} className='flex-1 text-right bg-transparent placeholder:text-[#929496] text-xs font-medium'
              value={search} onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div className='max-w-full grid grid-cols-4 gap-x-4 gap-y-6'
          style={{
             direction: language === 'ar' ? 'rtl' : 'ltr'

           }}
        >
          {searched.map((item) => (
            <Link key={item.link} to={item.link} className='w-60 h-28 bg-white dark:bg-primary-dark rounded flex items-center px-[22px] gap-x-2'>
              <div className='w-[68px] h-[68px] bg-[#EEEFF2] dark:bg-[#3B4048] rounded-full flex items-center justify-center'>
                <img src={dark ? GroupDarkIcon : GroupIcon} alt="" className='w-9 h-9' />
              </div>
              <span className='text-xs font-bold'>{getTranslation(item.title)}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StagesReportsPage;