import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { useThemeStore } from '../../../../../stores/ThemeStore.ts';
import CustomStyle from '../CustomStyle.tsx';
import useTranslationStore from '../../../../../stores/LanguageStore.ts';

const SelectChapter = ( props) => {
  const {dark} = useThemeStore();
  const {language, getTranslation} = useTranslationStore();
  const [selectedOption, setSelectedOption] = useState(props.SelectedChapter);

  const handleChange = (selectedOption) => {
    props.setSelectedExpriemnt(null)
    setSelectedOption(selectedOption);
    props.setSelectedChapter(selectedOption.value);
    
  };
 useEffect(() => {
  if (props.SelectedChapter== null)
    setSelectedOption(props.SelectedChapter);
  }, [props.SelectedChapter]);

   const selectedSubjectChapters = props.SelectdSubject
    ? props.options[props.SelectdSubject]?.chapters
    : [];

  // Transforming chapters into options required by react-select
   console.log(selectedSubjectChapters)
  const transformedChapters = Object.entries(selectedSubjectChapters).map(([key, chapter] : any) => ({
        value: chapter.value,
        label: chapter.name,  
        image :  chapter.icon
}));
  

  const customStyles = CustomStyle({dark, selectedOption});

  return (
    <div className="App">
      <Select
        options={transformedChapters}
        styles={customStyles}
        placeholder={getTranslation('select_chapter_placeholder')}
        value={selectedOption}
        onChange={handleChange}
        isSearchable={true}
        //@ts-ignore
        getOptionLabel={(option) => (
          <div className='selected flex items-center gap-x-6 text-xs font-medium'
            style={{
              direction: language === 'ar' ? 'rtl' : 'ltr',
            }}
          >
            <img src={option.image} alt={option.label} className=' w-10 h-10'/>
            <span > {getTranslation(option.label)} </span>
          </div>
        )}
      />
    </div>
);

};



export default SelectChapter;