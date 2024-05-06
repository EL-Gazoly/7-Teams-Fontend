import { Divider } from '@nextui-org/react'
import { useEffect, useState } from 'react'

import { chemistryOptions, physicsOptions } from '../../../../data/expermients'
import { set } from 'firebase/database'

const ExpermientEnteranceCounter = ({expermients}) => {
    const [liquid, setLiquid] = useState(0)
    const [heat, setHeat] = useState(0)
    const [wood, setWood] = useState(0)
    const [volume, setVolume] = useState(0)
   const [charles, setCharles] = useState(0)
   const [sizeOfMole, setSizeOfMole] = useState(0)
   const [Inertia, setInertia] = useState(0)
   const [GeigerDevice, setGeigerDevice] = useState(0)
    const optionswithState = [
        {...chemistryOptions[0], state: liquid},
        {...chemistryOptions[1], state: heat},
        {...chemistryOptions[2], state: wood},
        {...chemistryOptions[3], state: volume},
        {...chemistryOptions[4], state: charles},
        {...chemistryOptions[5], state: sizeOfMole},
        {...physicsOptions[0], state: Inertia},
        {...physicsOptions[1], state: GeigerDevice},

    ]
    useEffect(() => {
        if(expermients) {
            setLiquid(0)
            setHeat(0)
            setWood(0)
            setVolume(0)
            setCharles(0)
            setSizeOfMole(0)
            setInertia(0)
            setGeigerDevice(0)
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
                if(expermient.name== "Charles")
                    setCharles(charles + expermient.enterPratical + expermient.enterTheortical + expermient.enterTraining)
                if(expermient.name== "SizeOfMole")
                    setSizeOfMole(sizeOfMole + expermient.enterPratical + expermient.enterTheortical + expermient.enterTrainin)
                if (expermient.name == "Inertia")
                    setInertia(Inertia + expermient.enterPratical + expermient.enterTheortical + expermient.enterTraining)
                if (expermient.name == "GeigerDevice")
                    setGeigerDevice(GeigerDevice + expermient.enterPratical + expermient.enterTheortical + expermient.enterTraining)
                
            })
        }
    }, [expermients])
  return (
    <div className=' w-[532px] h-[354px] overflow-y-auto  p-7 bg-white dark:bg-primary-dark rounded-lg flex flex-col gap-y-5'>
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
            <div className='w-full flex flex-1  overflow-y-auto flex-col gap-y-5 text-text-black dark:text-white text-xs overflow-scroll'>
         
                {
                    optionswithState.map((option, index) => {
                        return (
                            <div className='w-full h-full flex items-center justify-between'>
                                <div className='flex items-center gap-x-8 '>
                                    <span className=' font-medium'>{index + 1}</span>
                                    <img src={option.icon} alt="" className=' w-5 h-10' />
                                    <span className=' font-bold'>{option.name}</span>
                                </div>
                                <div className=' w-[41px] h-[42px] flex items-center justify-center dark:bg-[#373C44] font-medium'>
                                    {option.state}
                                </div> 
                            </div>
                        )
                    })
                }


            </div>


        </div>
    
    </div>
  )
}

export default ExpermientEnteranceCounter
