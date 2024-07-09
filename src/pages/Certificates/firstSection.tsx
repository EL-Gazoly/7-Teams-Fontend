import React from "react";
import ChooseGrade from '../../Components/ChooseGrade';
import ChooseCourse from './ChooseCourse.jsx';
import ChooseStudent from './ChooseStudent.jsx';
import { useThemeStore } from "../../stores/ThemeStore.js";
import  useTranslationStore  from "@/stores/LanguageStore.ts";

const FirstSection = ({
  course, setCourse, student, setStudent,
  head, setHead, teacher, setTeacher, school, setSchool
}) => {
  const { dark } = useThemeStore();
  const { language, getTranslation } = useTranslationStore();
    if(student) console.log('student', student)

  return (
    <div className='w-full h-[512px] rounded-lg bg-light-bg dark:bg-primary-dark px-[75px] py-5 pt-[50px] flex flex-col gap-y-7 text-text-black dark:text-white items-end'
        style={{
            direction: language === 'ar' ? 'rtl' : 'ltr'
        }}
    >
      <h3 className='text-[21px] font-bold'>{getTranslation('certificate_info')}</h3>
      <div className='max-w-full grid grid-cols-2 gap-x-[50px] gap-y-[22px]'>
        <div className='flex flex-col gap-y-1 '>
          <label htmlFor="student" className='text-sm font-semibold mr-1'>{getTranslation('student_name')}</label>
          <ChooseStudent 
            student={student}
            setStudent={setStudent}
          />
        </div>
        <div className="flex flex-col gap-1 ">
          <span className="text-sm font-semibold mr-1">{getTranslation('student_number')}</span>
          <span className="text-[#12233366] text-[32px] font-bold opacity-40 h-14 mt-1">
            {student.facilityId ? student.facilityId : '0000'}
          </span>
        </div>
        <div className='flex flex-col gap-y-1 '>
          <label htmlFor="course" className='text-sm font-semibold mr-1'>{getTranslation('course')}</label>
          <ChooseCourse 
            course={course}
            setCourse={setCourse}
          />
        </div>
        <div className='flex flex-col gap-y-1 '>
          <label htmlFor="school" className='text-sm font-semibold mr-1'>{getTranslation('school')}</label>
          <input 
            type="text"
            className="h-16 bg-[#F0F2F4] dark:bg-[#444850] rounded-lg px-4 placeholder:text-[#8C8F93] text-sm placeholder:font-medium focus:border focus:border-primary focus:outline-none"
            placeholder={getTranslation('enter_school_name')}
            value={school}
            onChange={(e) => setSchool(e.target.value)}
          />
        </div>
        <div className='flex flex-col gap-y-1 '>
          <label htmlFor="head" className='text-sm font-semibold mr-1'>{getTranslation('head')}</label>
          <input 
            type="text"
            className="h-16 bg-[#F0F2F4] dark:bg-[#444850] rounded-lg px-4 placeholder:text-[#8C8F93] text-sm placeholder:font-medium focus:border focus:border-primary focus:outline-none"
            placeholder={getTranslation('enter_head_name')}
            value={head}
            onChange={(e) => setHead(e.target.value)}
          />
        </div>
        <div className='flex flex-col gap-y-1 '>
          <label htmlFor="teacher" className='text-sm font-semibold mr-1'>{getTranslation('teacher')}</label>
          <input 
            type="text"
            className="h-16 bg-[#F0F2F4] dark:bg-[#444850] rounded-lg px-4 placeholder:text-[#8C8F93] text-sm placeholder:font-medium focus:border focus:border-primary focus:outline-none"
            placeholder={getTranslation('enter_teacher_name')}
            value={teacher}
            onChange={(e) => setTeacher(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default FirstSection;