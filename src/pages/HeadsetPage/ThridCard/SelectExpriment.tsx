import { useReducer, useEffect} from 'react'

import LiquidExpirment from '../../../assets/SelectCourse/SelectExpriment/Chemistry/liquid.svg'
import HeatExpriment from '../../../assets/SelectCourse/SelectExpriment/Chemistry/heat.svg'
import DenistyOfWood from '../../../assets/SelectCourse/SelectExpriment/Chemistry/DensityOfWood.svg'
import VolumeCalculation from '../../../assets/SelectCourse/SelectExpriment/Chemistry/size.svg'
import CharlesLaw from '../../../assets/SelectCourse/SelectExpriment/Chemistry/Charles.svg'
import SizeOfMole from '../../../assets/SelectCourse/SelectExpriment/Chemistry/SizeOfMole.svg'

import GeigerDevice from '../../../assets/SelectCourse/SelectExpriment/Physics/GeigerDevice.svg'
import Inertia from '../../../assets/SelectCourse/SelectExpriment/Physics/Inertia.svg'


import ArrowIcon from '../../../assets/headset page/arrow.svg'
import {  Dropdown,  DropdownTrigger,  DropdownMenu,  DropdownItem, Button, Image } from "@nextui-org/react";
import { useThemeStore } from '../../../stores/ThemeStore'
import { set } from 'firebase/database'

const chemistryOptions = [
  { value: 'bf018686-aa10-40ba-99b8-a2d272110bb3', label: 'LiquidViscosity', icon: LiquidExpirment, title: ' تجربه السوائل '},
  { value: 'ace39607-1086-4ec6-a207-76969e5419c8', label: 'EffectiveUseOfBunsenBurner', icon: HeatExpriment, title: '  استخدام موقد بنسن '},
  { value: 'e196ece4-990a-4944-8940-00ccc9de50a3', label: 'DensityOfWood', icon: DenistyOfWood, title: '  كثافة الخشب '},
  { value: 'ca7823aa-2a14-49d5-b509-d218c68bf892', label: 'VolumeCalculation', icon: VolumeCalculation, title: '  تحديد الحجم '},
  { value: 'f07fc617-1414-49bc-b042-4d308d0625b4', label: 'Charles', icon: CharlesLaw, title: '  قانون تشارلز '},
  { value: 'b5161b4a-e770-48f6-9e2a-4a732996bd15', label: 'SizeOfMole', icon: SizeOfMole, title: '  حجم المول '},
]

const physicsOptions = [
  {value : 'e453806f-6e02-456d-8dd1-2927ee64eb8a', label: 'GeigerDevice', icon: GeigerDevice,  title : "النشاط الإشعاعي"},
  {value : '3692ce59-e5fd-4d60-aad6-0ae42b08f910', label: 'Inertia', icon: Inertia,  title : "القصور الذاتي"}
]

const reducerDispatch = (state, action) => {
  switch (action.type) {
    case 'chemistry':
      return chemistryOptions;
    case 'physics':
      return physicsOptions;
    default:
      return state;
  }
}


const SelectExpriment = ({setSelectItem, selectedSubject, setSelectedSubject, subject}) => {
  const { dark } = useThemeStore()
  const [options, dispatch] = useReducer(reducerDispatch, [])

  useEffect(() => {
    switch (selectedSubject) {
      case 'chemistry':
        dispatch({type: 'chemistry'})
        console.log(options)
        break;
      case 'physics':
        dispatch({type: 'physics'})
         console.log(options)
        break;
      default:
        dispatch({type: 'default'})
        break;
    }
  }, [selectedSubject])

  return (
    <Dropdown
      classNames={{
        content: "bg-[#444444] dark:bg-[#444850] text-white font-bold text-xs rounded",
      }}
      className=' z-10'
     
      
    >
        <DropdownTrigger>
            <Button className=' w-[154px] p-2 gap-x-3 bg-[#444444] dark:bg-[#444850] text-white font-bold text-xs rounded-md'  onClick={()=> setSelectedSubject(subject)}>
                <Image src={ArrowIcon} width={18} height={18}  radius='none' />
                <span> اختر التجربه </span>
            </Button>
        </DropdownTrigger>

        <DropdownMenu aria-label='select-expriemnt'>

                {
                  options.length !== 0 && options.map((option, index) => (
                    <DropdownItem key={index} className=' p-3 flex flex-row-reverse items-center gap-x-3 text-right border-b border-[#FFFEFE29] rounded-none'
                      startContent={<Image src={option?.icon} width={18} height={18} radius='none' /> }
                      onClick={()=> {
                        setSelectItem({
                          value : option?.value,
                          icon : option?.icon,
                          title : option?.title,
                          label: option?.label
                        })
                      }}
                      >
                        {option?.title}
                    </DropdownItem>
                  ))
                }
      
        </DropdownMenu>
    </Dropdown>
  )
}

export default SelectExpriment
