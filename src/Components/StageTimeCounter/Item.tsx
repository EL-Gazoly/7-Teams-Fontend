import React from "react";
export function StageTimeCounterItem({
    number,
    title,
    hours,
    minutes
}) {
  return <div className=' w-full flex items-center justify-between dark:text-white'>
              <div className=' flex items-center gap-x-3'>
                <h6 className=' font-medium'>0{number}</h6>
                <h6 className=' font-semibold'>
                    {title}
                    </h6>

              </div>
              <div className=' flex items-center gap-x-1 font-medium '>
                <div className=' w-10 h-10 bg-[#E8E9EB] dark:bg-[#2E333B] flex items-center justify-center'>{minutes}</div>
                <div className=' w-10 h-10 bg-[#E8E9EB] dark:bg-[#2E333B] flex items-center justify-center'>{hours}</div>

              </div>

            </div>;
}
  