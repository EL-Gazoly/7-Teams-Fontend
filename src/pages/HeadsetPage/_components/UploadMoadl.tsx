import {useEffect , useState} from 'react'
import {  Modal,
        ModalContent,
        ModalHeader,
        ModalBody,
        ModalFooter,
        Button,
        Spinner
    } from "@nextui-org/react";

import { UploadFileToS3 } from '../../../graphql/AmazonS3'
import { useMutation } from '@apollo/client'

import FirstSucessIcon from '../../../assets/UploadMediaHeadsetPage/first.svg'
import SecondSucessIcon from '../../../assets/UploadMediaHeadsetPage/second.svg'
import ThirdSucessIcon from '../../../assets/UploadMediaHeadsetPage/third.svg'
import FourthSucessIcon from '../../../assets/UploadMediaHeadsetPage/fourth.svg'
import FifthSucessIcon from '../../../assets/UploadMediaHeadsetPage/fifth.svg'
import SixthSucessIcon from '../../../assets/UploadMediaHeadsetPage/sixth.svg'
import FinalSucessIcon from '../../../assets/UploadMediaHeadsetPage/final.svg'

const frames = [FirstSucessIcon, SecondSucessIcon, ThirdSucessIcon, FourthSucessIcon, FifthSucessIcon, SixthSucessIcon, FinalSucessIcon]
type isImageUploadingState = {
  isImageUploading: boolean | null;
}

type UploadModalProps = {
    isOpen: boolean;
    onOpenChange : () => void;
    isImageUploading: boolean | isImageUploadingState;
    uploadImagePath: string;
}


const UploadMoadl = ({isOpen, onOpenChange, isImageUploading, uploadImagePath} : UploadModalProps) => {
       const [currentFrame, setCurrentFrame] = useState(0)
           const [uploadFileToS3, {data, loading: loadingMutaion, error : errorMutation}] = useMutation(UploadFileToS3)
    
       useEffect(() => {
        if (data) setCurrentFrame(0);

        if (!isImageUploading) {
        const interval = setInterval(() => {
        setCurrentFrame((prevFrame) => {
        if (prevFrame === frames.length - 12) {
          clearInterval(interval);
          return prevFrame; // Stay on the last frame
        }
        return prevFrame + 1;
      });
        }, 100)
        
        return () => clearInterval(interval)
      }
    }, [isImageUploading, data])

    const onUpload = async() => {
    const imagePath = await ("../../../assets/none.png")
    const argPath = await (`../../../assets/${uploadImagePath}`)
      try {
          const response = await fetch(argPath);
          const blob = await response.blob();
          // Create a File object using the blob and file name
          const file = new File([blob], `20246.png`, { type: blob.type });
          // Call the mutation 
        
          await uploadFileToS3({
              variables: {
                  file: file,
                  facilityId: `20249`
              }
          });
          } catch (error) {
            console.error('Error reading file:', error);
        }
  }
  return (
    <Modal className=' w-[483px] h-[501] bg-white dark:bg-primary-dark py-12 flex flex-col items-center justify-center gap-y-12'
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement='center'
    >
        <ModalContent>
            <ModalHeader> 
                {
                  isImageUploading === false || data ?
                  'تم رفع الصوره من نظاره الواقع الافتراضي بنجاح'
                  : 
                  isImageUploading === true  || loadingMutaion?
                  '  برجاء الانتظار حتى يتم تحميل الصورة '
                  : errorMutation && isImageUploading === null &&
                  'لم يتم رفع الصورة بنجاح'
                }
             


            </ModalHeader>
            <ModalBody>
              {isImageUploading === true?
                <Spinner size='lg' color='primary'/>
              : 
              isImageUploading === false ?
                <img src={frames[currentFrame]} alt='success' className=' transition-all ease-in-out' width={119} height={119} />
              :
                <span className=' text-5xl text-danger font-bold'>X</span>
              }
            </ModalBody>
            <ModalFooter className=' flex flex-col gap-y-[18px]'>
                <Button className=' w-[264px] h-[52px] rounded-[10px]  font-bold' color='primary' variant='shadow' size='lg'  isDisabled={isImageUploading === false}
                  onPress={onUpload}
                > 
                  {isImageUploading === false ? 
                  
                  'رفع الصوره الي الكلاود؟' 
                  
                  : 
                  isImageUploading === true ? 
                  <Spinner size='sm' color='white' />
                  :
                  'حاول مره اخرى'
                  
                  }

                 </Button>
                <Button onPress={onOpenChange}  className=' w-[264px] h-[52px]  rounded-[10px] font-bold' color='danger' variant='bordered' size='lg'> خروج </Button>
                
            </ModalFooter>
        </ModalContent>
      
    </Modal>
  )
}

export default UploadMoadl
