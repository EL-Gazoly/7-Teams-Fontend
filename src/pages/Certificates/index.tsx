import { FirstSection } from './firstSection';
import React from 'react'
import ControlCard from '../../Components/ContraolCard'
import Certificate from '../../assets/certificates/certificates.png'
import PrintIcon from '../../assets/certificates/print.png'
import MailIcon from '../../assets/certificates/mail.png'
import { Image, Button } from '@nextui-org/react';
const CertificatesPage = () => {
  return (
    <React.Fragment>
        <ControlCard />
        <div className=' mt-5 flex flex-col gap-y-4 pb-5'>
          <FirstSection />
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
                    <Image src={Certificate} />
                    <div className=' flex items-center gap-x-4'>
                        <Button className=' w-[192px]  h-12 py-2 px-4 flex items-center justify-center gap-x-2 rounded-lg bg-text-black text-white'>
                            <span className=' text-xs'>ارسال عبر البريد الالكتروني </span>
                            <Image src={MailIcon} width={21} height={21} radius='none'  className='mt-1'/>
                           

                        </Button>
                        <Button className=' w-[192px]  h-12 py-2 px-4 flex items-center justify-center gap-x-2 rounded-lg bg-primary text-white'>
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