import React from 'react'

type Props = {
    value: number
    title: string
    timeValue: string
}

const Progress = ({ value, title}: Props) => {
  return (
    <div className=' w-[349.98px] flex flex-col gap-y-2'>
        <div className=' flex items-center justify-between'>
            <span className=' text-[#615E83] dark:text-[#DBDBDB] text-xs'> {title}  </span>
            <span className=' text-[#1223336B] text-[10px]'
                style={{
                    direction: 'ltr'
                }}
            > {value}h </span>

        </div>
        <div className=' relative w-full h-3 rounded-[3px] bg-[#F8F8FF] dark:bg-[#32363F]'>
                <div className={`absolute inset-0  ${title===" الاجمالي " ? "bg-[#2DEC4C] " : "bg-[#CFCFD7] dark:bg-[#374151] "} rounded-[3px]`}
                    style={{
                        width: `${value/150*100}%`
                    }}
                />
        </div>

      
    </div> 
  )
}

export default Progress
