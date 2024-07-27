import React, { useState } from 'react';
import ControlCard from '../../Components/ControlCard';
import SearchIcon from '../../assets/Landing/ChooseHeadset/search.png';
import PersonIcon from '../../assets/Reports/single.svg';
import GroupIcon from '../../assets/Reports/group.png';
import SchoolIcon from '../../assets/Reports/school.png';
import ClasseIcon from '../../assets/Reports/classes.svg';
import PersonDarkIcon from '../../assets/Reports/single-dark.png';
import GroupDarkIcon from '../../assets/Reports/group-dark.png';
import SchoolDarkIcon from '../../assets/Reports/schools.png';
import ClasseDarkIcon from '../../assets/Reports/classes.png';
import { useThemeStore } from '../../stores/ThemeStore';
import { useNavigate } from 'react-router-dom';
import useTranslationStore from '@/stores/LanguageStore';
import { cn } from '@/lib/utils';

const list = [
  { title: "student", icon: PersonIcon, dark: PersonDarkIcon, link: '/reports/students' },
  { title: "stage", icon: GroupIcon, dark: GroupDarkIcon, link: '/reports/stages' },
  { title: "class", icon: ClasseIcon, dark: ClasseDarkIcon, link: '/reports/classes' },
  { title: "school", icon: SchoolIcon, dark: SchoolDarkIcon, link: '/reports/schools' }
];

const ReportsPage = () => {
  const { dark } = useThemeStore();
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const { language, getTranslation } = useTranslationStore();

  const searched = list.filter((item) => getTranslation(item.title).includes(search));

  return (
    <React.Fragment>
      <ControlCard icon="Reports" title={getTranslation('reports')} neasted={false} info='reportsPageDescription' />
      <div className='flex flex-col items-center gap-y-5 mt-4 pb-5'
        style={{ direction: language === "ar" ? "rtl" : "ltr" }}
      >
        <div className='w-full h-[147px] bg-[#F7F9FC] dark:bg-primary-dark flex items-center justify-center'
          style={{ backdropFilter: "blur(64.4533462524414px)" }}>
          <div className='w-[494px] h-12 rounded-lg bg-[#DDE0E3] dark:bg-[#40454D] flex items-center justify-start  px-6 gap-x-[10px]'
            style={{ backdropFilter: "blur(109.92385864257812px)" }}>
            <img src={SearchIcon} alt="" />
            <input type="text" placeholder={getTranslation('search')} className='flex-1  bg-transparent placeholder:text-[#929496] text-xs font-medium'
              value={search} onChange={(e) => setSearch(e.target.value)} />
          </div>
        </div>
        <div className='grid grid-cols-2 max-w-full gap-5' style={{ direction: language === "ar" ? "rtl" : "ltr" }}>
          {searched.map((item, index) => (
            <div key={index} className={`w-[492px] h-64 rounded-lg bg-white dark:bg-primary-dark flex flex-col items-center justify-center gap-y-5 cursor-pointer`}
              onClick={() => navigate(item.link)}>
              {index !== 0 ?
                <div className='w-32 h-32 bg-[#EEEFF2] dark:bg-[#5C6067] rounded-full flex items-center justify-center'
                  style={{ backdropFilter: "blur(24.598785400390625px)" }}>
                  <img src={dark ? item.dark : item.icon} alt="" />
                </div>
                :
                <img src={dark ? item.dark : item.icon} alt="" />
              }
              <span className='text-black dark:text-white text-[21px] font-bold'>{getTranslation(`${item.title}_reports`)}</span>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ReportsPage;