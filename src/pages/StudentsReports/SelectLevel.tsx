
import { FC, useEffect, useState } from 'react';
import Select from 'react-select';
import GroupIcon from '../../assets/students/group.png'
import { useThemeStore} from '../../stores/ThemeStore.ts'
import CustomStyles from './_components/CustomStyles.tsx';
import useTranslationStore from '@/stores/LanguageStore.ts';

const options = [
  { value: 'High', label: 'high_school', image: GroupIcon },
  { value: 'Middle', label: 'middle_school', image: GroupIcon },
  { value: 'Primary', label: 'primary_school', image: GroupIcon },
];


const SelectLevel = (props) => {
  const { getTranslation } = useTranslationStore();
    const [selectedOption, setSelectedOption] = useState(props.selectedCourse);
    const {dark} = useThemeStore()
    const handleChange = (selectedOption) => {
      setSelectedOption(selectedOption);
      props.setSelectedLevel(selectedOption.value)
      
    };
    useEffect(() => {
      if(props.selectedLevel === ''){
        setSelectedOption(null);
      }
    }, [props.selectedLevel]);
  
    const customStyles = CustomStyles({dark, selectedOption})
  
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
        <div className='selected flex items-center gap-x-6 text-xs font-medium'>
          <span > {getTranslation(option.label)} </span>
        </div>
      )}
    />
  </div>
  )
}

export default SelectLevel