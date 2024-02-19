import React from 'react'
import Item from './item'
import { Divider } from '@nextui-org/react'

const LogsTableItem = () => {
  return (
    <div className=' w-full  bg-[#F0F0F1] dark:bg-[rgb(71,75,82)] flex flex-col py-3 rounded-xl px-14 gap-y-3'>
      <Item />
      <Divider className=' w-full bg-[#8B8D90] dark:bg-[#383C42]' />
      <Item />
       <Divider className=' w-full bg-[#8B8D90] dark:bg-[#383C42]' />
      <Item />
       <Divider className=' w-full bg-[#8B8D90] dark:bg-[#383C42]' />
      <Item />
       <Divider className=' w-full bg-[#8B8D90] dark:bg-[#383C42]' />
      <Item />
       <Divider className=' w-full bg-[#8B8D90] dark:bg-[#383C42]' />
      <Item />
    </div>
  )
}

export default LogsTableItem
