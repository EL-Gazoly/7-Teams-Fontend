import React from 'react'
import Item from './item'
import { Divider } from '@nextui-org/react'

const LogsTableItem = ({data}) => {
  return (
    <div className=' w-full  bg-[#F0F0F1] dark:bg-[rgb(71,75,82)]  py-3 rounded-xl px-14 '>
      {
        data?.logs.map((log, index) => {
          return <div key={index} className={`flex flex-col gap-y-2
          ${index === 0 ? 'pt-0' : 'pt-2'}
          `}>
           <Item log={log} />
          {
            index !== data?.logs.length - 1 && <Divider className=' w-full bg-[#8B8D90] dark:bg-[#383C42]' />
          }
          </div>
      
      }
      )
      }
    </div>
  )
}

export default LogsTableItem
