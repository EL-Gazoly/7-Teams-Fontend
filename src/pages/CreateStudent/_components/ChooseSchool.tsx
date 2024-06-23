import { useEffect, useState } from 'react';
import Select from 'react-select';
import { getSchools} from '@/graphql/School/index.ts'
import { useQuery } from '@apollo/client';
import SelectedSchoolIcon from '@/assets/SideBar/Open/school.svg'
import LightSchoolIcon from '@/assets/SideBar/Open/default/school.svg'
import {useThemeStore} from '@/stores/ThemeStore.ts'
import CustomStyles from '../customStyles.tsx';
import useTranslationStore from '@/stores/LanguageStore.ts';
const ChooseSchool = (props) => {
  const {dark} = useThemeStore();
    const [selectedOption, setSelectedOption] = useState(props.selectedCourse);
    const { loading, error, data } = useQuery(getSchools);
    const { language, getTranslation } = useTranslationStore();

    const handleChange = (selectedOption) => {
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
      
        const customStyles =  CustomStyles({dark});
 
  

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
        placeholder={getTranslation('choose_school')}
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
            <img src={dark? SelectedSchoolIcon : option.image} alt={option.label} className=' w-10 h-10'/>
            <span className={`${ selectedOption && selectedOption.value === "Ultrasound" ? 'text-[10px]' : ''}`}> {option.label} </span>
          </div>
        )}
      />
    </div>
);

};



export default ChooseSchool;