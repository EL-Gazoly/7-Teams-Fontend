import LiquidExpirment from '../../../assets/SelectCourse/SelectExpriment/Chemistry/liquid.svg'
import MetalExpriment from '../../../assets/SelectCourse/SelectExpriment/Chemistry/metals.png'
import ColdExpriment from '../../../assets/SelectCourse/SelectExpriment/Chemistry/cold.png'
import HeatExpriment from '../../../assets/SelectCourse/SelectExpriment/Chemistry/heat.svg'
import ArrowIcon from '../../../assets/headset page/arrow.svg'
import {  Dropdown,  DropdownTrigger,  DropdownMenu,  DropdownItem, Button, Image , Divider} from "@nextui-org/react";

import React from 'react'

const SelectExpriment = ({setSelectItem}) => {
  return (
    <Dropdown
      classNames={{
        content: "bg-[#444444] text-white font-bold text-xs rounded",
      }}
      className=' z-10'
      
    >
        <DropdownTrigger>
            <Button className=' w-[154px] p-2 gap-x-3 bg-[#444444] text-white font-bold text-xs rounded-md'>
                <Image src={ArrowIcon} width={18} height={18}  radius='none' />
                <span> اختر التجربه </span>
            </Button>
        </DropdownTrigger>

        <DropdownMenu aria-label='select-expriemnt'>
         
                <DropdownItem className='flex flex-row-reverse items-center gap-x-3 text-right border-b border-[#FFFEFE29] rounded-none p-3'
                  startContent={<Image src={LiquidExpirment} width={18} height={18} radius='none' /> } 
                    onClick={()=> {
                      setSelectItem({
                        icon : LiquidExpirment,
                        title : " تجربه السوائل  "
                      })
                    }}
                  >
                   تجربة السوائل 
                </DropdownItem>
                <DropdownItem className='p-2 flex flex-row-reverse items-center gap-x-3 text-right border-b border-[#FFFEFE29] rounded-none'
                  startContent={<Image src={MetalExpriment} width={18} height={18} radius='none' /> } 
                  onClick={()=> {
                    setSelectItem({
                      icon : MetalExpriment,
                      title : " اختبار الفلزات "
                    })
                  }}
                  >
                   اختبار الفلزات
                </DropdownItem>
                <DropdownItem className=' p-3 flex flex-row-reverse items-center gap-x-3 text-right border-b border-[#FFFEFE29] rounded-none'
                  startContent={<Image src={ColdExpriment} width={18} height={18} radius='none' /> }
                  onClick={()=> {
                    setSelectItem({
                      icon : ColdExpriment,
                      title : " كمادات باردة "
                    })
                  }}
                  >
                   كمادات باردة
                </DropdownItem>
                <DropdownItem className='flex flex-row-reverse items-center gap-x-3 text-right border-b border-[#FFFEFE29] rounded-none p-3'
                  startContent={<Image src={HeatExpriment} width={18} height={18} radius='none' /> }
                  onClick={()=> {
                    setSelectItem({
                      icon : HeatExpriment,
                      title : " حرارة نوعية "
                    })
                  }}
                  >
                   حرارة نوعية
                </DropdownItem>
                
      
        </DropdownMenu>
    </Dropdown>
  )
}

export default SelectExpriment
