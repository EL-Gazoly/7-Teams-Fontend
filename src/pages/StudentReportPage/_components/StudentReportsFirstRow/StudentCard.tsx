import PrinterIcon from '@/assets/Reports/printer.png';
import { Button, Avatar, Divider } from '@nextui-org/react';
import html2canvas from 'html2canvas';
import noPic from '@/assets/students/noPic.svg';
import noPicDark from '@/assets/students/no-pic.svg';
import { useThemeStore } from '@/stores/ThemeStore';
import useTranslationStore from '@/stores/LanguageStore';
import { cn } from '@/lib/utils';

const StudentCard = ({ data, ref }) => {
    const { dark } = useThemeStore();
    const { language, getTranslation } = useTranslationStore();

    const getStage = (stage) => {
        switch (stage) {
            case 'High':
                return getTranslation('high');
            case 'Middle':
                return getTranslation('middle');
            default:
                return stage;
        }
    }

    const getGrade = (grade) => {
        switch (grade) {
            case 'first':
                return getTranslation('first');
            case 'second':
                return getTranslation('second');
            case 'third':
                return getTranslation('third');
            default:
                return grade;
        }
    }

    const convertAndPrint = () => {
        const divToPrint = document.querySelector('.certificateDiv');
        if (divToPrint) {
            //@ts-ignore
            html2canvas(divToPrint).then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const printWindow = window.open('', '_blank');
                if (printWindow) {
                    printWindow.document.write('<img src="' + imgData + '" width="100%" />');
                    printWindow.document.close();
                    printWindow.onload = () => {
                        printWindow.print();
                    };
                } else {
                    console.error('Could not open print window');
                }
            }).catch((error) => {
                console.error('Error converting to canvas:', error);
            });
        } else {
            console.error('Certificate div not found');
        }
    };

    return (
        <div className='w-[458px] h-[324px] py-[50px] px-[30px] flex flex-col gap-y-[26px] bg-white dark:bg-primary-dark rounded-lg'>
            <div className='w-full flex items-center justify-end'>
                <Button className='bg-primary-gradient text-white w-[90px] h-[35px]' onPress={convertAndPrint}>
                    <img src={PrinterIcon} alt="" />
                    <span className='text-xs'>{getTranslation('print')}</span>
                </Button>
            </div>
            <div className='w-full flex items-center justify-center'>
                <div className='w-[74px] h-[74px] bg-[#F6F6F6] dark:bg-[#3D414A] rounded-full flex items-center justify-center'>
                    {data.student.imageUrl ? <Avatar className='w-[74px] h-[74px]' src={`${import.meta.env.VITE_API_URL}${data.student.imageUrl}`} fallback={noPic} /> : <img src={dark ? noPicDark : noPic} alt="" />}
                </div>
            </div>
            <div className='w-full flex items-center justify-center gap-x-[18px]'>
                <div className='flex flex-col gap-y-3'>
                    <span className='text-[#111928] dark:text-white text-2xl font-bold line-clamp-1'>{data?.student.name}</span>
                    <div className={cn('flex items-center justify-center text-xl font-medium text-primary',
                        language === 'ar' ? 'flex-row' : 'flex-row-reverse'
                    )}>
                        <span>{data?.student.facilityId}</span>
                        <span>#</span>
                    </div>
                </div>
                <Divider orientation="vertical" className='bg-[#111928]' />
                <div className='flex flex-col gap-y-[10px] text-[15px] text-[#1119288F] dark:text-white/80'>
                    <span>{`${getTranslation('school')}: ${data?.student.team.school.name}`}</span>
                    <span>{`${getTranslation('stage')}: ${getStage(data?.student.team.name)}`}</span>
                    <span>{`${getTranslation('grade')}: ${getGrade(data?.student.class.number)}`}</span>
                </div>
            </div>
        </div>
    );
}

export default StudentCard;