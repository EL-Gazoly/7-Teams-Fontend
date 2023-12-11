import { UploadImage } from './UploadImage';
import React, {useState, useRef} from 'react'
import ControlCard from '../../Components/ContraolCard'
import { Button, Image } from '@nextui-org/react';
import AddIcon from '../../assets/students/add.svg'


const CreateStudent = () => {
    const [selectedImage, setSelectedImage] = useState(null);

      const nameRef = useRef<HTMLInputElement>(null)
      const idRef = useRef<HTMLInputElement>(null)
  return (
    <>
        <ControlCard/> 
        <div className=' mt-6 w-full h-[628px] bg-[#FDFDFE] rounded-lg  pt-[75px] px-[113px]
            flex flex-col gap-y-12
        '
            style={{
                boxShadow : "0px 3.812px 99.108px 0px rgba(0, 0, 0, 0.08)",
                backdropFilter : "blur(24.30045509338379px)"
            }}
        >

                <UploadImage   selectedImage={selectedImage} setSelectedImage={setSelectedImage}  />
                
                <div className='flex flex-row-reverse items-center gap-x-[22px]'>
                    <div className=' flex flex-col gap-y-[5px] text-right text-text-black'>
                        <label htmlFor="name" className=' mr-1' >الاسم</label>
                        <input type="text" className=' text-right w-[380px] rounded-lg h-[66px] bg-[#F0F2F4] px-4
                            
                        ' placeholder='اسم الطالب هنا' />

                    </div>
                    <div className=' flex flex-col gap-y-[5px] text-right text-text-black'>
                        <label htmlFor="id"  className=' mr-1' >رقم الطالب</label>
                        <input type="text" className=' text-right w-[380px] rounded-lg h-[66px] bg-[#F0F2F4] px-4
                            
                        ' placeholder='رقم الطالب هنا' />

                    </div>

                </div>
                <div className=' w-full items-center justify-center flex mt-24'>
                <Button className=' w-[177px] h-[51px] py-2 px-4 rounded-lg flex items-center justify-center gap-x-2 
                    bg-[#4E5464]
                '>
                    <Image src={AddIcon} />
                    <span className=' text-white text-sm font-bold '>إضافة طالب</span>

                </Button>
                </div>



           

            

        </div>


    </>
  )
}

export default CreateStudent