import React from 'react'
import Card from './Card'

const StatusCard = () => {
    
  return (
    <div className=' w-[532px] h-[324px] py-5 px-[18px] bg-white rounded-lg'>
      <div className=' max-w-full grid grid-cols-2 gap-4'>
        <Card title='إجمالي الدورات المكتملة' icon='certificate' description='150'/>
        <Card title='الأداء العام' icon='reports' description='ممتاز'/>
        <Card title='الوقت الكلي' icon='clock' description='21h 29min'/>
        <Card title='إجمالي مرات تسجيل الدخول' icon='user' description='63'/>

      </div>
    </div>
  )
}

export default StatusCard
