import {useState, useEffect} from 'react'
import { Tabs, Tab, Divider } from '@nextui-org/react'
import Progress from './Progress'
import { set } from 'firebase/database'

const DashboardThridRowSecondCol = ({studentExperiments}) => {
    const [timeValue, setTimeValue] = useState<'day' | 'month' | 'year'>('day')
    const [totalTime, setTotalTime] = useState(0)
    const [totalPraticalTime, setTotalPraticalTime] = useState(0)
    const [totalTheorticalTime, setTotalTheorticalTime] = useState(0)
    const [totalTrainingTime, setTotalTrainingTime] = useState(0)
    const convertmsToHours = (ms) => {
        return Math.floor(ms / 1000 / 60 / 60 )
    }
    useEffect(() => {
        setTotalPraticalTime(0)
        setTotalTheorticalTime(0)
        setTotalTrainingTime(0)
        setTotalTime(0)
        if(studentExperiments){
            if(timeValue === 'day'){
                const {totalPraticalTime, totalTheorticalTime, totalTrainingTime} = studentExperiments?.expriemntsByDay[0] || {totalPraticalTime: 0, totalTheorticalTime: 0, totalTrainingTime: 0}
                setTotalPraticalTime(convertmsToHours(totalPraticalTime))
                setTotalTheorticalTime(convertmsToHours(totalTheorticalTime))
                setTotalTrainingTime(convertmsToHours(totalTrainingTime))
                setTotalTime(convertmsToHours(totalPraticalTime + totalTheorticalTime + totalTrainingTime))
            }else if(timeValue === 'month'){
                let totalPraticalTimes = 0
                let totalTheorticalTimes = 0
                let totalTrainingTimes = 0
                studentExperiments.expriementsByMonth.forEach(({totalPraticalTime, totalTheorticalTime, totalTrainingTime}) => {
                    totalPraticalTimes += totalPraticalTime
                    totalTheorticalTimes += totalTheorticalTime
                    totalTrainingTimes += totalTrainingTime
                })
                setTotalPraticalTime(convertmsToHours(totalPraticalTimes))
                setTotalTheorticalTime(convertmsToHours(totalTheorticalTimes))
                setTotalTrainingTime(convertmsToHours(totalTrainingTimes))
                setTotalTime(convertmsToHours(totalPraticalTimes + totalTheorticalTimes + totalTrainingTimes))
            }
            else if(timeValue === 'year'){
               let  totalPraticalTimes = 0
                let  totalTheorticalTimes = 0
                let  totalTrainingTimes = 0
                studentExperiments.expriementsByYear.forEach(({totalPraticalTime, totalTheorticalTime, totalTrainingTime}) => {
                    console.log(totalPraticalTime, totalTheorticalTime, totalTrainingTime)
                    totalPraticalTimes += totalPraticalTime
                    totalTheorticalTimes += totalTheorticalTime
                    totalTrainingTimes += totalTrainingTime
                })
                setTotalPraticalTime(convertmsToHours(totalPraticalTimes))
                setTotalTheorticalTime(convertmsToHours(totalTheorticalTimes))
                setTotalTrainingTime(convertmsToHours(totalTrainingTimes))
                setTotalTime(convertmsToHours(totalPraticalTimes + totalTheorticalTimes + totalTrainingTimes))
            }
        }

    }, [timeValue, studentExperiments])
    
  return (
    <div className=' w-[408px] flex-1 h-[332px] rounded-2xl bg-white p-[30px] flex flex-col gap-y-[30px]'>

        <div className=' w-[352px] flex items-center  justify-between'>
            <span className=' text-[#444] text-[17px] font-bold '
            >الوقت المستغرق</span>
            <Tabs aria-label='time' color='primary' 
                classNames={{
                    cursor : "text-white bg-black",
                    tabList: "bg-[#F8F8FF] px-2 py-1 rounded-[10px] flex items-center gap-x-2",
                    tabContent: "text-[#9291A5] text-[11px] font-semibold",
                }}
                selectedKey={timeValue}
                onSelectionChange={(key) => setTimeValue(key as 'day' | 'month' | 'year')}
            >
                <Tab title='اليوم' key="day" />
                <Tab title='الشهر' key={"month"} />
                <Tab title='السنه' key={"year"} />
            </Tabs>


        </div>

        <div className=' w-full flex flex-col gap-y-3'>
            <Divider className=' bg-[#E5E5EF] w-[349.98px] self-center' />
            <Progress value={totalTrainingTime} title={" التدريبات العمليه "}  timeValue={timeValue}/>
            <Progress value={totalTheorticalTime} title={" الأختبارات النظرية"}  timeValue={timeValue}/>
            <Progress value={totalPraticalTime } title={" الأختبارات العملية"}  timeValue={timeValue} />
            <Progress value={totalTime} title={" الاجمالي "}  timeValue={timeValue} />

        </div>


      
    </div>
  )
}

export default DashboardThridRowSecondCol
