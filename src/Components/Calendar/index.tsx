import Calendar from "react-calendar";
import './index.css'
import React from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, ModalContent, Button} from "@nextui-org/react";
import { set } from "firebase/database";
import { useThemeStore } from "../../stores/ThemeStore";

const CalendarComponent = ({isOpen, onClose, date, setDate, filter , setFilter}) => {
    const {dark} = useThemeStore();
    const handleFilter = () => {
        setFilter(true)
        onClose()
    }
    const handleAll = () => {
        setFilter(false)
        setDate(null)
        onClose()
    }
    const handleDate = (date) => {
        setFilter(false)
        setDate(date)
    }
    const tileDisabled = ({ date }) => {
        // Disable future dates
        return date > new Date();
    }
  
  return (
    <Modal
    isOpen={isOpen} 
    onClose={onClose} 
    size="sm"
    className=" bg-white dark:bg-primary-dark"
    
    >
        <ModalContent>
                <ModalHeader>
                    <div className=" w-full text-center">
                    اختر الفتره 
                    </div>
                </ModalHeader>

   
                <ModalBody>
                    <Calendar selectRange onChange={handleDate} value={date}  
                      tileDisabled={tileDisabled}
                    />
                </ModalBody>
                <ModalFooter>
                    <div className="flex flex-col gap-y-3 w-full">
                        <div className=" flex gap-x-4 w-full text-white">
                            <Button className="w-1/2 border border-[#E5E7EB] text-gray-800 bg-white dark:bg-primary-dark dark:text-white" onPress={onClose}>الغاء</Button>
                            <Button className="w-1/2 bg-[#2DEC4C] text-white" onPress={handleFilter}>تأكيد</Button>
                        </div>
                        <Button className="w-full bg-[#2DEC4C] text-white" onPress={handleAll}>الكل</Button>
                    </div>
                 
                 

                </ModalFooter>
        </ModalContent>
      
    </Modal>
  )
}

export default CalendarComponent
