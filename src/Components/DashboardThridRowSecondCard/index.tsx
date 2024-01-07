import React from 'react'
import { Tabs, Tab, Divider } from '@nextui-org/react'
import Progress from './progress'

const DashboardThridRowSecondCol = () => {
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
            >
                <Tab title='اليوم' key="day" />
                <Tab title='الشهر' key={"month"} />
                <Tab title='السنه' key={"year"} />
            </Tabs>


        </div>

        <div className=' w-full flex flex-col gap-y-3'>
            <Divider className=' bg-[#E5E5EF] w-[349.98px] self-center' />
            <Progress value={30} title={" التدريبات العمليه "} />
            <Progress value={51} title={" الأختبارات النظرية"} />
            <Progress value={27} title={" الأختبارات العملية"} />
            <Progress value={130} title={" الاجمالي "} />

        </div>


      
    </div>
  )
}

export default DashboardThridRowSecondCol
