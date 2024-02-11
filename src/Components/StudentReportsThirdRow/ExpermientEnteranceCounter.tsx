import { Divider } from '@nextui-org/react'
import LiquidExpirment from '../../assets/SelectCourse/SelectExpriment/Chemistry/liquid.svg'
import HeatExpriment from '../../assets/SelectCourse/SelectExpriment/Chemistry/heat.svg'
import DenistyOfWood from '../../assets/SelectCourse/SelectExpriment/Chemistry/DensityOfWood.svg'
import VolumeCalculation from '../../assets/SelectCourse/SelectExpriment/Chemistry/size.svg'
import { useEffect, useState } from 'react'

const ExpermientEnteranceCounter = ({expermients}) => {
    const [liquid, setLiquid] = useState(0)
    const [heat, setHeat] = useState(0)
    const [wood, setWood] = useState(0)
    const [volume, setVolume] = useState(0)
    useEffect(() => {
        if(expermients) {
            expermients = Object.values(expermients)
            expermients.forEach((expermient)=>{
                if(expermient.name== "Liquid Viscosity")
                    setLiquid(liquid + expermient.enterPratical + expermient.enterTheortical + expermient.enterTraining)
                if(expermient.name== "Effective Use Of Bunsen Burner")
                    setHeat(heat + expermient.enterPratical + expermient.enterTheortical + expermient.enterTraining)
                if(expermient.name== "Density Of Wood")
                    setWood(wood + expermient.enterPratical + expermient.enterTheortical + expermient.enterTraining)
                if(expermient.name== "Volume Calculation")
                    setVolume(volume + expermient.enterPratical + expermient.enterTheortical + expermient.enterTraining)
                
            })
        }
    }, [expermients])
  return (
    <div className=' w-[532px] h-[354px] p-7 bg-white dark:bg-primary-dark rounded-lg flex flex-col gap-y-5'>
        <span className=' text-text-black dark:text-white text-sm font-bold'>عدد مرات  الدخول الى التجارب </span>
        <div className=' flex flex-col items-center gap-4'>
            <div className=' w-full flex items-center justify-between text-[10px] text-[#96A5B8] dark:text-[#EAEBEC]'>
                <div className=' flex items-center gap-x-8 t'>
                    <span className='' >#</span>
                    <span>التجربة</span>
                    <span>اسم التجربه</span>

                </div>
                <span>العدد</span>

            </div>
            <Divider className=' bg-[#2DEC4C]' />
            <div className='w-full flex flex-col gap-y-5 text-text-black dark:text-white text-xs'>
                <div className='w-full flex items-center justify-between'>
                    <div className='flex items-center gap-x-8 '>
                        <span className=' font-medium'>01</span>
                        <img src={LiquidExpirment} alt="" className=' w-5 h-5' />
                        <span className=' font-bold'>لزوجه السائل</span>
                    </div>
                    <div className=' w-[41px] h-[42px] flex items-center justify-center bg-[#E8E9EB] dark:bg-[#373C44] font-medium'>
                            {liquid}
                    </div> 
                </div>
                <div className='w-full flex items-center justify-between'>
                    <div className='flex items-center gap-x-8 '>
                        <span className=' font-medium'>02</span>
                        <img src={DenistyOfWood} alt="" className=' w-5 h-5' />
                        <span className=' font-bold'> كثافه الخشب</span>
                    </div>
                    <div className=' w-[41px] h-[42px] flex items-center justify-center bg-[#E8E9EB] dark:bg-[#373C44] font-medium'>
                            {wood}
                    </div> 
                </div>
                <div className='w-full flex items-center justify-between'>
                    <div className='flex items-center gap-x-8 '>
                        <span className=' font-medium'>03</span>
                        <img src={HeatExpriment} alt="" className=' w-5 h-5' />
                        <span className=' font-bold'>  استخدام موقد بنسن</span>
                    </div>
                    <div className=' w-[41px] h-[42px] flex items-center justify-center bg-[#E8E9EB] dark:bg-[#373C44] font-medium'>
                            {heat}
                    </div> 
                </div>
                <div className='w-full flex items-center justify-between'>
                        <div className='flex items-center gap-x-8 '>
                            <span className=' font-medium'>04</span>
                            <img src={VolumeCalculation} alt="" className=' w-5 h-5' />
                            <span className=' font-bold'> تحديد الحجم</span>
                        </div>
                        <div className=' w-[41px] h-[42px] flex items-center justify-center bg-[#E8E9EB] dark:bg-[#373C44] font-medium'>
                                {volume}
                        </div>
                </div>


            </div>


        </div>
    
    </div>
  )
}

export default ExpermientEnteranceCounter
