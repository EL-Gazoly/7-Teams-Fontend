import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import unSelectedStart from '@/assets/SelectCourse/SelectHowtoStart/unselected.svg'
import SelectedStart from '@/assets/SelectCourse/SelectHowtoStart/selected.svg'
import {useThemeStore} from '@/stores/ThemeStore';
import useTranslationStore from '@/stores/LanguageStore';
const options = [
  { value: 'FullCourse', label: "full_course", image : unSelectedStart, selected : SelectedStart},
  { value: 'StartTraining', label: "start_training" , image : unSelectedStart, selected : SelectedStart},
  { value: 'Practical', label: "practical_test" , image : unSelectedStart, selected : SelectedStart},
  { value: 'Theoretical', label: "theoretical_test" , image : unSelectedStart, selected : SelectedStart},
];




const SelectHowToStart = ( props) => {
  const {dark} = useThemeStore();
  const {language, getTranslation} = useTranslationStore();
  const [selectedOption, setSelectedOption] = useState(props.SelectedHowToStart);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    props.setSelectedHowToStart(selectedOption.value);
    
  };

  useEffect(() => {
    if (props.SelectedHowToStart== null)
    setSelectedOption(null);
  }, [props.SelectedHowToStart]);

  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: selectedOption? '#50D766' :  dark ? '#464B52' : '#444',
      backdropFilter: 'blur(73px)',
      borderRadius: '4px',
      cursor: 'pointer',
      width: '199px',
      border: 'none',
      maxHeight: '81px',
      boxShadow: 'none',
      '&:after': {  // Add this pseudo-element for the icon
        content: `url("data:image/svg+xml;charset=UTF-8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><g id='vuesax%2Fbulk%2Farrow-square-down'><g id='arrow-square-down'><path id='Vector' d='M16.19 2L7.81 2C4.17 2 2 4.17 2 7.81L2 16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z' fill='white'/><path id='Vector_2' d='M12 14.91C11.81 14.91 11.62 14.84 11.47 14.69L7.94003 11.16C7.65003 10.87 7.65003 10.39 7.94003 10.1C8.23003 9.81001 8.71003 9.81001 9.00003 10.1L12 13.1L15 10.1C15.29 9.81001 15.77 9.81001 16.06 10.1C16.35 10.39 16.35 10.87 16.06 11.16L12.53 14.69C12.38 14.84 12.19 14.91 12 14.91Z' fill='%23292D32'/></g></g></svg>")`,
        position: 'absolute',
        top: '60%',
        right: language === "ar"  ? '80%' : "4%",
        transform: 'translateY(-50%)',
      '&:focus' :{
        outline: 'none',
      },
      '&:hover': {
        outline: 'none',
        borderColor: '#292D32'
      }
      },
      fontWeight: '500',
      fontSize : '16px',
     
  
    }),
    singleValue: (provided) => ({
      ...provided,
      width: '100%',
      color: 'white',
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: '10px',
      fontSize: '16px',
      marginLeft: '16px',
    }),
    option: (provided) => ({
      ...provided,
      width: '199px',
      height: '81px',
      backgroundColor: selectedOption? '#50D766' :  dark ? '#464B52' : '#444',
      color: 'white' ,
      display: 'flex',
      alignItems: 'center',
      padding: '10px', 
      cursor: 'pointer',
      gap: '10px',
      borderBottom : '1px solid rgba(255, 255, 255, 0.37)',
      paddingLeft : '10px',
      paddingRight : '10px',
      '&:active' : {
        backgroundColor: '#185AEA',
      }
    }),
    menu: (provided) => ({
      ...provided,
      width: '199px',
      maxHeight: '320px',
      backgroundColor: selectedOption? '#50D766' :  dark ? '#464B52' : '#444',
      cursor: 'pointer',
      gap: '8px',
      overflow: 'hidden', 
      zIndex: '1000',
    }),
    menuList: (provided) => ({
      ...provided,
      backgroundColor: selectedOption? '#50D766' :  dark ? '#464B52' : '#444',
      padding: 0,
      cursor: 'pointer',
      width: '100%',
      zIndex: '1000',
      overflowX: 'hidden',
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: 'none', 
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      display: 'none', 
    }),
    placeholder: (provided) => ({
      ...provided,
      color: 'rgba(255, 255, 255, 0.35)', 
      fontSize: '16px',
      marginLeft: '10px',
      
      
    }),
    input: (provided) => ({
      ...provided,
      caretColor: 'transparent',
      color: 'white',
    }),
  
    
  };
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
        placeholder={getTranslation('select_course_placeholder')}
        value={selectedOption}
        onChange={handleChange}
        isSearchable={true}
        //@ts-ignore
        getOptionLabel={(option) => (
          <div
            className='selected flex items-center gap-x-[2px] text-xs font-medium'
            style={{
              direction: language === 'ar' ? 'rtl' : 'ltr',
            }}
          >
              <img src={selectedOption === null ? option.image : option.selected} alt={option.label}  className={`
              ${selectedOption !== option ? "w-10   h-10" : " w-4 h-5 mr-2"}
            `}/>
            <span className=' line-clamp-1'> {getTranslation(option.label)} </span>
          </div>
        )}
      />
    </div>
);

};



export default SelectHowToStart;