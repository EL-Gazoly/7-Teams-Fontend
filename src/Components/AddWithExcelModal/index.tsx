import { useState, useEffect } from 'react';
import { Button, useDisclosure, Modal, ModalHeader, ModalBody, ModalFooter, ModalContent } from '@nextui-org/react';
import { useMutation } from '@apollo/client';
import { toast } from 'sonner';
import { createStudentWithExcel, getStudents } from '../../graphql/students';
import Loading from '../Loading';
const AddWithExcel = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedFile, setSelectedFile] = useState(null);
    const [createStudentWithExcelMutation, { data, loading, error }] = useMutation(createStudentWithExcel,{
    refetchQueries: [{ query: getStudents }],
    });

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleDeleteFile = () => {
    setSelectedFile(null);
  };

  const handleCreateStudentWithExcel = async () => {
    const file = selectedFile;
    if (!file) return toast.error('Please choose a file');
    await createStudentWithExcelMutation({
      variables: {
        file: file,
      }
    });
  };
    
    useEffect(() => {
        if(data) {
            toast.success('Students created successfully')
            setSelectedFile(null)
            onClose()
        }
        
    }, [data])
  if(loading) return <Loading />
    if(error) toast.error(" حدث خطا ما  ")
  

  return (
    <div>
      <Button
        className='w-[177px] h-[51px] py-2 px-4 rounded-lg flex items-center justify-center gap-x-2 bg-[#4E5464]'
        onPress={() => onOpen()}
      >
        <span className='text-sm font-bold'>إضافة بواسطه اكسيل</span>
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size='xl'>
        <ModalContent className='flex flex-y gap-y-8'>
          <ModalHeader>
            <div className='w-full flex items-center justify-center'>
              <span className='text-xl font-bold text-text-black dark:text-white'>إضافة بواسطه اكسيل</span>
            </div>
          </ModalHeader>

          <ModalBody>
            <div className='flex flex-col gap-y-5'>
              <div className='flex flex-col gap-y-5 text-right text-text-black'>
                {selectedFile ? (
                  <div className='flex items-center justify-between border border-gray-300 dark:border-dark-bg rounded-lg py-3 px-4 bg-gray-100  dark:bg-dark-item'>
                    <span className='text-gray-800 dark:text-white'>{selectedFile.name}</span>
                    <Button
                      className='text-red-500 hover:text-red-700 dark:bg-danger dark:text-white focus:outline-none'
                      onClick={handleDeleteFile}
                    >
                      مسح
                    </Button>
                  </div>
                ) : (
                  <div className='w-full flex items-center justify-center'>
                    <label
                      htmlFor='file-upload'
                      className='relative cursor-pointer w-[300px] rounded-lg h-[60px] bg-primary-gradient flex justify-center items-center text-white transition duration-300 ease-in-out hover:opacity-80'
                    >
                      <input
                        id='file-upload'
                        type='file'
                        className='hidden'
                        accept='.xlsx, .xls'
                        onChange={handleFileChange}
                      />
                      <span>اختار ملف اكسيل</span>
                    </label>
                  </div>
                )}
              </div>
            </div>
          </ModalBody>

          <ModalFooter>
            {selectedFile && (
              <div className='w-full flex items-center justify-center'>
                <Button color='primary' onPress={handleCreateStudentWithExcel}>
                  <span className='text-white text-sm font-bold'>إضافة</span>
                </Button>
              </div>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default AddWithExcel;
