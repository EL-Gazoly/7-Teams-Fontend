import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
} from "@nextui-org/react"
type ImageViewProps = {
    isOpen: boolean;
    onOpenChange: () => void;
    image : any
}
const ImageView = ({isOpen, onOpenChange, image}:ImageViewProps) => {
    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="5xl">
            <ModalContent className=" w-full">
              
                <ModalBody className=" p-0 w-full h-full">
                    <img src={image?.location} alt="" className="  object-cover"  />
                </ModalBody>
            </ModalContent>
        </Modal>
     );
}
 
export default ImageView;