import { FC, useEffect, useState } from 'react';
import Select from 'react-select';
import GroupIcon from '@/assets/Reports/group-dark.png'
import { useThemeStore } from '@/stores/ThemeStore'
import useTranslationStore from '@/stores/LanguageStore';
import CustomStyle from './CustomStyles';
const options = [
  { value: 'High', label: 'high_school', image: GroupIcon },
  { value: 'Middle', label: 'middle_school', image: GroupIcon },
  { value: 'Primary', label: 'primary_school', image: GroupIcon },
];

const ChooseGrade = (props) => {
  const {dark} = useThemeStore();
  
  const {language, getTranslation} = useTranslationStore();
    const [selectedOption, setSelectedOption] = useState(props.selectedCourse);
    
    const handleChange = (selectedOption) => {
      setSelectedOption(selectedOption);
      props.setSelectedLevel(selectedOption.value)
      
    };
    useEffect(() => {
      if(props.selectedLevel === ''){
        setSelectedOption(null);
      }
    }, [props.selectedLevel]);
  
   const customStyles = CustomStyle({dark, selectedOption});
  
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
      placeholder={getTranslation('choose_grade')}
      value={selectedOption}
      onChange={handleChange}
      isSearchable={true}
       //@ts-ignore
        getOptionLabel={(option) => (
          <div
            className='selected flex items-center gap-x-6 text-xs font-medium' >
            <img src={option.image} alt={option.label} className='w-10 h-10' />
            <span> {getTranslation(option.label)} </span>
          </div>
        )}
    />
  </div>
  )
}

export default ChooseGrade