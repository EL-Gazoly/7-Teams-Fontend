import React from 'react'
import LogsTableItem from './inner'
const LogsTable = ({data}) => {
  return (
    <div className='w-full  p-12 bg-[#F7F9FC] dark:bg-primary-dark rounded-lg '>
        <LogsTableItem data={data}/>
      
    </div>
  )
}

export default LogsTable
