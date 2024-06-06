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
import { toast } from 'sonner';

const frames = [FirstSucessIcon, SecondSucessIcon, ThirdSucessIcon, FourthSucessIcon, FifthSucessIcon, SixthSucessIcon, FinalSucessIcon]
type isImageUploadingState = {
  isImageUploading: boolean | null;
}

type UploadModalProps = {
    isOpen: boolean;
    onOpenChange : () => void;
    isImageUploading: boolean | isImageUploadingState;
    uploadImagePath: string;
    facilityId : string | undefined;
}


const UploadVideoModal = ({isOpen, onOpenChange, isImageUploading, uploadImagePath, facilityId} : UploadModalProps) => {
       const [currentFrame, setCurrentFrame] = useState(0)
       const [uploadFileToS3, {data, loading: loadingMutaion, error : errorMutation}] = useMutation(UploadFileToS3)
       const [imagePath, setImagePath] = useState('')
       console.log(facilityId)
       useEffect(() => {
        let interval;
        if (data) setCurrentFrame(0);
    
        if (!isImageUploading) {
            interval = setInterval(() => {
                setCurrentFrame((prevFrame) => {
                    if (prevFrame < frames.length - 1) {
                        return prevFrame + 1;
                    } else {
                        clearInterval(interval);
                        return prevFrame;
                    }
                });
            }, 100);
        }
    
        // Clear the interval when the component unmounts
        return () => clearInterval(interval);
    }, [data, isImageUploading]);
    useEffect(() => {
      if (uploadImagePath) {
        setImagePath(`../../../ assets/${uploadImagePath}`)
      }
    }
    , [uploadImagePath])

    const onUpload = async() => {
    const imagePath = await ("../../../assets/none.png")
    const argPath = await (`../../../assets/${uploadImagePath}`)
      try {
          const response = await fetch(argPath);
          const blob = await response.blob();
          // Create a File object using the blob and file name
          const file = new File([blob], `${facilityId ? facilityId : "0000"}.mp4`, { type: blob.type });
          // Call the mutation 
        
          await uploadFileToS3({
              variables: {
                  file: file,
                  facilityId:  facilityId ? facilityId : `20249`
              }
          })
          .then(()=> {
            toast.success('تم رفع الفيديو بنجاح')
            onOpenChange()

          })
          .catch((error) => {
            toast.error('لم يتم رفع الفيديو بنجاح')
            console.error('Error uploading file:', error);
          })
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
                  'تم رفع الفيديو من نظاره الواقع الافتراضي بنجاح'
                  : 
                  isImageUploading === true  || loadingMutaion?
                  '  برجاء الانتظار حتى يتم تحميل الفيديو '
                  : errorMutation && isImageUploading === null &&
                  'لم يتم رفع الفيديو بنجاح'
                }
             


            </ModalHeader>
            <ModalBody>
              {isImageUploading === true || loadingMutaion?
                <Spinner size='lg' color='primary'/>
              : 
              isImageUploading === false ?
                <img src={frames[currentFrame]} alt='success' className=' transition-all ease-in-out' width={119} height={119} />
              :
                <span className=' text-5xl text-danger font-bold'>X</span>
              }
            </ModalBody>
            <ModalFooter className=' flex flex-col gap-y-[18px]'>
                <Button className=' w-[264px] h-[52px] rounded-[10px]  font-bold' color='primary' variant='shadow' size='lg'  isDisabled={isImageUploading === true}
                  onPress={onUpload}
                > 
                  {isImageUploading === false ? 
                  
                  'رفع الفيديو الي الكلاود؟' 
                  
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

export default UploadVideoModal
