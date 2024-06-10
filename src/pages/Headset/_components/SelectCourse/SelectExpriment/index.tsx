import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { useThemeStore } from '../../../../../stores/ThemeStore';

import  CustomStyle from '../CustomStyle';
import useTranslationStore from '../../../../../stores/LanguageStore';
const SelectExpirment = ( props) => {
  const [selectedOption, setSelectedOption] = useState(props.SelectedExpirment);
  const {dark} = useThemeStore();
  const {language, getTranslation} = useTranslationStore();

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    props.setSelectedExpriemnt( {
      name : selectedOption.name,
      value : selectedOption.value,
      icon: selectedOption.icon,
      title : selectedOption.title,
    });
  };

  useEffect(() => {
    if (props.SelectedExpirment== null)
    setSelectedOption(props.SelectedExpirment);
  }, [props.SelectedExpirment]);
   const selectedSubjectChapters = props.SelectedChapter
    ? props.options[props.SelectdSubject]?.chapters[props.SelectedChapter]?.expermients
    : [];
    
  
    const allExperiments = Object.values(selectedSubjectChapters).flatMap((expermient : any) => 
      {
        return {
          value: expermient.value,
          name: expermient.name,
          icon: expermient.icon,
          title: expermient.title,
        }
      }
    );

 

  const customStyles = CustomStyle({dark, selectedOption});

    return (
        <div className="App">
            <Select
                options={allExperiments}
                styles={customStyles}
                placeholder={getTranslation('select_expirment_placeholder')}
                value={selectedOption}
                onChange={handleChange}
                isSearchable={true}
                //@ts-ignore
                getOptionLabel={(option) => (
                    <div className='selected flex items-center gap-x-2 text-xs font-medium'
                        style={{
                            direction: language === 'ar' ? 'rtl' : 'ltr',
                        }}
                    >
                        <img src={option.icon} alt={option.name} className=' w-10 h-10'/>
                        <span className= ' truncate'> {getTranslation(option.name)} </span>
                    </div>
                )}
            />
        </div>
);

};



export default SelectExpirment;