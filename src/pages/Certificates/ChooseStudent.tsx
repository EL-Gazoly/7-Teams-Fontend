import { useEffect, useState } from 'react';
import Select from 'react-select';
import { GetStudents} from '@/graphql/reports/index.ts'
import { useQuery } from '@apollo/client';
import GroupIcon from '@/assets/students/group.png'
import GroupIconDark from '@/assets/reports/group-dark.png'
import {useThemeStore} from '@/stores/ThemeStore.ts'
import CustomStyles from './SelectCustomStyles';
import useTranslationStore from '@/stores/LanguageStore';

const ChooseStudent = (props) => {
  const {dark} = useThemeStore();
  const {getTranslation , language} = useTranslationStore();
    const [selectedOption, setSelectedOption] = useState(props.selectedCourse);
    const { loading, error, data } = useQuery(GetStudents);

    const handleChange = (selectedOption) => {
        props.setStudent(selectedOption)
      
    };
  
    
    const customStyles = CustomStyles();

    const options = data?.admin.students.map((student) => {
        return {
            value: student.name,
            label: student.name,
            image: GroupIcon,
            number: student.generatedId,
            class: student.class.number,
            team: student.team.name,
            schoolName : student.schoolName,
        };
        });
 
  

  useEffect(() => {
    if(props.emptyCourse){
      setSelectedOption(null);
      props.setEmptyCourse(false);
    }

  }, [props.emptyCourse]);

  return (
    <div className="App">
      <Select
        options={options}
        styles={customStyles}
        placeholder={getTranslation('choose_student_name')}
        value={selectedOption}
        onChange={handleChange}
        isSearchable={true}
          // @ts-ignore
        getOptionLabel={(option) => (
          <div className='selected flex items-center gap-x-6 text-xs font-medium'
            style={{
              direction:  language === 'ar' ? 'rtl' : 'ltr'
            }}
          >
            <img src={dark? GroupIconDark : option.image} alt={option.label} className=' w-10 h-10'/>
            <span className={`${ selectedOption && selectedOption.value === "Ultrasound" ? 'text-[10px]' : ''}`}> {option.label} </span>
          </div>
        )}
      />
    </div>
);

};



export default ChooseStudent;