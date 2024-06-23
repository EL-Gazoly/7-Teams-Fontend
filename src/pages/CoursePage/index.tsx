import React from 'react';
import ControlCard from '@/Components/ControlCard';
import ChemistryVideo from '@/assets/coursePage/chemistry.mp4';
import HorizontalScrollGallery from './_components/HorizontalScroll';
import './style.css';
import { Button } from '@nextui-org/react';
import useTranslationStore from '@/stores/LanguageStore';
import { cn } from '@/lib/utils';

const CoursePage = () => {
    const { language, getTranslation } = useTranslationStore();

    const isArabic = language === "ar";
    const textAlignment = isArabic ? 'text-right items-end' : 'text-left';

    return (
        <React.Fragment>
            <ControlCard icon="Courses" title={getTranslation("sidebar-course")} neasted />
            <div className='mt-[18px] flex flex-col gap-y-5 items-center pb-8'>
                <div className='relative w-[1000px]'>
                    <video src={ChemistryVideo} autoPlay loop muted className='w-full h-[413px] object-cover rounded-lg z-10' />
                    <div className='w-full absolute inset-0 bg-[#27262652]/[0.32] rounded-lg z-20' />
                    <div className={cn('w-full z-30 absolute bottom-[8%]')}>
                        <div className={cn('w-full flex flex-col gap-y-6 px-4', textAlignment)}>
                            <div className='w-full flex flex-col gap-y-4 text-white'>
                                <span className='text-[40px] font-bold'>{getTranslation("chemistry_curriculum")}</span>
                                <span className='text-sm font-semibold'>{getTranslation("chemistry_page_description")}</span>
                            </div>
                            <Button className='w-[158px] p-[10px] rounded-lg font-bold' color='primary'>
                                {getTranslation("view-experiments")}
                            </Button>
                        </div>
                    </div>
                </div>

                <HorizontalScrollGallery />

                <div className={cn('w-full h-[200px] bg-white dark:bg-[#252A33] dark:text-white pt-5 px-14 flex flex-col gap-y-3 text-[#122333]/75 rounded-lg', textAlignment)}>
                    <h1 className='text-2xl font-bold'>{getTranslation("subject-info")}</h1>
                    <p className='text-sm font-semibold dark:text-[#F7F9FC]/60'>{getTranslation("chemistry_page_info")}</p>
                </div>
            </div>
        </React.Fragment>
    );
};

export default CoursePage;