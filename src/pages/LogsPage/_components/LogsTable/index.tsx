import React from 'react'
import LogsTableItem from './inner'
const LogsTable = ({data, setTake, loading, logs, currentPage, date, filter}) => {
  return (
    <div className='w-full  p-12 bg-[#F7F9FC] dark:bg-primary-dark rounded-lg '>
        <LogsTableItem data={data} setTake={setTake} loading={loading} logs={logs} currentPage={currentPage} date={date} filter={filter}/>
      
    </div>
  )
}

export default LogsTable
