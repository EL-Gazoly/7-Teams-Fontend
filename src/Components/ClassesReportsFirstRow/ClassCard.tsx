import PrinterIcon from '../../assets/Reports/printer.png';
import { Button } from '@nextui-org/react';
import GroupIcon from '../../assets/Reports/StageReports/group.svg';
import { useParams } from 'react-router-dom';
import html2canvas from 'html2canvas';
import useTranslationStore from '@/stores/LanguageStore';

const ClassCard = () => {
  const { stage, class: className } = useParams();
  const { getTranslation } = useTranslationStore();

  const convertAndPrint = () => {
    const divToPrint = document.querySelector('.certificateDiv');
    if (divToPrint) {
      //@ts-ignore
      html2canvas(divToPrint).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');

        // Create a new window to display the image and print
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

  const getClassName = (stage, className) => {
    switch (stage) {
      case 'High':
        switch (className) {
          case 'first':
            return getTranslation('grade1High');
          case 'second':
            return getTranslation('grade2High');
          case 'third':
            return getTranslation('grade3High');
          default:
            return '';
        }
      case 'Primary':
        switch (className) {
          case 'first':
            return getTranslation('grade1Primary');
          case 'second':
            return getTranslation('grade2Primary');
          case 'third':
            return getTranslation('grade3Primary');
          case 'fourth':
            return getTranslation('grade4Primary');
          case 'fifth':
            return getTranslation('grade5Primary');
          case 'sixth':
            return getTranslation('grade6Primary');
          default:
            return '';
        }
      case 'Middle':
        switch (className) {
          case 'first':
            return getTranslation('grade1Middle');
          case 'second':
            return getTranslation('grade2Middle');
          case 'third':
            return getTranslation('grade3Middle');
          default:
            return '';
        }
      default:
        return '';
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
        <div className='w-[74px] h-[74px] bg-[#CFCFD7] rounded-full flex items-center justify-center border border-[#2DEC4C]'>
          <img src={GroupIcon} alt="" />
        </div>
      </div>
      <div className='w-full flex items-center justify-center mr-3'>
        <span className='w-[134px] text-2xl font-bold text-center ml-7'>
          {getClassName(stage, className)}
        </span>
      </div>
    </div>
  );
}

export default ClassCard;
