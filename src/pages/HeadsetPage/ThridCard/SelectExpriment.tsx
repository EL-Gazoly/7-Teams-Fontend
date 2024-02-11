import LiquidExpirment from '../../../assets/SelectCourse/SelectExpriment/Chemistry/liquid.svg'
import HeatExpriment from '../../../assets/SelectCourse/SelectExpriment/Chemistry/heat.svg'
import DenistyOfWood from '../../../assets/SelectCourse/SelectExpriment/Chemistry/DensityOfWood.svg'
import VolumeCalculation from '../../../assets/SelectCourse/SelectExpriment/Chemistry/size.svg'
import ArrowIcon from '../../../assets/headset page/arrow.svg'
import {  Dropdown,  DropdownTrigger,  DropdownMenu,  DropdownItem, Button, Image } from "@nextui-org/react";
import { useThemeStore } from '../../../stores/ThemeStore'


const SelectExpriment = ({setSelectItem}) => {
  const { dark } = useThemeStore()
  return (
    <Dropdown
      classNames={{
        content: "bg-[#444444] dark:bg-[#444850] text-white font-bold text-xs rounded",
      }}
      className=' z-10'
      
    >
        <DropdownTrigger>
            <Button className=' w-[154px] p-2 gap-x-3 bg-[#444444] dark:bg-[#444850] text-white font-bold text-xs rounded-md'>
                <Image src={ArrowIcon} width={18} height={18}  radius='none' />
                <span> اختر التجربه </span>
            </Button>
        </DropdownTrigger>

        <DropdownMenu aria-label='select-expriemnt'>
         
                <DropdownItem className='flex flex-row-reverse items-center gap-x-3 text-right border-b border-[#FFFEFE29] rounded-none p-3'
                  startContent={<Image src={LiquidExpirment} width={18} height={18} radius='none' /> } 
                    onClick={()=> {
                      setSelectItem({
                        value : "bf018686-aa10-40ba-99b8-a2d272110bb3",
                        icon : LiquidExpirment,
                        title : " تجربه السوائل  ",
                        label: "LiquidViscosity"
                      })
                    }}
                  >
                   تجربة السوائل 
                </DropdownItem>
                
                <DropdownItem className='p-2 flex flex-row-reverse items-center gap-x-3 text-right border-b border-[#FFFEFE29] rounded-none'
                  startContent={<Image src={HeatExpriment} width={18} height={18} radius='none' /> } 
                  onClick={()=> {
                    setSelectItem({
                      value : "ace39607-1086-4ec6-a207-76969e5419c8",
                      icon : HeatExpriment,
                      title : "  استخدام موقد بنسن ",
                      label: "EffectiveUseOfBunsenBurner"
                    })
                  }}
                  >
                       استخدام موقد بنسن         
                </DropdownItem>

                <DropdownItem className=' p-3 flex flex-row-reverse items-center gap-x-3 text-right border-b border-[#FFFEFE29] rounded-none'
                  startContent={<Image src={DenistyOfWood} width={18} height={18} radius='none' /> }
                  onClick={()=> {
                    setSelectItem({
                      value :  "e196ece4-990a-4944-8940-00ccc9de50a3",
                      icon : DenistyOfWood,
                      title : "  كثافة الخشب ",
                      label: "DensityOfWood"
                    })
                  }}
                  >
                    كثافة الخشب  
                </DropdownItem>

                <DropdownItem className=' p-3 flex flex-row-reverse items-center gap-x-3 text-right border-b border-[#FFFEFE29] rounded-none'
                  startContent={<Image src={VolumeCalculation} width={18} height={18} radius='none' /> }
                  onClick={()=> {
                    setSelectItem({
                      value : "ca7823aa-2a14-49d5-b509-d218c68bf892",
                      icon : VolumeCalculation,
                      title : "  تحديد الحجم ",
                      label: "VolumeCalculation"
                    })
                  }}
                  >
                    تحديد الحجم
                </DropdownItem>
      
        </DropdownMenu>
    </Dropdown>
  )
}

export default SelectExpriment
