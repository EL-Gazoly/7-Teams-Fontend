import React from 'react'
import LogsTableItem from './inner'
const LogsTable = ({data, setTake, loading, logs, currentPage}) => {
  return (
    <div className='w-full  p-12 bg-[#F7F9FC] dark:bg-primary-dark rounded-lg '>
        <LogsTableItem data={data} setTake={setTake} loading={loading} logs={logs} currentPage={currentPage}/>
      
    </div>
  )
}

export default LogsTable
