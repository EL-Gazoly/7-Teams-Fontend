import { FC, useEffect, useState } from 'react';
import Select from 'react-select';
import GroupIcon from '../../assets/Reports/group-dark.png'
import { useThemeStore } from '../../stores/ThemeStore'

const options = [
    { value: 'first', label: 'الصف الاول', image: GroupIcon },
    { value: 'second', label: 'الصف الثاني', image: GroupIcon },
    { value: 'third', label: 'الصف الثالث', image: GroupIcon },
    { value: 'fourth', label: 'الصف الرابع', image: GroupIcon },
    { value: 'fifth', label: 'الصف الخامس', image: GroupIcon },
    { value: 'sixth', label: 'الصف السادس', image: GroupIcon },
]


const ChooseClass = (props) => {
  const {dark} = useThemeStore();
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
    
  
      const customStyles = {
        control: (provided) => ({
          ...provided,
          direction : 'rtl',
          backgroundColor:  selectedOption? '#50D766' : dark ? '#1F242DAB' : '#F0F2F4',
          backdropFilter: 'blur(73px)',
          borderRadius: '4px',
          cursor: 'pointer',
          width: '178px',
          border: 'none',
          height: '66px',
          boxShadow: 'none',
          '&:after': {  // Add this pseudo-element for the icon
            content:  `url("data:image/svg+xml;charset=UTF-8,<svg xmlns='http://www.w3.org/2000/svg' width='22' height='23' viewBox='0 0 22 23' fill='none'><path d='M7.21607 2.69531L14.6971 2.69531C17.9467 2.69531 19.8839 4.63254 19.8839 7.88208V15.3542C19.8839 18.6127 17.9467 20.5499 14.6971 20.5499H7.22499C3.97545 20.5499 2.03823 18.6127 2.03823 15.3632V7.88208C2.0293 4.63254 3.96653 2.69531 7.21607 2.69531Z' fill='%23122333'/><path d='M10.9564 14.2206C11.126 14.2206 11.2956 14.1581 11.4295 14.0242L14.5809 10.8729C14.8397 10.614 14.8397 10.1855 14.5809 9.92659C14.322 9.6677 13.8935 9.6677 13.6346 9.92659L10.9564 12.6048L8.27818 9.92659C8.01929 9.6677 7.59078 9.6677 7.33188 9.92659C7.07299 10.1855 7.07299 10.614 7.33188 10.8729L10.4832 14.0242C10.6171 14.1581 10.7868 14.2206 10.9564 14.2206Z' fill='white'/></svg>")`,
              position: 'absolute',
            top: '60%',
            left: '5%',
            transform: 'translateY(-50%)',
            marginRight: '10px',
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
          color:  dark? 'white' : '#122333',
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
          width: '178px',
          height: '66px',
          backgroundColor:  dark ? '#1F242DAB' : '#F0F2F4',
          color:  dark? 'white' : '#122333',
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
          width: '178px',
          direction : 'rtl',
          maxHeight: '320px',
          backgroundColor:  dark ? '#1F242DAB' : '#F0F2F4',
          cursor: 'pointer',
          gap: '8px',
          overflow: 'hidden', 
          zIndex: '1000',
        }),
        menuList: (provided) => ({
          ...provided,
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
          color : "#FFFFFF87",
          fontSize: '15px',
          marginLeft: '10px',
          
          
        }),
        input: (provided) => ({
          ...provided,
          caretColor: 'transparent',
          color: '#122333',
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
      placeholder="اختر الصف"
      value={selectedOption}
      onChange={handleChange}
      isSearchable={true}
      getOptionLabel={(option) => (
        <div className='selected flex items-center gap-x-2 text-xs font-medium'>
          <img src={option.image} alt={option.label} style={customStyles.optionImage} className=' w-10 h-10'/>
          <span className={`text-xs`}> {option.label} </span>
        </div>
      )}
    />
  </div>
  )
}

export default ChooseClass