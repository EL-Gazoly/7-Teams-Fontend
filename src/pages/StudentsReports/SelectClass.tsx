
import { FC, useEffect, useState } from 'react';
import Select from 'react-select';
import GroupIcon from '@/assets/students/group.png'
import { useThemeStore} from '@/stores/ThemeStore.ts'
import CustomStyles from './_components/CustomStyles';
import useTranslationStore from '@/stores/LanguageStore';
const options = [
  { value: 'first', label: 'first_grade', image: GroupIcon },
  { value: 'second', label: 'second_grade', image: GroupIcon },
  { value: 'third', label: 'third_grade', image: GroupIcon },
  { value: 'fourth', label: 'fourth_grade', image: GroupIcon },
  { value: 'fifth', label: 'fifth_grade', image: GroupIcon },
  { value: 'sixth', label: 'sixth_grade', image: GroupIcon },
];


const SelectLevel = (props) => {
  const { getTranslation } = useTranslationStore();
    const [selectedOption, setSelectedOption] = useState(props.selectedCourse);
    const {dark} = useThemeStore()
    const handleChange = (selectedOption) => {
      setSelectedOption(selectedOption);
      props.setSelectedClass(selectedOption.value);
      
    };
    useEffect(() => {
      if(props.selectedClass === ''){
        setSelectedOption(null);
      }
    }, [props.selectedClass]);
  
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
      placeholder={getTranslation('choose_class')}
      value={selectedOption}
      onChange={handleChange}
      isSearchable={true}
      //@ts-ignore
      getOptionLabel={(option) => (
        <div className='selected flex items-center gap-x-6 text-xs font-medium'>
          <span>{getTranslation(option.label)}</span>   
        </div>
      )}
    />
  </div>
  )
}

export default SelectLevel