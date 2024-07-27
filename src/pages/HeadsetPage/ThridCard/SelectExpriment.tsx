import { useReducer, useEffect } from 'react';
import ArrowIcon from '../../../assets/headset page/arrow.svg';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, Image } from "@nextui-org/react";
import { useThemeStore } from '../../../stores/ThemeStore';
import { chemistryOptions, physicsOptions } from '../../../data/expermients';
import useTranslationStore from '../../../stores/LanguageStore';

const reducerDispatch = (state, action) => {
  switch (action.type) {
    case 'chemistry':
      return chemistryOptions;
    case 'physics':
      return physicsOptions;
    default:
      return state;
  }
};

const SelectExpriment = ({ setSelectItem, selectedSubject, setSelectedSubject, subject }) => {
  const { dark } = useThemeStore();
  const { getTranslation, language } = useTranslationStore();
  const [options, dispatch] = useReducer(reducerDispatch, []);

  useEffect(() => {
    switch (selectedSubject) {
      case 'chemistry':
        dispatch({ type: 'chemistry' });
        break;
      case 'physics':
        dispatch({ type: 'physics' });
        break;
      default:
        dispatch({ type: 'default' });
        break;
    }
  }, [selectedSubject]);

  return (
    <Dropdown
      classNames={{
        content: "bg-[#444444] dark:bg-[#444850] text-white font-bold text-xs rounded",
      }}
      className='z-10'
      
    >
      <DropdownTrigger>
        <Button className='w-[154px] p-2 gap-x-3 bg-[#444444] dark:bg-[#444850] text-white font-bold text-xs rounded-md' onClick={() => setSelectedSubject(subject)}>
          <Image src={ArrowIcon} width={18} height={18} radius='none' />
          <span>{getTranslation('selectExperiment')}</span>
        </Button>
      </DropdownTrigger>

      <DropdownMenu aria-label='select-experiment'>
        {options.length !== 0 && options.map((option, index) => (
          <DropdownItem key={index} className='p-3 flex flex-row-reverse items-center gap-x-3 text-right border-b border-[#FFFEFE29] rounded-none'
            startContent={<Image src={option?.icon} width={18} height={18} radius='none' />}
            onClick={() => {
              setSelectItem({
                value: option?.value,
                icon: option?.icon,
                name: option?.name,
                title: option?.title
              });
            }}
          >
            {option?.name}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default SelectExpriment;
