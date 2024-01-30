import {useState, useEffect} from 'react'
import { Tabs, Tab, Divider } from '@nextui-org/react'
import Progress from './Progress'
import { useQuery } from '@apollo/client'
import { GetStudentTime } from '../../graphql/reports'
import Loading from '../Loading'
import { useParams } from 'react-router-dom'

const StudentTimeCounter = () => {
    const { id } = useParams<{id: string}>()
    const [timeValue, setTimeValue] = useState<'day' | 'month' | 'year'>('day')
    const [ trainingMonth, setTrainingMonth ] = useState<any>(0)
    const [ trainingYear, setTrainingYear ] = useState<any>(0)
    const [ trainingDay, setTrainingDay ] = useState<any>(0)
    const [ theoreticalMonth, setTheoreticalMonth ] = useState<any>(0)
    const [ theoreticalYear, setTheoreticalYear ] = useState<any>(0)
    const [ theoreticalDay, setTheoreticalDay ] = useState<any>(0)
    const [ practicalMonth, setPracticalMonth ] = useState<any>(0)
    const [ practicalYear, setPracticalYear ] = useState<any>(0)
    const [ practicalDay, setPracticalDay ] = useState<any>(0)
    const [ totalMonth, setTotalMonth ] = useState<any>()
    const [ totalYear, setTotalYear ] = useState<any>()
    const { loading, error, data } = useQuery(GetStudentTime, {
        variables: {
            studentId: id
        }
    });
    useEffect(() => {
        if(data) {
            let trainingDay = 0
            let theoreticalDay = 0
            let practicalDay = 0
            let trainingMonth = 0
            let theoreticalMonth = 0
            let practicalMonth = 0
            let trainingYear = 0
            let theoreticalYear = 0
            let practicalYear = 0

            data?.StudentExpermientByPeriod?.expriemntsByDay?.map((item: any) => {
                trainingDay = trainingDay + item?.totalTrainingTime
                theoreticalDay = theoreticalDay + item?.totalTheorticalTime
                practicalDay = practicalDay + item?.totalPraticalTime
                setTrainingDay(trainingDay)
                setTheoreticalDay(theoreticalDay)
                setPracticalDay(practicalDay)
            })
            
            data?.StudentExpermientByPeriod?.expriementsByMonth?.map((item: any) => {
                console.log("+++++++++++++++++++++++++", item)
                trainingMonth = trainingMonth + item?.totalTrainingTime
                theoreticalMonth = theoreticalMonth + item?.totalTheorticalTime
                practicalMonth = practicalMonth + item?.totalPraticalTime
                setTrainingMonth(trainingMonth)
                setTheoreticalMonth(theoreticalMonth)
                setPracticalMonth(practicalMonth)
            })
            console.log(trainingDay, theoreticalDay, practicalDay)
            
            data?.StudentExpermientByPeriod?.expriementsByYear?.map((item: any) => {
                trainingYear = trainingYear + item?.totalTrainingTime
                theoreticalYear = theoreticalYear + item?.totalTheorticalTime
                practicalYear = practicalYear + item?.totalPraticalTime
                setTrainingYear(trainingYear)
                setTheoreticalYear(theoreticalYear)
                setPracticalYear(practicalYear)
            })
            

        }
    }, [data])

    if (loading) return <Loading />
    if (error)  console.log(error);
    if(data) console.log(data)

    const convertMillisecondsToHoursAndMinutes = (ms) => {
        const hours = Math.floor(ms / 3600000)
        return hours
      }


    
  return (
    <div className=' w-[532px] h-[325px] bg-white rounded-lg px-11 py-8 flex flex-col gap-y-4'>
        <div className=" w-full flex items-center justify-between">
            <span className=' text-[#444] text-[17px] font-bold'>الوقت المستغرق</span>
            <Tabs aria-label='time' color='primary' 
                classNames={{
                    cursor : "text-white bg-black",
                    tabList: "bg-[#F8F8FF] px-2 py-1 rounded-[10px] flex items-center gap-x-2",
                    tabContent: "text-[#9291A5] text-[11px] font-semibold",
                }}
                selectedKey={timeValue}
                onSelectionChange={(key) => setTimeValue(key as 'day' | 'month' | 'year')}
            >
                <Tab title='اليوم' key="day" />
                <Tab title='الشهر' key={"month"} />
                <Tab title='السنه' key={"year"} />
            </Tabs>
        </div>
        <Divider/>
        <div className=' flex flex-col gap-y-2'>
                <Progress value={
                    timeValue === 'day' ? convertMillisecondsToHoursAndMinutes(trainingDay) :
                    timeValue === 'month' ? convertMillisecondsToHoursAndMinutes(trainingMonth) :
                    convertMillisecondsToHoursAndMinutes(trainingYear)
                } title={" التدريبات العمليه "}  timeValue={timeValue}/>
                <Progress value={
                    timeValue === 'day' ? convertMillisecondsToHoursAndMinutes(theoreticalDay) :
                    timeValue === 'month' ? convertMillisecondsToHoursAndMinutes(theoreticalMonth) :
                    convertMillisecondsToHoursAndMinutes(theoreticalYear)
                } title={" التدريبات النظرية "}  timeValue={timeValue}/>
                <Progress value={
                    timeValue === 'day' ? convertMillisecondsToHoursAndMinutes(practicalDay) :
                    timeValue === 'month' ? convertMillisecondsToHoursAndMinutes(practicalMonth) :
                    convertMillisecondsToHoursAndMinutes(practicalYear)
                } title={" الأختبارات العملية"}   timeValue={timeValue}/>
                <Progress value={
                    timeValue === 'day' ? convertMillisecondsToHoursAndMinutes(practicalDay + theoreticalDay + trainingDay) :
                    timeValue === 'month' ? convertMillisecondsToHoursAndMinutes(practicalMonth + theoreticalMonth + trainingMonth) :
                    convertMillisecondsToHoursAndMinutes(practicalYear + theoreticalYear + trainingYear)
                } title={" الاجمالي "}   timeValue={timeValue}/>
        </div>

      
    </div>
  )
}

export default StudentTimeCounter
