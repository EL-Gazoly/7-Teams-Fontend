import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
} from "@nextui-org/react"
type VideoViewProps = {
    isOpen: boolean;
    onOpenChange: () => void;
    video : any
}
const VideoView = ({isOpen, onOpenChange, video}:VideoViewProps) => {
    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="5xl">
            <ModalContent className=" w-full">
              
                <ModalBody className=" p-0 w-full h-full">
                    <video controls> 
                        <source src={video?.location} type="video/mp4" />
                    </video>
                </ModalBody>
            </ModalContent>
        </Modal>
     );
}
 
export default VideoView;