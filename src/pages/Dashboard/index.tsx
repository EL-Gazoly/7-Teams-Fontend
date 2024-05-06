import React from 'react'
import ControlCard from '../../Components/ContraolCard'
import FirstRow from './_components/FirstRow'
import SecondRow from './_components/DashboardSecondRow'
import DashboardThridRow from './_components/DashboardThridRow'
import { useQuery } from '@apollo/client'
import { getDashboardData , getTotalCourseTime} from '../../graphql/dashboard'
import Loading from '../../Components/Loading'
import { toast } from 'sonner'

const Dashboard = () => {
  const {data, loading, error} = useQuery(getDashboardData)
  const {data: totalCourseTime, loading: totalCourseTimeLoading, error: totalCourseTimeError} = useQuery(getTotalCourseTime)
  if(loading || totalCourseTimeLoading) return <Loading />
  if (error || totalCourseTimeError) {
    console.log(error?.message || totalCourseTime?.message)
    toast.error("حدث خطأ أثناء تحميل البيانات")
  }

  return (
    <div>
        <ControlCard  icon='Dashboard' title=' لوحه التحكم ' neasted={false}/>
        <div className='mt-4 w-full flex flex-col gap-y-4 pb-5'
            style={{
                direction: 'rtl'
            }}
        >
          { data && !error && !totalCourseTimeError &&
            <FirstRow data={data?.studentActuallyBegein} />
          }
           { data && !error && !totalCourseTimeError &&
            <SecondRow timeByMonth={data?.timeByMonth} studentByGrade={data?.admin.Team} rolesCount={data?.admin.roles} />
           }
            { data && !error && !totalCourseTimeError &&
            <DashboardThridRow studentExperiments={data?.studentExperiments}  totalCourseTimeLoading={totalCourseTime}/>
            }
          

        </div>
      
    </div>
  )
}

export default Dashboard
