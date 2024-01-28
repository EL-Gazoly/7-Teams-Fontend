import PrinterIcon from '../../assets/Reports/printer.png'
import { Button, Divider } from '@nextui-org/react'
import GroupIcon from '../../assets/Reports/StageReports/group.svg'

const StageCard = () => {
  return (
    <div className=' w-[458px] h-[324px] py-[50px] px-[30px] flex flex-col gap-y-[26px] bg-white rounded-lg'>
        <div className=' w-full flex items-center justify-end '>
            <Button className=' bg-primary-gradient text-white w-[90px] h-[35px]'>
                <img src={PrinterIcon} alt="" />
                <span className=' text-xs'> طباعه </span>
            </Button>
        </div>
        
        <div className=' w-full flex items-center justify-center'>
            <div className=' w-[74px] h-[74px] bg-[#CFCFD7] rounded-full flex items-center justify-center border border-[#2DEC4C]'>
                <img src={GroupIcon} alt="" />

            </div>
        </div>

        <div className=' w-full flex items-center justify-center mr-3'>
         <span className=' w-28 text-2xl font-bold'>المرحله الثانويه</span>

        </div>
      
    </div>
  )
}

export default StageCard
