import { FC, useEffect, useState } from 'react';
import Select from 'react-select';
import GroupIcon from '../../assets/Reports/group-dark.png'
import { useThemeStore } from '../../stores/ThemeStore'
import useTranslationStore from '../../stores/LanguageStore';
import CustomStyle from './customStyles';

const options = [
  { value: 'first', label: 'first_grade', image: GroupIcon },
  { value: 'second', label: 'second_grade', image: GroupIcon },
  { value: 'third', label: 'third_grade', image: GroupIcon },
  { value: 'fourth', label: 'fourth_grade', image: GroupIcon },
  { value: 'fifth', label: 'fifth_grade', image: GroupIcon },
  { value: 'sixth', label: 'sixth_grade', image: GroupIcon },
];

const ChooseClass = (props) => {
  const {dark} = useThemeStore();
  const {language, getTranslation} = useTranslationStore();
    const [selectedOption, setSelectedOption] = useState(props.selectedCourse);

    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption);
        props.setSelectedClass(selectedOption.value);
        
      };
      useEffect(() => {
        if(props.selectedClass === ''){
          setSelectedOption(null);
        }
      }, [props.selectedClass]);
    
  
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
        placeholder={getTranslation('choose_class')}
        value={selectedOption}
        onChange={handleChange}
        isSearchable={true}
          //@ts-ignore
        getOptionLabel={(option) => (
          <div className="selected flex items-center gap-x-6 text-xs font-medium">
            <img src={option.image} alt={getTranslation(option.label)} className="w-10 h-10" />
            <span
              className={`${selectedOption && selectedOption.value === 'Ultrasound' ? 'text-[10px]' : ''}`}
            >
              {getTranslation(option.label)}
            </span>
          </div>
        )}
      />
    </div>
  )
}

export default ChooseClass