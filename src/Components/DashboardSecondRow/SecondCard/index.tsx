import React from 'react'
import { Chart } from "react-google-charts";
import { Divider } from '@nextui-org/react';
export const data = [
  ["Student", "number"],
  ["جديد", 62],
  ["بدأو التدريب", 13],
  ["خرحين", 23],

];

export const options = {
  legend: "none",
  pieSliceText: "none",
  slices: {
    0: { color: "#009017", borderRadius: '50%' },
    1: { color: "#21FB45" },
    2: { color: "#8DF49D" },
  },
  pieHole: 0.5,
  sliceVisibilityThreshold: 0.1,
  backgroundColor: 'transparent', 
}

const SecondCard = () => {
  return (
    <div className=' w-[289px] h-[254px] rounded-lg bg-white py-[10px] flex flex-col gap-y-5 relative'>
      <span className=' text-base font-bold mx-4'>  عدد المتدربين المسجلين   </span>
      <Divider className=' w-full bg-[#E4E5E7]' />
      <div className=' mt-[10px] self-end flex items-center gap-x-6'>
        <div className='flex flex-col gap-y-4 '>
          <span className=' text-[27px] font-bold text-[#444]'> 4,209 </span>
          <div className=' flex flex-col gap-y-[14px] text-xs text-[#444] font-semibold text-right'>
            <div className='flex flex-col items-center gap-y-2'>
              <div className=' flex items-center gap-x-1 w-[118px]'>
                  <div className=' w-3 h-2 rounded bg-[#009017]'  />
                  <span className=''>62% جديد</span>
              </div>
              <div className=' flex items-center gap-x-1 w-[118px] '>
                  <div className=' w-3 h-2 rounded bg-[#21FB45]'  />
                  <span className=''>13% بدأو التدريب</span>
              </div>
              <div className=' flex items-center gap-x-1 w-[118px] '>
                  <div className=' w-3 h-2 rounded bg-[#8DF49D]'  />
                  <span className=''> 23% خرحين </span>
              </div>

            </div>

          </div>

        </div>
        <div className=' absolute top-[20%] right-[-5%]'>
          <Chart
          chartType="PieChart"
            options={options}
            data={data}
            width={"200px"}
            height={"200px"}
        
          />

        </div>
   
      </div>
    </div>
  )
}

export default SecondCard
