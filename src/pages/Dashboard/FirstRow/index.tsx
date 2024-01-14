import {useEffect, useState} from 'react'
import Item  from './item'
import { set } from 'firebase/database'

const FirstRow = ({data}) => {
  const [time, setTime] = useState("")
  
  const msToTime = (duration) => {
    let seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor(duration / (1000 * 60 * 60));
  
    hours = hours < 10 ? 0 + hours : hours;
    minutes = minutes < 10 ? 0 + minutes : minutes;
    seconds = seconds < 10 ? 0 + seconds : seconds;
  
    return hours + "h " + minutes + "mins";
  }

  useEffect(() => {
    if(data){
      console.log(data)
      setTime(msToTime(data[3]))
      
      
      
    }
  }, [data])
  return (
    <div className=' w-full '>
        <div className=' flex items-center justify-center gap-x-2'>
            <Item icon='user' title=' عدد الطلاب المسجلين في النظام.' description={data[0]} />
            <Item icon ='activeUser' title='  عدد المتدربين الذين بدأو التدريب بالفعل. ' description={data[1]}/>
            <Item icon='clock' title='  اجمالي ساعات التدريب. ' description={time} />
            <Item icon='certificate' title='   عدد المتدربين الخريجين . ' description={data[2]} />
        </div>
    </div>
  )
}

export default FirstRow
