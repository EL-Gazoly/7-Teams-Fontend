import React from 'react'
import { Switch, Divider, cn } from '@nextui-org/react'
import useTranslationStore from '@/stores/LanguageStore'
type permessionprops = {
    permessions : Object
    permesssionKey : string
    disabled : boolean
}
const Permession = ({permessions, permesssionKey, disabled} : permessionprops) => {
  const {language} = useTranslationStore()

  return (
    <div
      style={{
        direction: language === 'ar' ? 'rtl' : 'ltr',
      }}
      className=' w-full'
    >
        <div  className=' w-full flex  justify-between items-end '>
            <div className='flex flex-col gap-y-[18px] text-text-black dark:text-white  '>
                <span className=' text-xl font-bold'>{permessions[permesssionKey].name}</span>
                <p className=' text-[#46434382] dark:text-white/50 w-[493px]'>{permessions[permesssionKey].description}</p>
            </div>
            <Switch
                isSelected={permessions[permesssionKey].selected}
                onValueChange={permessions[permesssionKey].onChange}
                classNames={{
                base: " w-[56px] h-6 mb-5  ",
                wrapper : " w-[56px] h-6 bg-[#646262]",
                thumb: cn(
                     
                    "group-data-[selected=true]:ml-7",
                 
                  )
                
                }}
                isDisabled={disabled}
            />

            


        </div>
      { permesssionKey !== 'users' &&  <Divider className=' bg-[#919396] mt-5'/>}
    </div>
  )
}

export default Permession