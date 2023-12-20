import React from 'react'
import {  Modal,   ModalContent,   ModalHeader,   ModalBody,   ModalFooter , Button} from "@nextui-org/react";

type Props = {
  isOpen: boolean
  onClose: () => void
  sendCertificateAsFile: () => Promise<void>
  email: string
  setEmail: React.Dispatch<React.SetStateAction<string>>
}

const EnterEmailModal = ({isOpen, onClose, setEmail, sendCertificateAsFile}: Props) => {

  const handelSendCertificateAsFile = async () => {
    await sendCertificateAsFile()
    onClose()
  }
  return (
   <Modal
    size='md'
    isOpen={isOpen}
    onClose={onClose}
    placement={"center"}
    backdrop='blur'
    classNames={{
      backdrop: "blur-[8px] bg-white/20"
  }}
   >
    <ModalContent>
      <ModalHeader className=' flex w-full items-center justify-center'>
        <span>ادخل الايميل الذي تريد ارسال الشهاده اليه</span>
      </ModalHeader>

      <ModalBody>
        <input type="email" className='w-full h-[50px] rounded-lg border border-[#E5E5E5] px-4' 
          onChange={(e) => setEmail(e.target.value)}
        />
      </ModalBody>

      <ModalFooter>
        <Button  onPress={onClose} className='mr-2' color='danger' variant='ghost'>الغاء</Button>
        <Button  color='success' variant='ghost' 
            onPress={handelSendCertificateAsFile}
        >ارسال</Button>
      </ModalFooter>
    </ModalContent>

   </Modal>
  )
}

export default EnterEmailModal
