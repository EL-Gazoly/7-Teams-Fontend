import { Divider } from '@nextui-org/react'
import LiquidExpirment from '../../assets/SelectCourse/SelectExpriment/Chemistry/liquid.svg'
import HeatExpriment from '../../assets/SelectCourse/SelectExpriment/Chemistry/heat.svg'
import DenistyOfWood from '../../assets/SelectCourse/SelectExpriment/Chemistry/DensityOfWood.svg'

const ExpermientEnteranceCounter = () => {
  return (
    <div className=' w-[532px] h-[354px] p-7 bg-white rounded-lg flex flex-col gap-y-5'>
        <span className=' text-text-black text-sm font-bold'>عدد مرات  الدخول الى التجارب </span>
        <div className=' flex flex-col items-center gap-4'>
            <div className=' w-full flex items-center justify-between text-[10px] text-[#96A5B8]'>
                <div className=' flex items-center gap-x-8 t'>
                    <span className='' >#</span>
                    <span>التجربة</span>
                    <span>اسم التجربه</span>

                </div>
                <span>العدد</span>

            </div>
            <Divider className=' bg-[#2DEC4C]' />
            <div className='w-full flex flex-col gap-y-5 text-text-black text-xs'>
                <div className='w-full flex items-center justify-between'>
                    <div className='flex items-center gap-x-8 '>
                        <span className=' font-medium'>01</span>
                        <img src={LiquidExpirment} alt="" className=' w-5 h-5' />
                        <span className=' font-bold'>لزوجه السائل</span>
                    </div>
                    <div className=' w-[41px] h-[42px] flex items-center justify-center bg-[#E8E9EB] font-medium'>
                            40
                    </div> 
                </div>
                <div className='w-full flex items-center justify-between'>
                    <div className='flex items-center gap-x-8 '>
                        <span className=' font-medium'>02</span>
                        <img src={DenistyOfWood} alt="" className=' w-5 h-5' />
                        <span className=' font-bold'> كثافه الخشب</span>
                    </div>
                    <div className=' w-[41px] h-[42px] flex items-center justify-center bg-[#E8E9EB] font-medium'>
                            40
                    </div> 
                </div>
                <div className='w-full flex items-center justify-between'>
                    <div className='flex items-center gap-x-8 '>
                        <span className=' font-medium'>03</span>
                        <img src={HeatExpriment} alt="" className=' w-5 h-5' />
                        <span className=' font-bold'> تحديد الحجم</span>
                    </div>
                    <div className=' w-[41px] h-[42px] flex items-center justify-center bg-[#E8E9EB] font-medium'>
                            40
                    </div> 
                </div>


            </div>


        </div>
    
    </div>
  )
}

export default ExpermientEnteranceCounter
