import React from 'react'
import ThridCardItem from './item'

const ThridCard = () => {
  return (
    <div className=''>
        <div className='  grid grid-cols-2 gap-y-[10px] gap-x-2'>
            <ThridCardItem title=' عدد المناهج ' icon={"subjects"} descrption='10' />
            <ThridCardItem title=' عدد المشرفين ' icon={"admin"} descrption='12' />
            <ThridCardItem title=' عدد مديرين النظام' icon={"admin"} descrption='25' />
            <ThridCardItem title=' اجمالي عدد الشهادات' icon={"certificate"} descrption='526' />
        </div>
      
    </div>
  )
}

export default ThridCard
