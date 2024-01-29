import {useState} from 'react'
import { Tabs, Tab, Divider } from '@nextui-org/react'
import Progress from './Progress'

const StudentTimeCounter = ({expermients}) => {
    const [timeValue, setTimeValue] = useState<'day' | 'month' | 'year'>('day')
  return (
    <div className=' w-[532px] h-[325px] bg-white rounded-lg px-11 py-8 flex flex-col gap-y-4'>
        <div className=" w-full flex items-center justify-between">
            <span className=' text-[#444] text-[17px] font-bold'>الوقت المستغرق</span>
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
        <Divider/>
        <div className=' flex flex-col gap-y-2'>
                <Progress value={20} title={" التدريبات العمليه "}  timeValue={timeValue}/>
                <Progress value={30}  title={" الأختبارات النظرية"}  timeValue={timeValue}/>
                <Progress value={10} title={" الأختبارات العملية"}   timeValue={timeValue}/>
                <Progress value={60} title={" الاجمالي "}   timeValue={timeValue}/>
        </div>

      
    </div>
  )
}

export default StudentTimeCounter
