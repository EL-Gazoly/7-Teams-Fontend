
import { Checkbox, Divider, cn, Image } from '@nextui-org/react'
import HeadsetImage from '../../assets/Landing/ChooseHeadset/headset.svg'
import SearchIcon from '../../assets/Landing/ChooseHeadset/search.png'
const ChooseHeadsetSection = () => {
  return (
    <div className='w-full bg-white h-[106px] pl-[30px] pr-10 flex items-center gap-x-8 rounded-t-md'
      style={{
        direction : "rtl"
      }}
    >
        <Checkbox  
        classNames={{
          base: cn(
            "w-[300px]",
            "h-[35px]",
            "py-[7px]",
            "px-4",
            "flex",
            "items-center",
            "gap-x-3",
            "bg-[#444]",
            "text-white",
            "font-medium",
            "rounded",
            "cursor-pointer",
            "data-[selected=true]:bg-primary-gradient",
            "data-[hover=true]:bg-[#444]",
          ),
           
        }}
        radius='sm'
        
        > 
        <span className=' w-full text-sm font-medium text-white '
        style={{
          wordBreak : "break-all"
        }}
        >حدد كل النظارات المتصلة </span>
        </Checkbox>

        <Divider orientation="vertical" className='h-[80%] bg-[#1223331A]/10'/>

        <div className=' w-[272px] h-9 py-2 px-4 flex items-center justify-center rounded-[7px] gap-x-4 bg-primary'>
            <Image src={HeadsetImage} />
            <span className='text-white font-medium text-sm'>12 نظارة متصلة الأن</span>
            <div className='w-[10px] h-[10px] rounded bg-[#45FF5F]' />

        </div>

        <Divider orientation="vertical" className='h-[80%] bg-[#1223331A]/10'/>

        <div className='w-[262px] h-9 rounded-[7px] bg-[#6563630D]/5 flex items-center gap-x-[6.8px] px-3 py-2'>
          <Image src={SearchIcon}  />
          <input className='w-full h-full bg-transparent placeholder:text-[#929496] text-sm font-medium focus: ' placeholder='البحث' />

      </div>

    </div>
  )
}

export default ChooseHeadsetSection