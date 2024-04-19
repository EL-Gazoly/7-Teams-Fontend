import React from 'react'
import PrinterIcon from '../../../../assets/Reports/printer.png'
import { useThemeStore } from '../../../../stores/ThemeStore'
import SchoolDarkIcon from '../../../../assets/Reports/schools.png'
import SchoolIcon from '../../../../assets/Reports/school.png'
import { Button } from '@nextui-org/react'
const SchoolCard = ({data}) => {
    const {dark} = useThemeStore()
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
  return (
      <div className=' w-[458px] h-[324px] py-[50px] px-[30px] flex flex-col gap-y-[26px] bg-white dark:bg-primary-dark rounded-lg'>
        <div className=' w-full flex items-center justify-end '>
            <Button className=' bg-primary-gradient text-white w-[90px] h-[35px]' onPress={convertAndPrint}>
                <img src={PrinterIcon} alt="" />
                <span className=' text-xs'> طباعه </span>
            </Button>
        </div>
        
        <div className=' w-full flex items-center justify-center'>
            <div className=' w-[74px] h-[74px] bg-[#CFCFD7] dark:bg-[#3B4048] rounded-full flex items-center justify-center border border-[#2DEC4C]'>
                <img src={dark? SchoolDarkIcon : SchoolIcon} alt="" className='w-8 h-8'/>

            </div>
        </div>

        <div className=' w-full flex flex-col gap-y-1 items-center justify-center'>
         <span className=' text-2xl font-bold text-center'> {data.school.name} </span>
            <span className=' w-28  font-light text-primary text-center ml-7'> #{data.school.uniqueId} </span>


        </div>
      
    </div>
  )
}

export default SchoolCard
