import onProgressLight from '../../assets/library/onProgrss-light.svg'
import onProgressDark from '../../assets/library/onProgrss-dark.svg'
import { useThemeStore } from '../../stores/ThemeStore'
import ControlCard from '../../Components/ContraolCard'

const Library = () => {
  const {dark} = useThemeStore()
    
  return (
    <div className=' w-full h-full flex flex-col'>
      <ControlCard icon="Library" title=' الوسائط المحفوظه ' neasted={false}/>
      <div className=' w-full h-full flex flex-col gap-y-8 items-center justify-center'>
            <img src={dark ? onProgressDark : onProgressLight} alt="" />
            <span className={` ${dark ? "opacity-40" : "opacity-50"}`}>
              جاري العمل على هذه الصفحة
            </span>
      </div>

    
    

    </div>
  )
}

export default Library