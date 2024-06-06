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

import FinalSucessIcon from '../../../assets/UploadMediaHeadsetPage/final.svg'
import { toast } from 'sonner';


type isImageUploadingState = {
  isImageUploading: boolean | null;
}

type UploadModalProps = {
    isOpen: boolean;
    onOpenChange : () => void;
    isImageUploading: boolean | isImageUploadingState;
    uploadImagePath: string;
    facilityId : string | undefined
}


const UploadMoadl = ({isOpen, onOpenChange, isImageUploading, uploadImagePath, facilityId} : UploadModalProps) => {
           const [uploadFileToS3, {data, loading: loadingMutaion, error : errorMutation}] = useMutation(UploadFileToS3)
      console.log(facilityId)

    const onUpload = async() => {
    const argPath = await (`../../../../assets/${uploadImagePath}`)
      try {
          const response = await fetch(argPath);
          const blob = await response.blob();
          const file = new File([blob], `20246.png`, { type: blob.type });
        
          await uploadFileToS3({
              variables: {
                  file: file,
                  facilityId: facilityId !== undefined ? facilityId : '0000'
              }
          })
          .then(()=>{
            toast.success("تم رفع الصوره بنجاح")
            onOpenChange()
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
                  loadingMutaion ? 
                  'جاري رفع الصوره الي الكلاود'
                  :
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
              {isImageUploading === true || loadingMutaion?
                <Spinner size='lg' color='primary'/>
              : 
              isImageUploading === false || !loadingMutaion ?
                <img src={FinalSucessIcon} alt='success' className=' transition-all ease-in-out' width={100} height={100} />
              :
                <span className=' text-5xl text-danger font-bold'>X</span>
              }
            </ModalBody>
            <ModalFooter className=' flex flex-col gap-y-[18px]'>
                <Button className=' w-[264px] h-[52px] rounded-[10px]  font-bold' color='primary' variant='shadow' size='lg'  isDisabled={isImageUploading !== false || loadingMutaion}
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
