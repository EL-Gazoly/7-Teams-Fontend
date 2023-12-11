import React from 'react'
import { Switch, Divider, cn } from '@nextui-org/react'
type permessionprops = {
    permessions : Object
    permesssionKey : string
}
const Permession = ({permessions, permesssionKey} : permessionprops) => {
  return (
    <>
        <div  className=' w-full flex flex-row-reverse justify-between items-end text-right'>
            <div className='flex flex-col gap-y-[18px] text-text-black text-right '>
                <span className=' text-xl font-bold'>{permessions[permesssionKey].name}</span>
                <p className=' text-[#46434382] w-[493px]'>{permessions[permesssionKey].description}</p>
            </div>
            <Switch ref={permessions[permesssionKey].permession}
                classNames={{
                base: " w-[56px] h-6 mb-5  ",
                wrapper : " w-[56px] h-6 bg-[#646262]",
                thumb: cn(
                     
                    "group-data-[selected=true]:ml-7",
                 
                  )
                
                }}
            />

            


        </div>
        <Divider className=' bg-[#919396] mt-5'/>
    </>
  )
}

export default Permession