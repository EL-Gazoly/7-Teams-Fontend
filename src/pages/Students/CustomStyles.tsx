import useTranslationStore from "@/stores/LanguageStore";
type customStylesProps = {
    dark: boolean;
    selectedOption: any;
}


const CustomStyle = ({dark, selectedOption} : customStylesProps) => {
    const { language } = useTranslationStore();
    const customStyles = {
        control: (provided) => ({
          ...provided,
          direction : language === "ar" ? 'rtl' : 'ltr',
          backgroundColor:  selectedOption? '#50D766' : dark ? '#40444D' : '#444',
          backdropFilter: 'blur(73px)',
          borderRadius: '4px',
          cursor: 'pointer',
          width: '201px',
          border: 'none',
          maxHeight: '81px',
          boxShadow: 'none',
          '&:after': {  // Add this pseudo-element for the icon
            content: `url("data:image/svg+xml;charset=UTF-8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><g id='vuesax%2Fbulk%2Farrow-square-down'><g id='arrow-square-down'><path id='Vector' d='M16.19 2L7.81 2C4.17 2 2 4.17 2 7.81L2 16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z' fill='white'/><path id='Vector_2' d='M12 14.91C11.81 14.91 11.62 14.84 11.47 14.69L7.94003 11.16C7.65003 10.87 7.65003 10.39 7.94003 10.1C8.23003 9.81001 8.71003 9.81001 9.00003 10.1L12 13.1L15 10.1C15.29 9.81001 15.77 9.81001 16.06 10.1C16.35 10.39 16.35 10.87 16.06 11.16L12.53 14.69C12.38 14.84 12.19 14.91 12 14.91Z' fill='%23292D32'/></g></g></svg>")`,
            position: 'absolute',
            top: '60%',
            right: language === "ar"  ? '80%' : "-1%",
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
          color: 'white',
          cursor: 'pointer',
          display: 'flex',
         flexDirection : language === "ar" ? 'row-reverse' : 'row',
          alignItems: 'center',
          gap: '10px',
          fontSize: '16px',
          marginLeft: '16px',
        }),
        option: (provided) => ({
          ...provided,
          width: '201px',
          height: '81px',
          backgroundColor:  dark ? '#40444D' : '#444',
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
          width: '201px',
          direction : language === "ar" ? 'rtl' : 'ltr',
          maxHeight: '320px',
          backgroundColor:  dark ? '#40444D' : '#444',
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
    return customStyles;
}

export default CustomStyle
