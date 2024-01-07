import React from 'react'

type Props = {
    value: number
    title: string
}

const Progress = ({ value, title}: Props) => {
    const [progress, setProgress] = React.useState(null)
    React.useEffect(() => {
        const progres = (value / 150) * 100
        setProgress( progres)
    }, [value])
  return (
    <div className=' w-[349.98px] flex flex-col gap-y-2'>
        <div className=' flex items-center justify-between'>
            <span className=' text-[#615E83] text-xs'> {title}  </span>
            <span className=' text-[#1223336B] text-[10px]'
                style={{
                    direction: 'ltr'
                }}
            > 7 h 28 min </span>

        </div>
        <div className=' relative w-full h-3 rounded-[3px] bg-[#F8F8FF]'>
                <div className={`absolute inset-0  ${title===" الاجمالي " ? "bg-[#2DEC4C] " : "bg-[#CFCFD7] "} rounded-[3px]`}
                    style={{
                        width: `${progress}%`
                    }}
                />
        </div>

      
    </div> 
  )
}

export default Progress
