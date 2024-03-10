import {useState, useRef, useEffect} from 'react'
import ControlCard from '../../Components/ContraolCard'
import SchoolIcon from '../../assets/SideBar/Open/school.svg'
import { Button } from '@nextui-org/react'
import AddIcon from '../../assets/students/add.svg'
import { CreateSchools, getSchools } from '../../graphql/School'
import { useMutation } from '@apollo/client'
import Loading from '../../Components/Loading'
import { toast } from 'sonner'

const CreateSchool = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const nameRef = useRef<HTMLInputElement>();

  const [createSchool, {data, loading, error}] = useMutation(CreateSchools , {
    refetchQueries: [{query: getSchools}]
  });
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    
    if (file && (file.type === 'image/png' || file.type === 'image/jpeg')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedFile(file);
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleImageRemove = () => {
    setSelectedImage(null);
  };
  const handleCreateSchool = async () => {
    if (!nameRef.current.value) {
      toast.error('الرجاء ادخال اسم المدرسة');
      return;
    }
    try {
      await createSchool({
        variables: {
          data: {
            name: nameRef.current.value,
          },
          image: selectedFile,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (data) {
      toast.success('تم اضافة المدرسة بنجاح');
      nameRef.current.value = '';
      setSelectedImage(null);
      setSelectedFile(null);
    }
  }, [data]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    toast.error('حدث خطأ اثناء اضافة المدرسة');
  }


  return (
    <div className=' flex flex-col gap-y-8 items-center'>
        <ControlCard icon='Schools' title='اضافه مدرسه جديدة' neasted={true}/>
        <div className='w-full h-[655px] bg-white dark:bg-[#252A33] rounded-lg flex items-center justify-center'>
            <div className="flex flex-col gap-y-9 items-center justify-center">
                <div className=' flex flex-col gap-y-8'>
                  <div className=' w-[116px] h-[116px] self-center rounded-full dark:bg-[#EEEFF2]/20 flex items-center justify-center'>
                  {selectedImage ? <img src={selectedImage} alt="Selected" style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '50%',

            }} /> : <img src={SchoolIcon} alt="Placeholder" />}
                  </div>
                  <div className=' flex flex-col gap-y-5'>
                    <div className=' flex items-center self-center gap-x-3'>
                        <Button className=' w-[171px] h-[51px] rounded-lg text-white bg-[#FF5948]/60' onPress={handleImageRemove}>
                        حذف 
                        </Button>

                        <label htmlFor="image-upload" className='w-[171px] h-[51px] text-white bg-[#52D867]/40 flex items-center justify-center rounded-lg cursor-pointer'>
                        تحميل صوره جديده
                       </label>
                      <input key={selectedImage} // Add this key to force re-render on file change
                        type="file" id="image-upload" accept=".png, .jpeg, .jpg" style={{
                          display: 'none'
                        }} onChange={handleImageUpload} />
                      
                    </div>
                    <span className=' text-sm text-white'>
                      png أو jpeg يجب أن تكون الصور بحجم 300 × 300 بكسل على الأقل بصيغة 
                    </span>
                  </div>

                </div>
                <div className=' flex items-center gap-x-14 flex-row-reverse'>
                  <div className="flex flex-col gap-y-3 text-[15.25px]">
                    <span className=' text-white/60 font-bold self-end'>
                    اسم المدرسة
                    </span>
                    <input type="text" ref={nameRef} className=' w-[379.28px] h-[65.75px] px-5 text-right rounded-lg dark:bg-[#1F242D]/70 text-text-black dark:text-white placeholder:text-white/60 placeholder:font-bold'
                      placeholder='ادخل اسم المدرسة'
                    />

                  </div>
                  <div className=' flex flex-col gap-y-6'>
                     <span className=' text-white font-bold self-end text-sm'>
                    رقم المدرسة
                    </span>
                    <span className=' text-[32px]  font-bold text-white/70'>
                      1465
                    </span>

                  </div>

                </div>
                <Button className=' w-[217px] h-16 mt-6 rounded-md' onPress={handleCreateSchool}>
                  <img src={AddIcon} alt="" />
                  <span>اضافة مدرسة جديدة</span>
                </Button>

                
            </div>

        </div>
      
    </div>
  )
}

export default CreateSchool
