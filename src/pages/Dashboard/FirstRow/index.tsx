import React from 'react'
import Item  from './item'

const FirstRow = () => {
  return (
    <div className=' w-full '>
        <div className=' flex items-center justify-center gap-x-2'>
            <Item icon='user' title=' عدد المتدربين المسجلين في النظام.' description='5268' />
            <Item icon ='activeUser' title='  عدد المتدربين الذين بدأو التدريب بالفعل. ' description='4528' />
            <Item icon='clock' title='  اجمالي ساعات التدريب. ' description='245 ساعة 21 دقيقة' />
            <Item icon='certificate' title='   عدد المتدربين الخريجين (الحاصلين على شهادة). ' description='245' />
        </div>
    </div>
  )
}

export default FirstRow
