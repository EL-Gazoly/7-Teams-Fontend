import React from 'react'
import ControlCard from '../../Components/ContraolCard'
import FirstRow from './FirstRow'
import SecondRow from '../../Components/DashboardSecondRow'
import DashboardThridRow from '../../Components/DashboardThridRow'
import { useQuery } from '@apollo/client'
import { getDashboardData , getTotalCourseTime} from '../../graphql/dashboard'
import Loading from '../../Components/Loading'

const Dashboard = () => {
  const {data, loading} = useQuery(getDashboardData)
  const {data: totalCourseTime, loading: totalCourseTimeLoading} = useQuery(getTotalCourseTime)
  if(loading || totalCourseTimeLoading) return <Loading />
  

  return (
    <div>
        <ControlCard  icon='Dashboard' title=' لوحه التحكم ' neasted={false}/>
        <div className='mt-4 w-full flex flex-col gap-y-4 pb-5'
            style={{
                direction: 'rtl'
            }}
        >
            <FirstRow data={data?.studentActuallyBegein} />
            <SecondRow timeByMonth={data?.timeByMonth} studentByGrade={data?.admin.Team} rolesCount={data?.admin.roles} />
            <DashboardThridRow studentExperiments={data?.studentExperiments}  totalCourseTimeLoading={totalCourseTime}/>

        </div>
      
    </div>
  )
}

export default Dashboard
