import React, {  useEffect, useState } from 'react';
import { useThemeStore } from '../../../../../stores/ThemeStore.ts'
import Select from 'react-select';
import CustomStyle from '../CustomStyle.tsx';



const SelectSubject = ( props) => {
  const {dark} = useThemeStore();
  const [selectedOption, setSelectedOption] = useState(props.SelectdSubject);

  const handleChange = (selectedOption) => {
    props.setSelectedChapter(null);
    props.setSelectedExpriemnt(null);
    setSelectedOption(selectedOption);
    props.setSelectedSubject(selectedOption.value);
  };

  useEffect(() => {
    if (props.SelectdSubject== null)
    setSelectedOption(props.SelectdSubject);
  }, [props.SelectdSubject]);
  const transformedOptions = Object.keys(props.options).map((field) => {
    return {
      value: field,
      label: props.options[field].name,
      image: props.options[field].icon,
    };
  });

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
        options={transformedOptions}
        styles={customStyles}
        placeholder=" اختر المنهج "
        value={selectedOption}
        onChange={handleChange}
        isSearchable={true}
        //@ts-ignore
        getOptionLabel={(option) => (
          <div className='selected flex items-center gap-x-6 text-xs font-medium'
            style={{
              direction: "rtl"
            }}
          >
            <img src={option.image} alt={option.label} className=' w-10 h-10'/>
            <span > {option.label} </span>
          </div>
        )}
      />
    </div>
);

};



export default SelectSubject;