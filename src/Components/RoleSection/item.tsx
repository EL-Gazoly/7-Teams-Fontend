import React from 'react'
import { Switch, Divider, cn } from '@nextui-org/react'
type permessionprops = {
    permessions : Object
    permesssionKey : string
    disabled : boolean
}
const Permession = ({permessions, permesssionKey, disabled} : permessionprops) => {


  return (
    <>
        <div  className=' w-full flex flex-row-reverse justify-between items-end text-right'>
            <div className='flex flex-col gap-y-[18px] text-text-black text-right '>
                <span className=' text-xl font-bold'>{permessions[permesssionKey].name}</span>
                <p className=' text-[#46434382] w-[493px]'>{permessions[permesssionKey].description}</p>
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
    </>
  )
}

export default Permession