import PrinterIcon from '../../assets/Reports/printer.png'
import { Button } from '@nextui-org/react'
import GroupIcon from '../../assets/Reports/StageReports/group.svg'
import { useParams } from 'react-router-dom'
import html2canvas from 'html2canvas';
const ClassCard = () => {
    const { id } = useParams()
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
            <div className=' w-[74px] h-[74px] bg-[#CFCFD7] rounded-full flex items-center justify-center border border-[#2DEC4C]'>
                <img src={GroupIcon} alt="" />

            </div>
        </div>

        <div className=' w-full flex items-center justify-center mr-3'>
         <span className=' w-[134px] text-2xl font-bold text-center ml-7'> {
                id === '299b30a9-cc2b-4d90-91c3-87a4e17c181e' ? 'الصف الأول الابتدائي' :
                id === '3005a5f7-c133-434e-be98-7dd3b78fedfd' ? 'الصف الثاني الابتدائي' :
                id === 'e713070c-853e-465d-9e72-0787f344147a' ? 'الصف الثالث الابتدائي' :
                id === '6b10f49d-a110-420d-8595-9b8616d7c854' ? 'الصف الرابع الابتدائي' :
                id === '1535cadc-70b9-4535-994b-e4c20c3912ae' ? 'الصف الخامس الابتدائي' :
                id === '99b559a7-0e9d-40fb-a952-6c25895ceedf' ? 'الصف السادس الابتدائي' :
                id === 'fad58648-c419-4701-985a-b8707446074b' ? 'الصف الأول المتوسط' : 
                id === '42e9c8a6-7c33-4ada-8215-65465a495912' ? 'الصف الثاني المتوسط' :
                id === 'd401bb95-d5ad-4b34-ae7a-e5db984f2b14' ? 'الصف الثالث المتوسط' :
                id === '65d2322b-1d47-42b1-8739-f10a83378355' ? 'الصف الأول الثانوي' :
                id === '056e7db3-66c1-450d-99b6-50c8206efc78' ? 'الصف الثاني الثانوي' :
                id === '5b9b06d4-2278-476c-a6f2-02dd366b18ef' ? 'الصف الثالث الثانوي' : ''
         }</span>

        </div>
      
    </div>
  )
}

export default ClassCard
