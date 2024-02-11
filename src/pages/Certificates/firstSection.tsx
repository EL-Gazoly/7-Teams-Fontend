import React from "react";
import ChooseGrade from '../../Components/ChooseGrade'
import ChooseCourse from './ChooseCourse.jsx'
import ChooseStudent from './ChooseStudent.jsx'
import { useThemeStore } from "../../stores/ThemeStore.js";

type Props = {
   
    course: {value: string, label: string};
    setCourse: React.Dispatch<React.SetStateAction<{
        value: string;
        label: string;
    }>>;
    student: {value: string, label: string, number: string, class: string, team: string};
    setStudent:  React.Dispatch<React.SetStateAction<{
        value: string;
        label: string;
        number: string;
        class: string;
        team: string;
    }>>;
    head: string;
    setHead: React.Dispatch<React.SetStateAction<string>>;
    teacher: string;
    setTeacher: React.Dispatch<React.SetStateAction<string>>;
    school: string;
    setSchool: React.Dispatch<React.SetStateAction<string>>;


}

export function FirstSection({ course, setCourse, student, setStudent,
    head, setHead, teacher, setTeacher, school, setSchool
}: Props) {
  return <div className=' w-full h-[512px] rounded-lg bg-light-bg dark:bg-primary-dark px-[75px] py-5  pt-[50px]
                flex flex-col gap-y-7
                text-text-black dark:text-white items-end
            '>
                <h3 className=' text-[21px] font-bold'> معلومات الشهادة</h3>
                <div className='max-w-full grid grid-cols-2 gap-x-[50px] gap-y-[22px]' style={{
                direction: "rtl"
                }}>
                 
                  
                    <div className=' flex flex-col gap-y-1 text-right'>
                    <label htmlFor="grade" className=' text-sm font-semibold mr-1'>اسم الطالب</label>
                    <ChooseStudent 
                    student={student}
                    setStudent={setStudent}
                    />
                    </div>
                    <div className=" flex flex-col gap-1 text-right">
                        <span className=" text-sm font-semibold mr-1"> رقم الطالب </span>
                        <span className=" text-[##12233366] text-[32px] font-bold opacity-40 h-14 mt-1">
                            {student.number? student.number : '0000'}
                        </span>

                    </div>
                      <div className=' flex flex-col gap-y-1 text-right'>
                    <label htmlFor="grade" className=' text-sm font-semibold mr-1'> الماده</label>
                    <ChooseCourse 
                    course={course}
                    setCourse={setCourse}
                    />
                    </div>
                   
                    <div className=' flex flex-col gap-y-1 text-right'>
                    <label htmlFor="grade" className=' text-sm font-semibold mr-1'> المدرسه </label>
                        <input type="text" className=" h-16 bg-[#F0F2F4] dark:bg-[#444850] rounded-lg px-4 placeholder:text-[#8C8F93] text-sm placeholder:font-medium focus:border focus:border-primary focus:outline-none"
                        placeholder="ادخل اسم المدرسه"
                        value={school}
                        onChange={(e)=> setSchool(e.target.value)}
                        />
                    </div>
                    <div className=' flex flex-col gap-y-1 text-right'>
                    <label htmlFor="grade" className=' text-sm font-semibold mr-1'> المدير </label>
                        <input type="text" className=" h-16 bg-[#F0F2F4] dark:bg-[#444850] rounded-lg px-4 placeholder:text-[#8C8F93] text-sm placeholder:font-medium focus:border focus:border-primary focus:outline-none"
                        placeholder="ادخل اسم المدير"
                        value={head}
                        onChange={(e)=> setHead(e.target.value)}
                        />
                    </div>
                    <div className=' flex flex-col gap-y-1 text-right'>
                    <label htmlFor="grade" className=' text-sm font-semibold mr-1'> المعلم </label>
                        <input type="text" className=" h-16 bg-[#F0F2F4] dark:bg-[#444850]  rounded-lg px-4 placeholder:text-[#8C8F93] text-sm placeholder:font-medium focus:border focus:border-primary focus:outline-none"
                        placeholder="ادخل اسم المعلم"
                        value={teacher}
                        onChange={(e)=> setTeacher(e.target.value)}
                        />
                    </div>
                    
                 
                

                 
                 
                </div>

            </div>;
}
  