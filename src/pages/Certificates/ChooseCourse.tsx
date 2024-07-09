import { FC, useEffect, useState } from 'react';
import Select from 'react-select';
import Chemistry from '@/assets/SelectCourse/SelectSubject/chemistry.svg'
import Physics from '@/assets/SelectCourse/SelectSubject/physics.svg'
import Biology from '@/assets/SelectCourse/SelectSubject/biology.svg'
import Geology from '@/assets/SelectCourse/SelectSubject/geology.svg'
import { useThemeStore } from '@/stores/ThemeStore.ts'
import CustomStyles from './SelectCustomStyles';
import useTranslationStore from '@/stores/LanguageStore';

const options = [
  { value: 'chemistry', label: 'chemistry', image: Chemistry },
  { value: 'physics', label: 'physics', image: Physics },
  // { value: 'biology', label: ' الاحياء ', image: Biology },
  // { value: 'geology', label: ' الجيولوجيا ', image: Geology },
]


const ChooseCourse = (props) => {
  const {dark} = useThemeStore();
  const {getTranslation, language} = useTranslationStore();
    const [selectedOption, setSelectedOption] = useState(props.selectedCourse);

    const handleChange = (selectedOption) => {
        props.setCourse(selectedOption)
      
    };
  
 
    const customStyles = CustomStyles();
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
        placeholder={getTranslation('choose_subject')}
        value={selectedOption}
        onChange={handleChange}
        isSearchable={true}
        // @ts-ignore
        getOptionLabel={(option) => (
          <div className='selected flex items-center gap-x-6 text-xs font-medium'
            style={{
              direction: language === 'ar' ? 'rtl' : 'ltr'
            }}
          >
            <img src={option.image} alt={option.label} className=' w-10 h-10'/>
            <span className={`${ selectedOption && selectedOption.value === "Ultrasound" ? 'text-[10px]' : ''}`}> {getTranslation(option.label)} </span>
          </div>
        )}
      />
    </div>
);

};



export default ChooseCourse;