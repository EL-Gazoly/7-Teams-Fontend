import React from 'react'

type Props = {
    value: number
    title: string
    timeValue: string
}

const Progress = ({ value, title}: Props) => {
  return (
    <div className=' w-full flex flex-col gap-y-2'>
        <div className=' flex items-center justify-between'>
            <span className=' text-[#615E83] text-xs'> {title}  </span>
            <span className=' text-[#1223336B] text-[10px]'
                style={{
                    direction: 'ltr'
                }}
            > {value}h </span>

        </div>
        <div className=' relative w-full h-3 rounded bg-[#E6FDEA]'>
                <div className={`absolute inset-0  ${title===" الاجمالي " ? "bg-[#2DEC4C] " : "bg-[#CFCFD7] "} rounded`}
                    style={{
                        width: `${value/150*100}%`
                    }}
                />
        </div>

      
    </div> 
  )
}

export default Progress
