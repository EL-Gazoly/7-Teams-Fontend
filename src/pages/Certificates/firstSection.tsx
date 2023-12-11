import React from "react";
import ChooseGrade from '../../Components/ChooseGrade'
export function FirstSection({}) {
  return <div className=' w-full h-96 rounded-lg bg-light-bg px-[75px] py-5 
                flex flex-col gap-y-5 
                text-text-black items-end
            '>
                <h3 className=' text-[21px] font-bold'> معلومات الشهادة</h3>
                <div className=' max-w-[821px] grid grid-cols-2 gap-x-4 gap-y-10  ' style={{
      direction: "rtl"
    }}>
                    <div className=' flex flex-col gap-y-1 text-right'>
                    <label htmlFor="grade" className=' text-sm font-semibold mr-1'>المرحله التعليميه</label>
                    <ChooseGrade />
                    </div>
                    <div className=' flex flex-col gap-y-1 text-right'>
                    <label htmlFor="grade" className=' text-sm font-semibold mr-1'>المنهج التعليمي</label>
                    <ChooseGrade />
                    </div>
                    <div className=' flex flex-col gap-y-1 text-right'>
                    <label htmlFor="grade" className=' text-sm font-semibold mr-1'>اسم الطالب</label>
                    <ChooseGrade />
                    </div>
                    <div className=' flex flex-col gap-y-1 text-right'>
                    <label htmlFor="grade" className=' text-sm font-semibold mr-1'>الوصف</label>
                        <input type="text" className=" h-16 bg-[#F0F2F4] rounded-lg px-4 placeholder:text-[#8C8F93] text-sm placeholder:font-medium" placeholder="أكتب  وصف الشهادة هنا" />
                    </div>
                 
                </div>

            </div>;
}
  