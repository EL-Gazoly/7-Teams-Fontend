import FirstSection  from './firstSection';
import React, {useState} from 'react'
import ControlCard from '../../Components/ControlCard'
import Tempelete from '../../assets/certificates/tempelate.png'
import PrintIcon from '../../assets/certificates/print.png'
import MailIcon from '../../assets/certificates/mail.png'
import { Image, Button , useDisclosure} from '@nextui-org/react';
import html2canvas from 'html2canvas';
import { SendEmail } from '../../graphql/email'
import { useMutation } from '@apollo/client';
import EnterEmailModal from './Modal';
import { toast } from 'sonner';
import Loading from '@/Components/Loading';
import useTranslationStore from '@/stores/LanguageStore';
import { cn } from '@/lib/utils';
const CertificatesPage = () => {
  const [grade, setGrade] = useState({value: '', label: ''})
  const [course, setCourse] = useState({value: '', label: ''})
  const [student, setStudent] = useState({value: '', label: '', facilityId : '', class: '', team: '', schoolName: ''})
  const [head, setHead] = useState('')
  const [teacher, setTeacher] = useState('')
  const [school, setSchool] = useState('')

  const [isLoading, setIsLoading] = useState(false)

  const { language, getTranslation } = useTranslationStore()

  if(isLoading) return <Loading />
  
  const [email, setEmail] = useState('')

  const [sendEmail, {data, error, loading}] = useMutation(SendEmail)

  const {isOpen, onOpen, onClose} = useDisclosure();

  const convertAndPrint = () => {
    const divToPrint = document.querySelector('.certificateDiv') as HTMLElement;
    if (divToPrint) {
      // 
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
    const divToPrint = document.querySelector('.certificateDiv') as HTMLElement;
    
    if (divToPrint) {
      try {
        const canvas = await html2canvas(divToPrint);
        const imageData = canvas.toDataURL('image/png');
      
        const blobData = await fetch(imageData).then(res => res.blob());
        
        const certificateFile = new File([blobData], 'certificate.png', { type: 'image/png' });
        if (!email) {
          toast.error('الرجاء ادخال البريد الالكتروني')
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
      case 'Primary':
        return 'الابتدائي'
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
      case 'fourth':
        return 'الرابع'
      case 'fifth':
        return 'الخامس'
      case 'sixth':
        return 'السادس'
      default:
        return ''
    }
  }

  return (
    <React.Fragment>
       <ControlCard icon="Certificates" title='sidebar-certificates' neasted={false} info='certificatePageDescription'/>
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
          <div className='w-full h-[667.78px] rounded-lg bg-light-bg dark:bg-primary-dark py-6 px-20 text-text-black dark:text-white
            flex flex-col gap-y-[38px]
          '
            style={{
                boxShadow: "0px 3.547px 85.135px 0px rgba(18, 35, 51, 0.10)",
                backdropFilter : "blur(22.614059448242188px)",
                direction: language === 'ar' ? 'rtl' : 'ltr'
            }}
          >
            <span className=' text-[21px] font-bold'> {getTranslation("certificate_display")}</span>
            
            <div className=' flex w-full items-center justify-center'>
                <div className=' flex flex-col items-center gap-y-14'>
                  <div className=' relative w-[612px] h-[411px] certificateDiv text-text-black text-xs'>
                    <Image src={Tempelete}  className='z-0'  />
                    <div className=' absolute top-[39%] left-[30%]'>{student.schoolName}</div>
                      <div className=' absolute top-[45%] left-[50%]'>{student.label.substring(0,10)}</div>
                      <div className=' absolute top-[46%] left-[31%]'>{student.facilityId}</div>
                      <div className=' absolute top-[53%] left-[49%]'>{course.label}</div>
                      <div className=' absolute top-[53%] left-[31%]'>{getGrade(student.class)}</div>
                      <div className=' absolute top-[53%] left-[23%]'>{getTeam(student.team)}</div>
                      <div className=' absolute top-[60.5%] left-[30.5%] text-[10px]'>{new Date().toLocaleDateString()}</div>
                      <div className=' absolute top-[61%] left-[46%]'>{grade.label}</div>
                      <div className=' absolute top-[75%] left-[21%]'>{teacher.substring(0,10)}</div>
                      <div className=' absolute top-[79%] left-[21%]'>{head.substring(0,11)}</div>
                    
                      
                  </div>
                   
                    <div className={cn(' flex items-center gap-x-4',
                      language === 'ar' ? 'flex-row' : 'flex-row-reverse'
                    )}>
                        <Button className={cn(" w-[192px]  h-12 py-2 px-4 flex items-center justify-center gap-x-2 rounded-lg bg-text-black dark:bg-[#40444C] text-white",
                           language === 'ar' ? 'flex-row' : 'flex-row-reverse'
                        )}
                          onPress={handelOpen}
                        >
                            <span className=' text-xs'>{getTranslation("send-by-email")}</span>
                            <Image src={MailIcon} width={21} height={21} radius='none'  className='mt-1'/>
                           

                        </Button>
                        <Button className={cn(' w-[192px]  h-12 py-2 px-4 flex items-center justify-center gap-x-2 rounded-lg bg-primary text-white',
                           language === 'ar' ? 'flex-row' : 'flex-row-reverse'
                        )}
                          onPress={convertAndPrint}
                        >
                            <span className=' text-xs'> {getTranslation("print-certificate")} </span>
                            <Image src={PrintIcon} width={21} height={21} radius='none'/>


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