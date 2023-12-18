import React from "react";
import ChooseGrade from '../../Components/ChooseGrade'
import ChooseCourse from './ChooseCourse.jsx'
import ChooseStudent from './ChooseStudent.jsx'

type Props = {
    grade: {value: string, label: string};
    setGrade: React.Dispatch<React.SetStateAction<{
        value: string;
        label: string;
    }>>
    course: {value: string, label: string};
    setCourse: React.Dispatch<React.SetStateAction<{
        value: string;
        label: string;
    }>>;
    student: {value: string, label: string};
    setStudent:  React.Dispatch<React.SetStateAction<{
        value: string;
        label: string;
    }>>;

}

export function FirstSection({grade, setGrade, course, setCourse, student, setStudent}: Props) {
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
                    <ChooseGrade grade={grade} setGrade={setGrade} />
                    </div>
                    <div className=' flex flex-col gap-y-1 text-right'>
                    <label htmlFor="grade" className=' text-sm font-semibold mr-1'>المنهج التعليمي</label>
                    <ChooseCourse 
                    course={course}
                    setCourse={setCourse}
                    />
                    </div>
                    <div className=' flex flex-col gap-y-1 text-right'>
                    <label htmlFor="grade" className=' text-sm font-semibold mr-1'>اسم الطالب</label>
                    <ChooseStudent 
                    student={student}
                    setStudent={setStudent}
                    />
                    </div>
                    <div className=' flex flex-col gap-y-1 text-right'>
                    <label htmlFor="grade" className=' text-sm font-semibold mr-1'>الوصف</label>
                        <input type="text" className=" h-16 bg-[#F0F2F4] rounded-lg px-4 placeholder:text-[#8C8F93] text-sm placeholder:font-medium" placeholder="أكتب  وصف الشهادة هنا" />
                    </div>
                 
                </div>

            </div>;
}
  