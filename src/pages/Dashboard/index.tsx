import React from 'react'
import ControlCard from '../../Components/ContraolCard'
import FirstRow from './FirstRow'
import SecondRow from '../../Components/DashboardSecondRow'
import DashboardThridRow from '../../Components/DashboardThridRow'

const Dashboard = () => {
  return (
    <div>
        <ControlCard  icon='Dashboard' title=' لوحه التحكم ' neasted={false}/>
        <div className='mt-4 w-full flex flex-col gap-y-4 pb-5'
            style={{
                direction: 'rtl'
            }}
        >
            <FirstRow />
            <SecondRow />
            <DashboardThridRow />

        </div>
      
    </div>
  )
}

export default Dashboard
