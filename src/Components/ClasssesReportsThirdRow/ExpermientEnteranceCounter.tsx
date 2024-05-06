import { useEffect, useState} from 'react'
import { Divider } from '@nextui-org/react'

import { chemistryOptions, physicsOptions } from '../../data/expermients'
const ExpermientEnteranceCounter = ({data}) => {
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
    
            calculateTotal()
        
    }, [data])

    const calculateTotal = () => {
        const experimentTotalsMap = new Map();
          data.classesByNumber.forEach((classes) => {
          classes.students.forEach((student) => {
            const exprimentMap = new Map();
        
            // Collect maximum values for each experiment ID
            student.studnetExpriment.forEach((expriment) => {
              const exprimentId = expriment.expriment.exprimentId;
              const exprimentName = expriment.expriment.name;
        
              if (!exprimentMap.has(exprimentName)) {
                exprimentMap.set(exprimentName, {
                  totalEnterTraining: 0,
                  totalEnterTheortical: 0,
                  totalEnterPratical: 0
                });
              }
        
              exprimentMap.get(exprimentName).totalEnterTraining += expriment.enterTraining;
              exprimentMap.get(exprimentName).totalEnterTheortical += expriment.enterTheortical;
              exprimentMap.get(exprimentName).totalEnterPratical += expriment.enterPratical;
            });
        
            // Update the experimentTotalsMap
            exprimentMap.forEach((totals, exprimentName) => {
              if (!experimentTotalsMap.has(exprimentName)) {
                experimentTotalsMap.set(exprimentName, [totals]);
              } else {
                experimentTotalsMap.get(exprimentName).push(totals);
              }
            });
          });
        }
        )
        ;
        const summedExperimentTotals = new Map();
        experimentTotalsMap.forEach((totalsList, exprimentName) => {
          const summedTotals = totalsList.reduce((acc, totals) => {
            acc.totalEnterTraining += totals.totalEnterTraining;
            acc.totalEnterTheortical += totals.totalEnterTheortical;
            acc.totalEnterPratical += totals.totalEnterPratical;
            return acc;
          }, {
            totalEnterTraining: 0,
            totalEnterTheortical: 0,
            totalEnterPratical: 0
          });
        
          summedExperimentTotals.set(exprimentName, summedTotals);
        });
        setLiquid(
            summedExperimentTotals.get("Liquid Viscosity") ?
            summedExperimentTotals.get("Liquid Viscosity").totalEnterTraining + summedExperimentTotals.get("Liquid Viscosity").totalEnterTheortical + summedExperimentTotals.get("Liquid Viscosity").totalEnterPratical
             : 0)
        setHeat(
            summedExperimentTotals.get("Effective Use Of Bunsen Burner") ?
            summedExperimentTotals.get("Effective Use Of Bunsen Burner").totalEnterTraining + summedExperimentTotals.get("Effective Use Of Bunsen Burner").totalEnterTheortical + summedExperimentTotals.get("Effective Use Of Bunsen Burner").totalEnterPratical
             : 0)
        setWood(
            summedExperimentTotals.get("Density Of Wood") ?
            summedExperimentTotals.get("Density Of Wood").totalEnterTraining + summedExperimentTotals.get("Density Of Wood").totalEnterTheortical + summedExperimentTotals.get("Density Of Wood").totalEnterPratical
                : 0
            )
        setVolume(
            summedExperimentTotals.get("Volume Calculation") ?
            summedExperimentTotals.get("Volume Calculation").totalEnterTraining + summedExperimentTotals.get("Volume Calculation").totalEnterTheortical + summedExperimentTotals.get("Volume Calculation").totalEnterPratical
                : 0
            )
            setCharles(
            summedExperimentTotals.get("Charles") ?
            summedExperimentTotals.get("Charles").totalEnterTraining + summedExperimentTotals.get("Charles").totalEnterTheortical + summedExperimentTotals.get("Charles").totalEnterPratical
                : 0
            )
        setSizeOfMole(
            summedExperimentTotals.get("SizeOfMole") ?
            summedExperimentTotals.get("SizeOfMole").totalEnterTraining + summedExperimentTotals.get("SizeOfMole").totalEnterTheortical + summedExperimentTotals.get("SizeOfMole").totalEnterPratical
                : 0
            )
        setInertia(
            summedExperimentTotals.get("Inertia") ?
            summedExperimentTotals.get("Inertia").totalEnterTraining + summedExperimentTotals.get("Inertia").totalEnterTheortical + summedExperimentTotals.get("Inertia").totalEnterPratical
                : 0
            )
        setGeigerDevice(
            summedExperimentTotals.get("GeigerDevice") ?
            summedExperimentTotals.get("GeigerDevice").totalEnterTraining + summedExperimentTotals.get("GeigerDevice").totalEnterTheortical + summedExperimentTotals.get("GeigerDevice").totalEnterPratical
                : 0
            )

    }
  return (
    <div className=' w-[532px] h-[354px] overflow-y-auto p-7 bg-white dark:bg-primary-dark rounded-lg flex flex-col gap-y-5'>
        <span className=' text-text-black dark:text-white text-sm font-bold'>عدد مرات  الدخول الى التجارب </span>
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
         
             <div className='w-full flex flex-col gap-y-5 text-text-black dark:text-white text-xs'>

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
