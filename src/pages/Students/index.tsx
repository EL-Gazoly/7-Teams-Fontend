import React, { useState } from 'react';
import ControlCard from '@/Components/ControlCard';
import { Image, Button, Tabs, Tab } from '@nextui-org/react';
import SearchIcon from '@/assets/Landing/ChooseHeadset/search.png';
import AddIcon from '@/assets/students/add.svg';
import UserIcon from '@/assets/students/user.svg';
import ChooseGrade from './ChooseGrade';
import ChooseClass from './ChooseClass';
import GridSelected from '@/assets/students/grid-selected.svg';
import GridUnSelected from '@/assets/students/grid-unselected.svg';
import StackSelected from '@/assets/students/stack-selected.svg';
import StackUnSelected from '@/assets/students/stack-unselected.svg';
import StudentsStackViews from '@/Components/StudentsView/Stack';
import StudentsGridView from '@/Components/StudentsView/Grid';
import { useNavigate } from 'react-router-dom';
import { getStudents } from '@/graphql/students';
import { useQuery } from '@apollo/client';
import Loading from '@/Components/Loading';
import { useThemeStore } from '@/stores/ThemeStore';
import useTranslationStore from '@/stores/LanguageStore';
import { cn } from '@/lib/utils';

const StudentsPage = () => {
  const { language, getTranslation } = useTranslationStore();
  const { loading, error, data: studentsData } = useQuery(getStudents, { fetchPolicy: 'no-cache' });
  const [activeTab, setActiveTab] = useState('stack');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [selectedClass, setSelectedClass] = useState('');

  const { dark } = useThemeStore();

  const handleSearch = (event) => {
    setSearchQuery(event.target.value.toString().toLowerCase());
  };

  let students = studentsData?.admin.students || [];

  if (searchQuery) {
    students = students.filter((student) => {
      return (
        student.name.toLowerCase().includes(searchQuery) ||
        student.facilityId.toString().includes(searchQuery)
      );
    });
  }
  if (selectedLevel) {
    students = students.filter((student) => student?.team.name === selectedLevel);
  }
  if (selectedClass) {
    students = students.filter((student) => student?.class.number === selectedClass);
  }
  const clearFilters = () => {
    setSelectedLevel('');
    setSelectedClass('');
  };

  const navigate = useNavigate();

  if (error) console.log(error.message);
  const isArabic = language === 'ar';

  return (
    <React.Fragment>
      <ControlCard icon="Students" title={getTranslation('students')} neasted={false} />

      <div className='mt-4 flex flex-col gap-y-5'
        style={{ direction: isArabic ? 'rtl' : 'ltr' }}
      >
        <div className={cn('h-36 w-full bg-[#F7F9FC] dark:bg-[#252A33] flex justify-between items-center px-7')}>
          <Button
            className='px-4 h-12 gap-x-4 flex items-center justify-center bg-primary rounded-lg'
            onPress={() => navigate('/students/create')}
          >
            <Image src={AddIcon} />
            <span className='text-white text-sm font-bold'>{getTranslation('add_student')}</span>
            <Image src={UserIcon} />
          </Button>

          <div className='w-[346px] h-12 bg-[#F0F2F4] dark:bg-[#F0F2F421] rounded-lg px-[18px] gap-x-[10px] flex items-center justify-center'>
            <input
              type='text'
              className='flex-1 bg-transparent text-right text-xs placeholder:text-[#929496] font-medium'
              placeholder={getTranslation('search')}
              onChange={handleSearch}
            />
            <img src={SearchIcon} alt='' />
          </div>
        </div>

        <div className='flex w-full items-center justify-between '>
          <div className='flex  items-center gap-x-2 text-text-black dark:text-white'>
            <h3 className='text-lg font-bold'>{getTranslation('registered_students')}</h3>
            <span className='text-xs font-medium'>{getTranslation('student_count').replace('{count}', studentsData?.admin.students.length)}</span>
          </div>
          <div className='flex gap-x-4  items-center'>
            <div className='flex items-center  gap-x-[10px]'>
              <ChooseGrade
                selectedLevel={selectedLevel}
                setSelectedLevel={setSelectedLevel}
              />
              <ChooseClass
                selectedClass={selectedClass}
                setSelectedClass={setSelectedClass}
              />
              {(selectedLevel || selectedClass) && (
                <Button isIconOnly color='danger' onPress={clearFilters} radius='full'>
                  x
                </Button>
              )}
            </div>
            <Tabs
              color='primary'
              classNames={{
                base: 'rounded',
                tabList: 'w-[168px] h-10 rounded p-0 border-none',
                cursor: 'rounded px-4',
                tab: 'h-full'
              }}
              selectedKey={activeTab}
              onSelectionChange={(key : string) => setActiveTab(key)}
              aria-label='sidebar tabs'
            >
              <Tab
                key='stack'
                title={<Image src={activeTab === 'stack' || dark ? StackSelected : StackUnSelected} radius='none' />}
              />
              <Tab
                key='grid'
                title={<Image src={activeTab === 'grid' || dark ? GridSelected : GridUnSelected} radius='none' />}
              />
            </Tabs>
          </div>
        </div>
        {loading ? (
          <div className='mt-7'>
            <Loading />
          </div>
        ) : (
          students && (activeTab === 'stack' ? <StudentsStackViews students={students} /> : <StudentsGridView students={students} />)
        )}
      </div>
    </React.Fragment>
  );
};

export default StudentsPage;