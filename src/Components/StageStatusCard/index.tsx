import React from 'react'
import Card from '../StatusCard/Card'

const StageStatusCard = () => {
    
  return (
    <div className=' w-[532px] h-[324px] py-5 px-[18px] bg-white rounded-lg'>
      <div className=' max-w-full grid grid-cols-2 gap-4'>
        <Card title=' مجموع درجة الاختبار النظرى' icon='certificate' description='85%'/>
        <Card title=' مجموع درجة الاختبار العملى' icon='certificate' description='85%'/>
        <Card title='الوقت الكلي' icon='clock' description='21h 29min'/>
        <Card title='الاداء العام' icon='reports' description='ممتاز'/>

      </div>
    </div>
  )
}

export default StageStatusCard
