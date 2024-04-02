import { useEffect, useState } from 'react';
import Select from 'react-select';
import { getSchools} from '../../graphql/School/index.ts'
import { useQuery } from '@apollo/client';
import SelectedSchoolIcon from '../../assets/SideBar/Open/school.svg'
import LightSchoolIcon from '../../assets/SideBar/Open/default/school.svg'
import {useThemeStore} from '../../stores/ThemeStore.ts'
const ChooseSchool = (props) => {
  const {dark} = useThemeStore();
    const [selectedOption, setSelectedOption] = useState();
    const { loading, error, data } = useQuery(getSchools);

    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption);
        props.setSelectedSchool(selectedOption)
      
    };

    const options = data?.admin.schools.map((school) => {
      return {
          value: school.name,
          label: school.name,
          image: LightSchoolIcon,
          id: school.schoolId
         
      };
      });

    useEffect(() => {
      if(props.selectedSchool === ''){
        setSelectedOption(null);
      }
      if (props.selectedSchool && options) {
        const option =  options.find((option) => option.value === props.selectedSchool.value)
  
        setSelectedOption(option);
        
      }
    }, [data, props.selectedSchool]);
  
    const customStyles = {
      control: (provided) => ({
        ...provided,
        direction : 'rtl',
        backgroundColor: dark? '#1F242DAB' : '#F0F2F4',
        backdropFilter: 'blur(73px)',
        borderRadius: '7.142px',
        cursor: 'pointer',
        width: '380px',
        border: 'none',
        height: '61.598px',
        boxShadow: 'none',
        '&:after': {  // Add this pseudo-element for the icon
          content: `url("data:image/svg+xml;charset=UTF-8,<svg xmlns='http://www.w3.org/2000/svg' width='22' height='23' viewBox='0 0 22 23' fill='none'><path d='M7.21607 2.69531L14.6971 2.69531C17.9467 2.69531 19.8839 4.63254 19.8839 7.88208V15.3542C19.8839 18.6127 17.9467 20.5499 14.6971 20.5499H7.22499C3.97545 20.5499 2.03823 18.6127 2.03823 15.3632V7.88208C2.0293 4.63254 3.96653 2.69531 7.21607 2.69531Z' fill='%23122333'/><path d='M10.9564 14.2206C11.126 14.2206 11.2956 14.1581 11.4295 14.0242L14.5809 10.8729C14.8397 10.614 14.8397 10.1855 14.5809 9.92659C14.322 9.6677 13.8935 9.6677 13.6346 9.92659L10.9564 12.6048L8.27818 9.92659C8.01929 9.6677 7.59078 9.6677 7.33188 9.92659C7.07299 10.1855 7.07299 10.614 7.33188 10.8729L10.4832 14.0242C10.6171 14.1581 10.7868 14.2206 10.9564 14.2206Z' fill='white'/></svg>")`,
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
        width: '380px',
        height: '61.598px',
        backgroundColor: dark? '#444850' : '#F0F2F4',
        color: dark? 'white' : '#122333' ,
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
        width: '380px',
        direction : 'rtl',
        maxHeight: '320px',
        backgroundColor: dark? '#444850' : '#F0F2F4',
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
        color : dark ? "#FFFFFF87" : "#9DA4B0",
        fontSize: '15px',
        marginRight: '8px',
        
        
      }),
      input: (provided) => ({
        ...provided,
        caretColor: 'transparent',
        color: '#122333',
      }),
    
      
    };

  
 

  return (
    <div className="App">
      <Select
        options={options}
        styles={customStyles}
        placeholder=" اختر اسم المدرسه"
        value={selectedOption}
        onChange={handleChange}
        isSearchable={true}
        getOptionLabel={(option) => (
          <div className='selected flex items-center gap-x-6 text-xs font-medium'
            style={{
              direction: "rtl"
            }}
          >
            <img src={dark? SelectedSchoolIcon : option.image} alt={option.label} style={customStyles.optionImage} className=' w-10 h-10'/>
            <span className={`${ selectedOption && selectedOption.value === "Ultrasound" ? 'text-[10px]' : ''}`}> {option.label} </span>
          </div>
        )}
      />
    </div>
);

};



export default ChooseSchool;