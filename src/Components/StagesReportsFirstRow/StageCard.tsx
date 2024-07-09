import React from 'react';
import PrinterIcon from '../../assets/Reports/printer.png';
import { Button } from '@nextui-org/react';
import GroupIcon from '../../assets/Reports/StageReports/group.svg';
import GroupDarkIcon from '../../assets/Reports/StageReports/dark-group.png';
import { useThemeStore } from '../../stores/ThemeStore';
import { useParams } from 'react-router-dom';
import html2canvas from 'html2canvas';
import useTranslationStore from '@/stores/LanguageStore';

const StageCard = () => {
  const { dark } = useThemeStore();
  const { getTranslation } = useTranslationStore();
  const { stage } = useParams();

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
        <div className='w-[74px] h-[74px] bg-[#CFCFD7] dark:bg-[#3B4048] rounded-full flex items-center justify-center border border-[#2DEC4C]'>
          <img src={dark ? GroupDarkIcon : GroupIcon} alt="" />
        </div>
      </div>

      <div className='w-full flex items-center justify-center mr-3'>
        <span className='w-28 text-2xl font-bold text-center ml-7'>
          {stage === 'Middle' ? getTranslation('middle_grade') :
            stage === 'Primary' ? getTranslation('primary_grade') :
              getTranslation('high_grade')}
        </span>
      </div>
    </div>
  );
};

export default StageCard;