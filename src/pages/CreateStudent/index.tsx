import React, { useState, useRef } from 'react';
import ControlCard from '../../Components/ContraolCard';
import { Button, Image } from '@nextui-org/react';
import AddIcon from '../../assets/students/add.svg';
import { createStudent } from '../../graphql/students';
import { useMutation } from '@apollo/client';
import { toast } from 'sonner';
import Loading from '../../Components/Loading';
import { UploadImage } from './UploadImage';
import { getStudents } from '../../graphql/students';
import { GetStudents } from '../../graphql/reports';
import AddWithExcel from '../../Components/AddWithExcelModal';
const CreateStudent = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const [createStudentMutation, { data, loading, error }] = useMutation(createStudent,{
    refetchQueries: [{ query: getStudents }, { query: GetStudents}],
  });

  const nameRef = useRef<HTMLInputElement>(null);
  const idRef = useRef<HTMLInputElement>(null);

  const handleCreateStudent = async () => {
    const name = nameRef.current?.value;
    const id = idRef.current?.value;
    const image = selectedFile;
    if (!name || !id) return toast.error('Please fill all fields');
    await createStudentMutation({
      variables: {
        data: {
          name: name,
          facilityId: id,
          classId: "65d2322b-1d47-42b1-8739-f10a83378355",
          teamId: "1781aa8d-369d-4875-8a32-c8aac39ea543"
        },
        image: image,
      }
    });
  };

  if (loading) return <Loading />;
  if (error) toast.error(error.message);
  if (data) {
    toast.success('Student created successfully');
  }

  return (
    <>
      <ControlCard icon="Students" title=' الطلاب ' neasted={true}/>
      <div
        className='mt-6 w-full h-[628px] bg-[#FDFDFE] dark:bg-primary-dark rounded-lg pt-[75px] px-[113px] flex flex-col gap-y-12'
        style={{
          boxShadow: '0px 3.812px 99.108px 0px rgba(0, 0, 0, 0.08)',
          backdropFilter: 'blur(24.30045509338379px)',
        }}
      >
        <UploadImage
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
          setSelectedFile={setSelectedFile}
        />

        <div className='flex flex-row-reverse items-center gap-x-[22px]'>
          <div className='flex flex-col gap-y-[5px] text-right text-text-black dark:text-white'>
            <label htmlFor='name' className='mr-1'>
              الاسم
            </label>
            <input
              type='text'
              className='text-right w-[380px] rounded-lg h-[66px] bg-[#F0F2F4] dark:bg-dark-item/70 px-4'
              placeholder='اسم الطالب هنا'
              ref={nameRef}
            />
          </div>
          <div className='flex flex-col gap-y-[5px] text-right text-text-black dark:text-white'>
            <label htmlFor='id' className='mr-1'>
              رقم الطالب
            </label>
            <input
              type='text'
              className='text-right w-[380px] rounded-lg h-[66px] bg-[#F0F2F4] dark:bg-dark-item/70 px-4'
              placeholder='رقم الطالب هنا'
              ref={idRef}
            />
          </div>
        </div>
        <div className='w-full items-center justify-center flex flex-row-reverse gap-x-7 mt-20'>
          <Button
            className='w-[177px] h-[51px] py-2 px-4 rounded-lg flex items-center justify-center gap-x-2 bg-[#4E5464]'
            onPress={handleCreateStudent}
          >
            <Image src={AddIcon} />
            <span className='text-white text-sm font-bold'>إضافة طالب</span>
          </Button>

          <AddWithExcel />
        </div>
      </div>
    </>
  );
};

export default CreateStudent;
