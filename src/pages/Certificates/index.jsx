import { FirstSection } from './firstSection';
import React, {useState} from 'react'
import ControlCard from '../../Components/ContraolCard'
import CertificateTempelate from '../../assets/certificates/tempelate.webp'
import PrintIcon from '../../assets/certificates/print.png'
import MailIcon from '../../assets/certificates/mail.png'
import { Image, Button } from '@nextui-org/react';
import html2canvas from 'html2canvas';

const CertificatesPage = () => {
  const [grade, setGrade] = useState({value: '', label: ''})
  const [course, setCourse] = useState({value: '', label: ''})
  const [student, setStudent] = useState({value: '', label: ''})

  const convertAndPrint = () => {
    const divToPrint = document.querySelector('.certificateDiv');
    if (divToPrint) {
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
    <React.Fragment>
       <ControlCard icon="Certificates" title=' الشهادات  ' neasted={false}/>
        <div className=' mt-5 flex flex-col gap-y-4 pb-5'>
          <FirstSection 
            grade={grade}
            setGrade={setGrade}
            course={course}
            setCourse={setCourse}
            student={student}
            setStudent={setStudent}
          />
          <div className='w-full h-[667.78px] rounded-lg bg-light-bg py-6 px-20 text-text-black
            flex flex-col items-end gap-y-[38px]
          '
            style={{
                boxShadow: "0px 3.547px 85.135px 0px rgba(18, 35, 51, 0.10)",
                backdropFilter : "blur(22.614059448242188px)"
            }}
          >
            <span className=' text-[21px] font-bold'>عرض الشهادة</span>
            
            <div className=' flex w-full items-center justify-center'>
                <div className=' flex flex-col items-center gap-y-14'>
                  <div className=' relative w-[612px] h-[411px] certificateDiv'>
                    <Image src={CertificateTempelate} width={612} height={411} className='z-0'  />
                      
                      <div className=' absolute top-[51%] left-[46%]'>{student.label}</div>
                      <div className=' absolute top-[62%] left-[72%]'>{course.label}</div>
                      <div className=' absolute top-[67%] left-[25%] text-sm'>{grade.label}</div>
                  </div>
                   
                    <div className=' flex items-center gap-x-4'>
                        <Button className=' w-[192px]  h-12 py-2 px-4 flex items-center justify-center gap-x-2 rounded-lg bg-text-black text-white'>
                            <span className=' text-xs'>ارسال عبر البريد الالكتروني </span>
                            <Image src={MailIcon} width={21} height={21} radius='none'  className='mt-1'/>
                           

                        </Button>
                        <Button className=' w-[192px]  h-12 py-2 px-4 flex items-center justify-center gap-x-2 rounded-lg bg-primary text-white'
                          onPress={convertAndPrint}
                        >
                            <span className=' text-xs'>طباعة الشهادة </span>
                            <Image src={PrintIcon} width={21} height={21} radius='none'  className='mt-1'/>


                        </Button>
                    </div>
                </div>
            </div>
          </div>

            

        </div>

    </React.Fragment>
  )
}

export default CertificatesPage