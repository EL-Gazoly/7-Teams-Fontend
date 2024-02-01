import { FirstSection } from './firstSection';
import React, {useState} from 'react'
import ControlCard from '../../Components/ContraolCard'
import Tempelete from '../../assets/certificates/tempelate.png'
import PrintIcon from '../../assets/certificates/print.png'
import MailIcon from '../../assets/certificates/mail.png'
import { Image, Button , useDisclosure} from '@nextui-org/react';
import html2canvas from 'html2canvas';
import { SendEmail } from '../../graphql/email'
import { useMutation } from '@apollo/client';
import EnterEmailModal from './Modal';
import { toast } from 'sonner';
const CertificatesPage = () => {
  const [grade, setGrade] = useState({value: '', label: ''})
  const [course, setCourse] = useState({value: '', label: ''})
  const [student, setStudent] = useState({value: '', label: ''})
  const [head, setHead] = useState('')
  const [teacher, setTeacher] = useState('')
  const [school, setSchool] = useState('')

  const [isLoading, setIsLoading] = useState(false)

  if(isLoading) return <Loading />
  
  const [email, setEmail] = useState('')

  const [sendEmail, {data, error, loading}] = useMutation(SendEmail)

  const {isOpen, onOpen, onClose} = useDisclosure();

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

  const sendCertificateAsFile = async () => {
    const divToPrint = document.querySelector('.certificateDiv');
    
    if (divToPrint) {
      try {
        const canvas = await html2canvas(divToPrint);
        const imageData = canvas.toDataURL('image/png');
      
        const blobData = await fetch(imageData).then(res => res.blob());
        
        const certificateFile = new File([blobData], 'certificate.png', { type: 'image/png' });
        if (!email) {
          toast.erro('الرجاء ادخال البريد الالكتروني')
        }
        await sendEmail({
          variables: {
            email: email,
            certificate: certificateFile
          }
        });
      } catch (error) {
        console.error('Error converting to image and sending via mutation:', error);
      }
    } else {
      console.error('Certificate div not found');
    }
  };

  const handelOpen = () => {
    onOpen()
    console.log('open')
  }

  const getTeam = (team) => {
    switch (team) {
      case 'High':
        return 'الثانوي'
      case 'Middle':
        return 'المتوسط'
        default:
          return ''
    }
  }
  const getGrade = (grade) => {
    switch (grade){
      case 'first':
        return 'الاول'
      case 'second':
        return 'الثاني'
      case 'third':
        return 'الثالث'
      default:
        return ''
    }
  }

  return (
    <React.Fragment>
       <ControlCard icon="Certificates" title=' الشهادات  ' neasted={false}/>
        <div className=' mt-7 flex flex-col gap-y-6 pb-5'>
        <FirstSection 
            course={course}
            setCourse={setCourse}
            student={student}
            setStudent={setStudent}
            head={head}
            setHead={setHead}
            teacher={teacher}
            setTeacher={setTeacher}
            school={school}
            setSchool={setSchool} 
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
                  <div className=' relative w-[612px] h-[411px] certificateDiv text-xs'>
                    <Image src={Tempelete}  className='z-0'  />
                      
                      <div className=' absolute top-[45%] left-[50%]'>{student.label.substring(0,10)}</div>
                      <div className=' absolute top-[46%] left-[31%]'>{student.number}</div>
                      <div className=' absolute top-[53%] left-[49%]'>{course.label}</div>
                      <div className=' absolute top-[53%] left-[31%]'>{getGrade(student.class)}</div>
                      <div className=' absolute top-[53%] left-[23%]'>{getTeam(student.team)}</div>
                      <div className=' absolute top-[60.5%] left-[30.5%] text-[10px]'>{new Date().toLocaleDateString()}</div>
                      <div className=' absolute top-[61%] left-[46%]'>{grade.label}</div>
                      <div className=' absolute top-[75%] left-[21%]'>{teacher.substring(0,10)}</div>
                      <div className=' absolute top-[79%] left-[21%]'>{head.substring(0,11)}</div>
                    
                      
                  </div>
                   
                    <div className=' flex items-center gap-x-4'>
                        <Button className=' w-[192px]  h-12 py-2 px-4 flex items-center justify-center gap-x-2 rounded-lg bg-text-black text-white'
                          onPress={handelOpen}
                        >
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

        <EnterEmailModal isOpen={isOpen} onClose={onClose} sendCertificateAsFile={sendCertificateAsFile}
          email={email} setEmail={setEmail}
        />

    </React.Fragment>
  )
}

export default CertificatesPage