import { useEffect, useState} from 'react'
import { Divider } from '@nextui-org/react'
import LiquidExpirment from '../../assets/SelectCourse/SelectExpriment/Chemistry/liquid.svg'
import HeatExpriment from '../../assets/SelectCourse/SelectExpriment/Chemistry/heat.svg'
import DenistyOfWood from '../../assets/SelectCourse/SelectExpriment/Chemistry/DensityOfWood.svg'
import VolumeCalculation from '../../assets/SelectCourse/SelectExpriment/Chemistry/size.svg'

const ExpermientEnteranceCounter = ({data, setEnterTraining, setEnterTheortical, setEnterPratical, enterTraining
    , enterTheortical, enterPratical
}) => {
    const [liquid, setLiquid] = useState(0)
    const [heat, setHeat] = useState(0)
    const [wood, setWood] = useState(0)
    const [volume, setVolume] = useState(0)
    useEffect(() => {
    
            calculateTotal()
        
    }, [data])

    const calculateTotal = () => {
        const experimentTotalsMap = new Map();
        data.teamByName.forEach((team) => {
        team.classes.forEach((classObj) => {
          classObj.students.forEach((student) => {
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
        });
      });
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

    }
  return (
    <div className=' w-[532px] h-[354px] p-7 bg-white dark:bg-primary-dark rounded-lg flex flex-col gap-y-5'>
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
                <div className='w-full flex items-center justify-between'>
                    <div className='flex items-center gap-x-8 '>
                        <span className=' font-medium'>01</span>
                        <img src={LiquidExpirment} alt="" className=' w-5 h-5' />
                        <span className=' font-bold'>لزوجه السائل</span>
                    </div>
                    <div className=' w-[41px] h-[42px] flex items-center justify-center bg-[#E8E9EB] dark:bg-[#2E333B] font-medium'>
                            {liquid}
                    </div> 
                </div>
                <div className='w-full flex items-center justify-between'>
                    <div className='flex items-center gap-x-8 '>
                        <span className=' font-medium'>02</span>
                        <img src={DenistyOfWood} alt="" className=' w-5 h-5' />
                        <span className=' font-bold'> كثافه الخشب</span>
                    </div>
                    <div className=' w-[41px] h-[42px] flex items-center justify-center bg-[#E8E9EB] dark:bg-[#2E333B] font-medium'>
                            {wood}
                    </div> 
                </div>
                <div className='w-full flex items-center justify-between'>
                    <div className='flex items-center gap-x-8 '>
                        <span className=' font-medium'>03</span>
                        <img src={HeatExpriment} alt="" className=' w-5 h-5' />
                        <span className=' font-bold'> استخدام موقد بنسن</span>
                    </div>
                    <div className=' w-[41px] h-[42px] flex items-center justify-center bg-[#E8E9EB] dark:bg-[#2E333B] font-medium'>
                            {heat}
                    </div> 
                </div>
                <div className='w-full flex items-center justify-between'>
                        <div className='flex items-center gap-x-8 '>
                            <span className=' font-medium'>04</span>
                            <img src={VolumeCalculation} alt="" className=' w-5 h-5' />
                            <span className=' font-bold'> تحديد الحجم</span>
                        </div>
                        <div className=' w-[41px] h-[42px] flex items-center justify-center bg-[#E8E9EB] dark:bg-[#2E333B] font-medium'>
                                {volume}
                        </div> 
                    </div>


            </div>


        </div>
    
    </div>
  )
}

export default ExpermientEnteranceCounter
