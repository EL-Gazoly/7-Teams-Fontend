import React from 'react'
import ControlCard from '../../Components/ContraolCard'
import ChemistryVideo from '../../assets/coursePage/chemistry.mp4'
import BackIcon from '../../assets/coursePage/back.png'
import HorizontalScrollGallery from '../../Components/HorizontalScroll'
import './style.css'
import { useNavigate } from 'react-router-dom'
import { Button } from '@nextui-org/react'



const CoursePage = () => {
    const navigate = useNavigate()
  return (
     
    <React.Fragment>
        <ControlCard icon="Courses" title=' المناهج التعليمية ' neasted={true}/>
        <div className='mt-[18px] flex flex-col gap-y-5 items-center pb-8'>
            <div className=' relative'>
                <video src={ChemistryVideo} autoPlay loop muted className=' w-[1000px] h-[413px] object-cover rounded-lg z-10' />
                <div className=' absolute inset-0 bg-[#27262652]/[0.32] rounded-lg z-20' />
                <div className=' z-30 absolute bottom-[8%] right-[4%]'>
                    <div className=' flex flex-col items-end gap-y-6 text-right'>
                        <div className=' flex flex-col gap-y-4 text-white'>
                            <span className=' text-[40px] font-bold'>منهج الكيمياء</span>
                            <span className=' w-[457px] text-sm font-semibold'>
                            عِلْم الكِيِمْيَاء هو العلم الذي يدرس المادة والتغيرات التي تطرأ عليها، وتحديدًا تتم دراسة خواصها، وبنيتها، وتركيبها، وسلوكها
                            </span>
                        </div> 
                        <Button className=' w-[158px] p-[10px] rounded-lg font-bold' color='primary'>
                        عرض التجربة
                        </Button>


                    </div>
                </div>
            </div>
       
                <HorizontalScrollGallery />
                
                <div className=' w-full h-[200px] bg-white pt-5 px-14 flex flex-col gap-y-3 text-[#122333]/75 text-right rounded-lg'>
                    <h1 className=' text-2xl font-bold text-right'>معلومات عن هذه المادة</h1>
                    <p className=' text-sm font-semibold'>عِلْم الكِيِمْيَاء هو العلم الذي يدرس المادة والتغيرات التي تطرأ عليها، وتحديدًا تتم دراسة خواصها، وبنيتها، وتركيبها، وسلوكها، وتفاعلاتها، والتداخلات التي تحدثها. ويَدرُسُ علم الكيمياء الذرات والروابط التي تحدث بينها مكونةً الجزيئات، وكيف تترابط هذه الجزيئات فيما بعد لتكوِّن المادة. وتدرس أيضًا التفاعلات التي تحدث بينها. وللكيمياء أهمية كبيرة في حياتنا وتدخل في مجالات كثيرة وتلعب دورًا مهمًا في الصناعات بمختلف أنواعها، كالصِّناعات الغذائية وصناعة المواد التنظيفية والدهانات والأصبغة وصناعة الأدوية 
                    والعقاقير والنسيج والملابس والأسلحة..</p>

                </div>
            
            



       
        </div>
    </React.Fragment>
        

  )
}

export default CoursePage